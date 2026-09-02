import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Layers, 
  Compass, 
  ChevronRight
} from 'lucide-react';
import { TreeQuestion, TreeOption } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { DECISION_TREE_QUESTIONS } from '../data/questions/tree';
import { TREE_TRANSLATIONS } from '../data/questions/treeTranslations';
import { useLanguage } from '../i18n/LanguageContext';

export interface UserBranchAnswer {
  questionId: string;
  questionTitle: string;
  selectedOptionId: string;
  selectedOptionText: string;
  subtext?: string;
}

interface QuizViewProps {
  currentQuestionId: string;
  questionHistory: string[];
  answers: UserBranchAnswer[];
  onSelectOption: (option: TreeOption) => void;
  onPrev: () => void;
  onSubmit: () => void;
  candidateName?: string;
  isLastQuestion: boolean;
}

export const QuizView: React.FC<QuizViewProps> = ({
  currentQuestionId,
  questionHistory,
  answers,
  onSelectOption,
  onPrev,
  onSubmit,
  candidateName,
  isLastQuestion,
}) => {
  const { t, language } = useLanguage();
  const rawQuestion: TreeQuestion = 
    DECISION_TREE_QUESTIONS[currentQuestionId] || 
    DECISION_TREE_QUESTIONS['root'] || 
    DECISION_TREE_QUESTIONS['q_root'] || 
    Object.values(DECISION_TREE_QUESTIONS)[0];

  const translationForQ = TREE_TRANSLATIONS[language]?.[rawQuestion?.id] || TREE_TRANSLATIONS['ru']?.[rawQuestion?.id];

  const currentQuestion = {
    ...rawQuestion,
    title: translationForQ?.title || rawQuestion?.title,
    subtitle: translationForQ?.subtitle || rawQuestion?.subtitle,
    category: translationForQ?.category || rawQuestion?.category,
    categoryContext: translationForQ?.categoryContext || rawQuestion?.categoryContext,
    description: translationForQ?.description || rawQuestion?.description || translationForQ?.subtitle,
    options: (rawQuestion?.options || []).map((opt) => {
      const optTr = translationForQ?.options?.[opt.id];
      return {
        ...opt,
        text: optTr?.text || opt.text,
        subtext: optTr?.subtext || optTr?.explanation || opt.subtext || opt.explanation,
        explanation: optTr?.explanation || opt.explanation,
      };
    }),
  };
    
  const currentAnswer = answers.find((a) => a.questionId === currentQuestion?.id);
  const isAnswered = !!currentAnswer;

  // Estimated depth for progress calculation (typically 6-8 questions in adaptive paths)
  const estimatedTotal = Math.max(7, questionHistory.length + (isLastQuestion ? 0 : 2));
  const currentStepNum = questionHistory.length;
  const progressPercentage = Math.min(100, Math.round((currentStepNum / estimatedTotal) * 100));

  // Keyboard navigation listener (1, 2, 3, 4, 5)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['1', '2', '3', '4', '5'].includes(e.key)) {
        const optionIndex = parseInt(e.key, 10) - 1;
        if (currentQuestion && currentQuestion.options && currentQuestion.options[optionIndex]) {
          const opt = currentQuestion.options[optionIndex];
          onSelectOption(opt);
        }
      } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (isAnswered) {
          if (isLastQuestion) {
            onSubmit();
          }
        }
      } else if (e.key === 'ArrowLeft') {
        if (questionHistory.length > 1) {
          onPrev();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestion, isAnswered, isLastQuestion, questionHistory.length, onSelectOption, onPrev, onSubmit]);

  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col justify-between py-6 sm:py-10 px-4 sm:px-6 max-w-4xl mx-auto w-full relative">
      {/* Top Floating Progress & Branch Tracker */}
      <div className="w-full mb-6 sm:mb-8">
        <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm font-medium mb-2.5 gap-2">
          <div className="flex items-center gap-2">
            <span className="text-stone-900 font-bold">
              {t.quiz.step} {currentStepNum}
            </span>
            <span className="text-stone-300">•</span>
            <span className="text-indigo-600 font-semibold flex items-center gap-1">
              <Compass className="w-3.5 h-3.5" />
              {currentQuestion?.category || currentQuestion?.categoryContext || t.quiz.orientation}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-xs font-bold bg-gradient-to-r from-[#2563eb] to-[#9333ea] bg-clip-text text-transparent uppercase tracking-wider">
              {progressPercentage}% {t.quiz.calibration}
            </div>
          </div>
        </div>

        {/* Dynamic Branch Breadcrumbs if multiple steps taken */}
        {answers.length > 0 && (
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-stone-500 font-medium mb-3 overflow-x-auto pb-1">
            <span className="text-stone-400">{t.quiz.adaptivePath}</span>
            {answers.slice(-3).map((ans, idx) => {
              const localizedOptionText = 
                TREE_TRANSLATIONS[language]?.[ans.questionId]?.options?.[ans.selectedOptionId]?.text || 
                ans.selectedOptionText;
              return (
                <React.Fragment key={ans.questionId}>
                  <span className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 font-semibold truncate max-w-[140px]">
                    {localizedOptionText}
                  </span>
                  {idx < answers.slice(-3).length - 1 && (
                    <ChevronRight className="w-3 h-3 text-stone-400 flex-shrink-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        )}

        {/* Progress track */}
        <div className="w-full h-2.5 bg-stone-200/80 rounded-full overflow-hidden shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#9333ea] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Main Question Animated Container */}
      <div className="flex-1 flex flex-col justify-center my-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion?.id || 'default_q'}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="w-full"
          >
            {/* Question Header Card */}
            <div className="mb-6 sm:mb-8 text-left bg-white/95 backdrop-blur-xs border border-stone-200 p-6 sm:p-8 rounded-3xl shadow-sm">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs sm:text-sm font-bold mb-3.5">
                <DynamicIcon name={currentQuestion?.iconName || 'Compass'} className="w-4 h-4 text-indigo-600" />
                <span>{currentQuestion?.category || currentQuestion?.categoryContext || t.quiz.orientation}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 leading-snug font-heading">
                {currentQuestion?.title}
              </h2>
              {currentQuestion?.description && (
                <p className="text-base sm:text-lg text-stone-600 mt-2.5 leading-relaxed">
                  {currentQuestion.description}
                </p>
              )}
            </div>

            {/* Options List */}
            <div className="space-y-3.5 sm:space-y-4">
              {(currentQuestion?.options || []).map((option, index) => {
                const isSelected = currentAnswer?.selectedOptionId === option.id;

                let optionStyleClass = 'bg-white hover:bg-stone-50/90 border-stone-200 hover:border-stone-300 text-stone-800 shadow-xs';
                let badgeStyleClass = 'bg-stone-100 border-stone-200 text-stone-600 group-hover:border-stone-300';
                let iconBoxClass = 'text-stone-400 bg-stone-100 group-hover:text-stone-600';

                if (isSelected) {
                  optionStyleClass = 'bg-white border-2 border-indigo-600 shadow-md shadow-indigo-100 ring-2 ring-indigo-50 text-stone-900';
                  badgeStyleClass = 'bg-gradient-to-r from-[#2563eb] to-[#9333ea] border-indigo-600 text-white shadow-xs';
                  iconBoxClass = 'text-indigo-600 bg-indigo-50';
                }

                return (
                  <motion.button
                    key={option.id}
                    type="button"
                    onClick={() => onSelectOption(option)}
                    whileHover={{ scale: 1.008 }}
                    whileTap={{ scale: 0.992 }}
                    className={`w-full text-left p-4 sm:p-5 md:p-6 rounded-2xl border transition-all duration-200 flex items-start gap-3.5 sm:gap-4.5 relative overflow-hidden group focus:outline-none cursor-pointer ${optionStyleClass}`}
                  >
                    {/* Left Key badge / Number */}
                    <div
                      className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold border transition-colors mt-0.5 ${badgeStyleClass}`}
                    >
                      {isSelected ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : `0${index + 1}`}
                    </div>

                    {/* Option Text and Subtext */}
                    <div className="flex-1 min-w-0 pr-2">
                      <div className="flex items-center gap-2">
                        <span className={`text-base sm:text-lg font-bold leading-tight ${isSelected ? 'text-stone-900' : 'text-stone-800 group-hover:text-stone-900'}`}>
                          {option.text}
                        </span>
                      </div>
                      {option.subtext && (
                        <p className={`text-sm sm:text-base mt-2 leading-relaxed ${isSelected ? 'text-indigo-950/80 font-medium' : 'text-stone-500'}`}>
                          {option.subtext}
                        </p>
                      )}
                    </div>

                    {/* Optional small icon */}
                    {option.iconName && (
                      <div className={`hidden sm:flex items-center justify-center w-9 h-9 rounded-xl ${iconBoxClass}`}>
                        <DynamicIcon name={option.iconName} className="w-4 h-4" />
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation Buttons */}
      <div className="mt-8 pt-4 border-t border-stone-200 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onPrev}
          disabled={questionHistory.length <= 1}
          className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-sm font-bold transition-all ${
            questionHistory.length <= 1
              ? 'opacity-40 cursor-not-allowed bg-stone-100 text-stone-400 border border-stone-200'
              : 'text-stone-700 hover:text-stone-900 bg-white hover:bg-stone-50 border border-stone-200 shadow-2xs cursor-pointer'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.quiz.backBtn}</span>
        </button>

        <div className="hidden sm:flex items-center gap-1.5 text-xs text-stone-500 font-medium">
          <span>{t.quiz.keyboardHint.split(':')[0] || 'Клавиши'}: </span>
          <kbd className="px-2 py-0.5 rounded-md bg-white border border-stone-200 text-stone-700 font-mono text-[11px] shadow-2xs font-bold">1</kbd>
          <kbd className="px-2 py-0.5 rounded-md bg-white border border-stone-200 text-stone-700 font-mono text-[11px] shadow-2xs font-bold">2</kbd>
          <kbd className="px-2 py-0.5 rounded-md bg-white border border-stone-200 text-stone-700 font-mono text-[11px] shadow-2xs font-bold">3</kbd>
          <kbd className="px-2 py-0.5 rounded-md bg-white border border-stone-200 text-stone-700 font-mono text-[11px] shadow-2xs font-bold">4</kbd>
        </div>

        {isLastQuestion ? (
          <button
            type="button"
            id="submit-answers-btn"
            onClick={onSubmit}
            disabled={!isAnswered}
            className={`flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-bold shadow-md transition-all ${
              isAnswered
                ? 'bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#9333ea] hover:from-[#1d4ed8] hover:via-[#4338ca] hover:to-[#7e22ce] text-white shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/35 hover:scale-105 active:scale-95 cursor-pointer'
                : 'opacity-40 cursor-not-allowed bg-stone-200 text-stone-400'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>{t.quiz.getResults}</span>
          </button>
        ) : (
          <div className="text-xs text-stone-400 font-medium italic">
            {t.quiz.selectToContinue}
          </div>
        )}
      </div>
    </div>
  );
};
