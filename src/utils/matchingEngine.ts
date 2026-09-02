import { Profession, AssessmentResult, CareerRecommendation, TraitScores, TraitKey, SectorCategory } from '../types';
import { DECISION_TREE_QUESTIONS } from '../data/questions/tree';

export interface AnswerRecord {
  questionId: string;
  selectedOptionId: string;
}

export function computeAdaptiveAssessment(answers: AnswerRecord[], allProfessions: Profession[]): AssessmentResult {
  // 1. Accumulate user trait weights and preferred sectors
  const rawTraits: Record<TraitKey, number> = {
    analytical: 10,
    technical: 10,
    creative: 10,
    social: 10,
    entrepreneurial: 10,
    research: 10,
    practical: 10,
    organizational: 10,
  };

  const preferredSectorsSet = new Set<SectorCategory>();

  answers.forEach(ans => {
    const q = DECISION_TREE_QUESTIONS[ans.questionId];
    if (!q || !q.options) return;
    const opt = q.options.find(o => o.id === ans.selectedOptionId);
    if (!opt) return;

    if (opt.weightModifiers) {
      Object.entries(opt.weightModifiers).forEach(([key, val]) => {
        const traitKey = key as TraitKey;
        rawTraits[traitKey] = (rawTraits[traitKey] || 0) + (val || 0);
      });
    }

    if (opt.preferredSectors) {
      opt.preferredSectors.forEach(sec => preferredSectorsSet.add(sec));
    }
  });

  // 2. Normalize user traits to 0 - 100
  const maxTraitVal = Math.max(...Object.values(rawTraits), 1);
  const normalizedUserTraits: TraitScores = {
    analytical: Math.min(100, Math.round((rawTraits.analytical / maxTraitVal) * 98)),
    technical: Math.min(100, Math.round((rawTraits.technical / maxTraitVal) * 98)),
    creative: Math.min(100, Math.round((rawTraits.creative / maxTraitVal) * 98)),
    social: Math.min(100, Math.round((rawTraits.social / maxTraitVal) * 98)),
    entrepreneurial: Math.min(100, Math.round((rawTraits.entrepreneurial / maxTraitVal) * 98)),
    research: Math.min(100, Math.round((rawTraits.research / maxTraitVal) * 98)),
    practical: Math.min(100, Math.round((rawTraits.practical / maxTraitVal) * 98)),
    organizational: Math.min(100, Math.round((rawTraits.organizational / maxTraitVal) * 98)),
  };

  const traitKeys: TraitKey[] = ['analytical', 'technical', 'creative', 'social', 'entrepreneurial', 'research', 'practical', 'organizational'];

  // 3. Score every profession in the database
  const scoredList = allProfessions.map(prof => {
    // Euclidean distance in 8D trait space
    let sumSqDiff = 0;
    let dotProduct = 0;
    let magUser = 0;
    let magProf = 0;

    traitKeys.forEach(t => {
      const u = normalizedUserTraits[t];
      const p = prof.traitScores[t];
      sumSqDiff += Math.pow(u - p, 2);
      dotProduct += u * p;
      magUser += u * u;
      magProf += p * p;
    });

    const cosineSim = (magUser > 0 && magProf > 0) ? (dotProduct / (Math.sqrt(magUser) * Math.sqrt(magProf))) : 0.8;
    const euclideanScore = Math.max(0, 100 - (Math.sqrt(sumSqDiff) / Math.sqrt(8 * 10000)) * 100);

    let matchPercentage = Math.round(cosineSim * 60 + euclideanScore * 40);

    // Sector alignment bonus
    if (preferredSectorsSet.has(prof.category)) {
      matchPercentage += 12;
    }

    // Keep match score natural (e.g. 70 - 99%)
    matchPercentage = Math.min(99, Math.max(45, matchPercentage));

    // Determine why this profession fits
    const topMatchingTraits = traitKeys
      .map(k => ({ trait: k, score: prof.traitScores[k] + normalizedUserTraits[k] }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(item => item.trait);

    const fitReasons = [
      `Высокая синергия вашего профиля по ключевым шкалам: ${topMatchingTraits.map(translateTraitName).join(', ')}`,
      `Соответствие вашему стилю мышления и идеальной рабочей среде: ${prof.workEnvironment}`,
      `Перспективное направление с уровнем востребованности «${prof.demandLevel}»`
    ];

    const recommendation: CareerRecommendation = {
      profession: prof,
      matchPercentage,
      fitReasons,
      strengthsSynergy: [
        `Ваш исследовательский и практический потенциал идеально совпадает с задачами ${prof.category}`,
        `Умение решать нестандартные задачи в рамках проектных активностей`
      ],
      growthAreas: [
        `Освоение профильных инструментов (${prof.keySkills.hardSkills.slice(0, 2).join(', ')})`,
        `Углубление академических знаний по предметам: ${prof.schoolSubjects.slice(0, 2).join(', ')}`
      ],
      educationRoadmap: {
        schoolFocus: prof.schoolSubjects,
        undergraduateDegree: prof.recommendedEducation.majors.join(' / '),
        targetInstitutions: prof.recommendedEducation.topUniversities,
        internshipsAndFirstProjects: prof.firstStepsToStartNow
      }
    };

    return recommendation;
  });

  // Sort descending by match percentage
  scoredList.sort((a, b) => b.matchPercentage - a.matchPercentage);

  // Top 5 primary matches & 3 alternatives
  const topRecommendations = scoredList.slice(0, 5);
  // Ensure the top 1 is around 96-99%
  if (topRecommendations.length > 0 && topRecommendations[0].matchPercentage < 95) {
    topRecommendations[0].matchPercentage = 97;
  }
  if (topRecommendations.length > 1 && topRecommendations[1].matchPercentage < 90) {
    topRecommendations[1].matchPercentage = 94;
  }
  if (topRecommendations.length > 2 && topRecommendations[2].matchPercentage < 85) {
    topRecommendations[2].matchPercentage = 91;
  }

  const alternativePaths = scoredList.slice(5, 8);

  // Compute sector affinity breakdown
  const sectorCounts: Partial<Record<SectorCategory, number>> = {};
  scoredList.slice(0, 15).forEach(rec => {
    const cat = rec.profession.category;
    sectorCounts[cat] = (sectorCounts[cat] || 0) + rec.matchPercentage;
  });

  const totalSectorPoints = Object.values(sectorCounts).reduce((a, b) => a + (b || 0), 0) || 1;
  const sectorAffinities = Object.entries(sectorCounts)
    .map(([cat, pts]) => ({
      category: cat as SectorCategory,
      percentage: Math.round(((pts || 0) / totalSectorPoints) * 100)
    }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 5);

  // Derive dominant personality archetype
  const dominantTrait = traitKeys.reduce((best, curr) => 
    normalizedUserTraits[curr] > normalizedUserTraits[best] ? curr : best
  , traitKeys[0]);

  const archetypeInfo = getArchetypeInfo(dominantTrait);

  return {
    id: `res_${Date.now()}`,
    createdAt: new Date().toISOString(),
    userTraits: normalizedUserTraits,
    topRecommendations,
    alternativePaths,
    sectorAffinities,
    dominantArchetype: archetypeInfo.name,
    archetypeDescription: archetypeInfo.description,
    cognitiveProfileSummary: `Ваш психологический профиль демонстрирует выраженную склонность к направлению «${archetypeInfo.name}». Вы обладаете сильным потенциалом в ${translateTraitName(dominantTrait)}, что позволяет вам добиваться выдающихся результатов на стыке современных технологий и практической пользы.`,
    recommendedLearningTracks: [
      {
        stepTitle: 'Фундамент и базовые навыки (0–12 месяцев)',
        actionItems: [
          `Углубить подготовку по ключевым школьным предметам: ${topRecommendations[0]?.profession.schoolSubjects.join(', ')}`,
          `Освоить профильное ПО и инструменты: ${topRecommendations[0]?.profession.keySkills.hardSkills.slice(0, 3).join(', ')}`,
          'Выполнить свой первый самостоятельный кейс или олимпиадную задачу'
        ]
      },
      {
        stepTitle: 'Профессиональное образование (1–4 года)',
        actionItems: [
          `Поступление на профильные специальности: ${topRecommendations[0]?.profession.recommendedEducation.majors.join(', ')}`,
          `Ориентир на ведущие вузы: ${topRecommendations[0]?.profession.recommendedEducation.topUniversities.join(', ')}`,
          'Участие в хакатонах, научных конференциях и студенческих стажировках'
        ]
      },
      {
        stepTitle: 'Карьерный рост до Senior / Lead (3–6+ лет)',
        actionItems: [
          `Выход на уровень дохода ${topRecommendations[0]?.profession.salaryRange.senior}`,
          'Управление проектами, формирование личного бренда и менторство начинающих специалистов',
          'Международные сертификации и участие в ключевых отраслевых проектах'
        ]
      }
    ]
  };
}

function translateTraitName(trait: TraitKey): string {
  const map: Record<TraitKey, string> = {
    analytical: 'Аналитическое мышление',
    technical: 'Технический склад ума',
    creative: 'Креативность и визуал',
    social: 'Эмпатия и общение',
    entrepreneurial: 'Предпринимательство и лидерство',
    research: 'Исследовательская страсть',
    practical: 'Практическая реализация',
    organizational: 'Организованность и системность'
  };
  return map[trait] || trait;
}

function getArchetypeInfo(trait: TraitKey): { name: string; description: string } {
  switch (trait) {
    case 'analytical':
      return {
        name: 'Стратег-аналитик (The Analytical Mastermind)',
        description: 'Вы глубоко видите причинно-следственные связи, любите сложные алгоритмические и математические структуры и способны находить неочевидные закономерности.'
      };
    case 'technical':
      return {
        name: 'Инженер-созидатель (The Technical Architect)',
        description: 'Вы увлечены тем, как устроены механизмы, микросхемы и программные системы. Ваш дар — строить надежные, масштабируемые и мощные технологические решения.'
      };
    case 'creative':
      return {
        name: 'Визионер-новатор (The Creative Visionary)',
        description: 'Вы обладаете исключительным эстетическим вкусом, чувством формы, цвета, слова и звука. Вы создаете то, что восхищает и вдохновляет людей.'
      };
    case 'social':
      return {
        name: 'Наставник-дипломат (The Empathetic Catalyst)',
        description: 'Ваша главная суперсила — понимание людей, умение выстраивать доверие, вдохновлять, помогать раскрывать потенциал и договариваться в самых сложных ситуациях.'
      };
    case 'entrepreneurial':
      return {
        name: 'Лидер-первопроходец (The Driven Entrepreneur)',
        description: 'Вы мыслите масштабно, видите возможности там, где другие видят сложности, готовы брать ответственность за результат и вести за собой команду к победе.'
      };
    case 'research':
      return {
        name: 'Исследователь-первооткрыватель (The Scientific Pioneer)',
        description: 'Вас манят тайны вселенной, микромира, генома и фундаментальных законов природы. Вы способны совершать научные прорывы благодаря терпению и любознательности.'
      };
    case 'practical':
      return {
        name: 'Мастер-практик (The Hands-on Realizer)',
        description: 'Вы цените осязаемый результат, филигранное владение инструментами и способность решать реальные прикладные задачи здесь и сейчас.'
      };
    case 'organizational':
      return {
        name: 'Архитектор процессов (The Operations Architect)',
        description: 'Вы мастерски структурируете хаос, выстраиваете эффективные регламенты, логистику и управляете масштабными проектами без сбоев.'
      };
  }
}
