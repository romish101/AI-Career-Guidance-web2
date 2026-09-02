import React from 'react';
import { Compass, Sparkles, RefreshCw, GraduationCap, HeartHandshake, FileText, Home, Swords } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { NavCategory } from '../types';

export type { NavCategory };

interface HeaderProps {
  currentStep: 'hero' | 'quiz' | 'loading' | 'results' | 'battle' | 'volunteering' | 'ai_assistant';
  activeCategory: NavCategory;
  onSelectCategory: (category: NavCategory) => void;
  onReset: () => void;
  answeredCount?: number;
  totalQuestions?: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentStep,
  activeCategory,
  onSelectCategory,
  onReset,
  answeredCount = 0,
  totalQuestions = 13,
}) => {
  const { t } = useLanguage();

  const categories = [
    { 
      id: 'main' as NavCategory, 
      num: '1', 
      label: t.header.navMain,
      shortLabel: t.header.navMain,
      icon: Home
    },
    { 
      id: 'quiz_result' as NavCategory, 
      num: '2', 
      label: t.header.navQuiz,
      shortLabel: t.header.navQuiz,
      icon: FileText
    },
    { 
      id: 'battle' as NavCategory, 
      num: '3', 
      label: t.header.navBattle,
      title: t.header.navBattleTitle,
      shortLabel: t.header.navBattle,
      icon: Swords
    },
    { 
      id: 'volunteering' as NavCategory, 
      num: '4', 
      label: t.header.navVolunteering,
      title: t.header.navVolunteeringTitle,
      shortLabel: t.header.navVolunteering,
      icon: HeartHandshake
    },
    { 
      id: 'ai_assistant' as NavCategory, 
      num: '5', 
      label: t.header.navAiAssistant,
      title: t.header.navAiAssistantTitle,
      shortLabel: t.header.navAiAssistant,
      icon: Sparkles
    },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#FAF6F0]/95 border-b border-stone-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2">
        {/* Logo */}
        <button
          onClick={() => onSelectCategory('main')}
          className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-none cursor-pointer flex-shrink-0"
        >
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#9333ea] flex items-center justify-center font-bold text-white text-lg shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            <Compass className="w-5 h-5 text-white group-hover:rotate-45 transition-transform duration-500" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-sm sm:text-xl font-extrabold tracking-tight text-stone-900 font-heading">
                {t.header.appTitle} <span className="bg-gradient-to-r from-[#2563eb] to-[#9333ea] bg-clip-text text-transparent">AI</span>
              </span>
              <span className="hidden xl:inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/80">
                <Sparkles className="w-3 h-3 text-indigo-600" />
                Gemini 2.5
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-stone-500 hidden sm:block font-medium">
              {t.header.appSubtitle}
            </p>
          </div>
        </button>

        {/* 4 Categories Navigation */}
        <nav className="flex items-center gap-0.5 sm:gap-1.5 bg-stone-200/60 p-1 sm:p-1.5 rounded-2xl border border-stone-200">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                title={cat.title || cat.label}
                className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-xl transition-all duration-200 text-xs sm:text-sm cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-stone-900 shadow-sm border border-stone-200/90 font-bold'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-white/50 font-medium'
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] sm:text-[11px] font-bold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#2563eb] to-[#9333ea] text-white shadow-xs'
                      : 'bg-stone-300/80 text-stone-700'
                  }`}
                >
                  {cat.num}
                </span>
                <span className="hidden lg:inline">{cat.label}</span>
                <span className="lg:hidden">{cat.shortLabel}</span>
              </button>
            );
          })}
        </nav>

        {/* Right side actions: Language Switcher & Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          {/* Prominent Language Switcher */}
          <LanguageSwitcher variant="dropdown" />

          {currentStep === 'quiz' && (
            <div className="flex items-center gap-1.5 bg-white/80 border border-stone-200 px-2 sm:px-3 py-1.5 rounded-xl text-xs text-stone-700 font-medium shadow-2xs">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
              <span className="font-bold text-stone-900">{answeredCount}</span>
              <span className="text-stone-400">/</span>
              <span className="text-stone-500">{totalQuestions}</span>
            </div>
          )}

          {currentStep !== 'hero' && (
            <button
              onClick={onReset}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-700 hover:text-stone-900 bg-white hover:bg-stone-50 border border-stone-200 shadow-2xs px-2.5 sm:px-3 py-1.5 rounded-xl transition-all duration-200 cursor-pointer"
              title={t.header.resetBtn}
            >
              <RefreshCw className="w-3.5 h-3.5 text-stone-500" />
              <span className="hidden sm:inline">{t.header.resetBtn}</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
