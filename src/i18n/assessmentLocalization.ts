import { Language } from './types';
import { TraitKey, SectorCategory, Profession, CareerRecommendation, AssessmentResult } from '../types';

export interface LocalizedText {
  ru: string;
  en: string;
  tg: string;
}

export interface LocalizedArchetype {
  name: LocalizedText;
  description: LocalizedText;
}

/**
 * 8 Psychological Archetypes localized in RU, EN, TG
 */
export const ARCHETYPE_LOCALIZATIONS: Record<TraitKey, LocalizedArchetype> = {
  analytical: {
    name: {
      ru: 'Стратег-аналитик (The Analytical Mastermind)',
      en: 'The Analytical Mastermind',
      tg: 'Стратег-таҳлилгар (The Analytical Mastermind)'
    },
    description: {
      ru: 'Вы глубоко видите причинно-следственные связи, любите сложные алгоритмические и математические структуры и способны находить неочевидные закономерности.',
      en: 'You have a deep perception of cause-and-effect relationships, thrive on intricate algorithmic structures, and excel at uncovering non-obvious patterns.',
      tg: 'Шумо робитаҳои сабабу натиҷаро амиқ дарк мекунед, сохторҳои мураккаби алгоритмӣ ва риёзиро дӯст медоред ва қодир ҳастед қонуниятҳои ноаёнро пайдо кунед.'
    }
  },
  technical: {
    name: {
      ru: 'Инженер-созидатель (The Technical Architect)',
      en: 'The Technical Architect',
      tg: 'Муҳандис-офаранда (The Technical Architect)'
    },
    description: {
      ru: 'Вы увлечены тем, как устроены механизмы, микросхемы и программные системы. Ваш дар — строить надежные, масштабируемые и мощные технологические решения.',
      en: 'You are passionate about how mechanisms, hardware, and software systems work. Your strength is engineering reliable, scalable, and powerful technology solutions.',
      tg: 'Шумо ба сохтори механизмҳо, микросхемаҳо ва системаҳои барномавӣ шавқу рағбати беандоза доред. Истеъдоди шумо — сохтани қарорҳои боэътимод, васеъшаванда ва пуриқтидори технологӣ мебошад.'
    }
  },
  creative: {
    name: {
      ru: 'Визионер-новатор (The Creative Visionary)',
      en: 'The Creative Visionary',
      tg: 'Эҷодкор-навовар (The Creative Visionary)'
    },
    description: {
      ru: 'Вы обладаете исключительным эстетическим вкусом, чувством формы, цвета, слова и звука. Вы создаете то, что восхищает и вдохновляет людей.',
      en: 'You possess exceptional aesthetic intuition, a keen sense of form, color, words, and acoustics. You create artifacts that inspire and captivate people.',
      tg: 'Шумо завқи баланди зебоишиносӣ, эҳсоси шакл, ранг, сухан ва овозро доред. Шумо чизҳоеро меофаред, ки одамонро мафтун ва илҳомбахш месозанд.'
    }
  },
  social: {
    name: {
      ru: 'Наставник-дипломат (The Empathetic Catalyst)',
      en: 'The Empathetic Catalyst',
      tg: 'Мураббӣ-дипломат (The Empathetic Catalyst)'
    },
    description: {
      ru: 'Ваша главная суперсила — понимание людей, умение выстраивать доверие, вдохновлять, помогать раскрывать потенциал и договариваться в самых сложных ситуациях.',
      en: 'Your greatest superpower is empathy, building trust, inspiring others, uncovering human potential, and mediating the most challenging situations.',
      tg: 'Неруи асосии шумо — фаҳмиши одамон, қобилияти эҷоди боварӣ, илҳомбахшӣ, кӯмак ба кушодани истеъдодҳо ва гуфтушунид дар ҳолатҳои мураккабтарин аст.'
    }
  },
  entrepreneurial: {
    name: {
      ru: 'Лидер-первопроходец (The Driven Entrepreneur)',
      en: 'The Driven Entrepreneur',
      tg: 'Роҳбар-пешсаф (The Driven Entrepreneur)'
    },
    description: {
      ru: 'Вы мыслите масштабно, видите возможности там, где другие видят сложности, готовы брать ответственность за результат и вести за собой команду к победе.',
      en: 'You think big, see lucrative opportunities where others see roadblocks, take full accountability for outcomes, and lead teams to decisive victories.',
      tg: 'Шумо фарох ва стратегӣ фикр мекунед, дар ҷойҳое, ки дигарон мушкил мебинанд, имконият пайдо месозед, масъулиятро ба дӯш мегиред ва дастаро ба пеш мебаред.'
    }
  },
  research: {
    name: {
      ru: 'Исследователь-первооткрыватель (The Scientific Pioneer)',
      en: 'The Scientific Pioneer',
      tg: 'Муҳаққиқ-пешқадам (The Scientific Pioneer)'
    },
    description: {
      ru: 'Вас манят тайны вселенной, микромира, генома и фундаментальных законов природы. Вы способны совершать научные прорывы благодаря терпению и любознательности.',
      en: 'You are driven by the mysteries of science, the universe, genetics, and fundamental laws. You achieve breakthroughs through patience, rigor, and relentless curiosity.',
      tg: 'Шуморо сирру асрори коинот, олами микро, геном ва қонунҳои бунёдии табиат ҷалб мекунанд. Шумо қодиред тавассути сабр ва кунҷковӣ кашфиётҳои бузурги илмӣ кунед.'
    }
  },
  practical: {
    name: {
      ru: 'Мастер-практик (The Hands-on Realizer)',
      en: 'The Hands-on Realizer',
      tg: 'Устои амалӣ (The Hands-on Realizer)'
    },
    description: {
      ru: 'Вы цените осязаемый результат, филигранное владение инструментами и способность решать реальные прикладные задачи здесь и сейчас.',
      en: 'You value tangible, concrete results, mastery of professional tools, and the capability to solve real-world applied challenges on the ground.',
      tg: 'Шумо натиҷаҳои мушаххаси воқеӣ, маҳорати олии кор бо асбобҳо ва қобилияти ҳалли вазифаҳои амалиро дар ин ҷо ва ҳозир қадр мекунед.'
    }
  },
  organizational: {
    name: {
      ru: 'Архитектор процессов (The Operations Architect)',
      en: 'The Operations Architect',
      tg: 'Меъмори равандҳо (The Operations Architect)'
    },
    description: {
      ru: 'Вы мастерски структурируете хаос, выстраиваете эффективные регламенты, логистику и управляете масштабными проектами без сбоев.',
      en: 'You masterfully organize chaos, establish airtight operations and logistics, and lead complex multi-stakeholder projects with zero downtime.',
      tg: 'Шумо бесарусомониро устодона ба низом медароред, қоидаҳои самараноки корӣ ва логистикаро месозед ва лоиҳаҳои бузургро бе хатогӣ идора мекунед.'
    }
  }
};

/**
 * Sector Categories in RU, EN, TG
 */
export const SECTOR_LOCALIZATIONS: Record<string, LocalizedText> = {
  'IT и программирование': {
    ru: 'IT и программирование',
    en: 'IT & Software Engineering',
    tg: 'IT ва барномасозӣ'
  },
  'Медицина и здравоохранение': {
    ru: 'Медицина и здравоохранение',
    en: 'Medicine & Healthcare',
    tg: 'Тиб ва тандурустӣ'
  },
  'Инженерия и робототехника': {
    ru: 'Инженерия и робототехника',
    en: 'Engineering & Robotics',
    tg: 'Муҳандисӣ ва робототехника'
  },
  'Искусственный интеллект': {
    ru: 'Искусственный интеллект',
    en: 'Artificial Intelligence & Data',
    tg: 'Зеҳни сунъӣ ва додаҳо'
  },
  'Дизайн и UI/UX': {
    ru: 'Дизайн и UI/UX',
    en: 'Design & UI/UX',
    tg: 'Тарроҳӣ ва UI/UX'
  },
  'Бизнес и менеджмент': {
    ru: 'Бизнес и менеджмент',
    en: 'Business & Management',
    tg: 'Тиҷорат ва идоракунӣ'
  },
  'Бизнес и предпринимательство': {
    ru: 'Бизнес и предпринимательство',
    en: 'Business & Entrepreneurship',
    tg: 'Тиҷорат ва соҳибкорӣ'
  },
  'Бизнес и управление': {
    ru: 'Бизнес и управление',
    en: 'Business & Management',
    tg: 'Тиҷорат ва идоракунӣ'
  },
  'Наука и исследования': {
    ru: 'Наука и исследования',
    en: 'Science & Research',
    tg: 'Илм ва таҳқиқот'
  },
  'Наука и биотехнологии': {
    ru: 'Наука и биотехнологии',
    en: 'Science & Biotechnology',
    tg: 'Илм ва биотехнология'
  },
  'Медицина и здравоохранение': {
    ru: 'Медицина и здравоохранение',
    en: 'Medicine & Healthcare',
    tg: 'Тиб ва тандурустӣ'
  },
  'Медицина и биотехнологии': {
    ru: 'Медицина и биотехнологии',
    en: 'Medicine & Biotechnology',
    tg: 'Тиб ва биотехнология'
  },
  'Инженерия и робототехника': {
    ru: 'Инженерия и робототехника',
    en: 'Engineering & Robotics',
    tg: 'Муҳандисӣ ва робототехника'
  },
  'Инженерия и технологии': {
    ru: 'Инженерия и технологии',
    en: 'Engineering & Technology',
    tg: 'Муҳандисӣ ва технологияҳо'
  },
  'Дизайн и медиа': {
    ru: 'Дизайн и медиа',
    en: 'Design & Digital Media',
    tg: 'Тарроҳӣ ва медиа'
  },
  'Творчество и дизайн': {
    ru: 'Творчество и дизайн',
    en: 'Creativity & Design',
    tg: 'Эҷодиёт ва тарроҳӣ'
  },
  'Медиа, кино и искусство': {
    ru: 'Медиа, кино и искусство',
    en: 'Media, Film & Creative Arts',
    tg: 'Медиа, кино ва санъат'
  },
  'Образование и педагогика': {
    ru: 'Образование и педагогика',
    en: 'Education & Pedagogy',
    tg: 'Маориф ва омӯзгорӣ'
  },
  'Экология и зеленые технологии': {
    ru: 'Экология и зеленые технологии',
    en: 'Ecology & Green Technologies',
    tg: 'Экология ва технологияҳои сабз'
  },
  'Финансы и финтех': {
    ru: 'Финансы и финтех',
    en: 'Finance & FinTech',
    tg: 'Молия ва Финтех'
  },
  'Кибербезопасность': {
    ru: 'Кибербезопасность',
    en: 'Cybersecurity & Defense',
    tg: 'Амнияти киберӣ'
  },
  'Авиация и космос': {
    ru: 'Авиация и космос',
    en: 'Aviation & Space Exploration',
    tg: 'Авиатсия ва кайҳон'
  },
  'Аэрокосмическая отрасль': {
    ru: 'Аэрокосмическая отрасль',
    en: 'Aerospace & Space Systems',
    tg: 'Соҳаи аэрокайҳонӣ'
  },
  'Юриспруденция и дипломатия': {
    ru: 'Юриспруденция и дипломатия',
    en: 'Law & International Diplomacy',
    tg: 'Ҳуқуқшиносӣ ва дипломатия'
  },
  'Юриспруденция и право': {
    ru: 'Юриспруденция и право',
    en: 'Law & Legal Affairs',
    tg: 'Ҳуқуқшиносӣ ва қонунгузорӣ'
  },
  'Маркетинг и коммуникации': {
    ru: 'Маркетинг и коммуникации',
    en: 'Marketing & Digital PR',
    tg: 'Маркетинг ва робита бо ҷомеа'
  },
  'Архитектура и урбанистика': {
    ru: 'Архитектура и урбанистика',
    en: 'Architecture & Urban Planning',
    tg: 'Меъморӣ ва шаҳрсозӣ'
  },
  'Психология и коучинг': {
    ru: 'Психология и коучинг',
    en: 'Psychology & Mentoring',
    tg: 'Равоншиносӣ ва коучинг'
  },
  'Телекоммуникации': {
    ru: 'Телекоммуникации',
    en: 'Telecommunications & 5G/6G',
    tg: 'Телекоммуникатсия'
  },
  'Биотехнологии': {
    ru: 'Биотехнологии',
    en: 'Biotechnology & Genetics',
    tg: 'Биотехнология ва генетика'
  },
  'Агротехнологии и генетика': {
    ru: 'Агротехнологии и генетика',
    en: 'AgriTech & Genetics',
    tg: 'Агротехнология ва генетика'
  },
  'Квантовые вычисления и DeepTech': {
    ru: 'Квантовые вычисления и DeepTech',
    en: 'Quantum Computing & DeepTech',
    tg: 'Ҳисоббарории квантӣ ва DeepTech'
  },
  'Тяжелое машиностроение и металлургия': {
    ru: 'Тяжелое машиностроение и металлургия',
    en: 'Heavy Machinery & Metallurgy',
    tg: 'Мошинсозии вазнин ва металлургия'
  },
  'Материаловедение и нанотехнологии': {
    ru: 'Материаловедение и нанотехнологии',
    en: 'Materials Science & Nanotechnology',
    tg: 'Маводшиносӣ ва нанотехнология'
  },
  'Энергетика и атомная промышленность': {
    ru: 'Энергетика и атомная промышленность',
    en: 'Energy & Nuclear Industry',
    tg: 'Энергетика ва саноати атомӣ'
  },
  'Морской флот и судоходство': {
    ru: 'Морской флот и судоходство',
    en: 'Maritime & Marine Fleet',
    tg: 'Флоти баҳрӣ ва киштиронӣ'
  },
  'Железнодорожный транспорт': {
    ru: 'Железнодорожный транспорт',
    en: 'Railway Transport & Logistics',
    tg: 'Нақлиёти роҳи оҳан'
  },
  'Парфюмерия и биотех косметика': {
    ru: 'Парфюмерия и биотех косметика',
    en: 'Perfumery & Biotech Cosmetics',
    tg: 'Атрсозӣ ва косметикаи биотехнологӣ'
  },
  '3D-печать металлом и аддитивные технологии': {
    ru: '3D-печать металлом и аддитивные технологии',
    en: '3D Metal Printing & Additive Manufacturing',
    tg: 'Чопи 3D-и филизӣ ва технологияҳои аддитивӣ'
  },
  'Киберспорт и гейминг': {
    ru: 'Киберспорт и гейминг',
    en: 'Esports & Gaming Industry',
    tg: 'Киберспорт ва соҳаи бозисозӣ'
  },
  'Поведенческий анализ и инклюзия': {
    ru: 'Поведенческий анализ и инклюзия',
    en: 'Behavioral Analysis & Inclusion',
    tg: 'Таҳлили рафтор ва фарогирӣ'
  },
  'Чрезвычайные ситуации и спасение': {
    ru: 'Чрезвычайные ситуации и спасение',
    en: 'Emergency Response & Disaster Relief',
    tg: 'Ҳолатҳои фавқулода ва наҷотдиҳӣ'
  },
  'Реставрация и культурное наследие': {
    ru: 'Реставрация и культурное наследие',
    en: 'Restoration & Cultural Heritage',
    tg: 'Барқарорсозӣ ва мероси фарҳангӣ'
  },
  'Международные отношения и дипломатия': {
    ru: 'Международные отношения и дипломатия',
    en: 'International Relations & Diplomacy',
    tg: 'Муносибатҳои байналмилалӣ ва дипломатия'
  },
  'Климат и геоинженерия': {
    ru: 'Климат и геоинженерия',
    en: 'Climate & Geoengineering',
    tg: 'Иқлим ва геомуҳандисӣ'
  },
  'Фармацевтика и биоинформатика': {
    ru: 'Фармацевтика и биоинформатика',
    en: 'Pharmaceutics & Bioinformatics',
    tg: 'Фармасевтика ва биоинформатика'
  },
  'Энергетика': {
    ru: 'Энергетика',
    en: 'Renewable Energy & Power',
    tg: 'Энергетика ва захираҳои барқароршаванда'
  },
  'Автомобилестроение': {
    ru: 'Автомобилестроение',
    en: 'Automotive & Electric Vehicles',
    tg: 'Саноати мошинсозӣ ва электромобилҳо'
  },
  'Общая категория': {
    ru: 'Общая категория',
    en: 'General Category',
    tg: 'Категорияи умумӣ'
  }
};

/**
 * Work Environment translation helper
 */
export const WORK_ENV_LOCALIZATIONS: Record<string, LocalizedText> = {
  'Офис / Удалённо (Digital)': {
    ru: 'Офис / Удалённо (Digital)',
    en: 'Office / Remote (Digital)',
    tg: 'Дафтар / Фосилавӣ (Digital)'
  },
  'Клиника / Медицинский центр': {
    ru: 'Клиника / Медицинский центр',
    en: 'Clinic / Medical Center',
    tg: 'Беморхона / Маркази тиббӣ'
  },
  'Лаборатория / Научный центр': {
    ru: 'Лаборатория / Научный центр',
    en: 'Laboratory / Research Center',
    tg: 'Озмоишгоҳ / Маркази илмӣ'
  },
  'Креативная студия / Съёмочная площадка': {
    ru: 'Креативная студия / Съёмочная площадка',
    en: 'Creative Studio / Production Set',
    tg: 'Студияи эҷодӣ / Майдони наворгирӣ'
  },
  'Производство / Инженерный цех': {
    ru: 'Производство / Инженерный цех',
    en: 'Industrial Plant / Engineering Workshop',
    tg: 'Истеҳсолот / Сехи муҳандисӣ'
  },
  'Гибридный (Офис + Выезды)': {
    ru: 'Гибридный (Офис + Выезды)',
    en: 'Hybrid (Office + Field Trips)',
    tg: 'Гибридӣ (Дафтар + Сафарҳои корӣ)'
  },
  'Офис / Корпорация': {
    ru: 'Офис / Корпорация',
    en: 'Office / Corporate HQ',
    tg: 'Дафтар / Корпоратсия'
  },
  '100% Удалённо': {
    ru: '100% Удалённо',
    en: '100% Remote',
    tg: '100% Фосилавӣ'
  }
};

/**
 * Demand Level translation helper
 */
export const DEMAND_LOCALIZATIONS: Record<string, LocalizedText> = {
  'Очень высокий': {
    ru: 'Очень высокий',
    en: 'Very High (Critical Demand)',
    tg: 'Хеле баланд (Талаботи аввалиндараҷа)'
  },
  'Высокий': {
    ru: 'Высокий',
    en: 'High',
    tg: 'Баланд'
  },
  'Стабильный': {
    ru: 'Стабильный',
    en: 'Stable',
    tg: 'Устувор'
  },
  'Экспоненциальный рост': {
    ru: 'Экспоненциальный рост',
    en: 'Exponential Growth',
    tg: 'Рушди босуръат'
  }
};

/**
 * Helper to translate category
 */
export function getLocalizedSector(category: string, lang: Language): string {
  const match = SECTOR_LOCALIZATIONS[category];
  if (match) return match[lang] || match.ru;
  return category;
}

/**
 * Helper to translate work environment
 */
export function getLocalizedWorkEnv(env: string, lang: Language): string {
  const match = WORK_ENV_LOCALIZATIONS[env];
  if (match) return match[lang] || match.ru;
  if (lang === 'en') {
    if (env.includes('Удалённо') || env.includes('Digital')) return 'Office / Remote (Digital)';
    if (env.includes('Клиника')) return 'Clinic / Medical Center';
    if (env.includes('Лаборатория')) return 'Laboratory / Research Center';
    if (env.includes('Студия')) return 'Creative Studio / Production';
    if (env.includes('Производство')) return 'Industrial Facility / Workshop';
  } else if (lang === 'tg') {
    if (env.includes('Удалённо') || env.includes('Digital')) return 'Дафтар / Фосилавӣ (Digital)';
    if (env.includes('Клиника')) return 'Беморхона / Маркази тиббӣ';
    if (env.includes('Лаборатория')) return 'Озмоишгоҳ / Маркази илмӣ';
    if (env.includes('Студия')) return 'Студияи эҷодӣ / Наворгирӣ';
    if (env.includes('Производство')) return 'Истеҳсолот / Сехи муҳандисӣ';
  }
  return env;
}

/**
 * Helper to translate demand level
 */
export function getLocalizedDemand(demand: string, lang: Language): string {
  const match = DEMAND_LOCALIZATIONS[demand];
  if (match) return match[lang] || match.ru;
  return demand;
}

/**
 * Helper to extract / clean localized profession title
 */
const PROFESSION_TITLE_TRANSLATIONS: Record<string, { en: string; tg: string; ru: string }> = {
  'Software Engineer': { en: 'Software Engineer', tg: 'Муҳандиси барномасоз', ru: 'Software Engineer' },
  'AI / ML Engineer': { en: 'AI / ML Engineer', tg: 'Муҳандиси зеҳни сунъӣ (AI)', ru: 'AI / ML Engineer' },
  'Инженер по машинному обучению (AI/ML)': { en: 'AI & Machine Learning Engineer', tg: 'Муҳандиси зеҳни сунъӣ (AI/ML)', ru: 'Инженер по машинному обучению (AI/ML)' },
  'Нейрохирург': { en: 'Neurosurgeon', tg: 'Ҷарроҳи асаб (Нейрохирург)', ru: 'Нейрохирург' },
  'Кардиолог': { en: 'Cardiologist', tg: 'Кардиолог (Табиби дил)', ru: 'Кардиолог' },
  'Инженер-робототехник': { en: 'Robotics Engineer', tg: 'Муҳандиси робототехника', ru: 'Инженер-робототехник' },
  'Инженер электрокаров': { en: 'EV & Autonomous Systems Engineer', tg: 'Муҳандиси электромобилҳо', ru: 'Инженер электрокаров' },
  'UI/UX & Product Designer': { en: 'UI/UX & Product Designer', tg: 'Тарроҳи UI/UX ва маҳсулот', ru: 'UI/UX & Продуктовый дизайнер' },
  'UI/UX-дизайнер': { en: 'UI/UX Designer', tg: 'Тарроҳи UI/UX', ru: 'UI/UX-дизайнер' },
  '3D Motion Artist': { en: '3D Motion Artist', tg: 'Ҳунарманди 3D Motion', ru: '3D Motion-дизайнер' },
  '3D-моушн дизайнер': { en: '3D Motion Designer', tg: 'Тарроҳи 3D Motion', ru: '3D-моушн дизайнер' },
  'Специалист по кибербезопасности': { en: 'Cybersecurity Specialist', tg: 'Мутахассиси амнияти киберӣ', ru: 'Специалист по кибербезопасности' },
  'Cloud Architect': { en: 'Cloud Solutions Architect', tg: 'Меъмори қарорҳои абрӣ (Cloud)', ru: 'Cloud Architect' },
  'Архитектор облачных решений': { en: 'Cloud Solutions Architect', tg: 'Меъмори қарорҳои абрӣ (Cloud)', ru: 'Архитектор облачных решений' },
  'Пилот гражданской авиации': { en: 'Commercial Airline Pilot', tg: 'Ҳавонаварди авиатсияи гражданӣ', ru: 'Пилот гражданской авиации' },
  'Авиаконструктор': { en: 'Aerospace & Aeronautical Engineer', tg: 'Муҳандиси соҳаи авиатсия', ru: 'Авиаконструктор' },
  'Frontend-разработчик': { en: 'Frontend Developer', tg: 'Барномасози Frontend', ru: 'Frontend-разработчик' },
  'Backend-разработчик': { en: 'Backend Developer', tg: 'Барномасози Backend', ru: 'Backend-разработчик' },
  'Fullstack-разработчик': { en: 'Fullstack Developer', tg: 'Барномасози Fullstack', ru: 'Fullstack-разработчик' },
  'Data Scientist': { en: 'Data Scientist', tg: 'Олими маълумот (Data Scientist)', ru: 'Data Scientist' },
  'Аналитик данных': { en: 'Data Analyst', tg: 'Таҳлилгари маълумот (Data Analyst)', ru: 'Аналитик данных' },
  'Product Manager': { en: 'Product Manager', tg: 'Мудири маҳсулот (Product Manager)', ru: 'Product Manager' },
  'DevOps-инженер': { en: 'DevOps Engineer', tg: 'Муҳандиси DevOps', ru: 'DevOps-инженер' },
  'Проджект-менеджер': { en: 'Project Manager', tg: 'Мудири лоиҳаҳо (Project Manager)', ru: 'Проджект-менеджер' },
  'Архитектор': { en: 'Architect', tg: 'Меъмор (Архитектор)', ru: 'Архитектор' },
  'Биотехнолог': { en: 'Biotechnologist', tg: 'Биотехнолог', ru: 'Биотехнолог' },
  'Финансовый аналитик': { en: 'Financial Analyst', tg: 'Таҳлилгари молиявӣ', ru: 'Финансовый аналитик' },
  'Психолог': { en: 'Psychologist', tg: 'Равоншинос (Психолог)', ru: 'Психолог' },
  'Генетик': { en: 'Geneticist & Genomic Researcher', tg: 'Мутахассиси генетика', ru: 'Генетик' },
};

export function getLocalizedProfessionTitle(title: string, lang: Language): string {
  if (!title) return '';

  // Direct dictionary check
  if (PROFESSION_TITLE_TRANSLATIONS[title]) {
    return PROFESSION_TITLE_TRANSLATIONS[title][lang] || PROFESSION_TITLE_TRANSLATIONS[title].ru;
  }

  // Titles often have format: "English Title (Русский заголовок)" or "Русский заголовок (English Title)"
  const matchParen = title.match(/^(.*?)\s*\((.*?)\)$/);
  if (matchParen) {
    const part1 = matchParen[1].trim();
    const part2 = matchParen[2].trim();
    const isPart1English = /^[A-Za-z0-9\s/&+,.-]+$/.test(part1);
    const isPart2English = /^[A-Za-z0-9\s/&+,.-]+$/.test(part2);

    if (lang === 'en') {
      if (isPart1English) return part1;
      if (isPart2English) return part2;
      return part1;
    } else if (lang === 'ru') {
      if (!isPart1English) return part1;
      if (!isPart2English) return part2;
      return title;
    } else if (lang === 'tg') {
      if (PROFESSION_TITLE_TRANSLATIONS[part1]) return PROFESSION_TITLE_TRANSLATIONS[part1].tg;
      if (PROFESSION_TITLE_TRANSLATIONS[part2]) return PROFESSION_TITLE_TRANSLATIONS[part2].tg;
      return title;
    }
  }

  return title;
}

/**
 * Helper to localize battle pros, cons, skills, and descriptions
 */
export function getLocalizedBattleText(text: string, lang: Language): string {
  if (!text) return '';
  if (lang === 'ru') return text;

  // Potential earnings
  if (text.includes('Высокий потенциал роста доходов') || text.includes('потенциал роста доходов')) {
    const maxMatch = text.match(/до\s*([\d\s,]+(?:\$|сомони|руб|usd|tjs|rub|\w+)?)/i);
    const maxStr = maxMatch ? maxMatch[1] : '';
    if (lang === 'en') return `High revenue growth potential ${maxStr ? `(up to ${maxStr})` : ''}`.trim();
    if (lang === 'tg') return `Имконияти баланди афзоиши даромад ${maxStr ? `(то ${maxStr})` : ''}`.trim();
  }

  // 100% remote
  if (text.includes('100% удаленной работы')) {
    if (lang === 'en') return '100% remote work feasibility from anywhere in the world';
    if (lang === 'tg') return 'Имконияти кори 100% фосилавӣ аз дилхоҳ нуқтаи ҷаҳон';
  }

  // Flexible hybrid
  if (text.includes('гибридный график')) {
    if (lang === 'en') return 'Flexible hybrid and location-independent schedule';
    if (lang === 'tg') return 'Реҷаи кории фасеҳи гибридӣ ва озод';
  }

  // Wide opportunities
  if (text.includes('Широкие возможности для реализации')) {
    const sphereMatch = text.match(/в сфере «(.*?)»/);
    const sphere = sphereMatch ? getLocalizedSector(sphereMatch[1], lang) : '';
    if (lang === 'en') return `Broad career opportunities in ${sphere || 'the specialized field'}`;
    if (lang === 'tg') return `Имкониятҳои васеи рушди касбӣ дар бахши ${sphere || 'соҳа'}`;
  }

  // High stress & responsibility
  if (text.includes('Высокий уровень психологического напряжения') || text.includes('ответственности')) {
    if (lang === 'en') return 'High cognitive workload and critical decision accountability';
    if (lang === 'tg') return 'Сатҳи баланди фишори равонӣ ва масъулияти ҷиддӣ дар кор';
  }

  // Lengthy study period
  if (text.includes('Длительный и сложный период фундаментального обучения')) {
    const yearsMatch = text.match(/(\d+[–-]\d+|\d+\+?)\s*лет/);
    const years = yearsMatch ? yearsMatch[1] : '';
    if (lang === 'en') return `Rigorous and lengthy academic preparation ${years ? `(${years} years)` : ''}`.trim();
    if (lang === 'tg') return `Давраи тӯлонӣ ва мураккаби таҳсилоти бунёдӣ ${years ? `(${years} сол)` : ''}`.trim();
  }

  // On-site presence
  if (text.includes('очное присутствие')) {
    if (lang === 'en') return 'Mandatory regular on-site presence at facilities or operations';
    if (lang === 'tg') return 'Ҳузури ҳатмии рӯ ба рӯ дар ҷои кор ё иншоот лозим аст';
  }

  // Continuous learning
  if (text.includes('непрерывно изучать новые технологии') || text.includes('стек')) {
    if (lang === 'en') return 'Need to continually learn new technologies and update tools';
    if (lang === 'tg') return 'Зарурати омӯзиши пайвастаи технологияҳои нав ва таҷдиди дониш';
  }

  // High competition at start
  if (text.includes('Высокая конкуренция на этапе старта') || text.includes('Junior')) {
    if (lang === 'en') return 'Intense initial competition at entry level (Junior stage)';
    if (lang === 'tg') return 'Рақобати шадид дар давраи оғози фаъолият (сатҳи Junior)';
  }

  // Skills translation dictionary
  const skillMap: Record<string, { en: string; tg: string }> = {
    'Аналитическое мышление': { en: 'Analytical Thinking', tg: 'Тафаккури таҳлилӣ' },
    'Критическое мышление': { en: 'Critical Thinking', tg: 'Тафаккури интиқодӣ' },
    'Командная работа': { en: 'Teamwork & Collaboration', tg: 'Кори дастаҷамъона' },
    'Коммуникация': { en: 'Communication Skills', tg: 'Маҳорати муошират' },
    'Управление проектами': { en: 'Project Management', tg: 'Идоракунии лоиҳаҳо' },
    'Лидерство': { en: 'Leadership & Mentoring', tg: 'Роҳбарӣ ва пешсафӣ' },
    'Клиническая диагностика': { en: 'Clinical Diagnostics', tg: 'Ташхиси клиникӣ' },
    'Хирургические навыки': { en: 'Surgical Skills', tg: 'Малакаҳои ҷарроҳӣ' },
    'Эмпатия': { en: 'Empathy & Patient Care', tg: 'Ҳамдардӣ ва муносибат' },
    'Математическая статистика': { en: 'Mathematical Statistics', tg: 'Омори математикӣ' },
    'Алгоритмы и структуры данных': { en: 'Algorithms & Data Structures', tg: 'Алгоритмҳо ва сохторҳои додаҳо' },
    'Инженерное проектирование': { en: 'Engineering Design & CAD', tg: 'Лоиҳакашии муҳандисӣ' },
    'Быстрая обучаемость': { en: 'Fast Learning Agility', tg: 'Омӯзиши босуръат' },
    'Внимание к деталям': { en: 'Attention to Detail', tg: 'Диққат ба ҷузъиёт' },
    'Стрессоустойчивость': { en: 'Stress Resilience', tg: 'Устуворӣ ба стресс' },
    'Системное мышление': { en: 'Systems Thinking', tg: 'Тафаккури системавӣ' },
    'Креативность': { en: 'Creativity & Design', tg: 'Эҷодкорӣ ва тарроҳӣ' },
    'Переговоры': { en: 'Negotiation Skills', tg: 'Музокирот ва гуфтушунид' },
    'Стратегическое планирование': { en: 'Strategic Planning', tg: 'Банақшагирии стратегӣ' },
    'Анализ данных': { en: 'Data Analytics', tg: 'Таҳлили додаҳо' },
    'Машинное обучение': { en: 'Machine Learning', tg: 'Омӯзиши мошинӣ' },
    'Программирование': { en: 'Software Programming', tg: 'Барномасозӣ' },
    'Архитектура ПО': { en: 'Software Architecture', tg: 'Меъмории нармафзор' },
  };

  if (skillMap[text]) {
    return skillMap[text][lang] || text;
  }

  // Work environment patterns
  if (text.includes('Удаленно') || text.includes('Удаленная')) {
    if (lang === 'en') return text.replace(/Удаленно/g, 'Remote').replace(/Удаленная работа/g, 'Remote Work');
    if (lang === 'tg') return text.replace(/Удаленно/g, 'Фосилавӣ').replace(/Удаленная работа/g, 'Кори фосилавӣ');
  }
  if (text.includes('Гибрид') || text.includes('Гибридный')) {
    if (lang === 'en') return text.replace(/Гибридный/g, 'Hybrid').replace(/Гибрид/g, 'Hybrid');
    if (lang === 'tg') return text.replace(/Гибридный/g, 'Гибридӣ').replace(/Гибрид/g, 'Гибридӣ');
  }
  if (text.includes('Офис') || text.includes('В офисе')) {
    if (lang === 'en') return text.replace(/В офисе/g, 'In Office').replace(/Офис/g, 'Office');
    if (lang === 'tg') return text.replace(/В офисе/g, 'Дар офис').replace(/Офис/g, 'Офис');
  }

  return text;
}

/**
 * Localized salary formatter for battle and cards
 */
export function getLocalizedSalary(salary: any, lang: Language): string {
  if (!salary) return '';
  let salaryStr = typeof salary === 'string' 
    ? salary 
    : (salary.display || (salary.min && salary.max ? `${salary.min.toLocaleString()} – ${salary.max.toLocaleString()} ₽` : ''));

  if (!salaryStr) return '';
  if (lang === 'ru') return salaryStr;

  // If already in USD / international format
  if (salaryStr.includes('$')) {
    if (lang === 'en') return salaryStr.replace('в мес', '/ mo').replace('в месяц', '/ month').replace('₽', '').trim();
    if (lang === 'tg') return salaryStr.replace('в мес', 'дар як моҳ').replace('в месяц', 'дар як моҳ').trim();
    return salaryStr;
  }

  // If format is like "90 000 – 140 000 ₽" or "180 000 – 320 000 ₽"
  const numMatches = salaryStr.match(/\d[\d\s]*/g);
  if (numMatches && numMatches.length >= 2) {
    const minRub = parseInt(numMatches[0].replace(/\s/g, ''), 10);
    const maxRub = parseInt(numMatches[1].replace(/\s/g, ''), 10);

    if (lang === 'en') {
      const minUsd = Math.round(minRub / 90 / 100) * 100;
      const maxUsd = Math.round(maxRub / 90 / 100) * 100;
      return `$${minUsd.toLocaleString('en-US')} – $${maxUsd.toLocaleString('en-US')} / mo`;
    }

    if (lang === 'tg') {
      const minTjs = Math.round(minRub / 9 / 500) * 500;
      const maxTjs = Math.round(maxRub / 9 / 500) * 500;
      return `${minTjs.toLocaleString('ru-RU')} – ${maxTjs.toLocaleString('ru-RU')} сомонӣ`;
    }
  }

  if (lang === 'tg') {
    return salaryStr.replace(/₽/g, 'сомонӣ').replace(/руб\.?/g, 'сомонӣ').replace(/в месяц/g, 'дар як моҳ').replace(/в мес/g, 'дар як моҳ');
  }
  if (lang === 'en') {
    return salaryStr.replace(/₽/g, '$').replace(/руб\.?/g, 'USD').replace(/в месяц/g, '/ month').replace(/в мес/g, '/ mo');
  }

  return salaryStr;
}

/**
 * Helper to localize education years
 */
export function getLocalizedEducationYears(yearsStr: string, lang: Language): string {
  if (!yearsStr) return '';
  if (lang === 'ru') return yearsStr;
  
  if (lang === 'en') {
    return yearsStr.replace(/лет|года|год/g, 'years').replace(/мес\./g, 'mos');
  }
  if (lang === 'tg') {
    return yearsStr.replace(/лет|года|год/g, 'сол').replace(/мес\./g, 'моҳ');
  }
  return yearsStr;
}

/**
 * Localized cognitive summary based on dominant trait
 */
export function getLocalizedCognitiveSummary(trait: TraitKey, lang: Language): string {
  const arch = ARCHETYPE_LOCALIZATIONS[trait] || ARCHETYPE_LOCALIZATIONS.analytical;
  const archName = arch.name[lang] || arch.name.ru;

  if (lang === 'en') {
    return `Your cognitive profile demonstrates a strong synergy with «${archName}». You possess exceptional aptitude in strategic thinking, problem-solving, and adaptability, allowing you to thrive at the intersection of modern technologies and impactful practical innovation.`;
  }
  if (lang === 'tg') {
    return `Профили равонии шумо майли қавӣ ба самти «${archName}»-ро нишон медиҳад. Шумо дорои иқтидори баланд ва тафаккури системавӣ мебошед, ки имкон медиҳад дар пайвасти технологияҳои муосир ва фоидаи амалӣ ба муваффақиятҳои баланд ноил шавед.`;
  }
  return `Ваш психологический профиль демонстрирует выраженную склонность к направлению «${archName}». Вы обладаете сильным потенциалом и системным мышлением, что позволяет вам добиваться выдающихся результатов на стыке современных технологий и практической пользы.`;
}

/**
 * Localized fit reasons for a recommended profession
 */
export function getLocalizedFitReasons(rec: CareerRecommendation, lang: Language): string[] {
  const prof = rec.profession;
  const env = getLocalizedWorkEnv(prof.workEnvironment, lang);
  const demand = getLocalizedDemand(prof.demandLevel, lang);
  const category = getLocalizedSector(prof.category, lang);

  if (lang === 'en') {
    return [
      `High synergy with your cognitive traits and high-value aptitude scales.`,
      `Perfect alignment with your preferred thinking style and working environment: ${env}.`,
      `High-growth career trajectory with market outlook rated as «${demand}».`,
      `Strong alignment with your core interest in ${category}.`
    ];
  }

  if (lang === 'tg') {
    return [
      `Мувофиқати баланд бо тарзи тафаккур ва шкалаҳои асосии қобилиятҳои шумо.`,
      `Мутобиқати комил бо муҳити кории дилхоҳ ва тарзи кор: ${env}.`,
      `Самти хеле ояндадор бо сатҳи талаботи «${demand}» дар бозори меҳнат.`,
      `Ҳамоҳангии қавӣ бо шавқу завқи шумо дар соҳаи ${category}.`
    ];
  }

  return rec.fitReasons && rec.fitReasons.length > 0 ? rec.fitReasons : [
    `Высокая синергия вашего профиля по ключевым шкалам способностей.`,
    `Соответствие вашему стилю мышления и идеальной рабочей среде: ${env}.`,
    `Перспективное направление с уровнем востребованности «${demand}».`
  ];
}

/**
 * Localized Pros / Advantages (Афзалиятҳо ва ҷиҳатҳои мусбат)
 */
export function getLocalizedPros(prof: Profession, lang: Language): string[] {
  if (lang === 'en') {
    return [
      `High market demand through 2030+ across regional and global markets`,
      `Strong career growth and high earning potential at Senior/Lead levels`,
      `Flexible modern format (${getLocalizedWorkEnv(prof.workEnvironment, 'en')}) with modern digital tools`,
      `Opportunities for continuous learning, innovation, and leadership impact`
    ];
  }
  if (lang === 'tg') {
    return [
      `Талаботи баланди устувор то соли 2030+ дар бозори минтақавӣ ва ҷаҳонӣ`,
      `Имконияти баланди даромад ва рушди касбӣ то сатҳи Senior / Роҳбар`,
      `Формати муосири фасеҳ (${getLocalizedWorkEnv(prof.workEnvironment, 'tg')}) ва истифодаи абзорҳои пешрафта`,
      `Имконияти омӯзиши пайваста, навоварӣ ва таъсири мусбат ба ҷомеа`
    ];
  }
  return [
    `Высокая востребованность до 2030+ на региональном и международном рынках`,
    `Быстрый карьерный рост и высокий уровень дохода на позициях Middle / Senior`,
    `Современный гибкий формат работы (${prof.workEnvironment})`,
    `Возможность постоянного профессионального развития и лидерского влияния`
  ];
}

/**
 * Localized Cons / Challenges (Мушкилот ва ҷонибҳои сахт)
 */
export function getLocalizedCons(prof: Profession, lang: Language): string[] {
  if (lang === 'en') {
    return [
      `Requires consistent self-education and keeping pace with rapid tech evolution`,
      `High cognitive responsibility and attention to detail in complex projects`,
      `Intensive workload during product release phases and tight milestones`
    ];
  }
  if (lang === 'tg') {
    return [
      `Омӯзиши пайвастаи худиро талаб мекунад, то аз пешрафти босуръати соҳа қафо намонед`,
      `Масъулияти баланди фикрӣ ва диққати ҷиддӣ ба ҷузъиёт дар лоиҳаҳои мураккаб`,
      `Сарбории зиёд ҳангоми супоридани марҳилаҳои муҳими кор ва мӯҳлатҳои кӯтоҳ`
    ];
  }
  return [
    `Необходимость непрерывного самообразования из-за быстрого обновления технологий`,
    `Высокая интеллектуальная ответственность и внимание к сложным деталям`,
    `Периодические дедлайны и высокая концентрация при сдаче ключевых этапов`
  ];
}

/**
 * Localized 3-stage Career Roadmap
 */
export function getLocalizedRoadmap(
  topProf: Profession | undefined,
  lang: Language
): Array<{ stepTitle: string; actionItems: string[] }> {
  if (!topProf) return [];
  const subjects = topProf.schoolSubjects?.slice(0, 3).join(', ') || '';
  const hardSkills = topProf.keySkills?.hardSkills?.slice(0, 3).join(', ') || '';
  const majors = topProf.recommendedEducation?.majors?.slice(0, 2).join(' / ') || '';
  const unis = topProf.recommendedEducation?.topUniversities?.slice(0, 3).join(', ') || '';
  const seniorSalary = topProf.salaryRange?.senior || '';

  if (lang === 'en') {
    return [
      {
        stepTitle: '01. Foundations & Core Competencies (0–12 months)',
        actionItems: [
          `Strengthen academic background in key subjects: ${subjects}`,
          `Master entry-level tools and industry software: ${hardSkills}`,
          `Build your first independent portfolio project or participate in competitions`
        ]
      },
      {
        stepTitle: '02. Professional Higher Education (1–4 years)',
        actionItems: [
          `Enroll in targeted specialized programs: ${majors}`,
          `Target leading institutions & academic centers: ${unis}`,
          `Actively participate in hackathons, research conferences, and summer internships`
        ]
      },
      {
        stepTitle: '03. Growth to Senior & Leadership (3–6+ years)',
        actionItems: [
          `Reach top compensation bracket (Senior tier: ${seniorSalary})`,
          `Lead complex cross-functional teams, build personal brand, and mentor emerging talents`,
          `Obtain international certifications and drive strategic industry initiatives`
        ]
      }
    ];
  }

  if (lang === 'tg') {
    return [
      {
        stepTitle: '01. Поя ва малакаҳои асосӣ (0–12 моҳ)',
        actionItems: [
          `Тақвияти дониш аз рӯи фанҳои асосии мактабӣ: ${subjects}`,
          `Омӯзиши нармафзор ва абзорҳои ихтисосӣ: ${hardSkills}`,
          `Иҷрои аввалин лоиҳаи шахсӣ барои портфолио ё ширкат дар олимпиадаҳо`
        ]
      },
      {
        stepTitle: '02. Таҳсилоти олии касбӣ (1–4 сол)',
        actionItems: [
          `Дохилшавӣ ба ихтисосҳои мувофиқи донишгоҳӣ: ${majors}`,
          `Интихоби донишгоҳҳо ва марказҳои пешқадам: ${unis}`,
          `Иштирок дар хакатонҳо, конфронсҳои илмӣ ва аввалин таҷрибаомӯзиҳои донишҷӯӣ`
        ]
      },
      {
        stepTitle: '03. Рушд то сатҳи Senior / Роҳбар (3–6+ сол)',
        actionItems: [
          `Расидан ба сатҳи баланди даромад (зинаи Senior: ${seniorSalary})`,
          `Идоракунии дастаҳо, эҷоди бренди шахсӣ ва менторӣ барои мутахассисони навкор`,
          `Гирифтани шаҳодатномаҳои байналмилалӣ ва иштирок дар лоиҳаҳои бузурги соҳавӣ`
        ]
      }
    ];
  }

  return [
    {
      stepTitle: '01. Фундамент и базовые навыки (0–12 месяцев)',
      actionItems: [
        `Углубить подготовку по ключевым школьным предметам: ${subjects}`,
        `Освоить профильное ПО и инструменты: ${hardSkills}`,
        `Выполнить свой первый самостоятельный кейс или олимпиадную задачу`
      ]
    },
    {
      stepTitle: '02. Профессиональное образование (1–4 года)',
      actionItems: [
        `Поступление на профильные специальности: ${majors}`,
        `Ориентир на ведущие вузы и колледжи: ${unis}`,
        `Участие в хакатонах, научных конференциях и студенческих стажировках`
      ]
    },
    {
      stepTitle: '03. Карьерный рост до Senior / Lead (3–6+ лет)',
      actionItems: [
        `Выход на уровень дохода Senior: ${seniorSalary}`,
        `Управление проектами, формирование личного бренда и менторство начинающих специалистов`,
        `Международные сертификации и участие в ключевых отраслевых проектах`
      ]
    }
  ];
}

/**
 * Localized Profession Badges
 */
export const BADGE_LOCALIZATIONS: Record<string, LocalizedText> = {
  'Топ спрос 2026': { ru: 'Топ спрос 2026', en: 'Top Demand 2026', tg: 'Талаботи баланд 2026' },
  'Топ-тренд 2026': { ru: 'Топ-тренд 2026', en: 'Top Trend 2026', tg: 'Тамоюли пешсаф 2026' },
  'Высокий доход': { ru: 'Высокий доход', en: 'High Income', tg: 'Даромади баланд' },
  'Стабильный спрос': { ru: 'Стабильный спрос', en: 'Stable Demand', tg: 'Талаботи устувор' },
  'Международный рынок': { ru: 'Международный рынок', en: 'Global Market', tg: 'Бозори байналмилалӣ' },
  'Инновационный трек': { ru: 'Инновационный трек', en: 'Innovation Track', tg: 'Самти инноватсионӣ' },
  'Критический дефицит': { ru: 'Критический дефицит', en: 'Critical Shortage', tg: 'Касби нодир' },
  'Удаленный формат': { ru: 'Удаленный формат', en: '100% Remote Format', tg: 'Формати фосилавӣ' },
  'Быстрый старт': { ru: 'Быстрый старт', en: 'Fast Track Entry', tg: 'Оғози зуд' },
  'Будущее 2030': { ru: 'Будущее 2030', en: 'Future 2030+', tg: 'Ояндаи 2030+' },
};

export function getLocalizedProfessionBadge(badge: string | undefined, lang: Language): string {
  if (!badge) return '';
  if (lang === 'ru') return badge;
  const match = BADGE_LOCALIZATIONS[badge];
  if (match) return match[lang] || match.ru;
  if (lang === 'en') {
    if (badge.includes('спрос')) return 'Top Demand';
    if (badge.includes('доход')) return 'High Income';
    if (badge.includes('тренд')) return 'Top Trend';
    if (badge.includes('рынок')) return 'Global Market';
    return badge;
  }
  return badge;
}

/**
 * Localized School Subjects
 */
export const SCHOOL_SUBJECTS_LOCALIZATIONS: Record<string, LocalizedText> = {
  'Информатика': { ru: 'Информатика', en: 'Computer Science', tg: 'Информатика' },
  'Алгебра и геометрия': { ru: 'Алгебра и геометрия', en: 'Algebra & Geometry', tg: 'Алгебра ва геометрия' },
  'Математика': { ru: 'Математика', en: 'Mathematics', tg: 'Математика' },
  'Английский язык': { ru: 'Английский язык', en: 'English Language', tg: 'Забони англисӣ' },
  'Биология': { ru: 'Биология', en: 'Biology', tg: 'Биология' },
  'Химия': { ru: 'Химия', en: 'Chemistry', tg: 'Химия' },
  'Физика': { ru: 'Физика', en: 'Physics', tg: 'Физика' },
  'Обществознание': { ru: 'Обществознание', en: 'Social Studies', tg: 'Ҷомеашиносӣ' },
  'История': { ru: 'История', en: 'World History', tg: 'Таърих' },
  'Литература': { ru: 'Литература', en: 'Literature & Creative Writing', tg: 'Адабиёт' },
  'Черчение': { ru: 'Черчение', en: 'Technical Drafting & CAD', tg: 'Нақшакашӣ' },
  'География': { ru: 'География', en: 'Geography & Earth Science', tg: 'Ҷуғрофия' },
  'Изобразительное искусство': { ru: 'Изобразительное искусство', en: 'Fine Arts & Drawing', tg: 'Санъати тасвирӣ' },
  'Экономика': { ru: 'Экономика', en: 'Economics', tg: 'Иқтисодиёт' },
};

export function getLocalizedSchoolSubject(subject: string, lang: Language): string {
  if (!subject) return '';
  if (lang === 'ru') return subject;
  const match = SCHOOL_SUBJECTS_LOCALIZATIONS[subject.trim()];
  if (match) return match[lang] || match.ru;
  return subject;
}

/**
 * Localized Education Degrees
 */
export const DEGREE_LOCALIZATIONS: Record<string, LocalizedText> = {
  'Бакалавриат / Специалитет': {
    ru: 'Бакалавриат / Специалитет',
    en: "Bachelor's / Specialist Degree",
    tg: 'Бакалавриат / Ихтисоси олӣ'
  },
  'Бакалавриат / Профильные курсы': {
    ru: 'Бакалавриат / Профильные курсы',
    en: "Bachelor's Degree / Certified Courses",
    tg: 'Бакалавриат / Курсҳои тахассусӣ'
  },
  'Высшее медицинское (Специалитет + Ординатура)': {
    ru: 'Высшее медицинское (Специалитет + Ординатура)',
    en: 'Higher Medical Degree (MD + Residency)',
    tg: 'Таҳсилоти олии тиббӣ (Ихтисос + Ординатура)'
  },
  'Магистратура / PhD': {
    ru: 'Магистратура / PhD',
    en: "Master's / Ph.D.",
    tg: 'Магистратура / Докторантура (PhD)'
  },
  'Колледж / Профильные курсы': {
    ru: 'Колледж / Профильные курсы',
    en: 'College / Vocational Certification',
    tg: 'Коллеҷ / Курсҳои ихтисосӣ'
  }
};

export function getLocalizedDegreeType(degree: string | undefined, lang: Language): string {
  if (!degree) {
    if (lang === 'en') return "Bachelor's / Specialist Degree";
    if (lang === 'tg') return 'Бакалавриат / Ихтисоси олӣ';
    return 'Бакалавриат / Специалитет';
  }
  if (lang === 'ru') return degree;
  const match = DEGREE_LOCALIZATIONS[degree];
  if (match) return match[lang] || match.ru;
  if (lang === 'en') {
    if (degree.includes('медицин')) return 'Higher Medical Degree (MD + Residency)';
    if (degree.includes('Магистр') || degree.includes('PhD')) return "Master's / Ph.D.";
    if (degree.includes('Колледж')) return 'College / Professional Certification';
    return "Bachelor's / Specialist Degree";
  }
  if (lang === 'tg') {
    if (degree.includes('медицин')) return 'Таҳсилоти олии тиббӣ (MD + Ординатура)';
    if (degree.includes('Магистр')) return 'Магистратура / PhD';
    return 'Бакалавриат / Ихтисоси олӣ';
  }
  return degree;
}

/**
 * Localized Universities & Academic Centers
 */
export const UNIVERSITY_LOCALIZATIONS: Record<string, LocalizedText> = {
  'МФТИ': { ru: 'МФТИ', en: 'MIPT (Moscow Institute of Physics and Technology)', tg: 'МФТИ' },
  'ВШЭ': { ru: 'ВШЭ', en: 'HSE University (Higher School of Economics)', tg: 'ВШЭ' },
  'ИТМО': { ru: 'ИТМО', en: 'ITMO University', tg: 'ИТМО' },
  'МГУ': { ru: 'МГУ', en: 'MSU (Lomonosov Moscow State University)', tg: 'МГУ' },
  'СПбГУ': { ru: 'СПбГУ', en: 'SPbU (Saint Petersburg State University)', tg: 'СПбГУ' },
  'МГТУ им. Баумана': { ru: 'МГТУ им. Баумана', en: 'Bauman Moscow State Technical University', tg: 'МГТУ ба номи Бауман' },
  'МИРЭА': { ru: 'МИРЭА', en: 'MIREA Russian Technological University', tg: 'МИРЭА' },
  'ТГМУ': { ru: 'ТГМУ', en: 'Avicenna Tajik State Medical University', tg: 'ДДТТ ба номи Абӯалӣ ибни Сино' },
  'ТНУ': { ru: 'ТНУ', en: 'Tajik National University (TNU)', tg: 'Донишгоҳи миллии Тоҷикистон' },
  'ТТУ им. М. Осими': { ru: 'ТТУ им. М. Осими', en: 'Tajik Technical University named after M. Osimi', tg: 'ДТТ ба номи М. Осимӣ' },
  'Сеченовский университет': { ru: 'Сеченовский университет', en: 'Sechenov First Moscow State Medical University', tg: 'Донишгоҳи Сеченов' },
  'РНИМУ им. Пирогова': { ru: 'РНИМУ им. Пирогова', en: 'Pirogov Russian National Research Medical University', tg: 'РНИМУ ба номи Пирогов' },
  'Сколтех': { ru: 'Сколтех', en: 'Skoltech (Skolkovo Institute of Science and Technology)', tg: 'Сколтех' },
  'Иннополис': { ru: 'Иннополис', en: 'Innopolis University', tg: 'Донишгоҳи Иннополис' },
  'МАРХИ': { ru: 'МАРХИ', en: 'Moscow Architectural Institute (MARCHI)', tg: 'МАРХИ' },
  'ВГИК': { ru: 'ВГИК', en: 'Gerasimov Institute of Cinematography (VGIK)', tg: 'ВГИК' },
  'Британка (БВШД)': { ru: 'Британка (БВШД)', en: 'British Higher School of Art and Design', tg: 'Мактаби олии тарроҳии Бритониё' },
  'МГИМО': { ru: 'МГИМО', en: 'MGIMO University', tg: 'МГИМО' },
  'РЭУ им. Плеханова': { ru: 'РЭУ им. Плеханова', en: 'Plekhanov Russian University of Economics', tg: 'РЭУ ба номи Плеханов' },
  'Финансовый университет': { ru: 'Финансовый университет', en: 'Financial University under the Government of RF', tg: 'Донишгоҳи молиявӣ' },
};

export function getLocalizedUniversity(uni: string, lang: Language): string {
  if (!uni) return '';
  if (lang === 'ru') return uni;
  const match = UNIVERSITY_LOCALIZATIONS[uni.trim()];
  if (match) return match[lang] || match.ru;
  return uni;
}

/**
 * Localized Majors
 */
export const MAJOR_LOCALIZATIONS: Record<string, LocalizedText> = {
  'Программная инженерия': { ru: 'Программная инженерия', en: 'Software Engineering', tg: 'Муҳандисии барномавӣ' },
  'Информатика и вычислительная техника': { ru: 'Информатика и вычислительная техника', en: 'Computer Science & Engineering', tg: 'Информатика ва техникаи ҳисоббарор' },
  'Прикладная математика': { ru: 'Прикладная математика', en: 'Applied Mathematics', tg: 'Математикаи амалӣ' },
  'Прикладная информатика': { ru: 'Прикладная информатика', en: 'Applied Informatics', tg: 'Информатикаи амалӣ' },
  'Информационная безопасность': { ru: 'Информационная безопасность', en: 'Cybersecurity & InfoSec', tg: 'Амнияти иттилоотӣ' },
  'Лечебное дело': { ru: 'Лечебное дело', en: 'General Medicine', tg: 'Кори табобатӣ' },
  'Педиатрия': { ru: 'Педиатрия', en: 'Pediatrics', tg: 'Педиатрия' },
  'Биотехнология': { ru: 'Биотехнология', en: 'Biotechnology & Bioengineering', tg: 'Биотехнология' },
  'Биология': { ru: 'Биология', en: 'Biology', tg: 'Биология' },
  'Фармация': { ru: 'Фармация', en: 'Pharmacy & Pharmacology', tg: 'Фармасевтӣ' },
  'Мехатроника и робототехника': { ru: 'Мехатроника и робототехника', en: 'Mechatronics & Robotics', tg: 'Мехатроника ва робототехника' },
  'Дизайн': { ru: 'Дизайн', en: 'Digital Design & UI/UX', tg: 'Дизайн' },
  'Архитектура': { ru: 'Архитектура', en: 'Architecture & Spatial Design', tg: 'Меъморӣ' },
  'Менеджмент': { ru: 'Менеджмент', en: 'Management & Leadership', tg: 'Менеҷмент' },
  'Экономика': { ru: 'Экономика', en: 'Economics & Capital Markets', tg: 'Иқтисодиёт' },
  'Психология': { ru: 'Психология', en: 'Psychology & Cognitive Science', tg: 'Равоншиносӣ' },
  'Юриспруденция': { ru: 'Юриспруденция', en: 'Law & International Jurisprudence', tg: 'Ҳуқуқшиносӣ' },
  'Международные отношения': { ru: 'Международные отношения', en: 'International Relations & Diplomacy', tg: 'Муносибатҳои байналмилалӣ' },
  'Журналистика': { ru: 'Журналистика', en: 'Media Communications & Journalism', tg: 'Журналистика' },
  'Авиастроение': { ru: 'Авиастроение', en: 'Aeronautical & Aerospace Engineering', tg: 'Авиатсия' },
};

export function getLocalizedMajor(major: string, lang: Language): string {
  if (!major) return '';
  if (lang === 'ru') return major;
  const match = MAJOR_LOCALIZATIONS[major.trim()];
  if (match) return match[lang] || match.ru;
  return major;
}

/**
 * Localized Skills (Hard & Soft)
 */
export const SKILL_LOCALIZATIONS: Record<string, LocalizedText> = {
  'Алгоритмы и структуры данных': { ru: 'Алгоритмы и структуры данных', en: 'Algorithms & Data Structures', tg: 'Алгоритмҳо ва сохтори додаҳо' },
  'Системное мышление': { ru: 'Системное мышление', en: 'Systems Thinking', tg: 'Тафаккури системӣ' },
  'Командная работа': { ru: 'Командная работа', en: 'Teamwork & Collaboration', tg: 'Кори даставӣ' },
  'Тайм-менеджмент': { ru: 'Тайм-менеджмент', en: 'Time Management', tg: 'Идоракунии вақт' },
  'Критическое мышление': { ru: 'Критическое мышление', en: 'Critical Thinking', tg: 'Тафаккури интиқодӣ' },
  'Эмпатия': { ru: 'Эмпатия', en: 'Empathy & Active Listening', tg: 'Эмпатия' },
  'Эмоциональный интеллект': { ru: 'Эмоциональный интеллект', en: 'Emotional Intelligence', tg: 'Зеҳни эҳсосӣ' },
  'Лидерство': { ru: 'Лидерство', en: 'Strategic Leadership', tg: 'Пешвоӣ ва роҳбарӣ' },
  'Анализ данных': { ru: 'Анализ данных', en: 'Data Analytics & Statistics', tg: 'Таҳлили додаҳо' },
  'Машинное обучение': { ru: 'Машинное обучение', en: 'Machine Learning & Neural Nets', tg: 'Омӯзиши мошинӣ' },
  'Внимание к деталям': { ru: 'Внимание к деталям', en: 'Attention to Detail', tg: 'Диққат ба ҷузъиёт' },
  'Решение проблем': { ru: 'Решение проблем', en: 'Problem Solving & Troubleshooting', tg: 'Ҳалли масъалаҳо' },
  'Английский язык': { ru: 'Английский язык', en: 'Fluent English', tg: 'Забони англисӣ' },
  'Креативность': { ru: 'Креативность', en: 'Creativity & Lateral Thinking', tg: 'Эҷодкорӣ' },
  'Переговоры': { ru: 'Переговоры', en: 'Negotiation & Persuasion', tg: 'Гуфтушунид' },
  'Публичные выступления': { ru: 'Публичные выступления', en: 'Public Speaking & Presentations', tg: 'Суханронии оммавӣ' },
};

export function getLocalizedSkill(skill: string, lang: Language): string {
  if (!skill) return '';
  if (lang === 'ru') return skill;
  const match = SKILL_LOCALIZATIONS[skill.trim()];
  if (match) return match[lang] || match.ru;
  return getLocalizedBattleText(skill, lang);
}

/**
 * Localized Profession Short Descriptions
 */
export function getLocalizedShortDescription(prof: Profession, lang: Language): string {
  if (!prof) return '';
  if (lang === 'ru') return prof.shortDescription;

  const titleEn = getLocalizedProfessionTitle(prof.title, 'en');
  const sectorEn = getLocalizedSector(prof.category, 'en');

  if (lang === 'en') {
    return `Specializes as a ${titleEn} in the field of ${sectorEn}, architecting impactful solutions, driving technological and domain innovation, and delivering measurable real-world outcomes.`;
  }

  if (lang === 'tg') {
    const titleTg = getLocalizedProfessionTitle(prof.title, 'tg');
    const sectorTg = getLocalizedSector(prof.category, 'tg');
    return `Ҳамчун ${titleTg} дар соҳаи ${sectorTg} кор карда, қарорҳои муосир ва лоиҳаҳои пешқадамро татбиқ менамояд.`;
  }

  return prof.shortDescription;
}

/**
 * Localized Daily Tasks
 */
export function getLocalizedDailyTasks(prof: Profession, lang: Language): string[] {
  if (!prof || !prof.dailyTasks) return [];
  if (lang === 'ru') return prof.dailyTasks;

  const titleEn = getLocalizedProfessionTitle(prof.title, 'en');

  if (lang === 'en') {
    return [
      `Architecting and executing core workflows and domain projects as a ${titleEn}`,
      `Collaborating with cross-functional teams and stakeholders on milestone delivery`,
      `Conducting rigorous quality assurance, analysis, and optimization of end solutions`,
      `Integrating cutting-edge tools, industry frameworks, and modern best practices`
    ];
  }

  if (lang === 'tg') {
    const titleTg = getLocalizedProfessionTitle(prof.title, 'tg');
    return [
      `Тарҳрезӣ ва татбиқи вазифаҳои асосии касбӣ ҳамчун ${titleTg}`,
      `Ҳамкорӣ бо дастаи ихтисосмандон барои расидан ба натиҷаҳои баланд`,
      `Таҳлил, назорат ва беҳтарсозии сифати лоиҳаҳо ва хидматҳо`,
      `Истифодаи абзорҳо ва технологияҳои муосири соҳавӣ`
    ];
  }

  return prof.dailyTasks;
}

/**
 * Localized Day in the Life
 */
export function getLocalizedDayInTheLife(prof: Profession, lang: Language): string {
  if (!prof) return '';
  if (lang === 'ru') return prof.dayInTheLife || '';

  const titleEn = getLocalizedProfessionTitle(prof.title, 'en');

  if (lang === 'en') {
    return `Morning strategic sync with the team, deep immersive focus on solving complex high-impact challenges as a ${titleEn}, testing solutions, and the rewarding feeling of seeing your work empower thousands of users worldwide.`;
  }

  if (lang === 'tg') {
    const titleTg = getLocalizedProfessionTitle(prof.title, 'tg');
    return `Машварати пагоҳирӯзӣ бо дастаи корӣ, кори амиқу самарабахш ҳамчун ${titleTg}, санҷиши навовариҳо ва лаззат бурдан аз натиҷаи кори муфид барои ҳазорон нафар.`;
  }

  return prof.dayInTheLife || '';
}

/**
 * Localized First Steps to Start Now
 */
export function getLocalizedFirstSteps(prof: Profession, lang: Language): string[] {
  if (!prof || !prof.firstStepsToStartNow) return [];
  if (lang === 'ru') return prof.firstStepsToStartNow;

  const subject = prof.schoolSubjects?.[0] ? getLocalizedSchoolSubject(prof.schoolSubjects[0], lang) : 'key domain fundamentals';
  const major = prof.recommendedEducation?.majors?.[0] ? getLocalizedMajor(prof.recommendedEducation.majors[0], lang) : 'the target specialization';

  if (lang === 'en') {
    return [
      `Master core fundamentals in ${subject} through structured online courses (Coursera, edX, or YouTube)`,
      `Build your first hands-on pet project or portfolio case related to ${major}`,
      `Join specialized professional communities, hackathons, or student clubs to network with mentors`
    ];
  }

  if (lang === 'tg') {
    return [
      `Омӯхтани асосҳои соҳа ва фанни ${subject} тавассути курсҳои кушодаи таълимӣ`,
      `Эҷоди аввалин лоиҳаи амалӣ ё кор барои портфолио дар самти ${major}`,
      `Пайвастан ба ҷомеаҳои касбӣ, озмунҳо ва маҳфилҳои илмӣ барои дарёфти наставник`
    ];
  }

  return prof.firstStepsToStartNow;
}

/**
 * Localized Archetype Name helper
 */
export function getLocalizedArchetype(archName: string | undefined, lang: Language): string {
  if (!archName) return '';
  if (lang === 'ru') return archName;
  for (const key of Object.keys(ARCHETYPE_LOCALIZATIONS) as TraitKey[]) {
    const item = ARCHETYPE_LOCALIZATIONS[key];
    if (item.name.ru.includes(archName) || archName.includes(item.name.ru) || archName.includes(key)) {
      return item.name[lang] || item.name.ru;
    }
  }
  return archName;
}

