import { useMemo, useState, useEffect } from 'react';
import { BattleProfession } from '../types';
import { Language } from '../i18n/types';
import { getLocalizedProfessionTitle, getLocalizedSector } from '../i18n/assessmentLocalization';

export interface BattleMetricComparison {
  fighter1Score: number;
  fighter2Score: number;
  fighter1Wins: boolean;
  fighter2Wins: boolean;
  isDraw: boolean;
  metricLabel: string;
  unit: string;
  higherIsBetter: boolean;
}

export interface BattleAnalysis {
  fighter1: BattleProfession;
  fighter2: BattleProfession;
  salaryWinner: 1 | 2 | 0;
  difficultyWinner: 1 | 2 | 0; // lower entry difficulty = easier to start
  stressWinner: 1 | 2 | 0;     // lower stress = healthier work environment
  demandWinner: 1 | 2 | 0;     // higher demand = more secure future
  remoteWinner: 1 | 2 | 0;     // higher remote potential = more flexibility
  overallScore1: number;
  overallScore2: number;
  aiVerdictSummary: string;
}

/**
 * Normalizes user search input by stripping punctuation and lowercasing
 */
function normalizeQuery(str: string): string {
  return (str || '')
    .toLowerCase()
    .trim()
    .replace(/[ё]/g, 'е')
    .replace(/[^a-zа-я0-9\sқҳҷӣғў]/gi, '');
}

/**
 * Custom hook providing optimized search, autocomplete indexing,
 * category filtering, head-to-head calculations and robust fallback handling
 * for a 300+ professions database.
 */
export function useProfessionBattle(
  dataset: BattleProfession[],
  initialFighter1Id?: string,
  initialFighter2Id?: string,
  lang: Language = 'ru'
) {
  // Current active selections
  const [fighter1Id, setFighter1Id] = useState<string>(
    initialFighter1Id || dataset[0]?.id || 'frontend_dev'
  );
  const [fighter2Id, setFighter2Id] = useState<string>(
    initialFighter2Id || dataset[1]?.id || 'data_scientist'
  );

  // Search queries for both sides
  const [query1, setQuery1] = useState<string>('');
  const [query2, setQuery2] = useState<string>('');

  // Dropdown open states
  const [isOpen1, setIsOpen1] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);

  // Category filter
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Debounced search terms for buttery-smooth UI performance under large datasets
  const [debouncedQuery1, setDebouncedQuery1] = useState(query1);
  const [debouncedQuery2, setDebouncedQuery2] = useState(query2);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery1(query1), 120);
    return () => clearTimeout(handler);
  }, [query1]);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery2(query2), 120);
    return () => clearTimeout(handler);
  }, [query2]);

  // Extract all distinct categories from dataset
  const categories = useMemo(() => {
    const set = new Set<string>();
    dataset.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return Array.from(set);
  }, [dataset]);

  // Quick lookup dictionary (id -> BattleProfession) for O(1) retrieval
  const professionMap = useMemo(() => {
    const map = new Map<string, BattleProfession>();
    dataset.forEach((p) => map.set(p.id, p));
    return map;
  }, [dataset]);

  // Active fighter 1 object with fallback safety
  const fighter1: BattleProfession = useMemo(() => {
    return (
      professionMap.get(fighter1Id) ||
      dataset[0] || {
        id: 'fallback_1',
        name: 'Специальность 1',
        category: 'Общая категория',
        salary_range: { min: 5000, max: 15000, display: '5 000 — 15 000 TJS', currency: 'TJS' },
        entry_difficulty: 5,
        stress_level: 5,
        demand_future: 85,
        demand_future_text: 'Высокая (85%)',
        pros: ['Широкие возможности'],
        cons: ['Требует практики'],
        key_skills: ['Аналитика', 'Коммуникация'],
      }
    );
  }, [professionMap, fighter1Id, dataset]);

  // Active fighter 2 object with fallback safety
  const fighter2: BattleProfession = useMemo(() => {
    return (
      professionMap.get(fighter2Id) ||
      dataset[1] ||
      dataset[0] || {
        id: 'fallback_2',
        name: 'Специальность 2',
        category: 'Общая категория',
        salary_range: { min: 6000, max: 18000, display: '6 000 — 18 000 TJS', currency: 'TJS' },
        entry_difficulty: 6,
        stress_level: 6,
        demand_future: 90,
        demand_future_text: 'Высокая (90%)',
        pros: ['Современные технологии'],
        cons: ['Конкуренция'],
        key_skills: ['Критическое мышление', 'Командная работа'],
      }
    );
  }, [professionMap, fighter2Id, dataset]);

  // Helper filter function supporting multilingual searching
  const filterProfessions = (queryStr: string) => {
    const nq = normalizeQuery(queryStr);
    return dataset.filter((p) => {
      // Category filter match
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }
      if (!nq) return true;

      const nameRu = normalizeQuery(p.name);
      const nameLocalized = normalizeQuery(getLocalizedProfessionTitle(p.name, lang));
      const catRu = normalizeQuery(p.category);
      const catLocalized = normalizeQuery(getLocalizedSector(p.category, lang));
      const skillsNorm = p.key_skills ? normalizeQuery(p.key_skills.join(' ')) : '';
      const descNorm = p.description ? normalizeQuery(p.description) : '';

      return (
        nameRu.includes(nq) ||
        nameLocalized.includes(nq) ||
        catRu.includes(nq) ||
        catLocalized.includes(nq) ||
        skillsNorm.includes(nq) ||
        descNorm.includes(nq)
      );
    });
  };

  // Optimized search filter for Fighter 1
  const searchResults1 = useMemo(() => {
    return filterProfessions(debouncedQuery1);
  }, [dataset, debouncedQuery1, selectedCategory, lang]);

  // Optimized search filter for Fighter 2
  const searchResults2 = useMemo(() => {
    return filterProfessions(debouncedQuery2);
  }, [dataset, debouncedQuery2, selectedCategory, lang]);

  // Head-to-Head Comparative Metric Computations
  const analysis: BattleAnalysis = useMemo(() => {
    const salaryMax1 =
      typeof fighter1.salary_range === 'object' ? fighter1.salary_range.max : 10000;
    const salaryMax2 =
      typeof fighter2.salary_range === 'object' ? fighter2.salary_range.max : 10000;
    const salaryWinner = salaryMax1 > salaryMax2 ? 1 : salaryMax1 < salaryMax2 ? 2 : 0;

    // Difficulty: lower is easier (winner)
    const difficultyWinner =
      fighter1.entry_difficulty < fighter2.entry_difficulty
        ? 1
        : fighter1.entry_difficulty > fighter2.entry_difficulty
        ? 2
        : 0;

    // Stress: lower is less stressful (winner)
    const stressWinner =
      fighter1.stress_level < fighter2.stress_level
        ? 1
        : fighter1.stress_level > fighter2.stress_level
        ? 2
        : 0;

    // Demand: higher percentage is better
    const demandWinner =
      fighter1.demand_future > fighter2.demand_future
        ? 1
        : fighter1.demand_future < fighter2.demand_future
        ? 2
        : 0;

    // Remote potential
    const remote1 = fighter1.remote_potential || 5;
    const remote2 = fighter2.remote_potential || 5;
    const remoteWinner = remote1 > remote2 ? 1 : remote1 < remote2 ? 2 : 0;

    // Composite balanced score calculation (0 to 100)
    // Formula: Salary weight (25%) + Demand weight (35%) + Low Stress (20%) + Low Difficulty (20%)
    const score1 = Math.round(
      (Math.min(salaryMax1, 40000) / 40000) * 25 +
        (fighter1.demand_future / 100) * 35 +
        ((11 - fighter1.stress_level) / 10) * 20 +
        ((11 - fighter1.entry_difficulty) / 10) * 20
    );

    const score2 = Math.round(
      (Math.min(salaryMax2, 40000) / 40000) * 25 +
        (fighter2.demand_future / 100) * 35 +
        ((11 - fighter2.stress_level) / 10) * 20 +
        ((11 - fighter2.entry_difficulty) / 10) * 20
    );

    // AI summary synthesis based on active language
    const name1 = getLocalizedProfessionTitle(fighter1.name, lang);
    const name2 = getLocalizedProfessionTitle(fighter2.name, lang);

    let summary = '';
    if (fighter1.id === fighter2.id) {
      if (lang === 'en') {
        summary = `You have selected the same profession (${name1}). Please choose a different specialty for the second slot to view the comparative metrics duel.`;
      } else if (lang === 'tg') {
        summary = `Шумо як ихтисосро интихоб намудед (${name1}). Барои дидани муқоисаи нишондиҳандаҳо касби дигарро барои ҷои дуюм интихоб кунед.`;
      } else {
        summary = `Вы выбрали одну и ту же профессию (${name1}). Выберите другую специальность для второго слота, чтобы увидеть детальную дуэль метрик.`;
      }
    } else {
      const easyP = difficultyWinner === 1 ? name1 : difficultyWinner === 2 ? name2 : null;
      const salaryP = salaryWinner === 1 ? name1 : salaryWinner === 2 ? name2 : null;

      if (lang === 'en') {
        summary = `In this comparison, ${
          easyP ? `«${easyP}» stands out with a more accessible entry barrier and learning curve, ` : ''
        }${
          salaryP ? `while «${salaryP}» leads in ceiling earning potential in the market.` : ''
        } Both specialties demonstrate strong market demand through 2030+ and offer outstanding long-term career horizons.`;
      } else if (lang === 'tg') {
        summary = `Дар ин муқоиса, ${
          easyP ? `«${easyP}» бо сатҳи дастрастари оғози омӯзиш фарқ мекунад, ` : ''
        }${
          salaryP ? `дар ҳоле ки «${salaryP}» аз рӯи ҳадди ниҳоии даромад дар бозор пешсаф аст.` : ''
        } Ҳарду касб дорои талаботи устувор то соли 2030+ буда, дурнамои олии рушди касбиро пешкаш мекунанд.`;
      } else {
        summary = `В этом сравнении ${easyP ? `«${easyP}» отличается более доступным порогом входа, ` : ''}${
          salaryP ? `тогда как «${salaryP}» лидирует по максимальной планке доходов на рынке.` : ''
        } Обе специальности имеют высокий спрос до 2030+ года и открывают отличные карьерные горизонты.`;
      }
    }

    return {
      fighter1,
      fighter2,
      salaryWinner,
      difficultyWinner,
      stressWinner,
      demandWinner,
      remoteWinner,
      overallScore1: score1,
      overallScore2: score2,
      aiVerdictSummary: summary,
    };
  }, [fighter1, fighter2, lang]);

  // Actions
  const handleSelectFighter1 = (id: string) => {
    setFighter1Id(id);
    setQuery1('');
    setIsOpen1(false);
  };

  const handleSelectFighter2 = (id: string) => {
    setFighter2Id(id);
    setQuery2('');
    setIsOpen2(false);
  };

  const handleSwap = () => {
    const temp = fighter1Id;
    setFighter1Id(fighter2Id);
    setFighter2Id(temp);
  };

  const handleRandom = () => {
    if (dataset.length < 2) return;
    const idx1 = Math.floor(Math.random() * dataset.length);
    let idx2 = Math.floor(Math.random() * dataset.length);
    while (idx2 === idx1 && dataset.length > 1) {
      idx2 = Math.floor(Math.random() * dataset.length);
    }
    setFighter1Id(dataset[idx1].id);
    setFighter2Id(dataset[idx2].id);
  };

  const handleReset = () => {
    if (dataset.length >= 2) {
      setFighter1Id(dataset[0].id);
      setFighter2Id(dataset[1].id);
    }
    setQuery1('');
    setQuery2('');
    setSelectedCategory('all');
    setIsOpen1(false);
    setIsOpen2(false);
  };

  return {
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
  };
}
