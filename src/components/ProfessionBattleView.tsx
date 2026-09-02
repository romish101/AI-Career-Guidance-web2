import React, { useRef, useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Swords, 
  Search, 
  Sparkles, 
  Check, 
  AlertCircle, 
  ArrowRightLeft, 
  Shuffle, 
  TrendingUp, 
  DollarSign, 
  Brain, 
  ShieldAlert, 
  GraduationCap, 
  CheckCircle2, 
  Briefcase,
  ChevronDown,
  Layers,
  Award,
  RotateCcw,
  Wifi,
  Trophy,
  Play,
  Flame,
  BarChart3,
  HelpCircle
} from 'lucide-react';
import { BattleProfession } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { useProfessionBattle } from '../hooks/useProfessionBattle';
import { useProfessionsData } from '../services/professionDataService';
import { ALL_BATTLE_PROFESSIONS } from '../data/battleProfessions';
import { 
  getLocalizedProfessionTitle, 
  getLocalizedSector, 
  getLocalizedBattleText, 
  getLocalizedEducationYears,
  getLocalizedSalary
} from '../i18n/assessmentLocalization';

export interface ProfessionBattleViewProps {
  professions?: BattleProfession[];
  initialFighter1Id?: string;
  initialFighter2Id?: string;
  onNavigateToQuiz?: () => void;
  onNavigateToAssistant?: (professionName: string) => void;
}

const DEFAULT_BATTLE_PROFESSIONS: BattleProfession[] = ALL_BATTLE_PROFESSIONS;

const PRESET_BATTLES = [
  { id1: 'software-engineer', id2: 'ai-ml-engineer', key: 'devVsAi' as const, fallback: '💻 Software Engineer vs AI Engineer' },
  { id1: 'neurosurgeon', id2: 'cardiologist', key: 'surgeonVsCardio' as const, fallback: '🏥 Neurosurgeon vs Cardiologist' },
  { id1: 'robotics-engineer', id2: 'automotive-ev-engineer', key: 'roboticsVsEv' as const, fallback: '🤖 Robotics Engineer vs EV Engineer' },
  { id1: 'ui_ux_product_designer', id2: 'motion_3d_artist', key: 'uiuxVsMotion' as const, fallback: '🎨 UI/UX vs 3D Motion' },
  { id1: 'cybersecurity-specialist', id2: 'cloud-architect', key: 'cyberVsCloud' as const, fallback: '🛡️ Cybersecurity vs Cloud Architect' },
  { id1: 'aviation-pilot', id2: 'aerospace-engineer', key: 'pilotVsAero' as const, fallback: '✈️ Commercial Pilot vs Aerospace Engineer' },
];

export const ProfessionBattleView: React.FC<ProfessionBattleViewProps> = ({
  professions: propProfessions,
  initialFighter1Id = 'software-engineer',
  initialFighter2Id = 'ai-ml-engineer',
  onNavigateToQuiz,
  onNavigateToAssistant,
}) => {
  const { t, language } = useLanguage();

  const { professions: loadedProfessions } = useProfessionsData(
    propProfessions && propProfessions.length > 0 ? propProfessions : DEFAULT_BATTLE_PROFESSIONS
  );

  const {
    fighter1,
    fighter2,
    fighter1Id,
    fighter2Id,
    query1,
    setQuery1,
    query2,
    setQuery2,
    isOpen1,
    setIsOpen1,
    isOpen2,
    setIsOpen2,
    selectedCategory,
    setSelectedCategory,
    categories,
    searchResults1,
    searchResults2,
    analysis,
    handleSelectFighter1,
    handleSelectFighter2,
    handleSwap,
    handleRandom,
    handleReset,
  } = useProfessionBattle(loadedProfessions, initialFighter1Id, initialFighter2Id, language);

  // Interactive Battle State
  // mode: 'setup' (default select & compare) | 'round' (active 5-round duel) | 'result' (tournament finished)
  const [battleState, setBattleState] = useState<'setup' | 'round' | 'result'>('setup');
  const [activeTab, setActiveTab] = useState<'comparison' | 'tournament'>('comparison');
  const [currentRound, setCurrentRound] = useState<number>(0);
  const [roundScores, setRoundScores] = useState<Array<1 | 2 | 0>>([]);

  const dropdownRef1 = useRef<HTMLDivElement>(null);
  const dropdownRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef1.current && !dropdownRef1.current.contains(e.target as Node)) {
        setIsOpen1(false);
      }
      if (dropdownRef2.current && !dropdownRef2.current.contains(e.target as Node)) {
        setIsOpen2(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsOpen1, setIsOpen2]);

  const fighter1LocalizedName = getLocalizedProfessionTitle(fighter1.name, language);
  const fighter2LocalizedName = getLocalizedProfessionTitle(fighter2.name, language);
  const fighter1LocalizedCategory = getLocalizedSector(fighter1.category, language);
  const fighter2LocalizedCategory = getLocalizedSector(fighter2.category, language);

  // 5 Rounds Configuration for the interactive battle mode
  const ROUNDS = useMemo(() => [
    {
      roundNum: 1,
      title: t.battle.round1Title,
      question: t.battle.round1Question,
      icon: DollarSign,
      color: 'text-amber-600 bg-amber-50 border-amber-200',
      getStat1: () => getLocalizedSalary(fighter1.salary_range, language),
      getStat2: () => getLocalizedSalary(fighter2.salary_range, language),
      statLabel: t.battle.salaryComparison,
      aiWinner: analysis.salaryWinner,
    },
    {
      roundNum: 2,
      title: t.battle.round2Title,
      question: t.battle.round2Question,
      icon: Brain,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      getStat1: () => `${fighter1.entry_difficulty}/10 (${getLocalizedEducationYears(fighter1.education_years, language)})`,
      getStat2: () => `${fighter2.entry_difficulty}/10 (${getLocalizedEducationYears(fighter2.education_years, language)})`,
      statLabel: t.battle.entryDifficulty,
      aiWinner: analysis.difficultyWinner,
    },
    {
      roundNum: 3,
      title: t.battle.round3Title,
      question: t.battle.round3Question,
      icon: ShieldAlert,
      color: 'text-rose-600 bg-rose-50 border-rose-200',
      getStat1: () => `${fighter1.stress_level}/10 ${fighter1.stress_level <= 5 ? `(${t.battle.lowStress})` : ''}`,
      getStat2: () => `${fighter2.stress_level}/10 ${fighter2.stress_level <= 5 ? `(${t.battle.lowStress})` : ''}`,
      statLabel: t.battle.stressLevel,
      aiWinner: analysis.stressWinner,
    },
    {
      roundNum: 4,
      title: t.battle.round4Title,
      question: t.battle.round4Question,
      icon: TrendingUp,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      getStat1: () => `${fighter1.demand_future}% (${t.battle.highDemand})`,
      getStat2: () => `${fighter2.demand_future}% (${t.battle.highDemand})`,
      statLabel: t.battle.demandFuture,
      aiWinner: analysis.demandWinner,
    },
    {
      roundNum: 5,
      title: t.battle.round5Title,
      question: t.battle.round5Question,
      icon: Wifi,
      color: 'text-sky-600 bg-sky-50 border-sky-200',
      getStat1: () => `${(fighter1.remote_potential || 5) * 10}% ${t.battle.remoteFormat}`,
      getStat2: () => `${(fighter2.remote_potential || 5) * 10}% ${t.battle.remoteFormat}`,
      statLabel: t.battle.remoteFormat,
      aiWinner: analysis.remoteWinner,
    }
  ], [t, language, fighter1, fighter2, analysis]);

  // Handle Starting the Interactive 5-round battle
  const startInteractiveBattle = () => {
    setCurrentRound(0);
    setRoundScores([]);
    setBattleState('round');
  };

  // Handle selecting a winner for current round
  const handleSelectRoundWinner = (winner: 1 | 2) => {
    const updated = [...roundScores, winner];
    setRoundScores(updated);
    if (currentRound + 1 < ROUNDS.length) {
      setCurrentRound(currentRound + 1);
    } else {
      setBattleState('result');
    }
  };

  // Handle skipping current round (let AI determine)
  const handleSkipRound = () => {
    const aiWin = ROUNDS[currentRound].aiWinner;
    const resolvedWinner = aiWin === 0 ? 1 : aiWin;
    const updated = [...roundScores, resolvedWinner as 1 | 2];
    setRoundScores(updated);
    if (currentRound + 1 < ROUNDS.length) {
      setCurrentRound(currentRound + 1);
    } else {
      setBattleState('result');
    }
  };

  // Calculate final tournament results
  const p1Wins = roundScores.filter(s => s === 1).length;
  const p2Wins = roundScores.filter(s => s === 2).length;
  const tournamentWinner = p1Wins > p2Wins ? 1 : p2Wins > p1Wins ? 2 : 0;
  const winningProfession = tournamentWinner === 1 ? fighter1 : fighter2;
  const winningLocalizedName = tournamentWinner === 1 ? fighter1LocalizedName : fighter2LocalizedName;
  const winningLocalizedCategory = tournamentWinner === 1 ? fighter1LocalizedCategory : fighter2LocalizedCategory;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8">
      {/* Header Banner */}
      <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-linear-to-r from-amber-500/10 via-indigo-500/10 to-rose-500/10 border border-amber-500/30 text-xs sm:text-sm font-bold text-amber-900 shadow-2xs">
          <Swords className="w-4 h-4 text-amber-600 animate-pulse" />
          <span>{t.battle.badge}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-heading tracking-tight">
          {t.battle.title} <span className="bg-linear-to-r from-amber-600 via-indigo-600 to-rose-600 bg-clip-text text-transparent">Head-to-Head</span>
        </h1>

        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          {t.battle.subtitle}
        </p>

        {/* Mode Switcher Tabs */}
        <div className="flex items-center justify-center gap-2 pt-2">
          <button
            onClick={() => {
              setActiveTab('comparison');
              setBattleState('setup');
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'comparison' && battleState === 'setup'
                ? 'bg-stone-900 text-white shadow-md'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>{t.battle.directComparison}</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('tournament');
              startInteractiveBattle();
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 cursor-pointer ${
              battleState === 'round' || activeTab === 'tournament'
                ? 'bg-linear-to-r from-amber-500 to-rose-600 text-white shadow-md'
                : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200'
            }`}
          >
            <Flame className="w-4 h-4 text-amber-300 animate-bounce" />
            <span>{t.battle.interactiveTournament}</span>
          </button>
        </div>
      </div>

      {/* Interactive 5-Round Battle Screen */}
      {battleState === 'round' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl border-2 border-amber-300 shadow-xl p-5 sm:p-8 space-y-6"
        >
          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs sm:text-sm font-extrabold text-stone-700">
              <span className="flex items-center gap-1.5 text-amber-700 uppercase tracking-wider">
                <Flame className="w-4 h-4 text-amber-600" />
                {t.battle.round} {currentRound + 1} {t.battle.roundOf}
              </span>
              <span className="text-stone-500">
                {ROUNDS[currentRound].title}
              </span>
            </div>
            <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden p-0.5 border border-stone-200">
              <div 
                className="h-full bg-linear-to-r from-amber-500 via-indigo-600 to-rose-500 rounded-full transition-all duration-300"
                style={{ width: `${((currentRound + 1) / ROUNDS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Banner */}
          <div className="text-center py-3 px-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-1">
            <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">
              {ROUNDS[currentRound].title}
            </div>
            <div className="text-base sm:text-xl font-extrabold text-stone-900 font-heading">
              {ROUNDS[currentRound].question}
            </div>
          </div>

          {/* Duel Round Choice Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {/* Fighter 1 Round Card */}
            <div className="bg-white rounded-2xl border-2 border-indigo-200 p-5 sm:p-6 space-y-5 hover:border-indigo-400 transition shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                    {fighter1LocalizedCategory}
                  </span>
                  <span className="text-xs font-bold text-indigo-600">{t.battle.cornerBlue}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-heading">
                  {fighter1LocalizedName}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {getLocalizedBattleText(fighter1.description, language)}
                </p>

                {/* Round Metric Highlight */}
                <div className="p-3.5 rounded-xl bg-indigo-50/60 border border-indigo-100 space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-900">
                    {ROUNDS[currentRound].statLabel}:
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-indigo-950">
                    {ROUNDS[currentRound].getStat1()}
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleSelectRoundWinner(1)}
                className="w-full py-3.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm sm:text-base shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Check className="w-5 h-5" />
                <span>{t.battle.chooseBtn} {fighter1LocalizedName.split(' ')[0]}</span>
              </button>
            </div>

            {/* Fighter 2 Round Card */}
            <div className="bg-white rounded-2xl border-2 border-rose-200 p-5 sm:p-6 space-y-5 hover:border-rose-400 transition shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                    {fighter2LocalizedCategory}
                  </span>
                  <span className="text-xs font-bold text-rose-600">{t.battle.cornerRed}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-heading">
                  {fighter2LocalizedName}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {getLocalizedBattleText(fighter2.description, language)}
                </p>

                {/* Round Metric Highlight */}
                <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-100 space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-rose-900">
                    {ROUNDS[currentRound].statLabel}:
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-rose-950">
                    {ROUNDS[currentRound].getStat2()}
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleSelectRoundWinner(2)}
                className="w-full py-3.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-sm sm:text-base shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Check className="w-5 h-5" />
                <span>{t.battle.chooseBtn} {fighter2LocalizedName.split(' ')[0]}</span>
              </button>
            </div>
          </div>

          {/* Skip / Auto AI Button & Exit */}
          <div className="flex items-center justify-between pt-3 border-t border-stone-100">
            <button
              onClick={() => setBattleState('setup')}
              className="text-xs font-semibold text-stone-500 hover:text-stone-800 transition cursor-pointer"
            >
              ← {t.battle.backToSelect}
            </button>
            <button
              onClick={handleSkipRound}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-stone-600 bg-stone-100 hover:bg-stone-200 transition flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>{t.battle.skipBtn} (AI Verdict)</span>
            </button>
          </div>
        </motion.div>
      )}

      {/* Victory & Results Screen */}
      {battleState === 'result' && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl border-2 border-amber-400 shadow-2xl p-6 sm:p-10 space-y-8"
        >
          {/* Victory Banner */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-amber-500 text-white shadow-xl mb-2 animate-bounce">
              <Trophy className="w-9 h-9" />
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-amber-700">
              {t.battle.congratulations}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-heading">
              {tournamentWinner !== 0 ? (
                <>
                  <span className="text-amber-600">{t.battle.winnerLabel}:</span> {winningLocalizedName}
                </>
              ) : (
                t.battle.drawTitle
              )}
            </h2>
            <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto">
              {tournamentWinner !== 0
                ? `${winningLocalizedName} (${winningLocalizedCategory}) ${language === 'tg' ? 'дар ин даврҳои муқоисавӣ пирӯз шуд' : language === 'en' ? 'won the duel with superior overall scores' : 'одержала победу по сумме раундов'}.`
                : t.battle.drawDesc}
            </p>
          </div>

          {/* Victory Ratio Bar */}
          <div className="bg-stone-50 rounded-2xl p-4 sm:p-6 border border-stone-200 space-y-3">
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-stone-800">
              <span className="text-indigo-700">{fighter1LocalizedName}: {p1Wins} {language === 'tg' ? 'давр' : language === 'en' ? 'rounds' : 'раунда'}</span>
              <span className="text-stone-500 uppercase">{t.battle.winnerRatio}</span>
              <span className="text-rose-700">{fighter2LocalizedName}: {p2Wins} {language === 'tg' ? 'давр' : language === 'en' ? 'rounds' : 'раунда'}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 h-4 rounded-full bg-stone-200 p-0.5 overflow-hidden">
              <div 
                className="h-full bg-indigo-600 rounded-full transition-all"
                style={{ width: `${(p1Wins / 5) * 100}%` }}
              />
              <div 
                className="h-full bg-rose-600 rounded-full transition-all"
                style={{ width: `${(p2Wins / 5) * 100}%` }}
              />
            </div>
          </div>

          {/* Detailed Breakdown Card */}
          <div className="bg-amber-50/60 rounded-2xl p-5 sm:p-7 border border-amber-200 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 font-heading flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              {t.battle.whyWonTitle}
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {analysis.aiVerdictSummary}
            </p>
          </div>

          {/* Results Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={startInteractiveBattle}
              className="px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm sm:text-base shadow-md transition flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t.battle.restartBattle}</span>
            </button>
            <button
              onClick={() => {
                setBattleState('setup');
                setActiveTab('comparison');
              }}
              className="px-5 py-3 rounded-xl bg-stone-900 hover:bg-black text-white font-bold text-sm sm:text-base shadow-md transition flex items-center gap-2 cursor-pointer"
            >
              <BarChart3 className="w-4 h-4" />
              <span>{t.battle.viewDetailedComparison}</span>
            </button>
            {onNavigateToQuiz && (
              <button
                onClick={onNavigateToQuiz}
                className="px-5 py-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-800 border border-indigo-200 font-bold text-sm sm:text-base transition flex items-center gap-2 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                <span>{t.battle.takeQuizCta}</span>
              </button>
            )}
          </div>
        </motion.div>
      )}

      {/* Category Filter Chips & Quick Controls (Shown in Setup/Comparison mode) */}
      {battleState === 'setup' && (
        <div className="space-y-3 bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-600" />
              {t.battle.categoriesLabel || t.battle.categoriesAll}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleSwap}
                className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 transition cursor-pointer"
                title={t.battle.actionSwap}
              >
                <ArrowRightLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t.battle.actionSwap}</span>
              </button>
              <button
                onClick={handleRandom}
                className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 transition cursor-pointer"
                title={t.battle.actionRandom}
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>{t.battle.actionRandom}</span>
              </button>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-stone-50 hover:bg-stone-100 text-stone-600 border border-stone-200 transition cursor-pointer"
                title={t.header?.resetBtn || 'Reset'}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t.header?.resetBtn || 'Reset'}</span>
              </button>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {t.battle.categoriesAll}
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {getLocalizedSector(cat, language)}
              </button>
            ))}
          </div>

          {/* Quick Duel Presets */}
          <div className="pt-2 border-t border-stone-100 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-semibold text-stone-400">
              {t.battle.quickBattlesTitle}
            </span>
            {PRESET_BATTLES.map(p => (
              <button
                key={p.key}
                onClick={() => {
                  handleSelectFighter1(p.id1);
                  handleSelectFighter2(p.id2);
                }}
                className="text-xs px-2.5 py-1 rounded-lg bg-stone-50 hover:bg-indigo-50 hover:text-indigo-700 text-stone-700 border border-stone-200 transition cursor-pointer font-medium"
              >
                {t.battle.presetBattles?.[p.key] || p.fallback}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Two Fighter Selectors Bar (Shown in Setup mode) */}
      {battleState === 'setup' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 relative">
          {/* Fighter 1 Search Input */}
          <div className="relative" ref={dropdownRef1}>
            <label className="block text-xs font-bold uppercase tracking-wider text-indigo-700 mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                {t.battle.fighter1Label} {t.battle.cornerBlue}
              </span>
              <span className="text-[11px] font-normal text-stone-400">{fighter1LocalizedCategory}</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={query1 || fighter1LocalizedName}
                onChange={(e) => {
                  setQuery1(e.target.value);
                  setIsOpen1(true);
                }}
                onFocus={() => {
                  setQuery1('');
                  setIsOpen1(true);
                }}
                placeholder={t.battle.searchFighter1Placeholder}
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-white border-2 border-indigo-200 focus:border-indigo-600 focus:ring-3 focus:ring-indigo-100 text-sm font-semibold text-stone-900 shadow-xs transition"
              />
              <Search className="w-4 h-4 text-indigo-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <button
                type="button"
                onClick={() => setIsOpen1(!isOpen1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 cursor-pointer"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Autocomplete Dropdown 1 */}
            <AnimatePresence>
              {isOpen1 && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute z-30 mt-1.5 w-full bg-white rounded-xl border border-stone-200 shadow-xl max-h-64 overflow-y-auto divide-y divide-stone-100"
                >
                  {searchResults1.length === 0 ? (
                    <div className="p-4 text-xs text-stone-500 text-center">
                      {t.battle.noResults}
                    </div>
                  ) : (
                    searchResults1.map(p => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => handleSelectFighter1(p.id)}
                        className={`w-full text-left px-3.5 py-2.5 hover:bg-indigo-50/80 transition flex items-center justify-between cursor-pointer ${
                          p.id === fighter1Id ? 'bg-indigo-50 font-bold text-indigo-900' : 'text-stone-800'
                        }`}
                      >
                        <div>
                          <div className="text-xs sm:text-sm font-semibold">{getLocalizedProfessionTitle(p.name, language)}</div>
                          <div className="text-[11px] text-stone-500">{getLocalizedSector(p.category, language)}</div>
                        </div>
                        {p.id === fighter1Id && <Check className="w-4 h-4 text-indigo-600" />}
                      </button>
                    ))
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Center VS Float Icon */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-linear-to-r from-indigo-600 to-rose-600 text-white font-extrabold text-xs items-center justify-center shadow-md border-2 border-white pointer-events-none">
            VS
          </div>

          {/* Fighter 2 Search Input */}
          <div className="relative" ref={dropdownRef2}>
            <label className="block text-xs font-bold uppercase tracking-wider text-rose-700 mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                {t.battle.fighter2Label} {t.battle.cornerRed}
              </span>
              <span className="text-[11px] font-normal text-stone-400">{fighter2LocalizedCategory}</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={query2 || fighter2LocalizedName}
                onChange={(e) => {
                  setQuery2(e.target.value);
                  setIsOpen2(true);
                }}
                onFocus={() => {
                  setQuery2('');
                  setIsOpen2(true);
                }}
                placeholder={t.battle.searchFighter2Placeholder}
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-white border-2 border-rose-200 focus:border-rose-600 focus:ring-3 focus:ring-rose-100 text-sm font-semibold text-stone-900 shadow-xs transition"
              />
              <Search className="w-4 h-4 text-rose-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <button
                type="button"
                onClick={() => setIsOpen2(!isOpen2)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 cursor-pointer"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Autocomplete Dropdown 2 */}
            <AnimatePresence>
              {isOpen2 && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute z-30 mt-1.5 w-full bg-white rounded-xl border border-stone-200 shadow-xl max-h-64 overflow-y-auto divide-y divide-stone-100"
                >
                  {searchResults2.length === 0 ? (
                    <div className="p-4 text-xs text-stone-500 text-center">
                      {t.battle.noResults}
                    </div>
                  ) : (
                    searchResults2.map(p => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => handleSelectFighter2(p.id)}
                        className={`w-full text-left px-3.5 py-2.5 hover:bg-rose-50/80 transition flex items-center justify-between cursor-pointer ${
                          p.id === fighter2Id ? 'bg-rose-50 font-bold text-rose-900' : 'text-stone-800'
                        }`}
                      >
                        <div>
                          <div className="text-xs sm:text-sm font-semibold">{getLocalizedProfessionTitle(p.name, language)}</div>
                          <div className="text-[11px] text-stone-500">{getLocalizedSector(p.category, language)}</div>
                        </div>
                        {p.id === fighter2Id && <Check className="w-4 h-4 text-rose-600" />}
                      </button>
                    ))
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Start Tournament Launch CTA Banner (Shown in Setup mode) */}
      {battleState === 'setup' && (
        <div className="rounded-2xl p-5 sm:p-6 bg-linear-to-r from-amber-500/15 via-indigo-500/10 to-rose-500/15 border-2 border-amber-300 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center justify-center sm:justify-start gap-1.5">
              <Flame className="w-4 h-4 text-amber-600" />
              {t.battle.rulesTitle}
            </div>
            <p className="text-xs sm:text-sm text-stone-700 max-w-xl">
              {t.battle.rulesDesc}
            </p>
          </div>
          <button
            onClick={startInteractiveBattle}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-linear-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white font-extrabold text-sm sm:text-base shadow-lg transition flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>{t.battle.startBattle}</span>
          </button>
        </div>
      )}

      {/* Head-to-Head Detailed Analytics View (Shown in Setup/Comparison mode) */}
      {battleState === 'setup' && (
        <div className="space-y-8">
          {/* Head-to-Head Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fighter 1 Card */}
            <div className="bg-white rounded-2xl border-2 border-indigo-100 shadow-sm p-5 sm:p-6 space-y-4 hover:border-indigo-300 transition">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 mb-2">
                    {fighter1LocalizedCategory}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-heading">
                    {fighter1LocalizedName}
                  </h2>
                </div>
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-base flex-shrink-0 shadow-md">
                  01
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed min-h-[40px]">
                {getLocalizedBattleText(fighter1.description, language)}
              </p>

              <div className="p-3.5 rounded-xl bg-indigo-50/50 border border-indigo-100 space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-900 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-indigo-600" />
                    {t.battle.salaryComparison}:
                  </span>
                  {analysis.salaryWinner === 1 && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                      🏆 {t.battle.highSalary}
                    </span>
                  )}
                </div>
                <div className="text-sm sm:text-base font-extrabold text-indigo-950">
                  {getLocalizedSalary(fighter1.salary_range, language)}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 pt-1">
                {fighter1.education_years && (
                  <div className="flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-stone-400 flex-shrink-0" />
                    <span>{getLocalizedEducationYears(fighter1.education_years, language)}</span>
                  </div>
                )}
                {fighter1.remote_potential && fighter1.remote_potential >= 7 && (
                  <div className="flex items-center gap-1 text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded-md">
                    <Wifi className="w-3.5 h-3.5" />
                    <span>{t.battle.remoteFormat}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Fighter 2 Card */}
            <div className="bg-white rounded-2xl border-2 border-rose-100 shadow-sm p-5 sm:p-6 space-y-4 hover:border-rose-300 transition">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-200 mb-2">
                    {fighter2LocalizedCategory}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-heading">
                    {fighter2LocalizedName}
                  </h2>
                </div>
                <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold text-base flex-shrink-0 shadow-md">
                  02
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed min-h-[40px]">
                {getLocalizedBattleText(fighter2.description, language)}
              </p>

              <div className="p-3.5 rounded-xl bg-rose-50/50 border border-rose-100 space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-rose-900 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-rose-600" />
                    {t.battle.salaryComparison}:
                  </span>
                  {analysis.salaryWinner === 2 && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                      🏆 {t.battle.highSalary}
                    </span>
                  )}
                </div>
                <div className="text-sm sm:text-base font-extrabold text-rose-950">
                  {getLocalizedSalary(fighter2.salary_range, language)}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 pt-1">
                {fighter2.education_years && (
                  <div className="flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-stone-400 flex-shrink-0" />
                    <span>{getLocalizedEducationYears(fighter2.education_years, language)}</span>
                  </div>
                )}
                {fighter2.remote_potential && fighter2.remote_potential >= 7 && (
                  <div className="flex items-center gap-1 text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded-md">
                    <Wifi className="w-3.5 h-3.5" />
                    <span>{t.battle.remoteFormat}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Comparative Metrics Progress Matrix (Head-to-Head) */}
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-5 sm:p-7 space-y-6">
            <div className="border-b border-stone-100 pb-3 flex items-center justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-stone-900 font-heading">
                  {t.battle.keyMetricsTitle}
                </h3>
                <p className="text-xs text-stone-500">
                  {t.battle.scoreExplanation}
                </p>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold">
                <span className="flex items-center gap-1 text-indigo-700">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span> {fighter1LocalizedName.split(' ')[0]}
                </span>
                <span className="flex items-center gap-1 text-rose-700">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600"></span> {fighter2LocalizedName.split(' ')[0]}
                </span>
              </div>
            </div>

            {/* Metric 1: Entry Difficulty */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                <span className="flex items-center gap-1.5 text-stone-800">
                  <Brain className="w-4 h-4 text-indigo-600" />
                  {t.battle.entryDifficulty}
                </span>
                <div className="flex items-center gap-4 text-xs font-bold">
                  <span className={analysis.difficultyWinner === 1 ? 'text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200' : 'text-stone-700'}>
                    {fighter1.entry_difficulty}/10 {analysis.difficultyWinner === 1 && `🏆 (${t.battle.easyEntry})`}
                  </span>
                  <span className="text-stone-300">vs</span>
                  <span className={analysis.difficultyWinner === 2 ? 'text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200' : 'text-stone-700'}>
                    {fighter2.entry_difficulty}/10 {analysis.difficultyWinner === 2 && `🏆 (${t.battle.easyEntry})`}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 h-3 rounded-full bg-stone-100 p-0.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${fighter1.entry_difficulty * 10}%` }}
                  transition={{ duration: 0.6 }}
                  className="h-full bg-indigo-500 rounded-full"
                />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${fighter2.entry_difficulty * 10}%` }}
                  transition={{ duration: 0.6 }}
                  className="h-full bg-rose-500 rounded-full"
                />
              </div>
            </div>

            {/* Metric 2: Stress Level */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                <span className="flex items-center gap-1.5 text-stone-800">
                  <ShieldAlert className="w-4 h-4 text-amber-600" />
                  {t.battle.stressLevel}
                </span>
                <div className="flex items-center gap-4 text-xs font-bold">
                  <span className={analysis.stressWinner === 1 ? 'text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200' : 'text-stone-700'}>
                    {fighter1.stress_level}/10 {analysis.stressWinner === 1 && `🏆 (${t.battle.lowStress})`}
                  </span>
                  <span className="text-stone-300">vs</span>
                  <span className={analysis.stressWinner === 2 ? 'text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200' : 'text-stone-700'}>
                    {fighter2.stress_level}/10 {analysis.stressWinner === 2 && `🏆 (${t.battle.lowStress})`}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 h-3 rounded-full bg-stone-100 p-0.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${fighter1.stress_level * 10}%` }}
                  transition={{ duration: 0.6 }}
                  className="h-full bg-indigo-500 rounded-full"
                />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${fighter2.stress_level * 10}%` }}
                  transition={{ duration: 0.6 }}
                  className="h-full bg-rose-500 rounded-full"
                />
              </div>
            </div>

            {/* Metric 3: Future Demand */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                <span className="flex items-center gap-1.5 text-stone-800">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  {t.battle.demandFuture}
                </span>
                <div className="flex items-center gap-4 text-xs font-bold">
                  <span className={analysis.demandWinner === 1 ? 'text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200' : 'text-stone-700'}>
                    {fighter1.demand_future}% {analysis.demandWinner === 1 && `🏆 (${t.battle.highDemand})`}
                  </span>
                  <span className="text-stone-300">vs</span>
                  <span className={analysis.demandWinner === 2 ? 'text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200' : 'text-stone-700'}>
                    {fighter2.demand_future}% {analysis.demandWinner === 2 && `🏆 (${t.battle.highDemand})`}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 h-3 rounded-full bg-stone-100 p-0.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${fighter1.demand_future}%` }}
                  transition={{ duration: 0.6 }}
                  className="h-full bg-emerald-500 rounded-full"
                />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${fighter2.demand_future}%` }}
                  transition={{ duration: 0.6 }}
                  className="h-full bg-emerald-500 rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Deep Dive Pros, Cons and Skills Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Fighter 1 Deep Dive */}
            <div className="bg-white rounded-2xl border border-indigo-200 shadow-sm p-5 sm:p-6 space-y-5">
              <div className="flex items-center gap-2 text-indigo-900 font-extrabold text-base border-b border-stone-100 pb-3">
                <Award className="w-5 h-5 text-indigo-600" />
                <span>{t.battle.deepProfileTitle}: {fighter1LocalizedName}</span>
              </div>

              {/* Pros */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  {t.battle.prosTitle}
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                  {fighter1.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                      <span>{getLocalizedBattleText(pro, language)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="space-y-2 pt-2 border-t border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  {t.battle.consTitle}
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                  {fighter1.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0"></span>
                      <span>{getLocalizedBattleText(con, language)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="space-y-2 pt-2 border-t border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-indigo-600" />
                  {t.battle.skillsTitle}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {fighter1.key_skills.map((skill, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-indigo-50 text-indigo-800 border border-indigo-100">
                      {getLocalizedBattleText(skill, language)}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Fighter 2 Deep Dive */}
            <div className="bg-white rounded-2xl border border-rose-200 shadow-sm p-5 sm:p-6 space-y-5">
              <div className="flex items-center gap-2 text-rose-900 font-extrabold text-base border-b border-stone-100 pb-3">
                <Award className="w-5 h-5 text-rose-600" />
                <span>{t.battle.deepProfileTitle}: {fighter2LocalizedName}</span>
              </div>

              {/* Pros */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  {t.battle.prosTitle}
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                  {fighter2.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                      <span>{getLocalizedBattleText(pro, language)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="space-y-2 pt-2 border-t border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  {t.battle.consTitle}
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                  {fighter2.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0"></span>
                      <span>{getLocalizedBattleText(con, language)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="space-y-2 pt-2 border-t border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-rose-600" />
                  {t.battle.skillsTitle}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {fighter2.key_skills.map((skill, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-rose-50 text-rose-800 border border-rose-100">
                      {getLocalizedBattleText(skill, language)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* AI Summary Verdict Callout */}
          <div className="bg-linear-to-r from-stone-900 via-stone-800 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 space-y-4 shadow-lg">
            <div className="flex items-center gap-2.5 text-amber-300 font-bold text-sm">
              <Sparkles className="w-5 h-5 text-amber-400 animate-spin" />
              <span>{t.battle.aiVerdictTitle}</span>
            </div>

            <p className="text-sm sm:text-base text-stone-200 leading-relaxed max-w-4xl">
              {analysis.aiVerdictSummary}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              {onNavigateToQuiz && (
                <button
                  onClick={onNavigateToQuiz}
                  className="px-4 py-2.5 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-700 text-white font-bold text-xs sm:text-sm shadow-md transition cursor-pointer"
                >
                  {t.battle.actionTakeTest}
                </button>
              )}

              {onNavigateToAssistant && (
                <button
                  onClick={() => onNavigateToAssistant(`${fighter1LocalizedName} vs ${fighter2LocalizedName}`)}
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs sm:text-sm transition cursor-pointer"
                >
                  {t.battle.actionAskAI}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
