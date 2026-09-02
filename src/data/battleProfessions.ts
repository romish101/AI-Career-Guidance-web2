import { BattleProfession, Profession } from '../types';
import { ALL_PROFESSIONS } from './professions';
import { EXTENDED_BATTLE_PROFESSIONS_PART1 } from './professions/catalog_expanded';
import { EXTENDED_BATTLE_PROFESSIONS_PART2 } from './professions/catalog_expanded_part2';
import { EXTENDED_BATTLE_PROFESSIONS_PART3 } from './professions/catalog_expanded_part3';
import { EXTENDED_BATTLE_PROFESSIONS_PART4 } from './professions/catalog_expanded_part4';
import { EXTENDED_BATTLE_PROFESSIONS_PART5 } from './professions/catalog_expanded_part5';
import { EXTENDED_BATTLE_PROFESSIONS_PART6 } from './professions/catalog_expanded_part6';
import { EXTENDED_BATTLE_PROFESSIONS_PART7 } from './professions/catalog_expanded_part7';

/**
 * Extracts numeric values from salary strings like "90 000 – 140 000 ₽"
 */
function extractSalaryNumbers(salaryStr: string): { min: number; max: number } {
  if (!salaryStr) return { min: 80000, max: 250000 };
  const numbers = salaryStr.replace(/\s+/g, '').match(/\d+/g);
  if (!numbers || numbers.length === 0) return { min: 80000, max: 250000 };
  
  const parsed = numbers.map(n => parseInt(n, 10)).filter(n => !isNaN(n) && n > 1000);
  if (parsed.length === 0) return { min: 80000, max: 250000 };
  if (parsed.length === 1) return { min: parsed[0] * 0.6, max: parsed[0] };
  return { min: Math.min(...parsed), max: Math.max(...parsed) };
}

/**
 * Calculates difficulty (1-10) based on cognitive & educational demands
 */
function calculateDifficulty(prof: Profession): number {
  const years = prof.recommendedEducation?.estimatedYears || '';
  const isMed = prof.category.includes('Медицина') || prof.category.includes('Хирургия');
  const isHardScience = prof.category.includes('Наука') || prof.category.includes('Квант') || prof.category.includes('Искусственный интеллект');
  
  if (years.includes('8') || years.includes('10') || isMed) return 9;
  if (isHardScience || (prof.traitScores?.analytical && prof.traitScores.analytical > 92)) return 9;
  if (prof.traitScores?.technical && prof.traitScores.technical > 90) return 8;
  if (years.includes('5') || years.includes('6')) return 7;
  if (prof.traitScores?.creative && prof.traitScores.creative > 90) return 6;
  return 6;
}

/**
 * Calculates stress level (1-10) based on industry, work environment & life-safety responsibility
 */
function calculateStress(prof: Profession): number {
  const cat = prof.category;
  const env = prof.workEnvironment;
  
  if (cat.includes('Медицина') || env.includes('Клиника') || cat.includes('Авиация') || prof.id.includes('surgeon') || prof.id.includes('pilot')) {
    return 9;
  }
  if (cat.includes('Кибербезопасность') || cat.includes('Управление') || cat.includes('Финансы') || prof.id.includes('crisis') || prof.id.includes('director')) {
    return 8;
  }
  if (cat.includes('IT') || cat.includes('Инженерия') || cat.includes('Производство')) {
    return 6;
  }
  if (cat.includes('Дизайн') || cat.includes('Искусство') || cat.includes('Научные исследования')) {
    return 5;
  }
  return 6;
}

/**
 * Calculates remote work potential (1-10)
 */
function calculateRemotePotential(prof: Profession): number {
  const remote = prof.remoteFeasibility || '';
  if (remote.includes('100%') || remote.includes('Полностью удалённо')) return 10;
  if (remote.includes('Гибрид')) return 7;
  if (remote.includes('Преимущественно')) return 4;
  return 1;
}

/**
 * Converts a standard master Profession into a BattleProfession
 */
export function convertToBattleProfession(prof: Profession): BattleProfession {
  const salJunior = extractSalaryNumbers(prof.salaryRange?.junior || '');
  const salSenior = extractSalaryNumbers(prof.salaryRange?.senior || '');
  const salMiddle = extractSalaryNumbers(prof.salaryRange?.middle || '');
  
  const minSal = salJunior.min || salMiddle.min || 70000;
  const maxSal = salSenior.max || salMiddle.max || 300000;

  const displaySal = prof.salaryRange?.junior && prof.salaryRange?.senior
    ? `${prof.salaryRange.junior.split('–')[0]?.trim()} – ${prof.salaryRange.senior.split('–')[1]?.trim() || prof.salaryRange.senior}`
    : `${minSal.toLocaleString('ru-RU')} – ${maxSal.toLocaleString('ru-RU')} ₽`;

  const demandScore = prof.demandLevel === 'Очень высокий' ? 95 : prof.demandLevel === 'Высокий' ? 88 : 80;

  // Derive realistic pros
  const pros: string[] = [];
  if (prof.careerOutlook) pros.push(prof.careerOutlook);
  if (prof.salaryRange?.senior) pros.push(`Высокий потенциал роста доходов (до ${prof.salaryRange.senior})`);
  if (prof.dailyTasks && prof.dailyTasks[0]) pros.push(prof.dailyTasks[0]);
  if (prof.remoteFeasibility?.includes('100%')) pros.push('Возможность 100% удаленной работы из любой точки мира');
  else if (prof.remoteFeasibility?.includes('Гибрид')) pros.push('Гибкий гибридный график работы');

  if (pros.length < 3 && prof.matchingInterests && prof.matchingInterests.length > 0) {
    pros.push(`Широкие возможности для реализации в сфере «${prof.matchingInterests[0]}»`);
  }

  // Derive realistic cons
  const cons: string[] = [];
  const diff = calculateDifficulty(prof);
  const stress = calculateStress(prof);
  const remote = calculateRemotePotential(prof);

  if (stress >= 8) {
    cons.push('Высокий уровень психологического напряжения и ответственности');
  }
  if (diff >= 8) {
    cons.push(`Длительный и сложный период фундаментального обучения (${prof.recommendedEducation?.estimatedYears || '5+ лет'})`);
  }
  if (remote <= 2) {
    cons.push('Требуется регулярное очное присутствие на рабочем месте или объекте');
  }
  if (prof.category.includes('IT') || prof.category.includes('Инженерия')) {
    cons.push('Необходимость непрерывно изучать новые технологии и обновлять стек знаний');
  }
  if (cons.length < 2) {
    cons.push('Высокая конкуренция на этапе старта карьеры (Junior уровень)');
  }

  const allSkills = [
    ...(prof.keySkills?.hardSkills || []),
    ...(prof.keySkills?.softSkills || [])
  ];

  return {
    id: prof.id,
    name: prof.title,
    category: prof.category,
    salary_range: {
      min: minSal,
      max: maxSal,
      display: displaySal,
      currency: 'RUB'
    },
    entry_difficulty: diff,
    stress_level: stress,
    demand_future: demandScore,
    demand_future_text: `${prof.demandLevel || 'Высокая'} (${demandScore}%)`,
    remote_potential: remote,
    education_years: prof.recommendedEducation?.estimatedYears || '4–5 лет',
    pros: pros.slice(0, 4),
    cons: cons.slice(0, 3),
    key_skills: allSkills.slice(0, 5),
    description: prof.shortDescription || `Специалист в области «${prof.category}», решающий современные прикладные и технологические задачи.`,
    icon: prof.iconName
  };
}

/**
 * Builds the aggregated master dataset of 200+ battle professions
 */
function buildAllBattleProfessions(): BattleProfession[] {
  const map = new Map<string, BattleProfession>();

  // 1. Add converted core professions
  ALL_PROFESSIONS.forEach(p => {
    const battleP = convertToBattleProfession(p);
    map.set(battleP.id, battleP);
  });

  // 2. Add Part 1 (IT, AI, Cloud, Cybersec)
  EXTENDED_BATTLE_PROFESSIONS_PART1.forEach(p => {
    map.set(p.id, p);
  });

  // 3. Add Part 2 (Medicine, Robotics, Finance, Management, Arts, Law)
  EXTENDED_BATTLE_PROFESSIONS_PART2.forEach(p => {
    map.set(p.id, p);
  });

  // 4. Add Part 3 (Systems Dev, Specialized Surgery, Science, Media)
  EXTENDED_BATTLE_PROFESSIONS_PART3.forEach(p => {
    map.set(p.id, p);
  });

  // 5. Add Part 4 (Agritech, Space, Quant Finance, Virtual Production, BCI)
  EXTENDED_BATTLE_PROFESSIONS_PART4.forEach(p => {
    map.set(p.id, p);
  });

  // 6. Add Part 5 (Heavy Engineering, Materials Science, Energy, Linguistics, Ethics)
  EXTENDED_BATTLE_PROFESSIONS_PART5.forEach(p => {
    map.set(p.id, p);
  });

  // 7. Add Part 6 (Maritime, Rail, Perfumery, 3D Metal, Esports, ABA, Disaster Relief)
  EXTENDED_BATTLE_PROFESSIONS_PART6.forEach(p => {
    map.set(p.id, p);
  });

  // 8. Add Part 7 (SRE, Golang, Big Data, Orthopedics, Restoration, IR, Climate)
  EXTENDED_BATTLE_PROFESSIONS_PART7.forEach(p => {
    map.set(p.id, p);
  });

  return Array.from(map.values());
}

/**
 * Master collection of 200+ Battle Professions
 */
export const ALL_BATTLE_PROFESSIONS: BattleProfession[] = buildAllBattleProfessions();

/**
 * Fast lookup map for O(1) retrieval by profession ID
 */
export const BATTLE_PROFESSIONS_MAP: Map<string, BattleProfession> = new Map(
  ALL_BATTLE_PROFESSIONS.map(p => [p.id, p])
);

/**
 * Returns a battle profession by ID with safe fallback
 */
export function getBattleProfessionById(id: string): BattleProfession {
  return BATTLE_PROFESSIONS_MAP.get(id) || ALL_BATTLE_PROFESSIONS[0];
}

/**
 * Returns a random pair of distinct battle professions
 */
export function getRandomBattlePair(): [BattleProfession, BattleProfession] {
  if (ALL_BATTLE_PROFESSIONS.length < 2) {
    return [ALL_BATTLE_PROFESSIONS[0], ALL_BATTLE_PROFESSIONS[0]];
  }
  const idx1 = Math.floor(Math.random() * ALL_BATTLE_PROFESSIONS.length);
  let idx2 = Math.floor(Math.random() * ALL_BATTLE_PROFESSIONS.length);
  while (idx2 === idx1) {
    idx2 = Math.floor(Math.random() * ALL_BATTLE_PROFESSIONS.length);
  }
  return [ALL_BATTLE_PROFESSIONS[idx1], ALL_BATTLE_PROFESSIONS[idx2]];
}
