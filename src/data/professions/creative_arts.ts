import { Profession } from '../../types';

export const CREATIVE_ARTS_PROFESSIONS: Profession[] = [
  {
    id: 'product-designer-uiux',
    title: 'Product Designer / UI/UX Lead (Продуктовый дизайнер интерфейсов)',
    category: 'Дизайн и UI/UX',
    shortDescription: 'Проектирует удобный и визуально безупречный пользовательский опыт цифровых сервисов, супераппов и дизайн-систем.',
    dailyTasks: [
      'Создание интерактивных прототипов и экранов в Figma',
      'Проведение юзабилити-тестирований и проектирование пути пользователя (Customer Journey Map)',
      'Поддержка и развитие масштабируемых дизайн-систем (Design Tokens, Components)',
      'Тесная синхронизация с разработчиками для идеального переноса дизайна в код'
    ],
    keySkills: {
      hardSkills: ['Figma (Auto Layout, Variables, Prototypes)', 'UX-исследования и юзабилити-тесты', 'Дизайн-системы и токены', 'Типографика и сетки', 'Основы HTML/CSS/React'],
      softSkills: ['Глубокая эмпатия к людям', 'Визуальный вкус и насмотренность', 'Аргументация дизайн-решений']
    },
    matchingInterests: ['Интерфейсы', 'Графический дизайн', 'Психология восприятия', 'Эстетика цифровых продуктов'],
    thinkingType: 'Креативное и образное',
    workEnvironment: 'Офис / Удалённо (Digital)',
    schoolSubjects: ['Черчение и изо', 'Информатика', 'Обществознание', 'Английский язык'],
    recommendedEducation: {
      degreeType: 'Бакалавриат / Профильные институты дизайна + Портфолио',
      majors: ['Дизайн (Коммуникационный и цифровой дизайн)', 'Информационные технологии в дизайне'],
      topUniversities: ['ВШЭ (Школа дизайна)', 'Британская высшая школа дизайна (БВШД)', 'Строгановка', 'ИТМО'],
      estimatedYears: '3–4 года'
    },
    demandLevel: 'Очень высокий',
    careerOutlook: 'Дизайн определяет успех любого цифрового продукта на перенасыщенном рынке.',
    salaryRange: {
      junior: '80 000 – 130 000 ₽',
      middle: '170 000 – 290 000 ₽',
      senior: '320 000 – 580 000 ₽ ($4000+)',
      currency: 'RUB / USD',
      growthOutlook: '+20% в год'
    },
    remoteFeasibility: 'Полностью удалённо (100%)',
    universityMajors: ['54.03.01 Дизайн'],
    relatedProfessions: ['frontend-developer', 'game-designer', 'brand-designer'],
    traitScores: {
      analytical: 80,
      technical: 72,
      creative: 96,
      social: 88,
      entrepreneurial: 70,
      research: 82,
      practical: 88,
      organizational: 78
    },
    iconName: 'Palette',
    badge: 'Эстетика и удобство',
    dayInTheLife: 'Создание дизайн-концепции нового супераппа в Figma, проведение коридорного теста с пользователями, сборка интерактивного прототипа и передача макета в разработку.',
    firstStepsToStartNow: [
      'Установить Figma и скопировать интерфейс своего любимого приложения пиксель в пиксель',
      'Изучить книгу "Дизайн привычных вещей" Дона Нормана',
      'Освоить Auto Layout и компоненты в Figma'
    ]
  },
  {
    id: 'architect-urbanist',
    title: 'Architect & Smart City Urbanist (Архитектор / Урбанист умных городов)',
    category: 'Архитектура и урбанистика',
    shortDescription: 'Проектирует гармоничные жилые кварталы, парки, общественные пространства и концепции умных городов будущего.',
    dailyTasks: [
      'Разработка архитектурных концепций зданий, фасадов и генеральных планов',
      'Пространственный анализ плотности застройки, пешеходных потоков и инсоляции',
      '3D-визуализация проектов и создание презентационных буклетов (Rhino, Revit, Lumion)',
      'Интеграция зеленой архитектуры, безбарьерной среды и умных технологий в городскую ткань'
    ],
    keySkills: {
      hardSkills: ['3D-моделирование (Rhino / Grasshopper / Revit / SketchUp)', 'Визуализация (V-Ray / Lumion / Corona)', 'Урбанистический анализ и градостроительные нормы', 'Ручная графика и макетирование'],
      softSkills: ['Масштабное пространственное мышление', 'Эстетическое видение', 'Умение отстаивать проект перед жителями и мэрией']
    },
    matchingInterests: ['Архитектура', 'Городская среда', 'Современные здания', 'Урбанистика'],
    thinkingType: 'Пространственно-конструкторское',
    workEnvironment: 'Креативная студия / Съёмочная площадка',
    schoolSubjects: ['Рисунок и живопись', 'Геометрия и черчение', 'История искусств', 'Физика'],
    recommendedEducation: {
      degreeType: 'Бакалавриат / Специалитет (5 лет)',
      majors: ['Архитектура', 'Градостроительство'],
      topUniversities: ['МАРХИ', 'ВШЭ (Институт медиа, архитектуры и дизайна)', 'СПбГАСУ', 'КГАСУ'],
      estimatedYears: '5 лет'
    },
    demandLevel: 'Высокий',
    careerOutlook: 'Стремительная урбанизация требует переосмысления комфортной среды для миллионов горожан.',
    salaryRange: {
      junior: '70 000 – 110 000 ₽',
      middle: '140 000 – 260 000 ₽',
      senior: '280 000 – 550 000 ₽',
      currency: 'RUB / USD',
      growthOutlook: '+16% в год'
    },
    remoteFeasibility: 'Гибридный формат',
    universityMajors: ['07.03.01 Архитектура', '07.03.04 Градостроительство'],
    relatedProfessions: ['civil-structural-engineer', 'product-designer-uiux', 'environmental-ecologist'],
    traitScores: {
      analytical: 84,
      technical: 86,
      creative: 98,
      social: 78,
      entrepreneurial: 68,
      research: 78,
      practical: 90,
      organizational: 82
    },
    iconName: 'Compass',
    badge: 'Облик городов',
    dayInTheLife: 'Создание параметрической модели музея в Grasshopper, выбор экологичных материалов отделки фасада и презентация проекта на международном биеннале.',
    firstStepsToStartNow: [
      'Начать делать скетчи городских зданий и перспектив в блокноте',
      'Изучить основы параметрического моделирования в Rhino + Grasshopper',
      'Почитать книгу Яна Гейла "Города для людей"'
    ]
  },
  {
    id: 'motion-3d-artist',
    title: '3D Motion Designer & CGI Artist (3D-моушн дизайнер / CGI-художник)',
    category: 'Кино, видео и анимация',
    shortDescription: 'Создает завораживающую 3D-графику для блокбастеров, рекламы мировых брендов, клипов и презентаций Apple.',
    dailyTasks: [
      '3D-моделирование, текстурирование и процедурная анимация в Cinema 4D и Blender',
      'Симуляция физики жидкостей, тканей, дыма и частиц (Houdini)',
      'Настройка кинематографичного освещения и фотореалистичного рендера (Octane, Redshift)',
      'Финальный композитинг и цветокоррекция в After Effects'
    ],
    keySkills: {
      hardSkills: ['Cinema 4D / Blender / Houdini', 'Redshift / Octane Render', 'After Effects / Premiere Pro', 'Композитинг и колористика', 'Процедурные материалы'],
      softSkills: ['Безупречное чувство ритма и динамики', 'Художественный вкус', 'Усидчивость при рендере']
    },
    matchingInterests: ['3D-графика', 'Спецэффекты', 'Анимация', 'Кинематограф'],
    thinkingType: 'Креативное и образное',
    workEnvironment: 'Креативная студия / Съёмочная площадка',
    schoolSubjects: ['Изобразительное искусство', 'Геометрия', 'Информатика', 'Физика (оптика)'],
    recommendedEducation: {
      degreeType: 'Профильные школы CG / Онлайн-академии + Сильное портфолио',
      majors: ['Анимация и компьютерная графика', 'Медиа-арт'],
      topUniversities: ['ВГИК', 'ВШЭ (Школа дизайна / Анимация)', 'Scream School'],
      estimatedYears: '2–4 года'
    },
    demandLevel: 'Очень высокий',
    careerOutlook: 'Реклама, кино, музыкальные видео и презентации технологических продуктов нуждаются в топовом 3D-арте.',
    salaryRange: {
      junior: '80 000 – 130 000 ₽',
      middle: '170 000 – 300 000 ₽',
      senior: '320 000 – 650 000 ₽ ($4000+)',
      currency: 'RUB / USD',
      growthOutlook: '+22% в год'
    },
    remoteFeasibility: 'Полностью удалённо (100%)',
    universityMajors: ['55.05.02 Звукорежиссура и кинотелеискусство', '54.03.01 Дизайн'],
    relatedProfessions: ['film-director', 'game-developer', 'sound-designer'],
    traitScores: {
      analytical: 72,
      technical: 88,
      creative: 99,
      social: 50,
      entrepreneurial: 65,
      research: 60,
      practical: 92,
      organizational: 60
    },
    iconName: 'Film',
    badge: 'Магия визуальных эффектов',
    dayInTheLife: 'Создание процедурной анимации летающих неоновых кристаллов в Cinema 4D, рендер в Redshift с глубиной резкости и восхищенные отзывы зрителей.',
    firstStepsToStartNow: [
      'Скачать бесплатный Blender и сделать знаменитый "Blender Donut" по урокам Blender Guru',
      'Изучить 12 базовых принципов анимации Диснея',
      'Собрать свой первый 5-секундный моушн-ролик'
    ]
  },
  {
    id: 'film-director',
    title: 'Film Director / Creative Director (Кинорежиссер / Креативный режиссер)',
    category: 'Кино, видео и анимация',
    shortDescription: 'Руководит созданием фильмов, сериалов, музыкальных клипов и масштабных рекламных проектов.',
    dailyTasks: [
      'Разработка режиссерского видения, экспликации и раскадровки сценария',
      'Кастинг актеров, репетиции и работа с актерской игрой на съемочной площадке',
      'Управление съемочной группой (операторы, художники-постановщики, осветители, звук)',
      'Руководство монтажом, цветокоррекцией и финальным сведением фильма'
    ],
    keySkills: {
      hardSkills: ['Кинодраматургия и монтажное мышление', 'Работа с актерами (системы Станиславского и Чехова)', 'Постановка кадра и композиция', 'Монтаж (DaVinci Resolve / Premiere Pro)'],
      softSkills: ['Мощная харизма и лидерство', 'Умение вдохновлять команду из 100 человек', 'Глубокий психологизм']
    },
    matchingInterests: ['Кинематограф', 'Режиссура', 'Съемка видео', 'Рассказывание историй (Storytelling)'],
    thinkingType: 'Креативное и образное',
    workEnvironment: 'Креативная студия / Съёмочная площадка',
    schoolSubjects: ['Литература', 'История', 'Мировая художественная культура (МХК)', 'Обществознание'],
    recommendedEducation: {
      degreeType: 'Специалитет (5 лет)',
      majors: ['Режиссура кино и телевидения', 'Драматургия'],
      topUniversities: ['ВГИК им. Герасимова', 'Московская школа кино (МШК)', 'СПбГИКиТ', 'ГИТИС'],
      estimatedYears: '5 лет'
    },
    demandLevel: 'Высокий',
    careerOutlook: 'Бум стриминговых платформ (Кинопоиск, Иви, Netflix) создал огромный запрос на талантливых режиссеров.',
    salaryRange: {
      junior: '70 000 – 120 000 ₽',
      middle: '180 000 – 350 000 ₽',
      senior: '400 000 – 1 000 000+ ₽ (гонорары за проект/серию)',
      currency: 'RUB / USD',
      growthOutlook: '+20% в год'
    },
    remoteFeasibility: 'Только очно',
    universityMajors: ['55.05.01 Режиссура кино и телевидения'],
    relatedProfessions: ['motion-3d-artist', 'sound-designer', 'journalist-media-editor'],
    traitScores: {
      analytical: 78,
      technical: 70,
      creative: 100,
      social: 95,
      entrepreneurial: 85,
      research: 80,
      practical: 88,
      organizational: 98
    },
    iconName: 'Clapperboard',
    badge: 'Создатель историй',
    dayInTheLife: 'Команда «Мотор! Начали!», тонкая работа с эмоциональным накалом сцены с главными героями и магия зарождения живого кино на мониторе плейбэка.',
    firstStepsToStartNow: [
      'Снять и смонтировать свою первую 2-минутную короткометражку на обычный смартфон',
      'Почитать книги "Режиссура фильма" Сиднея Люмета и "Спасите котика!" Блейка Снайдера',
      'Посмотреть шедевры мирового кино (Тарковский, Нолан, Кубрик, Вильнёв) с блокнотом'
    ]
  },
  {
    id: 'sound-designer',
    title: 'Sound Designer & Music Producer (Саунд-дизайнер / Музыкальный продюсер)',
    category: 'Музыка и саунд-дизайн',
    shortDescription: 'Создает уникальные звуковые ландшафты для игр, кино, аудиосинтезаторы и продюсирует хитовые музыкальные треки.',
    dailyTasks: [
      'Запись звуковых эффектов (Foley) и синтез фантастических звуков (Serum, Vital, modular synths)',
      'Интеграция аудио в игровые движки (Wwise, FMOD, Unreal Engine)',
      'Сведение, мастеринг и пространственное аудио (Dolby Atmos)',
      'Написание саундтреков, аранжировок и саунд-брендинга'
    ],
    keySkills: {
      hardSkills: ['DAW (Ableton Live, Logic Pro, Pro Tools)', 'Аудиомидлварь (Wwise, FMOD)', 'Звуковой синтез (Subtractive, FM, Wavetable)', 'Сведение и мастеринг', 'Spatial Audio (3D-звук)'],
      softSkills: ['Абсолютный или развитый музыкальный слух', 'Креативное звуковое воображение', 'Внимание к микродеталям']
    },
    matchingInterests: ['Музыка', 'Звуковые эффекты', 'Синтезаторы', 'Создание треков'],
    thinkingType: 'Креативное и образное',
    workEnvironment: 'Креативная студия / Съёмочная площадка',
    schoolSubjects: ['Музыка', 'Физика (акустика)', 'Информатика', 'Иностранный язык'],
    recommendedEducation: {
      degreeType: 'Бакалавриат / Профильные академии звука + Портфолио',
      majors: ['Музыкальная звукорежиссура', 'Саунд-арт и саунд-дизайн'],
      topUniversities: ['ВШЭ (Саунд-арт)', 'РАМ им. Гнесиных', 'Московская школа музыки (MSM)', 'СПбГИКиТ'],
      estimatedYears: '3–4 года'
    },
    demandLevel: 'Высокий',
    careerOutlook: 'Без звука невозможно погружение в игры, кино и метаверсы.',
    salaryRange: {
      junior: '70 000 – 115 000 ₽',
      middle: '150 000 – 270 000 ₽',
      senior: '300 000 – 550 000 ₽',
      currency: 'RUB / USD',
      growthOutlook: '+18% в год'
    },
    remoteFeasibility: 'Полностью удалённо (100%)',
    universityMajors: ['53.05.03 Музыкальная звукорежиссура'],
    relatedProfessions: ['game-developer', 'motion-3d-artist', 'film-director'],
    traitScores: {
      analytical: 75,
      technical: 85,
      creative: 98,
      social: 60,
      entrepreneurial: 70,
      research: 65,
      practical: 90,
      organizational: 68
    },
    iconName: 'Headphones',
    badge: 'Архитектор звука',
    dayInTheLife: 'Синтез звука лазерного меча из записи гула высоковольтного трансформатора и струны виолончели, интеграция звука шагов в Unreal Engine через Wwise.',
    firstStepsToStartNow: [
      'Установить Ableton Live или FL Studio и написать свой первый бит/эмбиент-трек',
      'Записать на диктофон смартфона 10 бытовых звуков и сделать из них фантастический саунд-эффект',
      'Изучить основы синтеза звука (осцилляторы, фильтры, огибающие ADSR)'
    ]
  }
];
