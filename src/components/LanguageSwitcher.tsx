import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../i18n/types';

interface LanguageSwitcherProps {
  variant?: 'dropdown' | 'segmented' | 'compact';
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'dropdown',
  className = '',
}) => {
  const { language, setLanguage, languages, currentLanguageOption, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelectLanguage = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  if (variant === 'segmented') {
    return (
      <div
        className={`inline-flex items-center p-1 bg-stone-200/80 rounded-xl border border-stone-300/80 shadow-2xs ${className}`}
        role="group"
        aria-label={t.header.selectLanguage}
      >
        {languages.map((lang) => {
          const isSelected = language === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleSelectLanguage(lang.code)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-white text-stone-900 shadow-xs border border-stone-200/90 scale-[1.02]'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/40'
              }`}
              title={`${lang.name} (${lang.nativeName})`}
            >
              <span className="text-sm leading-none">{lang.flag}</span>
              <span>{lang.shortLabel}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // Dropdown style (default for Header)
  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        id="language-switcher-button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 bg-white/90 hover:bg-stone-50 border border-stone-200/90 rounded-xl text-xs sm:text-sm font-semibold text-stone-800 shadow-2xs hover:border-stone-300 transition-all duration-200 focus:outline-none cursor-pointer"
        aria-expanded={isOpen}
        aria-haspopup="true"
        title={t.header.selectLanguage}
      >
        <span className="text-base leading-none">{currentLanguageOption.flag}</span>
        <span className="hidden xs:inline font-bold tracking-tight">
          {currentLanguageOption.shortLabel}
        </span>
        <span className="hidden md:inline text-stone-600 font-medium">
          {currentLanguageOption.nativeName}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-stone-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-indigo-600' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-stone-200/90 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-3 py-1.5 border-b border-stone-100 flex items-center gap-1.5 text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
            <Globe className="w-3 h-3 text-stone-400" />
            <span>{t.header.language}</span>
          </div>

          <div className="p-1 space-y-0.5">
            {languages.map((lang) => {
              const isSelected = language === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleSelectLanguage(lang.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-50/80 text-indigo-950 font-bold border border-indigo-100'
                      : 'text-stone-700 hover:bg-stone-50 hover:text-stone-900'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg leading-none">{lang.flag}</span>
                    <div className="text-left">
                      <div className="font-bold text-stone-900 text-xs sm:text-sm leading-tight">
                        {lang.nativeName}
                      </div>
                      <div className="text-[10px] text-stone-400 font-medium">
                        {lang.name}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-4 h-4 text-indigo-600 font-bold flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
