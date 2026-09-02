import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  RefreshCw, 
  MessageSquare, 
  Printer, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  Compass, 
  Award, 
  ChevronDown, 
  ChevronUp, 
  Zap, 
  ArrowRight,
  BookOpen,
  DollarSign,
  Clock,
  Flame,
  Layers,
  Brain,
  Share2,
  Check,
  Building2,
  PieChart,
  Target,
  ExternalLink
} from 'lucide-react';
import { AssessmentResult, CareerRecommendation, TraitScores, TraitKey } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { CounselorChatModal } from './CounselorChatModal';
import { useLanguage } from '../i18n/LanguageContext';
import { 
  ARCHETYPE_LOCALIZATIONS, 
  getLocalizedSector, 
  getLocalizedWorkEnv, 
  getLocalizedDemand, 
  getLocalizedProfessionTitle, 
  getLocalizedCognitiveSummary, 
  getLocalizedFitReasons, 
  getLocalizedPros, 
  getLocalizedCons, 
  getLocalizedRoadmap,
  getLocalizedProfessionBadge,
  getLocalizedShortDescription,
  getLocalizedSkill,
  getLocalizedSalary,
  getLocalizedSchoolSubject,
  getLocalizedDegreeType,
  getLocalizedMajor,
  getLocalizedUniversity,
  getLocalizedDailyTasks,
  getLocalizedDayInTheLife,
  getLocalizedFirstSteps
} from '../i18n/assessmentLocalization';

interface ResultsViewProps {
  result: AssessmentResult;
  candidateName?: string;
  userRole?: string;
  onRetakeTest: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ 
  result, 
  candidateName, 
  userRole, 
  onRetakeTest 
}) => {
  const { t, language } = useLanguage();
  const [selectedProfId, setSelectedProfId] = useState<string>(
    result.topRecommendations[0]?.profession.id || ''
  );
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Compute dominant trait key
  const dominantTraitKey: TraitKey = (Object.keys(result.userTraits) as TraitKey[]).reduce(
    (best, curr) => (result.userTraits[curr] > result.userTraits[best] ? curr : best),
    'analytical' as TraitKey
  );

  const archetypeInfo = ARCHETYPE_LOCALIZATIONS[dominantTraitKey] || ARCHETYPE_LOCALIZATIONS.analytical;
  const dominantArchetypeName = archetypeInfo.name[language] || archetypeInfo.name.ru;
  const dominantArchetypeDesc = archetypeInfo.description[language] || archetypeInfo.description.ru;
  const cognitiveSummary = getLocalizedCognitiveSummary(dominantTraitKey, language);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    const topTitles = result.topRecommendations.slice(0, 3).map(r => getLocalizedProfessionTitle(r.profession.title, language)).join(', ');
    const textToCopy = `${t.results.title}: ${topTitles}! ${t.results.archetypeLabel}: ${dominantArchetypeName}.`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const traitList: { key: TraitKey; label: string; value: number; color: string }[] = [
    { key: 'analytical', label: t.results.traits.analytical, value: result.userTraits.analytical, color: 'from-[#2563eb] to-[#4f46e5]' },
    { key: 'technical', label: t.results.traits.technical, value: result.userTraits.technical, color: 'from-emerald-500 to-teal-500' },
    { key: 'creative', label: t.results.traits.creative, value: result.userTraits.creative, color: 'from-purple-500 to-pink-500' },
    { key: 'research', label: t.results.traits.research, value: result.userTraits.research, color: 'from-cyan-500 to-blue-500' },
    { key: 'social', label: t.results.traits.social, value: result.userTraits.social, color: 'from-amber-500 to-orange-500' },
    { key: 'entrepreneurial', label: t.results.traits.entrepreneurial, value: result.userTraits.entrepreneurial, color: 'from-rose-500 to-red-500' },
    { key: 'practical', label: t.results.traits.practical, value: result.userTraits.practical, color: 'from-teal-500 to-emerald-600' },
    { key: 'organizational', label: t.results.traits.organizational, value: result.userTraits.organizational, color: 'from-indigo-500 to-purple-600' },
  ];

  const iconPalette = [
    { bg: 'bg-indigo-100/70', text: 'text-indigo-600' },
    { bg: 'bg-emerald-100/70', text: 'text-emerald-600' },
    { bg: 'bg-purple-100/70', text: 'text-purple-600' },
    { bg: 'bg-orange-100/70', text: 'text-orange-600' },
    { bg: 'bg-blue-100/70', text: 'text-blue-600' },
  ];

  const displayName = candidateName || t.results.explorer;
  const dateLocale = language === 'ru' ? 'ru-RU' : language === 'tg' ? 'tg-TG' : 'en-US';
  const localizedRoadmap = getLocalizedRoadmap(result.topRecommendations[0]?.profession, language);

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto space-y-10 print:p-0">
      {/* Top Banner / Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-2"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>{t.results.badge} • {new Date(result.createdAt).toLocaleDateString(dateLocale, { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-heading">
            {displayName}, {t.results.title}
          </h1>
          <p className="text-sm sm:text-base text-stone-600 mt-2 max-w-2xl leading-relaxed">
            {t.results.subtitle}
          </p>
        </div>

        {/* Action Toolbar */}
        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto print:hidden">
          <button
            onClick={() => setIsChatOpen(true)}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#9333ea] hover:from-[#1d4ed8] hover:via-[#4338ca] hover:to-[#7e22ce] text-white text-xs sm:text-sm font-bold shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/35 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t.results.consultantCtaBtn}</span>
          </button>

          <button
            onClick={handleShare}
            className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 shadow-2xs text-xs sm:text-sm font-bold transition-all cursor-pointer"
            title={t.results.copyLink}
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            <span className="hidden sm:inline">{copied ? t.results.linkCopied : t.results.copyLink}</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 shadow-2xs text-xs sm:text-sm font-bold transition-all cursor-pointer"
            title={t.results.printResults}
          >
            <Printer className="w-4 h-4" />
            <span className="hidden sm:inline">{t.results.printResults}</span>
          </button>

          <button
            onClick={onRetakeTest}
            className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 shadow-2xs text-xs sm:text-sm font-bold transition-all cursor-pointer"
            title={t.results.retakeTest}
          >
            <RefreshCw className="w-4 h-4 text-stone-500" />
            <span>{t.results.retakeTest}</span>
          </button>
        </div>
      </motion.div>

      {/* Section 1: Psychological Archetype & 8D Trait Balance */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Left: Dominant Archetype Card */}
        <div className="lg:col-span-1 rounded-3xl bg-stone-900 text-white p-6 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden border border-stone-800">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
                {t.results.archetypeLabel}
              </span>
              <div className="w-7 h-7 rounded-lg bg-stone-800 flex items-center justify-center text-indigo-400">
                <Brain className="w-4 h-4" />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
              {dominantArchetypeName}
            </h3>
            <p className="text-xs font-semibold text-emerald-400 mt-1 mb-4">
              {t.results.leadingProfile}
            </p>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed italic">
              «{dominantArchetypeDesc}»
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-stone-800">
            <div className="text-xs text-stone-400 font-bold uppercase tracking-wider mb-2">
              {t.results.affinitySpheres}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {result.sectorAffinities.map((sec) => (
                <span key={sec.category} className="px-2.5 py-1 rounded-lg bg-stone-800 text-[11px] font-semibold text-stone-300 border border-stone-700">
                  {getLocalizedSector(sec.category, language)} ({sec.percentage}%)
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: 8-Trait Breakdown in White Container */}
        <div className="lg:col-span-2 rounded-3xl bg-white/95 backdrop-blur-xs border border-stone-200 p-6 sm:p-7 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-stone-900 font-heading">
                  {t.results.matrixTitle}
                </h3>
              </div>
              <span className="text-xs text-stone-500 font-medium">{t.results.scaleLabel}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
              {traitList.map((tr) => (
                <div key={tr.key} className="space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-stone-700 truncate pr-2">{tr.label}</span>
                    <span className="font-bold text-stone-900">{tr.value}%</span>
                  </div>
                  <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tr.value}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className={`h-full bg-gradient-to-r ${tr.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              {t.results.algorithmNote}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Section 2: Top 5 Recommended Professions */}
      <div className="space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-bold mb-2">
            <Target className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.results.top5Title}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-heading">
            {t.results.top5Title}
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            {t.results.top5Subtitle}
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {result.topRecommendations.map((rec, index) => {
            const prof = rec.profession;
            const isSelected = selectedProfId === prof.id;
            const isTopChoice = index === 0;
            const palette = iconPalette[index % iconPalette.length];
            const localizedTitle = getLocalizedProfessionTitle(prof.title, language);
            const localizedSector = getLocalizedSector(prof.category, language);
            const localizedEnv = getLocalizedWorkEnv(prof.workEnvironment, language);

            return (
              <motion.div
                key={prof.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.06 }}
                className={`rounded-3xl border p-6 flex flex-col justify-between transition-all duration-300 relative ${
                  isSelected
                    ? 'bg-white border-2 border-indigo-600 shadow-xl shadow-indigo-100 ring-2 ring-indigo-50'
                    : isTopChoice
                    ? 'bg-white/95 border-indigo-200/90 shadow-md shadow-indigo-100/50 hover:shadow-lg'
                    : 'bg-white/90 border-stone-200 shadow-2xs hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Badge & Match % */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${palette.bg} flex items-center justify-center ${palette.text}`}>
                      <DynamicIcon name={prof.iconName} className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                        {rec.matchPercentage}% {t.results.matchScore}
                      </span>
                      <div className="text-[10px] text-stone-400 font-semibold mt-0.5">
                        {getLocalizedProfessionBadge(prof.badge, language)}
                      </div>
                    </div>
                  </div>

                  {/* Category & Title */}
                  <div className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider mb-1">
                    {localizedSector}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2.5 font-heading line-clamp-2">
                    {localizedTitle}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-stone-600 mb-5 line-clamp-3 leading-relaxed">
                    {getLocalizedShortDescription(prof, language)}
                  </p>

                  {/* Quick Spec Rows */}
                  <div className="space-y-2.5 mb-5 text-xs">
                    <div className="flex justify-between border-b border-stone-100 pb-1.5">
                      <span className="text-stone-400">{t.results.skillsLabel}</span>
                      <span className="font-bold text-stone-800 text-right truncate max-w-[60%]">
                        {prof.keySkills.hardSkills.slice(0, 2).map((s) => getLocalizedSkill(s, language)).join(', ')}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-stone-100 pb-1.5">
                      <span className="text-stone-400">{t.results.formatLabel}</span>
                      <span className="font-bold text-stone-800 text-right truncate max-w-[60%]">
                        {localizedEnv}
                      </span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className="text-stone-400">{t.results.middleIncomeLabel}</span>
                      <span className="font-extrabold text-emerald-600 text-right">
                        {getLocalizedSalary(prof.salaryRange.middle, language)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <button
                  type="button"
                  onClick={() => setSelectedProfId(isSelected ? '' : prof.id)}
                  className={`w-full py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    isTopChoice
                      ? 'bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#9333ea] hover:from-[#1d4ed8] hover:via-[#4338ca] hover:to-[#7e22ce] text-white shadow-md shadow-indigo-500/25 hover:shadow-lg'
                      : isSelected
                      ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                      : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200'
                  }`}
                >
                  <span>{isSelected ? t.results.collapseDetails : isTopChoice ? t.results.detailedPlan : t.results.moreDetails}</span>
                  {isSelected ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Expanded Detailed Drawer for the Selected Profession */}
        {selectedProfId && (
          <AnimatePresence>
            {(() => {
              const rec = result.topRecommendations.find(r => r.profession.id === selectedProfId) || 
                          result.alternativePaths.find(r => r.profession.id === selectedProfId) ||
                          result.topRecommendations[0];
              if (!rec) return null;
              const prof = rec.profession;
              const localizedTitle = getLocalizedProfessionTitle(prof.title, language);
              const localizedSector = getLocalizedSector(prof.category, language);
              const localizedEnv = getLocalizedWorkEnv(prof.workEnvironment, language);
              const localizedDemand = getLocalizedDemand(prof.demandLevel, language);
              const fitReasons = getLocalizedFitReasons(rec, language);
              const prosList = getLocalizedPros(prof, language);
              const consList = getLocalizedCons(prof, language);

              return (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="bg-white/95 backdrop-blur-xs border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-xl shadow-stone-200/50 space-y-8 mt-6"
                >
                  {/* Detailed Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-indigo-100/80 flex items-center justify-center text-indigo-600 flex-shrink-0">
                        <DynamicIcon name={prof.iconName} className="w-7 h-7" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                            {getLocalizedProfessionBadge(prof.badge, language)}
                          </span>
                          <span className="text-xs font-extrabold text-emerald-600">
                            {rec.matchPercentage}% {t.results.matchScore}
                          </span>
                          <span className="text-xs text-stone-500 font-medium">
                            • {localizedSector}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1 font-heading">
                          {localizedTitle}
                        </h3>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsChatOpen(true)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#9333ea] hover:from-[#1d4ed8] hover:via-[#4338ca] hover:to-[#7e22ce] text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-500/20 hover:shadow-lg transition-transform hover:scale-105 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{t.results.askMentorAbout}</span>
                    </button>
                  </div>

                  {/* Why it fits & Key tasks */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-3">
                      <h4 className="text-sm font-bold text-indigo-900 flex items-center gap-2 font-heading">
                        <Sparkles className="w-4 h-4 text-indigo-600" />
                        <span>{t.results.whyFitsYou}</span>
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                        {fitReasons.map((reason, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span>{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3">
                      <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2 font-heading">
                        <Briefcase className="w-4 h-4 text-stone-700" />
                        <span>{t.results.dailyTasks}</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                        {getLocalizedDailyTasks(prof, language).map((task, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 flex-shrink-0" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pros & Cons Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Pros (Плюсы и синергия / Афзалиятҳо ва ҷиҳатҳои мусбат) */}
                    <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-3">
                      <h4 className="text-sm font-bold text-emerald-900 flex items-center gap-2 font-heading">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>{t.results.prosTitle}</span>
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                        {prosList.map((pro, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                              ✓
                            </span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cons (Минусы и вызовы / Мушкилот ва ҷонибҳои сахт) */}
                    <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-3">
                      <h4 className="text-sm font-bold text-amber-900 flex items-center gap-2 font-heading">
                        <Compass className="w-4 h-4 text-amber-600" />
                        <span>{t.results.consTitle}</span>
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                        {consList.map((con, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                              !
                            </span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Essential Core Skills Grid (Малакаҳои асосии зарурӣ / Необходимые навыки) */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                        <Zap className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-stone-900 font-heading">
                        {t.results.coreSkillsTitle}
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2.5">
                        <div className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-indigo-600" />
                          <span>{t.results.hardSkills}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {prof.keySkills.hardSkills.map((s, i) => (
                            <span key={i} className="px-3 py-1.5 rounded-xl bg-stone-100 text-stone-800 text-xs font-semibold border border-stone-200">
                              {getLocalizedSkill(s, language)}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        <div className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-purple-600" />
                          <span>{t.results.softSkills}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {prof.keySkills.softSkills.map((s, i) => (
                            <span key={i} className="px-3 py-1.5 rounded-xl bg-purple-50 text-purple-900 text-xs font-semibold border border-purple-100">
                              {getLocalizedSkill(s, language)}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Salary and Education Specs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-3">
                      <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                        <DollarSign className="w-4 h-4 text-emerald-600" />
                        <span>{t.results.salaryAndOutlook}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-white/90 p-2.5 rounded-xl border border-emerald-100">
                          <div className="text-[10px] text-stone-500 font-bold">{t.results.salaryJunior}</div>
                          <div className="text-xs sm:text-sm font-extrabold text-stone-900 mt-0.5">{getLocalizedSalary(prof.salaryRange.junior, language)}</div>
                        </div>
                        <div className="bg-white/90 p-2.5 rounded-xl border border-emerald-200 ring-1 ring-emerald-200">
                          <div className="text-[10px] text-emerald-700 font-bold">{t.results.salaryMiddle}</div>
                          <div className="text-xs sm:text-sm font-extrabold text-emerald-700 mt-0.5">{getLocalizedSalary(prof.salaryRange.middle, language)}</div>
                        </div>
                        <div className="bg-white/90 p-2.5 rounded-xl border border-emerald-100">
                          <div className="text-[10px] text-stone-500 font-bold">{t.results.salarySenior}</div>
                          <div className="text-xs sm:text-sm font-extrabold text-stone-900 mt-0.5">{getLocalizedSalary(prof.salaryRange.senior, language)}</div>
                        </div>
                      </div>
                      <div className="text-[11px] text-emerald-800 font-medium text-center">
                        {t.results.demandLabel} <strong>{localizedDemand}</strong>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200/80 space-y-3">
                      <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm">
                        <GraduationCap className="w-4 h-4 text-indigo-600" />
                        <span>{t.results.educationPath}</span>
                      </div>
                      <div className="text-xs text-stone-700 space-y-1.5">
                        <div><strong className="text-stone-900">{t.results.recommendedMajors}</strong> {prof.recommendedEducation.majors.map((m) => getLocalizedMajor(m, language)).join(' / ')}</div>
                        <div><strong className="text-stone-900">{t.results.degreeLabel}</strong> {getLocalizedDegreeType(prof.recommendedEducation.degreeType, language)}</div>
                        <div><strong className="text-stone-900">{t.results.topUniversities}</strong> {prof.recommendedEducation.topUniversities.map((u) => getLocalizedUniversity(u, language)).join(', ')}</div>
                        <div><strong className="text-stone-900">{t.results.subjectsLabel}</strong> {prof.schoolSubjects.map((s) => getLocalizedSchoolSubject(s, language)).join(', ')}</div>
                      </div>
                    </div>
                  </div>

                  {/* Day in life & 3 Steps to start */}
                  <div className="space-y-4">
                    <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
                      <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1.5">
                        {t.results.dayInLifeLabel}
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                        {getLocalizedDayInTheLife(prof, language)}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
                      <div className="flex items-center gap-2 text-emerald-800 text-xs sm:text-sm font-bold mb-2">
                        <Flame className="w-4 h-4 text-emerald-600" />
                        <span>{t.results.threeStepsLabel}</span>
                      </div>
                      <ul className="space-y-1.5">
                        {getLocalizedFirstSteps(prof, language).map((step, i) => (
                          <li key={i} className="text-xs text-stone-700 flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                              {i + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>
        )}
      </div>

      {/* Section 3: 3 Alternative Paths */}
      {result.alternativePaths && result.alternativePaths.length > 0 && (
        <div className="space-y-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-heading">
              {t.results.altPathsTitle}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              {t.results.altPathsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {result.alternativePaths.map((rec) => {
              const localizedAltTitle = getLocalizedProfessionTitle(rec.profession.title, language);
              const localizedAltCategory = getLocalizedSector(rec.profession.category, language);

              return (
                <div 
                  key={rec.profession.id}
                  onClick={() => setSelectedProfId(rec.profession.id)}
                  className="p-5 rounded-2xl bg-white/80 border border-stone-200 hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-100 text-stone-700">
                        {localizedAltCategory}
                      </span>
                      <span className="text-xs font-bold text-indigo-600">
                        {rec.matchPercentage}% {t.results.matchScore}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-stone-900 group-hover:text-indigo-600 transition-colors font-heading">
                      {localizedAltTitle}
                    </h4>
                    <p className="text-xs text-stone-600 mt-1 line-clamp-2">
                      {getLocalizedShortDescription(rec.profession, language)}
                    </p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                    <span>{getLocalizedSalary(rec.profession.salaryRange.middle, language)}</span>
                    <span className="text-indigo-600 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      {t.results.moreDetails} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Section 4: 3-Stage Career Roadmap */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="rounded-3xl bg-white/95 backdrop-blur-xs border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-heading">
              {t.results.roadmapTitle}
            </h3>
            <p className="text-xs sm:text-sm text-stone-500">
              {t.results.roadmapSubtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {localizedRoadmap.map((track, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">
                  0{idx + 1}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-stone-900">
                  {track.stepTitle}
                </h4>
              </div>
              <ul className="space-y-2">
                {track.actionItems.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-xs text-stone-600 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Section 5: Counselor Advice & Motivation */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="rounded-3xl bg-white/95 backdrop-blur-xs border border-stone-200 p-6 sm:p-8 shadow-xs text-center space-y-4"
      >
        <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mx-auto">
          <Award className="w-5 h-5" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-heading">
          {t.results.mentorFarewellTitle}
        </h3>
        <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
          {cognitiveSummary}
        </p>

        {/* Retake & Ask Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5 print:hidden">
          <button
            onClick={() => setIsChatOpen(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#9333ea] hover:from-[#1d4ed8] hover:via-[#4338ca] hover:to-[#7e22ce] text-white font-bold text-sm shadow-md shadow-indigo-500/25 hover:shadow-lg transition-transform hover:scale-105 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t.results.askCounselorBtn}</span>
          </button>

          <button
            onClick={onRetakeTest}
            id="retake-quiz-btn"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-stone-50 text-stone-700 font-bold text-sm border border-stone-200 shadow-2xs transition-all cursor-pointer"
          >
            <RefreshCw className="w-4 h-4 text-stone-500" />
            <span>{t.results.retakeTest}</span>
          </button>
        </div>
      </motion.div>

      {/* Interactive Counselor Chat Modal */}
      <CounselorChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        result={result as any}
      />
    </div>
  );
};
