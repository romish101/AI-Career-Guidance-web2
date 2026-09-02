/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AssessmentResult, TreeOption } from './types';
import { ALL_PROFESSIONS } from './data/professions';
import { DECISION_TREE_QUESTIONS } from './data/questions/tree';
import { computeAdaptiveAssessment } from './utils/matchingEngine';
import { Header, NavCategory } from './components/Header';
import { HeroView } from './components/HeroView';
import { QuizView, UserBranchAnswer } from './components/QuizView';
import { LoadingAnalysisView } from './components/LoadingAnalysisView';
import { ResultsView } from './components/ResultsView';
import { VolunteeringView } from './components/VolunteeringView';
import { AIAssistantView } from './components/AIAssistantView';
import { ProfessionBattleView } from './components/ProfessionBattleView';
import { useLanguage } from './i18n/LanguageContext';

// Helper to safely get tree question with guaranteed fallback
function getTreeQuestion(id: string) {
  return DECISION_TREE_QUESTIONS[id] || 
         DECISION_TREE_QUESTIONS['root'] || 
         DECISION_TREE_QUESTIONS['q_root'] || 
         Object.values(DECISION_TREE_QUESTIONS)[0];
}

export default function App() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState<'hero' | 'quiz' | 'loading' | 'results' | 'battle' | 'volunteering' | 'ai_assistant'>('hero');
  const [activeCategory, setActiveCategory] = useState<NavCategory>('main');
  const [candidateName, setCandidateName] = useState<string>('');
  const [userRole, setUserRole] = useState<string>('Школьник (8-11 класс)');
  
  // Adaptive Decision Tree State
  const [currentQuestionId, setCurrentQuestionId] = useState<string>('root');
  const [questionHistory, setQuestionHistory] = useState<string[]>(['root']);
  const [branchAnswers, setBranchAnswers] = useState<UserBranchAnswer[]>([]);
  const [analysisResult, setAnalysisResult] = useState<AssessmentResult | null>(null);

  // Restore state from sessionStorage if user reloads accidentally
  useEffect(() => {
    try {
      const savedAnswers = sessionStorage.getItem('proforientation_adaptive_answers');
      const savedQId = sessionStorage.getItem('proforientation_adaptive_qid');
      const savedHistory = sessionStorage.getItem('proforientation_adaptive_history');
      const savedName = sessionStorage.getItem('proforientation_name');
      const savedRole = sessionStorage.getItem('proforientation_role');
      const savedResult = sessionStorage.getItem('proforientation_adaptive_result');
      const savedStep = sessionStorage.getItem('proforientation_step');
      const savedCategory = sessionStorage.getItem('proforientation_cat');

      if (savedAnswers) setBranchAnswers(JSON.parse(savedAnswers));
      if (savedQId) setCurrentQuestionId(savedQId);
      if (savedHistory) setQuestionHistory(JSON.parse(savedHistory));
      if (savedName) setCandidateName(savedName);
      if (savedRole) setUserRole(savedRole);
      if (savedResult) setAnalysisResult(JSON.parse(savedResult));

      if (savedStep && ['hero', 'quiz', 'loading', 'results', 'battle', 'volunteering', 'ai_assistant'].includes(savedStep)) {
        setCurrentStep(savedStep as any);
      } else if (savedResult) {
        setCurrentStep('results');
      }

      if (savedCategory && ['main', 'quiz_result', 'battle', 'volunteering', 'ai_assistant'].includes(savedCategory)) {
        setActiveCategory(savedCategory as NavCategory);
      }
    } catch (e) {
      console.warn('SessionStorage read error:', e);
    }
  }, []);

  // Sync state to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem('proforientation_adaptive_answers', JSON.stringify(branchAnswers));
      sessionStorage.setItem('proforientation_adaptive_qid', currentQuestionId);
      sessionStorage.setItem('proforientation_adaptive_history', JSON.stringify(questionHistory));
      sessionStorage.setItem('proforientation_step', currentStep);
      sessionStorage.setItem('proforientation_cat', activeCategory);
      if (candidateName) sessionStorage.setItem('proforientation_name', candidateName);
      if (userRole) sessionStorage.setItem('proforientation_role', userRole);
      if (analysisResult) sessionStorage.setItem('proforientation_adaptive_result', JSON.stringify(analysisResult));
    } catch (e) {
      console.warn('SessionStorage write error:', e);
    }
  }, [branchAnswers, currentQuestionId, questionHistory, candidateName, userRole, analysisResult, currentStep, activeCategory]);

  const handleStartTest = (name: string, role: string) => {
    setCandidateName(name);
    setUserRole(role);
    setCurrentQuestionId('root');
    setQuestionHistory(['root']);
    setBranchAnswers([]);
    setAnalysisResult(null);
    setCurrentStep('quiz');
    setActiveCategory('quiz_result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (category: NavCategory) => {
    setActiveCategory(category);

    if (category === 'main') {
      setCurrentStep('hero');
    } else if (category === 'battle') {
      setCurrentStep('battle');
    } else if (category === 'volunteering') {
      setCurrentStep('volunteering');
    } else if (category === 'ai_assistant') {
      setCurrentStep('ai_assistant');
    } else if (category === 'quiz_result') {
      if (analysisResult) {
        setCurrentStep('results');
      } else {
        setCurrentStep('quiz');
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const calculateAndShowResults = (finalAnswers: UserBranchAnswer[]) => {
    setCurrentStep('loading');
    setActiveCategory('quiz_result');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      const assessment = computeAdaptiveAssessment(finalAnswers, ALL_PROFESSIONS);
      setAnalysisResult(assessment);
      setCurrentStep('results');
      setActiveCategory('quiz_result');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1200);
  };

  const handleSelectOption = (option: TreeOption) => {
    const currentQ = getTreeQuestion(currentQuestionId);

    const newAnswer: UserBranchAnswer = {
      questionId: currentQ.id,
      questionTitle: currentQ.title,
      selectedOptionId: option.id,
      selectedOptionText: option.text,
      subtext: option.subtext
    };

    const updatedAnswers = [
      ...branchAnswers.filter(a => a.questionId !== currentQ.id),
      newAnswer
    ];
    setBranchAnswers(updatedAnswers);

    const nextQId = option.nextQuestionId;

    if (!nextQId || nextQId === 'finish' || !DECISION_TREE_QUESTIONS[nextQId]) {
      // Reached the end of this branch
      calculateAndShowResults(updatedAnswers);
    } else {
      // Advance down the adaptive branch
      setTimeout(() => {
        setQuestionHistory(prev => [...prev, nextQId]);
        setCurrentQuestionId(nextQId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 250);
    }
  };

  const handlePrev = () => {
    if (questionHistory.length > 1) {
      const newHistory = [...questionHistory];
      newHistory.pop();
      const prevQId = newHistory[newHistory.length - 1];
      setQuestionHistory(newHistory);
      setCurrentQuestionId(prevQId);
      setBranchAnswers(prev => prev.filter(a => a.questionId !== currentQuestionId));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    calculateAndShowResults(branchAnswers);
  };

  const handleReset = () => {
    setBranchAnswers([]);
    setCurrentQuestionId('root');
    setQuestionHistory(['root']);
    setAnalysisResult(null);
    setCurrentStep('hero');
    setActiveCategory('main');
    sessionStorage.clear();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentQ = getTreeQuestion(currentQuestionId);
  const isCurrentQAnswered = branchAnswers.some(a => a.questionId === currentQ.id);
  const isLastQuestion = Boolean(currentQ?.options?.some(o => o.nextQuestionId === 'finish')) || questionHistory.length >= 8;

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-stone-900 flex flex-col selection:bg-indigo-500 selection:text-white relative">
      {/* Subtle background ambient glow */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-amber-100/60 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-purple-100/50 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <Header
        currentStep={currentStep}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        onReset={handleReset}
        answeredCount={questionHistory.length}
        totalQuestions={Math.max(7, questionHistory.length)}
      />

      {/* Main Content View with Smooth Fade Transition */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {currentStep === 'hero' && (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <HeroView onStartTest={handleStartTest} />
            </motion.div>
          )}

          {currentStep === 'battle' && (
            <motion.div
              key="battle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProfessionBattleView
                onNavigateToQuiz={() => handleSelectCategory('quiz_result')}
                onNavigateToAssistant={(query) => {
                  handleSelectCategory('ai_assistant');
                }}
              />
            </motion.div>
          )}

          {currentStep === 'volunteering' && (
            <motion.div
              key="volunteering"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <VolunteeringView
                onGoToMain={() => handleSelectCategory('main')}
                onGoToQuiz={() => handleSelectCategory('quiz_result')}
              />
            </motion.div>
          )}

          {currentStep === 'ai_assistant' && (
            <motion.div
              key="ai_assistant"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AIAssistantView
                candidateName={candidateName}
                userRole={userRole}
                analysisResult={analysisResult}
                onGoToQuiz={() => handleSelectCategory('quiz_result')}
                onGoToVolunteering={() => handleSelectCategory('volunteering')}
              />
            </motion.div>
          )}

          {currentStep === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <QuizView
                currentQuestionId={currentQuestionId}
                questionHistory={questionHistory}
                answers={branchAnswers}
                onSelectOption={handleSelectOption}
                onPrev={handlePrev}
                onSubmit={handleSubmit}
                candidateName={candidateName}
                isLastQuestion={isLastQuestion}
              />
            </motion.div>
          )}

          {currentStep === 'loading' && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <LoadingAnalysisView candidateName={candidateName} />
            </motion.div>
          )}

          {currentStep === 'results' && analysisResult && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ResultsView 
                result={analysisResult} 
                candidateName={candidateName}
                userRole={userRole}
                onRetakeTest={handleReset} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200/80 bg-white/70 backdrop-blur-xs py-6 px-4 text-center text-xs text-stone-500 print:hidden shadow-2xs">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} {t.footer.copyright}</p>
          <div className="flex items-center gap-2 text-stone-600 font-medium">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span>{t.footer.adaptiveDb}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
