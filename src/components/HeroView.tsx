import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  BrainCircuit, 
  Target, 
  TrendingUp, 
  Compass, 
  CheckCircle2, 
  Users, 
  BookOpen, 
  Zap, 
  ShieldCheck,
  HeartHandshake,
  GraduationCap,
  Briefcase,
  Layers,
  MapPin,
  Lightbulb,
  Check
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface HeroViewProps {
  onStartTest: (candidateName: string, userRole: string) => void;
}

export const HeroView: React.FC<HeroViewProps> = ({ onStartTest }) => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [role, setRole] = useState(t.hero.roles.school);

  const roles = [
    t.hero.roles.school,
    t.hero.roles.college,
    t.hero.roles.university,
    t.hero.roles.careerChange,
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStartTest(name.trim() || t.results.explorer, role);
  };

  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-start items-center px-4 sm:px-6 py-10 sm:py-16 overflow-hidden">
      {/* Background ambient lighting effects for beige theme */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-amber-100/70 rounded-full blur-[120px] -z-10 opacity-70 pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-purple-100/60 rounded-full blur-[120px] -z-10 opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-100/60 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto text-center relative z-10 space-y-16">
        {/* Section 1: Hero Header & Interactive Entry */}
        <div className="max-w-4xl mx-auto">
          {/* Top pill badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-stone-200 shadow-2xs mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-stone-700">
              {t.hero.topBadge}
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-stone-900 leading-tight sm:leading-tight md:leading-tight mb-5 font-heading"
          >
            {t.hero.titlePart1}{' '}
            <span className="bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#9333ea] bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Interactive Entry Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/95 backdrop-blur-xs border border-stone-200 p-6 sm:p-8 rounded-3xl shadow-lg shadow-stone-200/50 max-w-xl mx-auto text-left relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="candidate-name" className="block text-xs sm:text-sm font-bold text-stone-800 mb-2">
                  {t.hero.nameLabel} <span className="text-stone-400 font-normal">{t.hero.nameOptional}</span>
                </label>
                <input
                  id="candidate-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.hero.namePlaceholder}
                  className="w-full bg-stone-50 border border-stone-200 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 text-stone-900 placeholder-stone-400 rounded-xl px-4 py-3 text-sm sm:text-base outline-none transition-all"
                  maxLength={40}
                />
              </div>

              <div>
                <label htmlFor="user-role" className="block text-xs sm:text-sm font-bold text-stone-800 mb-2">
                  {t.hero.statusLabel}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {roles.map((r) => {
                    const isSelected = role === r;
                    return (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setRole(r)}
                        className={`text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all border cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-50/80 border-2 border-indigo-600 text-indigo-950 font-bold shadow-xs'
                            : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100/80 hover:text-stone-900'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-indigo-600' : 'bg-stone-300'}`} />
                          <span className="truncate">{r}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Start Button with Blue-to-Purple gradient */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="start-quiz-btn"
                  className="w-full py-3.5 sm:py-4 px-6 bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#9333ea] hover:from-[#1d4ed8] hover:via-[#4338ca] hover:to-[#7e22ce] text-white rounded-2xl font-bold shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/35 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3 text-base sm:text-lg cursor-pointer"
                >
                  <span>{t.hero.startBtn}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-xs text-stone-500 pt-1 font-medium">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> {t.hero.questionsCount}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" /> {t.hero.timeEstimate}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> {t.hero.freeBadge}
                </span>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Feature 3-Cards Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 text-left"
        >
          <div className="bg-white/80 backdrop-blur-xs border border-stone-200 p-6 rounded-3xl shadow-xs hover:shadow-sm transition-all flex flex-col">
            <div className="w-14 h-14 bg-indigo-100/70 rounded-2xl flex items-center justify-center mb-5 text-indigo-600">
              <BrainCircuit className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2 font-heading">
              {t.hero.feature1Title}
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed flex-1">
              {t.hero.feature1Desc}
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-xs border border-stone-200 p-6 rounded-3xl shadow-xs hover:shadow-sm transition-all flex flex-col">
            <div className="w-14 h-14 bg-emerald-100/70 rounded-2xl flex items-center justify-center mb-5 text-emerald-600">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2 font-heading">
              {t.hero.feature2Title}
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed flex-1">
              {t.hero.feature2Desc}
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-xs border border-stone-200 p-6 rounded-3xl shadow-xs hover:shadow-sm transition-all flex flex-col">
            <div className="w-14 h-14 bg-amber-100/70 rounded-2xl flex items-center justify-center mb-5 text-amber-700">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2 font-heading">
              {t.hero.feature3Title}
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed flex-1">
              {t.hero.feature3Desc}
            </p>
          </div>
        </motion.div>

        {/* Section 2: Article Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-xs border border-stone-200 rounded-3xl p-8 sm:p-12 shadow-sm text-left relative overflow-hidden"
        >
          {/* Decorative subtle background accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-3xl">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold mb-4">
              <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
              <span>{t.hero.articleTitle}</span>
            </div>

            {/* Requested Heading */}
            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 mb-6 font-heading tracking-tight">
              {t.hero.articleSubtitle}
            </h2>

            {/* Body Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
              <p>{t.hero.articlePara1}</p>
              <p>{t.hero.articlePara2}</p>
              <p>{t.hero.articlePara3}</p>

              <div className="pt-2">
                <h4 className="font-bold text-stone-900 mb-2">{t.hero.articleWhyImportantTitle}</h4>
                <ul className="space-y-2">
                  {t.hero.articleWhyImportantList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlighted final sentence */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-indigo-50/80 to-purple-50/80 border border-indigo-100/80 text-stone-900 font-bold text-sm sm:text-base leading-relaxed mt-6">
                {t.hero.articleConclusion}
              </div>
            </div>
          </div>

          {/* 4 Interactive Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-stone-100">
            <div className="p-4 rounded-2xl bg-stone-50/80 border border-stone-200/70">
              <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 mb-3">
                <BrainCircuit className="w-4 h-4" />
              </div>
              <div className="font-bold text-xs sm:text-sm text-stone-900 mb-1 font-heading">
                {t.hero.card1Title}
              </div>
              <p className="text-xs text-stone-500 leading-relaxed">
                {t.hero.card1Desc}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50/80 border border-stone-200/70">
              <div className="w-8 h-8 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 mb-3">
                <Target className="w-4 h-4" />
              </div>
              <div className="font-bold text-xs sm:text-sm text-stone-900 mb-1 font-heading">
                {t.hero.card2Title}
              </div>
              <p className="text-xs text-stone-500 leading-relaxed">
                {t.hero.card2Desc}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50/80 border border-stone-200/70">
              <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 mb-3">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <div className="font-bold text-xs sm:text-sm text-stone-900 mb-1 font-heading">
                {t.hero.card3Title}
              </div>
              <p className="text-xs text-stone-500 leading-relaxed">
                {t.hero.card3Desc}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50/80 border border-stone-200/70">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-3">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="font-bold text-xs sm:text-sm text-stone-900 mb-1 font-heading">
                {t.hero.card4Title}
              </div>
              <p className="text-xs text-stone-500 leading-relaxed">
                {t.hero.card4Desc}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Step-by-Step Pathway */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left space-y-6"
        >
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-heading">
              {t.hero.pathTitle}
            </h3>
            <p className="text-xs sm:text-sm text-stone-500">
              {t.hero.pathSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 border border-stone-200 p-6 rounded-3xl shadow-2xs space-y-3 relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2563eb] to-[#4f46e5] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                {t.hero.step1Num}
              </div>
              <h4 className="text-base font-bold text-stone-900 font-heading">
                {t.hero.step1Title}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {t.hero.step1Desc}
              </p>
            </div>

            <div className="bg-white/80 border border-stone-200 p-6 rounded-3xl shadow-2xs space-y-3 relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#9333ea] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                {t.hero.step2Num}
              </div>
              <h4 className="text-base font-bold text-stone-900 font-heading">
                {t.hero.step2Title}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {t.hero.step2Desc}
              </p>
            </div>

            <div className="bg-white/80 border border-stone-200 p-6 rounded-3xl shadow-2xs space-y-3 relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#9333ea] to-pink-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                {t.hero.step3Num}
              </div>
              <h4 className="text-base font-bold text-stone-900 font-heading">
                {t.hero.step3Title}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {t.hero.step3Desc}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#9333ea] text-white p-8 sm:p-12 text-center space-y-6 shadow-xl shadow-indigo-500/20 relative overflow-hidden"
        >
          <div className="max-w-2xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
              {t.hero.bottomCtaTitle}
            </h3>
            <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed">
              {t.hero.bottomCtaSubtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onStartTest(name.trim() || t.results.explorer, role)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-white hover:bg-stone-50 text-indigo-950 font-extrabold text-sm sm:text-base shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{t.hero.bottomCtaBtn}</span>
              <ArrowRight className="w-4 h-4 text-indigo-600" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
