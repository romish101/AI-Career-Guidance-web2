import { Language } from '../i18n/types';

export interface LocalizedString {
  ru: string;
  en: string;
  tg: string;
}

export interface LocalizedStringArray {
  ru: string[];
  en: string[];
  tg: string[];
}

export interface VolunteeringCategory {
  id: string;
  label: LocalizedString;
}

export interface VolunteeringOrganization {
  id: string;
  name: LocalizedString;
  category: LocalizedString;
  categoryId: string;
  location: LocalizedString;
  description: LocalizedString;
  roles: LocalizedStringArray;
  skillsGained: LocalizedStringArray;
  websiteHint: LocalizedString;
  accentColor: string;
  tagColor: string;
  imageUrl: string;
  websiteUrl?: string;
}

export const VOLUNTEERING_CATEGORIES: VolunteeringCategory[] = [
  {
    id: 'all',
    label: {
      ru: 'Все направления',
      en: 'All Categories',
      tg: 'Ҳама самтҳо'
    }
  },
  {
    id: 'languages',
    label: {
      ru: 'Языки, IT и Лидерство',
      en: 'Languages, IT & Leadership',
      tg: 'Забонҳо, IT ва Пешвоӣ'
    }
  },
  {
    id: 'social',
    label: {
      ru: 'Социальные проекты и Права детей',
      en: 'Social Projects & Child Rights',
      tg: 'Лоиҳаҳои иҷтимоӣ ва Ҳуқуқи кӯдак'
    }
  },
  {
    id: 'health',
    label: {
      ru: 'Здоровье, Равный-Равному и Театр',
      en: 'Health, Peer-to-Peer & Youth Theater',
      tg: 'Тандурустӣ, Ҳамсол ба Ҳамсол ва Театр'
    }
  },
  {
    id: 'education',
    label: {
      ru: 'Образование, Менторство и Карьера',
      en: 'Education, Mentorship & Career',
      tg: 'Маориф, Менторӣ ва Касбомӯзӣ'
    }
  },
  {
    id: 'culture',
    label: {
      ru: 'Культура, Олимпиады и Наука',
      en: 'Culture, Olympiads & Science',
      tg: 'Фарҳанг, Олимпиадаҳо ва Илм'
    }
  }
];

export const VOLUNTEERING_ORGANIZATIONS: VolunteeringOrganization[] = [
  {
    id: 'american-space',
    name: {
      ru: 'American Space Dushanbe',
      en: 'American Space Dushanbe',
      tg: 'American Space Dushanbe'
    },
    category: {
      ru: 'Языки, IT и Лидерство',
      en: 'Languages, IT & Leadership',
      tg: 'Забонҳо, IT ва Пешвоӣ'
    },
    categoryId: 'languages',
    location: {
      ru: 'г. Душанбе, БЦ «Пойтахт», 3 этаж (ул. Мирзо Турсунзаде 49)',
      en: 'Dushanbe, Poytakht Business Center, 3rd floor (49 Mirzo Tursunzade St.)',
      tg: 'ш. Душанбе, Маркази тиҷоратии «Пойтахт», ошёнаи 3 (кӯч. Мирзо Турсунзода 49)'
    },
    description: {
      ru: 'Американский уголок в Душанбе предоставляет платформу для развития английского языка, цифровых технологий и лидерских качеств. Волонтёры участвуют в организации разговорных клубов, технологических воркшопов, STEM-лабораторий и культурных мероприятий.',
      en: 'American Space Dushanbe provides a vibrant platform for English language mastery, cutting-edge digital tech, and leadership skills. Volunteers run English speaking clubs, technology workshops, STEM maker labs, and cross-cultural events.',
      tg: 'Гӯшаи амрикоӣ дар Душанбе майдони муосир барои такмили забони англисӣ, технологияҳои рақамӣ ва малакаҳои роҳбарӣ мебошад. Волонтёрон дар ташкили маҳфилҳои гуфтугӯӣ, воркшопҳои технологӣ, озмоишгоҳҳои STEM ва чорабиниҳои фарҳангӣ саҳм мегузоранд.'
    },
    roles: {
      ru: [
        'Ведущий English Club',
        'Координатор STEM & Robotics',
        'Медиа-волонтёр и SMM',
        'Организатор воркшопов'
      ],
      en: [
        'English Club Facilitator',
        'STEM & Robotics Coordinator',
        'Media & Social Content Volunteer',
        'Workshop Organizer'
      ],
      tg: [
        'Барандаи маҳфили English Club',
        'Ҳамоҳангсози STEM ва робототехника',
        'Волонтёри медиа ва SMM',
        'Ташкилкунандаи воркшопҳо'
      ]
    },
    skillsGained: {
      ru: [
        'Свободный английский',
        'Публичные выступления',
        'Наставничество',
        'Организация ивентов'
      ],
      en: [
        'Fluent English',
        'Public Speaking',
        'Mentorship & Coaching',
        'Event Management'
      ],
      tg: [
        'Забони англисии озод',
        'Суханронӣ дар назди ҷамъ',
        'Роҳнамоӣ ва менторӣ',
        'Идоракунии чорабиниҳо'
      ]
    },
    websiteHint: {
      ru: 'usembassy.gov • American Spaces Dushanbe',
      en: 'usembassy.gov • American Spaces Dushanbe',
      tg: 'usembassy.gov • American Spaces Dushanbe'
    },
    accentColor: 'from-blue-600 to-indigo-700',
    tagColor: 'bg-blue-50 text-blue-800 border-blue-200',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/American_Spaces_Logo.svg/512px-American_Spaces_Logo.svg.png',
    websiteUrl: 'https://tj.usembassy.gov/education-culture/american-spaces/'
  },
  {
    id: 'unicef',
    name: {
      ru: 'UNICEF Tajikistan',
      en: 'UNICEF Tajikistan',
      tg: 'ЮНИСЕФ Тоҷикистон'
    },
    category: {
      ru: 'Социальные проекты и Права детей',
      en: 'Social Projects & Child Rights',
      tg: 'Лоиҳаҳои иҷтимоӣ ва Ҳуқуқи кӯдак'
    },
    categoryId: 'social',
    location: {
      ru: 'г. Душанбе, представительство ЮНИСЕФ в Республике Таджикистан',
      en: 'Dushanbe, UNICEF Country Office in the Republic of Tajikistan',
      tg: 'ш. Душанбе, намояндагии расмии ЮНИСЕФ дар Ҷумҳурии Тоҷикистон'
    },
    description: {
      ru: 'Детский фонд ООН (UNICEF) в Таджикистане активно привлекает молодёжь к социальным проектам, программе инноваций UPSHIFT и защите прав детей. Волонтёрство здесь развивает навыки проектного менеджмента, фасилитации и социальной ответственности.',
      en: 'The United Nations Children\'s Fund (UNICEF) in Tajikistan actively engages youth in social impact initiatives, the UPSHIFT social innovation program, and child rights advocacy. Volunteering cultivates strong skills in project management, facilitation, and civic leadership.',
      tg: 'Хазинаи кӯдакони Созмони Милали Муттаҳид (ЮНИСЕФ) дар Тоҷикистон ҷавононро ба ташаббусҳои иҷтимоӣ, барномаи инноватсионии UPSHIFT ва ҳимояи ҳуқуқҳои кӯдакон фаъолона ҷалб менамояд. Фаъолияти волонтёрӣ малакаҳои идоракунии лоиҳаҳо, фасилитатсия ва масъулияти иҷтимоиро тақвият мебахшад.'
    },
    roles: {
      ru: [
        'Молодёжный фасилитатор UPSHIFT',
        'Координатор инклюзивных программ',
        'Исследователь и аналитик',
        'Волонтёр по правам ребёнка'
      ],
      en: [
        'UPSHIFT Youth Facilitator',
        'Inclusive Programs Coordinator',
        'Social Research & Analytics Volunteer',
        'Child Rights Advocate'
      ],
      tg: [
        'Фасилитатори ҷавонони барномаи UPSHIFT',
        'Ҳамоҳангсози барномаҳои фарогир',
        'Таҳлилгар ва муҳаққиқи соҳаи иҷтимоӣ',
        'Волонтёри ҳимояи ҳуқуқи кӯдак'
      ]
    },
    skillsGained: {
      ru: [
        'Социальное проектирование',
        'Фасилитация',
        'Дизайн-мышление',
        'Командный менеджмент'
      ],
      en: [
        'Social Project Design',
        'Facilitation',
        'Design Thinking',
        'Team Management'
      ],
      tg: [
        'Лоиҳакашии иҷтимоӣ',
        'Маҳорати фасилитатсия',
        'Тафаккури дизайнӣ',
        'Идоракунии даста'
      ]
    },
    websiteHint: {
      ru: 'unicef.org/tajikistan • ЮНИСЕФ',
      en: 'unicef.org/tajikistan • UNICEF Tajikistan',
      tg: 'unicef.org/tajikistan • ЮНИСЕФ Тоҷикистон'
    },
    accentColor: 'from-sky-500 to-blue-600',
    tagColor: 'bg-sky-50 text-sky-800 border-sky-200',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/UNICEF_Logo.svg/512px-UNICEF_Logo.svg.png',
    websiteUrl: 'https://www.unicef.org/tajikistan/'
  },
  {
    id: 'y-peer',
    name: {
      ru: 'Y-PEER Tajikistan Network',
      en: 'Y-PEER Tajikistan Network',
      tg: 'Шабакаи Y-PEER Тоҷикистон'
    },
    category: {
      ru: 'Здоровье, Равный-Равному и Театр',
      en: 'Health, Peer-to-Peer & Youth Theater',
      tg: 'Тандурустӣ, Ҳамсол ба Ҳамсол ва Театр'
    },
    categoryId: 'health',
    location: {
      ru: 'г. Душанбе, Национальная сеть Y-PEER Таджикистан',
      en: 'Dushanbe, National Youth Peer Education Network Y-PEER',
      tg: 'ш. Душанбе, Шабакаи миллии ҷавонони Y-PEER Тоҷикистон'
    },
    description: {
      ru: 'Международная молодёжная сеть Y-PEER готовит тренеров и волонтёров по методике «равный — равному» в сфере ЗОЖ, жизненных навыков и лидерства. Участники проводят интерактивные тренинги, форумы и образовательные театральные постановки.',
      en: 'The international Y-PEER youth network trains peer educators using the peer-to-peer approach in healthy lifestyle promotion, life skills, and civic leadership. Members organize interactive workshops, youth forums, and educational forum-theater plays.',
      tg: 'Шабакаи байналмилалии ҷавонони Y-PEER мураббиён ва ихтиёриёнро аз рӯи усули «ҳамсол ба ҳамсол» оид ба тарзи ҳаёти солим, малакаҳои ҳаётӣ ва роҳбарӣ омода месозад. Иштирокчиён тренингҳои интерактивӣ, форумҳо ва намоишномаҳои театри маърифатӣ баргузор мекунанд.'
    },
    roles: {
      ru: [
        'Сертифицированный тренинг-инструктор',
        'Актёр форума-театра',
        'Координатор выездных акций',
        'Контент-креатор'
      ],
      en: [
        'Certified Peer-to-Peer Trainer',
        'Forum-Theater Actor',
        'Outreach Campaign Coordinator',
        'Creative Content Creator'
      ],
      tg: [
        'Мураббии соҳибихтисоси омӯзишӣ',
        'Ҳунарпешаи театр-форум',
        'Ҳамоҳангсози маъракаҳои сайёр',
        'Эҷодкори мундариҷаи иттилоотӣ'
      ]
    },
    skillsGained: {
      ru: [
        'Ораторское мастерство',
        'Интерактивные методики',
        'Эмоциональный интеллект',
        'Лидерство'
      ],
      en: [
        'Public Speaking',
        'Interactive Methodologies',
        'Emotional Intelligence',
        'Youth Leadership'
      ],
      tg: [
        'Маҳорати нотиқӣ ва суханварӣ',
        'Усулҳои муосири интерактивӣ',
        'Интеллекти эҳсосӣ',
        'Пешвоӣ ва роҳбарӣ'
      ]
    },
    websiteHint: {
      ru: 'ypeer.tj • Y-PEER Таджикистан',
      en: 'ypeer.tj • Y-PEER Tajikistan',
      tg: 'ypeer.tj • Y-PEER Тоҷикистон'
    },
    accentColor: 'from-orange-500 to-amber-600',
    tagColor: 'bg-orange-50 text-orange-800 border-orange-200',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Y-PEER_logo.jpg/640px-Y-PEER_logo.jpg',
    websiteUrl: 'https://ypeer.tj/'
  },
  {
    id: 'peshraft',
    name: {
      ru: 'ОО «Пешрафт»',
      en: 'Peshraft Public Foundation',
      tg: 'ТҶ «Пешрафт»'
    },
    category: {
      ru: 'Образование, Менторство и Карьера',
      en: 'Education, Mentorship & Career',
      tg: 'Маориф, Менторӣ ва Касбомӯзӣ'
    },
    categoryId: 'education',
    location: {
      ru: 'г. Душанбе, ул. Бохтар (ОО «Пешрафт»)',
      en: 'Dushanbe, Bokhtar Street (Peshraft Organization)',
      tg: 'ш. Душанбе, кӯч. Бохтар (ТҶ «Пешрафт»)'
    },
    description: {
      ru: 'Общественная организация «Пешрафт» развивает человеческий капитал Таджикистана через менторские программы, стипендии для одаренной молодёжи и социальные хакатоны. Волонтёры координируют крупные образовательные проекты и благотворительные инициативы.',
      en: 'Peshraft NGO drives human capital development in Tajikistan through youth mentorship programs, academic scholarships for talented students, and social hackathons. Volunteers manage impactful educational projects and charitable drives.',
      tg: 'Ташкилоти ҷамъиятии «Пешрафт» сармояи инсонии Тоҷикистонро тавассути барномаҳои менторӣ, бурсияҳои таҳсилӣ барои ҷавонони боистеъдод ва хакатонҳои иҷтимоӣ инкишоф медиҳад. Волонтёрон лоиҳаҳои муҳими таълимӣ ва ташаббусҳои хайриявиро роҳбарӣ мекунанд.'
    },
    roles: {
      ru: [
        'Координатор менторских программ',
        'Организатор образовательных марафонов',
        'PR & Медиа волонтёр',
        'Тьютор для школьников'
      ],
      en: [
        'Mentorship Program Coordinator',
        'Educational Marathon Organizer',
        'PR & Digital Media Volunteer',
        'Academic Tutor for Youth'
      ],
      tg: [
        'Ҳамоҳангсози барномаҳои менторӣ',
        'Ташкилкунандаи марафонҳои илмӣ',
        'Волонтёри PR ва расонаҳо',
        'Тютори омӯзишӣ барои хонандагон'
      ]
    },
    skillsGained: {
      ru: [
        'Управление проектами',
        'Фандрайзинг',
        'Связи с общественностью',
        'Карьерный нетворкинг'
      ],
      en: [
        'Project Management',
        'Fundraising',
        'Public Relations',
        'Career Networking'
      ],
      tg: [
        'Идоракунии лоиҳаҳо',
        'Фандрайзинг ва ҷалби маблағ',
        'Робита бо ҷомеа',
        'Шабакасозии касбӣ'
      ]
    },
    websiteHint: {
      ru: 'peshraft.charity • ОО «Пешрафт»',
      en: 'peshraft.charity • Peshraft Charity',
      tg: 'peshraft.charity • ТҶ «Пешрафт»'
    },
    accentColor: 'from-indigo-600 to-violet-700',
    tagColor: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80',
    websiteUrl: 'https://peshraft.charity/'
  },
  {
    id: 'russian-house',
    name: {
      ru: 'Русский дом в Душанбе',
      en: 'Russian House in Dushanbe',
      tg: 'Хонаи русӣ дар Душанбе'
    },
    category: {
      ru: 'Культура, Олимпиады и Наука',
      en: 'Culture, Olympiads & Science',
      tg: 'Фарҳанг, Олимпиадаҳо ва Илм'
    },
    categoryId: 'culture',
    location: {
      ru: 'г. Душанбе, ул. 1-й проезд Академиков Раджабовых, 9/1',
      en: 'Dushanbe, 1st passage of Academicians Radzhabovs, 9/1',
      tg: 'ш. Душанбе, гузаргоҳи 1-уми Академикҳо Раҷабовҳо, 9/1'
    },
    description: {
      ru: 'Представительство Россотрудничества в Таджикистане реализует масштабные гуманитарные, образовательные и научные проекты, проводит фестивали и олимпиады. Волонтёры получают опыт администрирования международных событий и культурно-просветительской работы.',
      en: 'The Rossotrudnichestvo representation in Tajikistan coordinates major humanitarian, educational, and scientific projects, youth olympiads, and cultural festivals. Volunteers gain valuable experience in international event administration and cross-cultural initiatives.',
      tg: 'Намояндагии «Россотрудничество» дар Тоҷикистон лоиҳаҳои бузурги башардӯстона, таълимӣ ва илмӣ, олимпиадаҳо ва ҷашнвораҳоро амалӣ мегардонад. Волонтёрон дар маъмурияти чорабиниҳои байналмилалӣ ва корҳои фарҳангиву маърифатӣ таҷриба меандӯзанд.'
    },
    roles: {
      ru: [
        'Организатор фестивалей и выставок',
        'Куратор олимпиад и конкурсов',
        'Волонтёр пресс-службы',
        'Координатор книжных клубов'
      ],
      en: [
        'Festival & Exhibition Organizer',
        'Academic Competitions Curator',
        'Press & Communications Volunteer',
        'Book Club Coordinator'
      ],
      tg: [
        'Ташкилкунандаи ҷашнвораҳо ва намоишҳо',
        'Роҳбари олимпиадаҳо ва озмунҳо',
        'Волонтёри маркази матбуот',
        'Ҳамоҳангсози маҳфилҳои китобхонӣ'
      ]
    },
    skillsGained: {
      ru: [
        'Ивент-менеджмент',
        'Межкультурная коммуникация',
        'Работа с медиа',
        'Администрирование'
      ],
      en: [
        'Event Management',
        'Cross-Cultural Communication',
        'Media & Journalism',
        'Project Administration'
      ],
      tg: [
        'Идоракунии чорабиниҳо',
        'Муоширати байнифарҳангӣ',
        'Кор бо воситаҳои ахбори омма',
        'Маъмуриятчигӣ ва низом'
      ]
    },
    websiteHint: {
      ru: 'tjk.rs.gov.ru • Русский дом',
      en: 'tjk.rs.gov.ru • Russian House',
      tg: 'tjk.rs.gov.ru • Хонаи русӣ'
    },
    accentColor: 'from-red-600 to-rose-700',
    tagColor: 'bg-rose-50 text-rose-800 border-rose-200',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_of_Rossotrudnichestvo.png/512px-Logo_of_Rossotrudnichestvo.png',
    websiteUrl: 'https://tjk.rs.gov.ru/'
  }
];

/**
 * Helper to safely extract localized string with fallback to Russian or English
 */
export function getLocalizedText(
  field: LocalizedString | undefined,
  lang: Language
): string {
  if (!field) return '';
  return field[lang] || field.ru || field.en || '';
}

/**
 * Helper to safely extract localized string array with fallback
 */
export function getLocalizedArray(
  field: LocalizedStringArray | undefined,
  lang: Language
): string[] {
  if (!field) return [];
  return field[lang] || field.ru || field.en || [];
}
