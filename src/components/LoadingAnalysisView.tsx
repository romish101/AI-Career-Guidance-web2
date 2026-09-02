import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Brain, Cpu, Search, CheckCircle2, Layers } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface LoadingAnalysisViewProps {
  candidateName?: string;
}

export const LoadingAnalysisView: React.FC<LoadingAnalysisViewProps> = ({ candidateName }) => {
  const { t } = useLanguage();

  const steps = [
    { text: t.quiz.step1 || 'Анализ ваших ответов и личностных драйверов...', icon: Brain },
    { text: t.quiz.step2 || 'Сопоставление склонностей с матрицей профессий 2026+...', icon: Search },
    { text: t.quiz.step3 || 'Психологический расчет архетипа и баланса навыков...', icon: Layers },
    { text: t.quiz.step4 || 'Генерация карьерной траектории и обоснований с Gemini AI...', icon: Cpu },
    { text: t.quiz.step5 || 'Финализация персонального отчета и зарплатных вилок...', icon: Sparkles }
  ];

  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 1200);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-4 sm:px-6 py-12 text-center relative overflow-hidden">
      {/* Background ambient orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-100/70 rounded-full blur-[100px] pointer-events-none -z-10 opacity-70" />
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-purple-100/60 rounded-full blur-[90px] pointer-events-none -z-10 opacity-60" />

      {/* Center animated pulsating core */}
      <div className="relative mb-8">
        <motion.div
          animate={{ scale: [1, 1.08, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#9333ea] p-[2px] shadow-xl shadow-indigo-500/25"
        >
          <div className="w-full h-full bg-[#FAF6F0] rounded-[22px] flex items-center justify-center relative overflow-hidden">
            <Brain className="w-12 h-12 text-indigo-600 animate-pulse" />
          </div>
        </motion.div>

        {/* Orbiting particle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-2.5 pointer-events-none"
        >
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#2563eb] to-[#9333ea] shadow-md shadow-indigo-500/50 absolute top-0 left-1/2 -translate-x-1/2" />
        </motion.div>
      </div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl sm:text-3xl font-extrabold text-stone-900 mb-2 font-heading"
      >
        {t.quiz.loadingTitle || 'Создаем карьерный паспорт'} {candidateName ? `${t.quiz.loadingFor || 'для'} ${candidateName}` : ''}...
      </motion.h2>
      <p className="text-sm sm:text-base text-stone-600 max-w-md mx-auto mb-8 font-normal">
        {t.quiz.loadingSubtitle || 'Искусственный интеллект обрабатывает ваши ответы и формирует индивидуальные рекомендации'}
      </p>

      {/* Step by step diagnostic checklist */}
      <div className="w-full max-w-md bg-white/90 backdrop-blur-xs border border-stone-200 p-5 sm:p-6 rounded-3xl shadow-xl shadow-stone-200/50 text-left space-y-3">
        {steps.map((step, idx) => {
          const isDone = idx < activeStepIndex;
          const isCurrent = idx === activeStepIndex;
          const StepIcon = step.icon;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`flex items-center gap-3 text-xs sm:text-sm p-3 rounded-xl transition-all ${
                isCurrent
                  ? 'bg-indigo-50/80 border border-indigo-200 text-indigo-950 font-bold shadow-2xs'
                  : isDone
                  ? 'text-stone-800 font-medium'
                  : 'text-stone-400'
              }`}
            >
              <div className="flex-shrink-0">
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : isCurrent ? (
                  <div className="w-4 h-4 rounded-full border-2 border-indigo-600 border-t-transparent animate-spin" />
                ) : (
                  <StepIcon className="w-4 h-4 text-stone-400" />
                )}
              </div>
              <span className="flex-1 truncate">{step.text}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
