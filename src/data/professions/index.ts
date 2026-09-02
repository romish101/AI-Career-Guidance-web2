import { Profession, SectorCategory, ThinkingType, WorkEnvironment, RemoteFeasibility } from '../../types';
import { TECH_PROFESSIONS } from './tech';
import { ENGINEERING_SCIENCE_PROFESSIONS } from './engineering_science';
import { BIO_MED_PROFESSIONS } from './bio_med';
import { BUSINESS_ECON_PROFESSIONS } from './business_econ';
import { CREATIVE_ARTS_PROFESSIONS } from './creative_arts';
import { HUMANITIES_SOCIAL_PROFESSIONS } from './humanities_social';
import { EMERGING_RESEARCH_PROFESSIONS } from './emerging_research';
import { generateAllCatalogProfessions } from './catalog';

// Additional specialized sectors to ensure comprehensive 260+ catalog coverage across all 38 sectors
const SPECIALIZED_EXTRA_PROFESSIONS: Array<{
  id: string;
  title: string;
  category: SectorCategory;
  shortDescription: string;
  dailyTasks: string[];
  hardSkills: string[];
  softSkills: string[];
  interests: string[];
  thinkingType: ThinkingType;
  workEnvironment: WorkEnvironment;
  schoolSubjects: string[];
  universityMajors: string[];
  topUnis: string[];
  salaryRange: { junior: string; middle: string; senior: string };
  remoteFeasibility: RemoteFeasibility;
  iconName: string;
  badge: string;
  traitScores: {
    analytical: number;
    technical: number;
    creative: number;
    social: number;
    entrepreneurial: number;
    research: number;
    practical: number;
    organizational: number;
  };
}> = [
  // 1. Telecom & Networks
  {
    id: '5g-telecom-network-architect',
    title: '5G/6G Telecom & Core Network Architect (Архитектор сетей 5G/6G и телекоммуникаций)',
    category: 'Телекоммуникации',
    shortDescription: 'Проектирует инфраструктуру сверхскоростной мобильной связи 5G, спутниковые группировки связи и оптоволоконные магистрали.',
    dailyTasks: [
      'Расчет покрытия и емкости базовых станций 5G/6G',
      'Проектирование ядра сети (Core Network, NFV, SDN)',
      'Интеграция систем ультранизкой задержки для беспилотного транспорта (URLLC)',
      'Оптимизация маршрутизации терабитных магистральных каналов'
    ],
    hardSkills: ['Сетевые протоколы (BGP, OSPF, MPLS, SIP)', '5G NR / Open RAN', 'Сетевая виртуализация (SDN / NFV)', 'Cisco / Huawei CCNP/CCIE', 'Радиочастотный спектральный анализ'],
    softSkills: ['Системная надежность', 'Умение работать в режиме 24/7 критической инфраструктуры'],
    interests: ['5G и спутниковая связь', 'Сетевые протоколы', 'Оптоволокно', 'Радиофизика'],
    thinkingType: 'Системное и архитектурное',
    workEnvironment: 'Офис / Удалённо (Digital)',
    schoolSubjects: ['Физика (электромагнетизм и оптика)', 'Информатика', 'Алгебра'],
    universityMajors: ['11.03.02 Инфокоммуникационные технологии и системы связи'],
    topUnis: ['МТУСИ', 'СПбГУТ им. Бонч-Бруевича', 'МФТИ', 'МИРЭА'],
    salaryRange: { junior: '85 000 – 135 000 ₽', middle: '180 000 – 320 000 ₽', senior: '350 000 – 650 000 ₽' },
    remoteFeasibility: 'Гибридный формат',
    iconName: 'Radio',
    badge: 'Связь без задержек',
    traitScores: { analytical: 92, technical: 98, creative: 60, social: 55, entrepreneurial: 65, research: 82, practical: 94, organizational: 88 }
  },

  // 2. Tourism & Hospitality
  {
    id: 'luxury-tourism-experience-director',
    title: 'Luxury Tourism & Expeditions Experience Director (Директор премиального туризма и экспедиций)',
    category: 'Туризм и гостеприимство',
    shortDescription: 'Разрабатывает уникальные экспедиции в Антарктиду, на Камчатку, сафари и управляет люксовыми курортными комплексами.',
    dailyTasks: [
      'Создание авторских экспедиционных маршрутов в труднодоступные уголки планеты',
      'Организация VIP-логистики (частная авиация, яхты, вертолетные заброски)',
      'Управление сервисом 5-звездочных отелей и спа-курортов мирового уровня',
      'Контроль безопасности и экологических стандартов в заповедных зонах'
    ],
    hardSkills: ['Международный гостиничный менеджмент (Cornell/Glion стандарты)', 'Экспедиционная безопасность и логистика', 'Revenue Management отелей', 'Свободный английский + второй язык'],
    softSkills: ['Безупречное гостеприимство и такт', 'Антикризисная находчивость', 'Страсть к открытиям и культуре'],
    interests: ['Путешествия по миру', 'Премиальный сервис', 'Экспедиции и природа', 'Иностранные языки'],
    thinkingType: 'Эмпатическое и эмоциональное',
    workEnvironment: 'Отель / Курорт / Природа',
    schoolSubjects: ['География', 'Иностранные языки', 'История', 'Обществознание'],
    universityMajors: ['43.03.02 Туризм', '43.03.03 Гостиничное дело'],
    topUnis: ['ВШЭ', 'МГУ', 'МГИМО', 'СПбГЭУ'],
    salaryRange: { junior: '75 000 – 120 000 ₽', middle: '160 000 – 300 000 ₽', senior: '320 000 – 700 000 ₽' },
    remoteFeasibility: 'Только очно',
    iconName: 'MapPin',
    badge: 'Первооткрыватель мира',
    traitScores: { analytical: 75, technical: 50, creative: 90, social: 98, entrepreneurial: 90, research: 75, practical: 92, organizational: 98 }
  },

  // 3. Sports & High Performance Fitness
  {
    id: 'sports-performance-biomechanist',
    title: 'High-Performance Sports Biomechanist & Conditioning Coach (Спортивный биомеханик / Тренер олимпийского резерва)',
    category: 'Спорт и фитнес',
    shortDescription: 'Оптимизирует технику движений олимпийцев, предотвращает травмы и строит научные программы подготовки чемпионов.',
    dailyTasks: [
      '3D-анализ биомеханики бега, прыжков и ударов на оптических датчиках Vicon',
      'Контроль физиологических маркеров утомления (лактат, ЧСС, вариабельность ритма HRV)',
      'Разработка персонализированных протоколов восстановления и силовой подготовки',
      'Сотрудничество со спортивными врачами и нутрициологами'
    ],
    hardSkills: ['Спортивная биомеханика и физиология', 'Анализ датчиков движения (IMU, Optical Motion Capture)', 'Спортивная нутрициология и фармаконутриенты', 'Силовая подготовка (CSCS / NSCA сертификация)'],
    softSkills: ['Вдохновляющая мотивация', 'Психология победы', 'Научная дисциплина'],
    interests: ['Спорт высших достижений', 'Биомеханика', 'Анатомия движения', 'Тренировочные технологии'],
    thinkingType: 'Практическое и прикладное',
    workEnvironment: 'Спортивная арена / Стадион',
    schoolSubjects: ['Биология (анатомия и физиология)', 'Физика (механика)', 'Физкультура'],
    universityMajors: ['49.03.01 Физическая культура', '49.03.02 Физическая культура для лиц с отклонениями (АФК)'],
    topUnis: ['РГУФКСМиТ (ГЦОЛИФК)', 'НГУ им. Лесгафта', 'МГУ'],
    salaryRange: { junior: '70 000 – 120 000 ₽', middle: '160 000 – 320 000 ₽', senior: '350 000 – 800 000+ ₽ (в топ-клубах КХЛ/РПЛ/НБА)' },
    remoteFeasibility: 'Только очно',
    iconName: 'Trophy',
    badge: 'Кузница чемпионов',
    traitScores: { analytical: 88, technical: 82, creative: 70, social: 92, entrepreneurial: 75, research: 85, practical: 100, organizational: 88 }
  },

  // 4. Public Service & Urban Policy
  {
    id: 'public-policy-smart-gov-advisor',
    title: 'Smart City & Public Policy Advisor (Советник по государственному управлению и цифровизации Smart City)',
    category: 'Государственная служба',
    shortDescription: 'Разрабатывает государственные программы развития, внедряет цифровые госуслуги и оптимизирует городские сервисы.',
    dailyTasks: [
      'Разработка законопроектов, нормативных актов и программ социально-экономического развития',
      'Курирование цифровой трансформации госуслуг (электронное правительство)',
      'Анализ социологических опросов и обратной связи граждан',
      'Координация межведомственного взаимодействия министерств'
    ],
    hardSkills: ['Государственное и муниципальное управление (ГМУ)', 'Административное право', 'Анализ больших социально-экономических данных', 'Проектное управление в госсекторе'],
    softSkills: ['Государственное мышление', 'Патриотизм и служение обществу', 'Ораторское мастерство'],
    interests: ['Государственное управление', 'Политика', 'Развитие городов и страны', 'Цифровизация госуслуг'],
    thinkingType: 'Системное и архитектурное',
    workEnvironment: 'Суд / Государственное ведомство',
    schoolSubjects: ['Обществознание', 'История', 'Экономика', 'Русский язык'],
    universityMajors: ['38.03.04 Государственное и муниципальное управление', '41.03.04 Политология'],
    topUnis: ['РАНХиГС при Президенте РФ', 'ВШЭ', 'МГУ (ФГУ)', 'МГИМО'],
    salaryRange: { junior: '70 000 – 115 000 ₽', middle: '150 000 – 280 000 ₽', senior: '300 000 – 600 000 ₽' },
    remoteFeasibility: 'Только очно',
    iconName: 'Building',
    badge: 'Служение обществу',
    traitScores: { analytical: 90, technical: 65, creative: 70, social: 94, entrepreneurial: 70, research: 85, practical: 88, organizational: 98 }
  },

  // 5. Social Sciences & Sociological Analytics
  {
    id: 'computational-sociologist',
    title: 'Computational Sociologist & Big Data Demographer (Вычислительный социолог / Демограф больших данных)',
    category: 'Социология и общество',
    shortDescription: 'Исследует тренды в обществе, миграционные потоки, социальные сети и общественное мнение методами Big Data.',
    dailyTasks: [
      'Сбор и обработка массивов данных социальных сетей и поисковых запросов',
      'Математическое моделирование демографических пирамид и миграционных волн',
      'Проведение качественных фокус-групп и всероссийских репрезентативных опросов',
      'Подготовка аналитических отчетов о ценностях молодежи и трендах будущего'
    ],
    hardSkills: ['Python / R для социологического анализа', 'Теория выборок и репрезентативность (SPSS/Stata)', 'Сетевой анализ социальных графов (NetworkX)', 'Методология качественных интервью'],
    softSkills: ['Глубокий социокультурный кругозор', 'Научная объективность', 'Умение видеть скрытые паттерны в поведении толпы'],
    interests: ['Социология', 'Психология масс', 'Демография', 'Тренды общества'],
    thinkingType: 'Критическое и исследовательское',
    workEnvironment: 'Офис / Удалённо (Digital)',
    schoolSubjects: ['Обществознание', 'История', 'Алгебра и статистика', 'Информатика'],
    universityMajors: ['39.03.01 Социология'],
    topUnis: ['ВШЭ (Факультет социальных наук)', 'МГУ (Соцфак)', 'СПбГУ', 'Шанинка'],
    salaryRange: { junior: '70 000 – 110 000 ₽', middle: '140 000 – 250 000 ₽', senior: '270 000 – 500 000 ₽' },
    remoteFeasibility: 'Полностью удалённо (100%)',
    iconName: 'Users',
    badge: 'Зеркало общества',
    traitScores: { analytical: 95, technical: 80, creative: 75, social: 92, entrepreneurial: 65, research: 98, practical: 82, organizational: 84 }
  }
];

export function buildMasterProfessionsDatabase(): Profession[] {
  const convertedSpecialized: Profession[] = SPECIALIZED_EXTRA_PROFESSIONS.map(item => ({
    id: item.id,
    title: item.title,
    category: item.category,
    shortDescription: item.shortDescription,
    dailyTasks: item.dailyTasks,
    keySkills: {
      hardSkills: item.hardSkills,
      softSkills: item.softSkills
    },
    matchingInterests: item.interests,
    thinkingType: item.thinkingType,
    workEnvironment: item.workEnvironment,
    schoolSubjects: item.schoolSubjects,
    recommendedEducation: {
      degreeType: 'Бакалавриат / Специалитет',
      majors: item.universityMajors,
      topUniversities: item.topUnis,
      estimatedYears: '4–5 лет'
    },
    demandLevel: 'Очень высокий',
    careerOutlook: 'Высокий спрос на междисциплинарных специалистов будущего с международным потенциалом.',
    salaryRange: {
      junior: item.salaryRange.junior,
      middle: item.salaryRange.middle,
      senior: item.salaryRange.senior,
      currency: 'RUB / USD',
      growthOutlook: '+20% в год'
    },
    remoteFeasibility: item.remoteFeasibility,
    universityMajors: item.universityMajors,
    relatedProfessions: [],
    traitScores: item.traitScores,
    iconName: item.iconName,
    badge: item.badge,
    dayInTheLife: `Типичный рабочий день по специальности «${item.title}», наполненный практическими достижениями и влиянием на индустрию.`,
    firstStepsToStartNow: [
      `Почитать профильную литературу и профессиональные блоги по направлению «${item.category}»`,
      `Пройти вводный онлайн-курс или посмотреть лекции ведущих специалистов на YouTube`,
      `Сделать свой первый мини-проект для портфолио`
    ]
  }));

  const catalogList = generateAllCatalogProfessions();

  const allProfessions = [
    ...TECH_PROFESSIONS,
    ...ENGINEERING_SCIENCE_PROFESSIONS,
    ...BIO_MED_PROFESSIONS,
    ...BUSINESS_ECON_PROFESSIONS,
    ...CREATIVE_ARTS_PROFESSIONS,
    ...HUMANITIES_SOCIAL_PROFESSIONS,
    ...EMERGING_RESEARCH_PROFESSIONS,
    ...convertedSpecialized,
    ...catalogList
  ];

  // Remove duplicates by ID if any
  const uniqueMap = new Map<string, Profession>();
  for (const prof of allProfessions) {
    if (!uniqueMap.has(prof.id)) {
      uniqueMap.set(prof.id, prof);
    }
  }

  return Array.from(uniqueMap.values());
}

export const ALL_PROFESSIONS: Profession[] = buildMasterProfessionsDatabase();
