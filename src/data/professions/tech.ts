import { Profession } from '../../types';

export const TECH_PROFESSIONS: Profession[] = [
  {
    id: 'software-engineer',
    title: 'Software Engineer (Инженер-программист)',
    category: 'IT и программирование',
    shortDescription: 'Проектирует и создает масштабируемое программное обеспечение, веб-сервисы и цифровые экосистемы.',
    dailyTasks: [
      'Проектирование архитектуры сервисов и баз данных',
      'Написание чистого, тестируемого кода на современных языках (TypeScript, Python, Go, Java)',
      'Проведение Code Review и оптимизация производительности систем',
      'Интеграция сторонних API и микросервисов'
    ],
    keySkills: {
      hardSkills: ['Алгоритмы и структуры данных', 'TypeScript/Python/Go', 'Git & CI/CD', 'SQL/PostgreSQL', 'Docker'],
      softSkills: ['Системное мышление', 'Командная работа', 'Умение разбираться в чужом коде', 'Тайм-менеджмент']
    },
    matchingInterests: ['Программирование', 'Логические головоломки', 'Создание цифровых продуктов', 'Автоматизация'],
    thinkingType: 'Алгоритмическое и математическое',
    workEnvironment: 'Офис / Удалённо (Digital)',
    schoolSubjects: ['Информатика', 'Алгебра и геометрия', 'Английский язык'],
    recommendedEducation: {
      degreeType: 'Бакалавриат / Специалитет',
      majors: ['Программная инженерия', 'Информатика и вычислительная техника', 'Прикладная математика'],
      topUniversities: ['МФТИ', 'ВШЭ', 'ИТМО', 'МГУ', 'СПбГУ'],
      estimatedYears: '4 года бакалавриата + стажировки'
    },
    demandLevel: 'Очень высокий',
    careerOutlook: 'Высочайший спрос на Fullstack и Backend инженеров во всех отраслях мировой экономики.',
    salaryRange: {
      junior: '90 000 – 140 000 ₽',
      middle: '180 000 – 320 000 ₽',
      senior: '350 000 – 650 000+ ₽ ($4000+)',
      currency: 'RUB / USD',
      growthOutlook: '+20% в год',
      note: 'Уровень дохода сильно зависит от опыта, стека технологий и международных контрактов'
    },
    remoteFeasibility: 'Полностью удалённо (100%)',
    universityMajors: ['09.03.04 Программная инженерия', '01.03.02 Прикладная математика и информатика'],
    relatedProfessions: ['backend-developer', 'frontend-developer', 'devops-engineer', 'cloud-architect'],
    traitScores: {
      analytical: 92,
      technical: 95,
      creative: 65,
      social: 45,
      entrepreneurial: 55,
      research: 70,
      practical: 88,
      organizational: 60
    },
    iconName: 'Code',
    badge: 'Топ спрос 2026',
    dayInTheLife: 'Утренний стендап с распределенной командой, проектирование нового микросервиса, написание чистого кода и радость от успешного деплоя фичи для миллионов пользователей.',
    firstStepsToStartNow: [
      'Освоить основы Python или JavaScript на платформе Stepik или freeCodeCamp',
      'Создать первый пет-проект (Telegram-бот, сайт-портфолио или парсер данных)',
      'Завести GitHub-аккаунт и выложить туда свои первые 3 репозитория'
    ]
  },
  {
    id: 'frontend-developer',
    title: 'Frontend Developer (Фронтенд-разработчик)',
    category: 'IT и программирование',
    shortDescription: 'Создает интерактивные, быстрые и красивые пользовательские интерфейсы веб-сайтов и веб-приложений.',
    dailyTasks: [
      'Разработка UI-компонентов на React, Vue или Next.js',
      'Адаптивная верстка, анимации интерфейса и обеспечение доступности (a11y)',
      'Оптимизация скорости загрузки и отзывчивости страниц',
      'Связка фронтенда с серверными REST/GraphQL API'
    ],
    keySkills: {
      hardSkills: ['TypeScript / JavaScript', 'React / Next.js / Vue', 'Tailwind CSS / CSS-in-JS', 'State management (Zustand, Redux)', 'Web Performance'],
      softSkills: ['Внимание к визуальным деталям', 'Эмпатия к пользователю', 'Быстрая адаптация к новым фреймворкам']
    },
    matchingInterests: ['Веб-разработка', 'Интерактивный дизайн', 'Анимация интерфейсов', 'Создание сайтов'],
    thinkingType: 'Креативное и образное',
    workEnvironment: 'Офис / Удалённо (Digital)',
    schoolSubjects: ['Информатика', 'Английский язык', 'Геометрия'],
    recommendedEducation: {
      degreeType: 'Бакалавриат / Профильные курсы',
      majors: ['Информационные системы и технологии', 'Прикладная информатика'],
      topUniversities: ['ИТМО', 'ВШЭ', 'МГТУ им. Баумана', 'МИРЭА'],
      estimatedYears: '3–4 года'
    },
    demandLevel: 'Очень высокий',
    careerOutlook: 'Каждому современному продукту необходим идеальный клиентский интерфейс.',
    salaryRange: {
      junior: '80 000 – 130 000 ₽',
      middle: '170 000 – 290 000 ₽',
      senior: '320 000 – 550 000 ₽ ($3500+)',
      currency: 'RUB / USD',
      growthOutlook: '+18% в год'
    },
    remoteFeasibility: 'Полностью удалённо (100%)',
    universityMajors: ['09.03.02 Информационные системы и технологии'],
    relatedProfessions: ['software-engineer', 'ui-ux-designer', 'mobile-developer'],
    traitScores: {
      analytical: 82,
      technical: 88,
      creative: 88,
      social: 60,
      entrepreneurial: 62,
      research: 60,
      practical: 92,
      organizational: 58
    },
    iconName: 'LayoutTemplate',
    badge: 'Визуальный код',
    dayInTheLife: 'Верстка сложных интерактивных графиков, превращение макета из Figma в живое веб-приложение и полировка плавных микроанимаций.',
    firstStepsToStartNow: [
      'Пройти интерактивный курс по HTML, CSS и чистому JavaScript',
      'Изучить фреймворк React и собрать интерактивное приложение (например, трекер привычек)',
      'Научиться верстать адаптивные макеты из Figma'
    ]
  },
  {
    id: 'backend-developer',
    title: 'Backend Developer (Бэкенд-разработчик)',
    category: 'IT и программирование',
    shortDescription: 'Строит серверную логику, высокоскоростные API, интеграции и масштабируемые базы данных.',
    dailyTasks: [
      'Проектирование высоконагруженных API (REST, gRPC, WebSocket)',
      'Оптимизация сложных запросов к базам данных (PostgreSQL, Redis, ClickHouse)',
      'Реализация бизнес-логики, платежных шлюзов и систем авторизации (OAuth, JWT)',
      'Обеспечение отказоустойчивости и безопасности серверной части'
    ],
    keySkills: {
      hardSkills: ['Go / Python / Java / Node.js', 'PostgreSQL / MongoDB / Redis', 'Микросервисная архитектура', 'Message Brokers (Kafka, RabbitMQ)', 'Docker'],
      softSkills: ['Аналитическое мышление', 'Упорство при поиске багов', 'Внимание к структуре данных']
    },
    matchingInterests: ['Серверная логика', 'Базы данных', 'Высокие нагрузки', 'Оптимизация'],
    thinkingType: 'Системное и архитектурное',
    workEnvironment: 'Офис / Удалённо (Digital)',
    schoolSubjects: ['Информатика', 'Алгебра', 'Логика'],
    recommendedEducation: {
      degreeType: 'Бакалавриат',
      majors: ['Программная инженерия', 'Вычислительная техника'],
      topUniversities: ['МФТИ', 'ВШЭ', 'МГТУ им. Баумана', 'СПбГУ'],
      estimatedYears: '4 года'
    },
    demandLevel: 'Очень высокий',
    careerOutlook: 'Бэкенд — невидимый двигатель любого цифрового бизнеса: от банков до онлайн-кинотеатров.',
    salaryRange: {
      junior: '90 000 – 145 000 ₽',
      middle: '190 000 – 340 000 ₽',
      senior: '360 000 – 650 000 ₽',
      currency: 'RUB / USD',
      growthOutlook: '+22% в год'
    },
    remoteFeasibility: 'Полностью удалённо (100%)',
    universityMajors: ['09.03.04 Программная инженерия'],
    relatedProfessions: ['software-engineer', 'database-administrator', 'devops-cloud-engineer'],
    traitScores: {
      analytical: 94,
      technical: 95,
      creative: 55,
      social: 40,
      entrepreneurial: 55,
      research: 72,
      practical: 92,
      organizational: 68
    },
    iconName: 'Server',
    badge: 'Двигатель систем',
    dayInTheLife: 'Проектирование схемы базы данных для миллиона заказов в секунду, написание микросервиса на Go и оптимизация ответа API до 12 миллисекунд.',
    firstStepsToStartNow: [
      'Изучить язык Go или Python и написать свой первый REST API на FastAPI или Gin',
      'Попрактиковаться в SQL и проектировании реляционных таблиц',
      'Подключить Redis для кэширования запросов'
    ]
  },
  {
    id: 'mobile-app-developer',
    title: 'Mobile App Developer (iOS / Android разработчик)',
    category: 'IT и программирование',
    shortDescription: 'Создает приложения для смартфонов, смарт-часов и планшетов, которыми пользуются миллиарды людей.',
    dailyTasks: [
      'Разработка мобильных приложений на Swift (iOS), Kotlin (Android) или Flutter',
      'Работа с мобильными сенсорами (GPS, камера, Bluetooth, биометрия)',
      'Оптимизация энергопотребления и работы в офлайн-режиме',
      'Публикация приложений в App Store и Google Play'
    ],
    keySkills: {
      hardSkills: ['Swift / SwiftUI (iOS) или Kotlin / Jetpack Compose (Android)', 'Flutter / Dart', 'Mobile UI/UX guidelines', 'REST API / GraphQL', 'SQLite / Realm'],
      softSkills: ['Эмпатия к мобильным сценариям', 'Внимание к плавности анимаций', 'Командное взаимодействие']
    },
    matchingInterests: ['Смартфоны', 'Мобильные технологии', 'Гаджеты', 'Интерфейсы'],
    thinkingType: 'Практическое и прикладное',
    workEnvironment: 'Офис / Удалённо (Digital)',
    schoolSubjects: ['Информатика', 'Английский язык', 'Геометрия'],
    recommendedEducation: {
      degreeType: 'Бакалавриат / Профильные курсы',
      majors: ['Информатика и вычислительная техника', 'Программная инженерия'],
      topUniversities: ['ИТМО', 'ВШЭ', 'МГТУ им. Баумана', 'Иннополис'],
      estimatedYears: '3–4 года'
    },
    demandLevel: 'Очень высокий',
    careerOutlook: 'Смартфон стал главным окном человека в мир, мобильные разработчики всегда востребованы.',
    salaryRange: {
      junior: '85 000 – 135 000 ₽',
      middle: '180 000 – 310 000 ₽',
      senior: '340 000 – 600 000 ₽',
      currency: 'RUB / USD',
      growthOutlook: '+20% в год'
    },
    remoteFeasibility: 'Полностью удалённо (100%)',
    universityMajors: ['09.03.01 Информатика и вычислительная техника'],
    relatedProfessions: ['software-engineer', 'frontend-developer', 'ui-ux-designer'],
    traitScores: {
      analytical: 84,
      technical: 90,
      creative: 78,
      social: 50,
      entrepreneurial: 65,
      research: 55,
      practical: 94,
      organizational: 62
    },
    iconName: 'Smartphone',
    badge: 'Мобильный мир',
    dayInTheLife: 'Реализация плавной анимации перехода между экранами на SwiftUI, тестирование работы приложения на реальном iPhone и релиз обновления в App Store.',
    firstStepsToStartNow: [
      'Установить Xcode (для iOS) или Android Studio (для Android)',
      'Собрать простое приложение-заметочник или аудиоплеер',
      'Изучить гайдлайны Apple Human Interface Guidelines и Material 3'
    ]
  },
  {
    id: 'ai-ml-engineer',
    title: 'AI / Machine Learning Engineer (Инженер по машинному обучению)',
    category: 'Искусственный интеллект',
    shortDescription: 'Обучает нейросети, создает LLM-агентов, системы компьютерного зрения и алгоритмы генеративного ИИ.',
    dailyTasks: [
      'Подготовка и фильтрация массивов обучающих данных',
      'Разработка и fine-tuning архитектур нейросетей (Transformer, Diffusion, CNN)',
      'Оптимизация инференса моделей для работы на GPU и в продакшене',
      'Интеграция ИИ-моделей в реальные пользовательские интерфейсы'
    ],
    keySkills: {
      hardSkills: ['PyTorch / TensorFlow', 'Python', 'Линейная алгебра и теория вероятностей', 'Hugging Face', 'CUDA / GPU-оптимизация'],
      softSkills: ['Исследовательский азарт', 'Критическое мышление', 'Терпение при обучении моделей', 'Английский B2+']
    },
    matchingInterests: ['Искусственный интеллект', 'Математика', 'Нейросети', 'Большие языковые модели'],
    thinkingType: 'Алгоритмическое и математическое',
    workEnvironment: 'Офис / Удалённо (Digital)',
    schoolSubjects: ['Алгебра и начала анализа', 'Информатика', 'Физика', 'Английский язык'],
    recommendedEducation: {
      degreeType: 'Бакалавриат + Магистратура',
      majors: ['Прикладная математика и информатика', 'Искусственный интеллект и машинное обучение'],
      topUniversities: ['МФТИ (ФПМИ)', 'ВШЭ (ФКН)', 'ИТМО', 'МГУ'],
      estimatedYears: '4–6 лет'
    },
    demandLevel: 'Очень высокий',
    careerOutlook: 'Самое быстрорастущее направление в мире с дефицитом специалистов мирового уровня.',
    salaryRange: {
      junior: '120 000 – 180 000 ₽',
      middle: '240 000 – 420 000 ₽',
      senior: '450 000 – 900 000+ ₽ ($6000+)',
      currency: 'RUB / USD',
      growthOutlook: '+35% в год',
      note: 'Один из самых высоких уровней компенсаций в индустрии технологий'
    },
    remoteFeasibility: 'Полностью удалённо (100%)',
    universityMajors: ['01.03.02 Прикладная математика и информатика', '09.04.01 Информатика и вычислительная техника'],
    relatedProfessions: ['data-scientist', 'prompt-engineer', 'computer-vision-engineer', 'nlp-engineer'],
    traitScores: {
      analytical: 98,
      technical: 96,
      creative: 75,
      social: 40,
      entrepreneurial: 60,
      research: 95,
      practical: 80,
      organizational: 50
    },
    iconName: 'BrainCircuit',
    badge: 'Будущее технологий',
    dayInTheLife: 'Запуск обучения мультимодальной нейросети на кластере серверов, анализ графиков сходимости функции потерь, чтение свежих статей с arXiv и интеграция агента.',
    firstStepsToStartNow: [
      'Пройти курс машинного обучения (например, курс Andrew Ng на Coursera/Stepik)',
      'Изучить библиотеки NumPy, Pandas и PyTorch',
      'Попробовать обучить свою первую модель классификации изображений на Kaggle'
    ]
  },
  {
    id: 'computer-vision-engineer',
    title: 'Computer Vision Engineer (Инженер компьютерного зрения)',
    category: 'Искусственный интеллект',
    shortDescription: 'Учит камеры и роботов «видеть» и распознавать объекты, лица, жесты и дорожную обстановку.',
    dailyTasks: [
      'Разработка алгоритмов детекции и сегментации объектов (YOLO, Mask R-CNN)',
      'Обучение нейросетей распознавания лиц, дорожных знаков и пешеходов для автопилотов',
      'Оптимизация моделей для работы в реальном времени на камерах и смартфонах (ONNX, TensorRT)',
      'Анализ видеопотока и 3D-реконструкция сцен по изображениям'
    ],
    keySkills: {
      hardSkills: ['OpenCV', 'PyTorch / C++', 'YOLO / SAM / Vision Transformers', '3D Point Clouds / LiDAR', 'TensorRT'],
      softSkills: ['Инженерная дотошность', 'Умение анализировать визуальные аномалии', 'Исследовательский фокус']
    },
    matchingInterests: ['Компьютерное зрение', 'Беспилотные автомобили', 'Обработка изображений', 'Медицинская диагностика по снимкам'],
    thinkingType: 'Пространственно-конструкторское',
    workEnvironment: 'Офис / Удалённо (Digital)',
    schoolSubjects: ['Геометрия и векторы', 'Информатика', 'Физика (оптика)', 'Алгебра'],
    recommendedEducation: {
      degreeType: 'Бакалавриат / Магистратура',
      majors: ['Прикладная математика и информатика', 'Компьютерное зрение'],
      topUniversities: ['МФТИ', 'ВШЭ', 'МГУ (ВМК)', 'ИТМО'],
      estimatedYears: '4–5 лет'
    },
    demandLevel: 'Очень высокий',
    careerOutlook: 'Беспилотники, системы безопасности, медицинские сканеры и дополненная реальность нуждаются в компьютерном зрении.',
    salaryRange: {
      junior: '110 000 – 170 000 ₽',
      middle: '220 000 – 380 000 ₽',
      senior: '420 000 – 750 000 ₽',
      currency: 'RUB / USD',
      growthOutlook: '+30% в год'
    },
    remoteFeasibility: 'Полностью удалённо (100%)',
    universityMajors: ['01.03.02 Прикладная математика и информатика'],
    relatedProfessions: ['ai-ml-engineer', 'robotics-engineer', 'data-scientist'],
    traitScores: {
      analytical: 96,
      technical: 95,
      creative: 72,
      social: 38,
      entrepreneurial: 58,
      research: 92,
      practical: 88,
      organizational: 52
    },
    iconName: 'ScanEye',
    badge: 'Зрение роботов',
    dayInTheLife: 'Тестирование алгоритма распознавания препятствий в тумане для беспилотного такси, дообучение нейросети на новых дорожных видео и оптимизация скорости работы.',
    firstStepsToStartNow: [
      'Установить библиотеку OpenCV на Python и научиться находить контуры и лица на веб-камере',
      'Запустить предобученную модель YOLO для детекции объектов вокруг себя',
      'Изучить геометрию преобразований перспективы'
    ]
  },
  {
    id: 'nlp-engineer',
    title: 'NLP / LLM Engineer (Инженер по обработке естественного языка)',
    category: 'Искусственный интеллект',
    shortDescription: 'Создает голосовых ассистентов, переводчиков, чат-ботов и настраивает большие языковые модели (LLM).',
    dailyTasks: [
      'Дообучение (Fine-Tuning / LoRA) и квантование больших языковых моделей',
      'Построение RAG-систем (Retrieval-Augmented Generation) на векторных базах данных',
      'Разработка промпт-цепочек и автономных ИИ-агентов (LangChain, LlamaIndex)',
      'Оценка качества ответов моделей и борьба с галлюцинациями ИИ'
    ],
    keySkills: {
      hardSkills: ['Python & PyTorch', 'Hugging Face Transformers', 'Vector DBs (Qdrant, Pinecone, Milvus)', 'LangChain / LlamaIndex', 'Prompt Engineering'],
      softSkills: ['Чувство языка и лингвистическая логика', 'Креативность в формулировках', 'Критическое мышление']
    },
    matchingInterests: ['Языки и лингвистика', 'Чат-боты и диалоговые системы', 'Искусственный интеллект', 'Текстовый анализ'],
    thinkingType: 'Аналитическое и логическое',
    workEnvironment: 'Офис / Удалённо (Digital)',
    schoolSubjects: ['Русский язык / Лингвистика', 'Информатика', 'Английский язык', 'Алгебра'],
    recommendedEducation: {
      degreeType: 'Бакалавриат / Магистратура',
      majors: ['Фундаментальная и прикладная лингвистика', 'Прикладная математика и информатика'],
      topUniversities: ['ВШЭ (ФКН / Школа лингвистики)', 'МГУ', 'МФТИ', 'ИТМО'],
      estimatedYears: '4–5 лет'
    },
    demandLevel: 'Очень высокий',
    careerOutlook: 'Генеративный ИИ и умные ассистенты трансформируют поиск, поддержку клиентов и автоматизацию бизнеса.',
    salaryRange: {
      junior: '115 000 – 175 000 ₽',
      middle: '230 000 – 400 000 ₽',
      senior: '430 000 – 800 000 ₽',
      currency: 'RUB / USD',
      growthOutlook: '+32% в год'
    },
    remoteFeasibility: 'Полностью удалённо (100%)',
    universityMajors: ['45.03.03 Фундаментальная и прикладная лингвистика', '01.03.02 Прикладная математика и информатика'],
    relatedProfessions: ['ai-ml-engineer', 'prompt-engineer', 'data-scientist'],
    traitScores: {
      analytical: 95,
      technical: 92,
      creative: 80,
      social: 55,
      entrepreneurial: 62,
      research: 92,
      practical: 84,
      organizational: 58
    },
    iconName: 'MessageSquareCode',
    badge: 'Язык машин',
    dayInTheLife: 'Создание ИИ-ассистента для юридической компании, настройка поиска по миллиону документов с помощью векторной базы и проверка точности ответов модели.',
    firstStepsToStartNow: [
      'Попробовать создать простого чат-бота с интеграцией Gemini API или OpenAI API',
      'Изучить, что такое токенизация, эмбеддинги и механизм Attention',
      'Собрать первый RAG-пайплайн для поиска по собственным текстовым файлам'
    ]
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist (Исследователь данных)',
    category: 'Data Science и аналитика',
    shortDescription: 'Находит скрытые закономерности в терабайтах данных и строит прогнозные математические модели.',
    dailyTasks: [
      'Статистический анализ и проверка продуктовых гипотез',
      'Построение прогнозных ML-моделей для предсказания спроса и поведения пользователей',
      'A/B тестирование алгоритмов и визуализация метрик',
      'Презентация выводов бизнесу и продуктовым командам'
    ],
    keySkills: {
      hardSkills: ['Python (Pandas, Scikit-learn)', 'Продвинутый SQL', 'Мат. статистика и A/B тесты', 'Tableau / BI', 'Feature Engineering'],
      softSkills: ['Бизнес-интуиция', 'Умение рассказывать истории через графики (Storytelling)', 'Любознательность']
    },
    matchingInterests: ['Анализ данных', 'Статистика', 'Поиск закономерностей', 'Прогнозирование'],
    thinkingType: 'Аналитическое и логическое',
    workEnvironment: 'Офис / Удалённо (Digital)',
    schoolSubjects: ['Алгебра и теория вероятностей', 'Информатика', 'Обществознание / Экономика'],
    recommendedEducation: {
      degreeType: 'Бакалавриат / Магистратура',
      majors: ['Анализ данных', 'Прикладная статистика', 'Экономика и анализ данных'],
      topUniversities: ['ВШЭ', 'МФТИ', 'МГУ', 'РЭШ'],
      estimatedYears: '4–5 лет'
    },
    demandLevel: 'Очень высокий',
    careerOutlook: 'Бизнес всех масштабов принимает решения на основе данных, спрос стабильно растет.',
    salaryRange: {
      junior: '95 000 – 150 000 ₽',
      middle: '190 000 – 330 000 ₽',
      senior: '360 000 – 600 000 ₽',
      currency: 'RUB / USD',
      growthOutlook: '+22% в год'
    },
    remoteFeasibility: 'Полностью удалённо (100%)',
    universityMajors: ['01.03.02 Прикладная математика и информатика', '38.03.01 Экономика (Data Analytics)'],
    relatedProfessions: ['bi-analyst', 'data-engineer', 'quantitative-analyst', 'ai-ml-engineer'],
    traitScores: {
      analytical: 96,
      technical: 88,
      creative: 60,
      social: 55,
      entrepreneurial: 68,
      research: 85,
      practical: 82,
      organizational: 65
    },
    iconName: 'LineChart',
    badge: 'Высокий спрос',
    dayInTheLife: 'Погружение в базу данных на миллионы транзакций, выявление неожиданного паттерна поведения покупателей, построение прогнозной модели и отчет для руководства.',
    firstStepsToStartNow: [
      'Освоить SQL запросы (JOIN, Window functions) на ресурсах SQL-ex или LeetCode',
      'Изучить модуль Pandas в Python и скачать открытый датасет с Kaggle',
      'Построить свои первые интерактивные дашборды'
    ]
  },
  {
    id: 'data-engineer',
    title: 'Data Engineer (Инженер данных)',
    category: 'Data Science и аналитика',
    shortDescription: 'Строит сверхмощные магистрали данных (ETL/ELT-пайплайны) и озера данных (Data Lakes) для сотен терабайт информации.',
    dailyTasks: [
      'Создание пайплайнов обработки данных на Apache Spark, Airflow и Kafka',
      'Проектирование хранилищ данных (Data Warehouses: ClickHouse, Snowflake, BigQuery)',
      'Очистка данных, обеспечение качества данных (Data Quality) и версионирование',
      'Интеграция сотен источников данных в единое озеро данных'
    ],
    keySkills: {
      hardSkills: ['SQL (продвинутый)', 'Python / Scala / Java', 'Apache Spark / PySpark', 'Airflow / dbt', 'ClickHouse / PostgreSQL / Kafka'],
      softSkills: ['Инженерная аккуратность', 'Системное понимание архитектуры потоков данных', 'Усидчивость']
    },
    matchingInterests: ['Большие данные', 'Архитектура баз данных', 'Автоматизация пайплайнов', 'Высокие объемы информации'],
    thinkingType: 'Системное и архитектурное',
    workEnvironment: 'Офис / Удалённо (Digital)',
    schoolSubjects: ['Информатика', 'Алгебра', 'Логика'],
    recommendedEducation: {
      degreeType: 'Бакалавриат',
      majors: ['Информатика и вычислительная техника', 'Программная инженерия'],
      topUniversities: ['ВШЭ', 'МГТУ им. Баумана', 'ИТМО', 'МФТИ'],
      estimatedYears: '4 года'
    },
    demandLevel: 'Очень высокий',
    careerOutlook: 'Без инженера данных работа Data Scientist невозможна: инженеры готовят фундамент для всего ИИ.',
    salaryRange: {
      junior: '95 000 – 150 000 ₽',
      middle: '190 000 – 340 000 ₽',
      senior: '370 000 – 650 000 ₽',
      currency: 'RUB / USD',
      growthOutlook: '+24% в год'
    },
    remoteFeasibility: 'Полностью удалённо (100%)',
    universityMajors: ['09.03.01 Информатика и вычислительная техника'],
    relatedProfessions: ['data-scientist', 'backend-developer', 'database-administrator'],
    traitScores: {
      analytical: 94,
      technical: 96,
      creative: 48,
      social: 40,
      entrepreneurial: 55,
      research: 74,
      practical: 94,
      organizational: 78
    },
    iconName: 'Database',
    badge: 'Магистрали данных',
    dayInTheLife: 'Настройка пайплайна потоковой обработки кликов на миллионы событий в секунду через Kafka и Spark в хранилище ClickHouse без единой потери данных.',
    firstStepsToStartNow: [
      'Изучить сложные SQL-запросы и индексы баз данных',
      'Написать скрипт на Python, который собирает данные по API и складывает их в PostgreSQL',
      'Познакомиться с Apache Airflow для автоматического запуска задач'
    ]
  },
  {
    id: 'cybersecurity-specialist',
    title: 'Cybersecurity Specialist (Специалист по информационной безопасности)',
    category: 'Кибербезопасность',
    shortDescription: 'Защищает цифровые системы, государственные реестры и банки от хакерских атак и утечек данных.',
    dailyTasks: [
      'Анализ уязвимостей сетей и исходного кода (Penetration testing)',
      'Мониторинг инцидентов безопасности и отражение DDoS/кибератак (SOC)',
      'Настройка криптографической защиты и систем контроля доступа',
      'Расследование инцидентов и аудит цифровой инфраструктуры'
    ],
    keySkills: {
      hardSkills: ['Сетевые протоколы (TCP/IP)', 'Linux / Bash', 'Reverse Engineering', 'Burp Suite / Wireshark', 'Криптография'],
      softSkills: ['Нестандартное мышление хакера', 'Стрессоустойчивость', 'Внимание к мельчайшим деталям']
    },
    matchingInterests: ['Кибербезопасность', 'Этичный хакинг', 'Защита данных', 'Сетевые протоколы'],
    thinkingType: 'Критическое и исследовательское',
    workEnvironment: 'Офис / Удалённо (Digital)',
    schoolSubjects: ['Информатика', 'Физика', 'Математика', 'Английский язык'],
    recommendedEducation: {
      degreeType: 'Специалитет / Бакалавриат',
      majors: ['Информационная безопасность', 'Безопасность автоматизированных систем'],
      topUniversities: ['МГТУ им. Баумана', 'НИЯУ МИФИ', 'ИТМО', 'МФТИ'],
      estimatedYears: '4–5 лет'
    },
    demandLevel: 'Очень высокий',
    careerOutlook: 'Критически важная профессия государственного масштаба в эпоху глобальной цифровизации.',
    salaryRange: {
      junior: '90 000 – 140 000 ₽',
      middle: '180 000 – 340 000 ₽',
      senior: '380 000 – 700 000+ ₽',
      currency: 'RUB / USD',
      growthOutlook: '+28% в год'
    },
    remoteFeasibility: 'Гибридный формат',
    universityMajors: ['10.05.01 Компьютерная безопасность', '10.03.01 Информационная безопасность'],
    relatedProfessions: ['soc-analyst', 'pentester', 'cryptographer', 'devsecops-engineer'],
    traitScores: {
      analytical: 94,
      technical: 96,
      creative: 70,
      social: 35,
      entrepreneurial: 50,
      research: 90,
      practical: 92,
      organizational: 70
    },
    iconName: 'ShieldCheck',
    badge: 'Критическая защита',
    dayInTheLife: 'Поиск уязвимости нулевого дня в веб-приложении, симуляция взлома корпоративной сети и создание непробиваемого щита защиты до того, как этим воспользуются злоумышленники.',
    firstStepsToStartNow: [
      'Попробовать пройти челленджи на площадках TryHackMe или HackTheBox',
      'Изучить командную строку Linux и основы компьютерных сетей',
      'Узнать про топ-10 уязвимостей веб-приложений (OWASP Top 10)'
    ]
  },
  {
    id: 'penetration-tester',
    title: 'Penetration Tester / Ethical Hacker (Этичный хакер)',
    category: 'Кибербезопасность',
    shortDescription: 'Легально взламывает корпоративные сети, приложения и инфраструктуру по контракту для выявления брешей в обороне.',
    dailyTasks: [
      'Проведение санкционированных атак на веб-сервисы, мобильные приложения и локальные сети',
      'Поиск логических и технических уязвимостей (SQL Injection, XSS, RCE, SSRF)',
      'Написание кастомных эксплойтов и скриптов автоматизации атак',
      'Составление детальных отчетов для разработчиков с рекомендациями по устранению дыр'
    ],
    keySkills: {
      hardSkills: ['Burp Suite Professional', 'Metasploit / Nmap', 'Python / Bash скриптинг', 'Реверс-инжиниринг (Ghidra, IDA)', 'Сетевой анализ'],
      softSkills: ['Азарт детектива', 'Этичность и ответственность', 'Умение убедительно объяснять риски']
    },
    matchingInterests: ['Этичный хакинг', 'Поиск уязвимостей', 'Реверс-инжиниринг', 'Информационная безопасность'],
    thinkingType: 'Критическое и исследовательское',
    workEnvironment: 'Офис / Удалённо (Digital)',
    schoolSubjects: ['Информатика', 'Английский язык', 'Математическая логика'],
    recommendedEducation: {
      degreeType: 'Бакалавриат / Сертификация (OSCP, CEH)',
      majors: ['Информационная безопасность', 'Компьютерные науки'],
      topUniversities: ['МГТУ им. Баумана', 'МИФИ', 'ИТМО'],
      estimatedYears: '4 года'
    },
    demandLevel: 'Очень высокий',
    careerOutlook: 'Компании платят огромные деньги и баунти (Bug Bounty) за нахождение уязвимостей до того, как их найдут черные хакеры.',
    salaryRange: {
      junior: '95 000 – 150 000 ₽',
      middle: '200 000 – 380 000 ₽',
      senior: '400 000 – 800 000+ ₽ ($5000+)',
      currency: 'RUB / USD',
      growthOutlook: '+26% в год'
    },
    remoteFeasibility: 'Полностью удалённо (100%)',
    universityMajors: ['10.03.01 Информационная безопасность'],
    relatedProfessions: ['cybersecurity-specialist', 'devsecops-engineer', 'software-engineer'],
    traitScores: {
      analytical: 96,
      technical: 97,
      creative: 82,
      social: 38,
      entrepreneurial: 58,
      research: 92,
      practical: 94,
      organizational: 62
    },
    iconName: 'Terminal',
    badge: 'White Hat Hacker',
    dayInTheLife: 'Анализ исходного кода мобильного банка, нахождение скрытой уязвимости в механизме авторизации, демонстрация безопасного воспроизведения и получение благодарности от команды защиты.',
    firstStepsToStartNow: [
      'Зарегистрироваться на платформе Hack The Box и решить первые бесплатные лаборатории',
      'Изучить курс PortSwigger Web Security Academy',
      'Попробовать поучаствовать в соревнованиях по кибербезопасности CTF (Capture The Flag)'
    ]
  },
  {
    id: 'robotics-engineer',
    title: 'Robotics Engineer (Инженер-робототехник)',
    category: 'Робототехника и IoT',
    shortDescription: 'Проектирует автономных роботов, беспилотный транспорт, манипуляторы и умные фабрики.',
    dailyTasks: [
      'Разработка алгоритмов управления движением роботов (SLAM, Kinematics)',
      'Программирование микроконтроллеров и интеграция датчиков (ROS, C++, Python)',
      '3D-моделирование механических узлов и приводов в CAD-системах',
      'Полевые испытания и калибровка сенсоров в реальных условиях'
    ],
    keySkills: {
      hardSkills: ['ROS / ROS2', 'C++ / Python', 'Схемотехника и микроконтроллеры (STM32, Arduino)', 'CAD/CAM проектирование', 'Компьютерное зрение'],
      softSkills: ['Инженерное воображение', 'Упорство при сборке "железа"', 'Междисциплинарность']
    },
    matchingInterests: ['Роботы', 'Беспилотники', 'Микроэлектроника', 'Конструирование'],
    thinkingType: 'Пространственно-конструкторское',
    workEnvironment: 'Лаборатория / Научный центр',
    schoolSubjects: ['Физика', 'Алгебра и геометрия', 'Информатика', 'Черчение'],
    recommendedEducation: {
      degreeType: 'Бакалавриат / Специалитет',
      majors: ['Мехатроника и робототехника', 'Системы управления летательными аппаратами'],
      topUniversities: ['МГТУ им. Баумана', 'ИТМО', 'МФТИ', 'Сколтех', 'Иннополис'],
      estimatedYears: '4–5.5 лет'
    },
    demandLevel: 'Высокий',
    careerOutlook: 'Бурный рост автоматизации складов, медицины, беспилотных дронов и космических аппаратов.',
    salaryRange: {
      junior: '85 000 – 130 000 ₽',
      middle: '160 000 – 290 000 ₽',
      senior: '320 000 – 550 000 ₽',
      currency: 'RUB / USD',
      growthOutlook: '+25% в год'
    },
    remoteFeasibility: 'Преимущественно очно',
    universityMajors: ['15.03.06 Мехатроника и робототехника', '27.03.04 Управление в технических системах'],
    relatedProfessions: ['drone-engineer', 'automation-engineer', 'cad-designer', 'embedded-developer'],
    traitScores: {
      analytical: 90,
      technical: 98,
      creative: 75,
      social: 40,
      entrepreneurial: 55,
      research: 85,
      practical: 96,
      organizational: 60
    },
    iconName: 'Cpu',
    badge: 'Стыковка IT и физики',
    dayInTheLife: 'Сборка нового прототипа робота-манипулятора в лаборатории, прошивка контроллера, настройка лидара и первый успешный автономный проезд по полосе препятствий.',
    firstStepsToStartNow: [
      'Собрать первый проект на Arduino или ESP32 (умный датчик, управляемая машинка)',
      'Изучить основы C++ и работу цифровых интерфейсов (I2C, SPI, UART)',
      'Освоить базовое 3D-моделирование во Fusion 360'
    ]
  },
  {
    id: 'drone-engineer',
    title: 'UAV / Drone Systems Engineer (Инженер беспилотных авиационных систем)',
    category: 'Робототехника и IoT',
    shortDescription: 'Создает беспилотные летательные аппараты (БПЛА), системы навигации, автопилоты и полезную нагрузку.',
    dailyTasks: [
      'Аэродинамический расчет и проектирование планеров и квадрокоптеров',
      'Интеграция автопилотов (PX4, ArduPilot) и систем связи на больших расстояниях',
      'Настройка машинного зрения для ориентации дрона без GPS по оптическому потоку',
      'Проведение летных испытаний и анализ телеметрии'
    ],
    keySkills: {
      hardSkills: ['PX4 / ArduPilot', 'Аэродинамика и радиотехника', 'C++ / Python', 'Композитные материалы и 3D-печать', 'FPV и телеметрия'],
      softSkills: ['Внимательность к технике безопасности', 'Быстрая реакция на тестах', 'Умение работать руками']
    },
    matchingInterests: ['Дроны и БПЛА', 'Авиамоделирование', 'Автономный полет', 'Радиоуправление'],
    thinkingType: 'Пространственно-конструкторское',
    workEnvironment: 'Полевые исследования / Экспедиции',
    schoolSubjects: ['Физика (механика и аэродинамика)', 'Геометрия', 'Информатика'],
    recommendedEducation: {
      degreeType: 'Специалитет / Бакалавриат',
      majors: ['Авиастроение', 'Системы управления беспилотными аппаратами'],
      topUniversities: ['МАИ', 'МГТУ им. Баумана', 'МФТИ', 'КНИТУ-КАИ'],
      estimatedYears: '4–5 лет'
    },
    demandLevel: 'Очень высокий',
    careerOutlook: 'Беспилотная авиация переживает колоссальный взрыв спроса в доставке, мониторинге лесов, сельском хозяйстве и спасательных службах.',
    salaryRange: {
      junior: '90 000 – 140 000 ₽',
      middle: '170 000 – 310 000 ₽',
      senior: '330 000 – 600 000 ₽',
      currency: 'RUB / USD',
      growthOutlook: '+30% в год'
    },
    remoteFeasibility: 'Преимущественно очно',
    universityMajors: ['24.05.07 Самолето- и вертолетостроение', '24.03.04 Авиастроение'],
    relatedProfessions: ['robotics-engineer', 'aviation-pilot', 'aerospace-engineer'],
    traitScores: {
      analytical: 88,
      technical: 96,
      creative: 68,
      social: 45,
      entrepreneurial: 58,
      research: 80,
      practical: 98,
      organizational: 65
    },
    iconName: 'Navigation',
    badge: 'Крылья будущего',
    dayInTheLife: 'Сборка дрона с гиростабилизированной тепловизионной камерой, настройка автопилота на облет заданного маршрута и успешный автономный полет на 50 км.',
    firstStepsToStartNow: [
      'Попробовать собрать свой первый FPV-дрон или радиоуправляемую модель самолета',
      'Попрактиковаться в симуляторах полетов (Liftoff, Velocidrone)',
      'Изучить основы радиосвязи и законы аэродинамики'
    ]
  },
  {
    id: 'game-developer',
    title: 'Game Developer (Разработчик игр / GameDev)',
    category: 'IT и программирование',
    shortDescription: 'Создает виртуальные миры, игровую физику, графические шейдеры и геймплейную логику.',
    dailyTasks: [
      'Программирование механик персонажей, искусственного интеллекта врагов и физики',
      'Работа в игровых движках (Unreal Engine 5 на C++ или Unity на C#)',
      'Оптимизация рендеринга графики и частоты кадров (FPS)',
      'Тестирование геймплея совместно с геймдизайнерами'
    ],
    keySkills: {
      hardSkills: ['C++ / C#', 'Unreal Engine / Unity', 'Линейная алгебра и векторы', 'Шейдеры (HLSL/GLSL)', '3D-математика'],
      softSkills: ['Творческая страсть к играм', 'Командное взаимодействие с художниками', 'Усидчивость']
    },
    matchingInterests: ['Компьютерные игры', '3D-графика', 'Физика виртуальных миров', 'Геймдизайн'],
    thinkingType: 'Пространственно-конструкторское',
    workEnvironment: 'Офис / Удалённо (Digital)',
    schoolSubjects: ['Информатика', 'Геометрия и тригонометрия', 'Физика', 'Английский язык'],
    recommendedEducation: {
      degreeType: 'Бакалавриат / Курсы + Портфолио',
      majors: ['Разработка компьютерных игр', 'Прикладная математика и информатика'],
      topUniversities: ['ВШЭ (Институт медиа / Геймдев)', 'ИТМО', 'МФТИ', 'Иннополис'],
      estimatedYears: '3–4 года'
    },
    demandLevel: 'Высокий',
    careerOutlook: 'Индустрия видеоигр превышает кино и музыку вместе взятые, активно развиваются VR и метаверсы.',
    salaryRange: {
      junior: '75 000 – 120 000 ₽',
      middle: '160 000 – 280 000 ₽',
      senior: '320 000 – 550 000 ₽ ($4000+)',
      currency: 'RUB / USD',
      growthOutlook: '+18% в год'
    },
    remoteFeasibility: 'Полностью удалённо (100%)',
    universityMajors: ['09.03.03 Прикладная информатика в дизайне / геймдеве'],
    relatedProfessions: ['game-designer', '3d-artist', 'sound-designer', 'software-engineer'],
    traitScores: {
      analytical: 88,
      technical: 92,
      creative: 85,
      social: 45,
      entrepreneurial: 60,
      research: 65,
      practical: 90,
      organizational: 55
    },
    iconName: 'Gamepad2',
    badge: 'Создание виртуальных миров',
    dayInTheLife: 'Написание алгоритма поведения боссов в Unreal Engine 5, настройка физики взрывов и совместное тестирование уровня с командой геймдизайнеров.',
    firstStepsToStartNow: [
      'Скачать Unity или Unreal Engine 5 и сделать свой первый 2D/3D платформер по туториалам',
      'Изучить основы C# или C++',
      'Принять участие в 48-часовом гейм-джеме (Ludum Dare / Global Game Jam)'
    ]
  },
  {
    id: 'game-designer',
    title: 'Game Designer (Геймдизайнер / Архитектор игрового процесса)',
    category: 'IT и программирование',
    shortDescription: 'Проектирует правила игр, баланс экономики, сюжетные развилки и эмоции, которые испытывает игрок.',
    dailyTasks: [
      'Разработка дизайн-документов (GDD), правил механик и системы прогрессии игрока',
      'Математический расчет игровой экономики и баланса способностей персонажей',
      'Прототипирование уровней и игровых циклов (Core Gameplay Loop)',
      'Анализ поведения игроков и метрик удержания (Retention)'
    ],
    keySkills: {
      hardSkills: ['Теория геймдизайна', 'Математический баланс в Excel / Google Таблицах', 'Прототипирование в движках (Unreal/Unity)', 'Нарративный дизайн'],
      softSkills: ['Психологическая эмпатия к игроку', 'Умение формулировать идеи для программистов и художников', 'Креативность']
    },
    matchingInterests: ['Игровые механики', 'Настольные игры', 'Сценарии', 'Психология вовлечения'],
    thinkingType: 'Креативное и образное',
    workEnvironment: 'Офис / Удалённо (Digital)',
    schoolSubjects: ['Литература', 'Алгебра и вероятность', 'Обществознание', 'Английский язык'],
    recommendedEducation: {
      degreeType: 'Бакалавриат / Профильные институты',
      majors: ['Геймдизайн и виртуальные миры', 'Медиакоммуникации'],
      topUniversities: ['ВШЭ (Школа дизайна / Геймдизайн)', 'ИТМО', 'МГУ'],
      estimatedYears: '3–4 года'
    },
    demandLevel: 'Высокий',
    careerOutlook: 'Геймификация проникает в образование, финтех и корпоративное обучение, открывая широкий рынок.',
    salaryRange: {
      junior: '70 000 – 115 000 ₽',
      middle: '140 000 – 250 000 ₽',
      senior: '280 000 – 480 000 ₽',
      currency: 'RUB / USD',
      growthOutlook: '+17% в год'
    },
    remoteFeasibility: 'Полностью удалённо (100%)',
    universityMajors: ['54.03.01 Дизайн (Геймдизайн)'],
    relatedProfessions: ['game-developer', 'ui-ux-designer', 'writer-screenwriter'],
    traitScores: {
      analytical: 82,
      technical: 68,
      creative: 96,
      social: 75,
      entrepreneurial: 72,
      research: 68,
      practical: 78,
      organizational: 80
    },
    iconName: 'Dices',
    badge: 'Архитектор эмоций',
    dayInTheLife: 'Создание математической модели прокачки оружия в игре, сбор плейтеста с друзьями и доработка динамики уровня на основе их реакции.',
    firstStepsToStartNow: [
      'Придумать и нарисовать на бумаге прототип настольной карточной игры с четкими правилами',
      'Проанализировать 3 свои любимые игры: выписать, почему именно в них интересно играть',
      'Изучить канал Extra Credits или Game Maker’s Toolkit на YouTube'
    ]
  },
  {
    id: 'telecom-network-architect',
    title: 'Telecommunications & 5G/6G Architect (Инженер телекоммуникаций и сетей)',
    category: 'Телекоммуникации и сети',
    shortDescription: 'Проектирует магистральные оптоволоконные сети, спутниковую связь и базовые станции 5G/6G.',
    dailyTasks: [
      'Расчет пропускной способности и радиопокрытия сотовых вышек',
      'Проектирование магистральных оптических линий связи и спутниковых каналов',
      'Настройка высоконагруженного маршрутизирующего оборудования (Cisco, Huawei)',
      'Внедрение стандартов связи нового поколения и Интернета вещей (IoT)'
    ],
    keySkills: {
      hardSkills: ['Радиофизика и антенно-фидерные системы', 'Протоколы BGP, OSPF, MPLS', 'Спутниковая связь', 'CCNA/CCNP', 'Оптика (DWDM)'],
      softSkills: ['Высокая ответственность', 'Системное планирование', 'Умение работать в полевых и проектных условиях']
    },
    matchingInterests: ['Связь', 'Беспроводные технологии', 'Радиофизика', 'Спутниковые системы'],
    thinkingType: 'Системное и архитектурное',
    workEnvironment: 'Производство / Инженерный цех',
    schoolSubjects: ['Физика (электродинамика)', 'Алгебра и геометрия', 'Информатика'],
    recommendedEducation: {
      degreeType: 'Специалитет / Бакалавриат',
      majors: ['Инфокоммуникационные технологии и системы связи', 'Радиотехника'],
      topUniversities: ['МТУСИ', 'СПбГУТ им. Бонч-Бруевича', 'МГТУ им. Баумана', 'МИФИ'],
      estimatedYears: '4–5 лет'
    },
    demandLevel: 'Высокий',
    careerOutlook: 'Фундамент цифровой цивилизации: без связи не работают интернет, банковские системы и умные города.',
    salaryRange: {
      junior: '75 000 – 120 000 ₽',
      middle: '150 000 – 260 000 ₽',
      senior: '290 000 – 500 000 ₽',
      currency: 'RUB / USD',
      growthOutlook: '+18% в год'
    },
    remoteFeasibility: 'Гибридный формат',
    universityMajors: ['11.03.02 Инфокоммуникационные технологии и системы связи'],
    relatedProfessions: ['devops-cloud-engineer', 'robotics-engineer', 'aerospace-engineer'],
    traitScores: {
      analytical: 90,
      technical: 95,
      creative: 45,
      social: 45,
      entrepreneurial: 50,
      research: 78,
      practical: 92,
      organizational: 75
    },
    iconName: 'Radio',
    badge: 'Связь планетарного масштаба',
    dayInTheLife: 'Проектирование высокоскоростного оптоволоконного кольца между дата-центрами, анализ радиоспектра для новых базовых станций и обеспечение непрерывной связи.',
    firstStepsToStartNow: [
      'Изучить курс основ компьютерных сетей (модель OSI, адресация IPv4/IPv6)',
      'Собрать симуляцию сети в программе Cisco Packet Tracer',
      'Узнать, как устроена сотовая связь стандартов LTE и 5G'
    ]
  },
  {
    id: 'qa-automation-engineer',
    title: 'QA Automation Engineer (Инженер по автоматизации тестирования)',
    category: 'IT и программирование',
    shortDescription: 'Пишет программных роботов и тест-фреймворки, которые автоматически проверяют качество и надежность IT-продуктов.',
    dailyTasks: [
      'Разработка автотестов для UI (Playwright, Selenium, Cypress) и API',
      'Построение нагрузочного тестирования (K6, JMeter) для симуляции миллионного наплыва пользователей',
      'Интеграция тестов в CI/CD пайплайны деплоя',
      'Поиск краевых случаев и багов на ранних стадиях разработки'
    ],
    keySkills: {
      hardSkills: ['Python / TypeScript / Java', 'Playwright / Selenium', 'Postman / REST Assured', 'Git & CI/CD', 'Docker'],
      softSkills: ['Внимание к мелочам и педантичность', 'Умение ставить сложные логические эксперименты', 'Коммуникабельность']
    },
    matchingInterests: ['Тестирование ПО', 'Поиск багов', 'Автоматизация рутины', 'Качество цифровых продуктов'],
    thinkingType: 'Критическое и исследовательское',
    workEnvironment: 'Офис / Удалённо (Digital)',
    schoolSubjects: ['Информатика', 'Логика', 'Английский язык'],
    recommendedEducation: {
      degreeType: 'Бакалавриат / Профильные курсы',
      majors: ['Информатика и вычислительная техника', 'Управление качеством'],
      topUniversities: ['МИРЭА', 'ИТМО', 'МГТУ им. Баумана'],
      estimatedYears: '3–4 года'
    },
    demandLevel: 'Очень высокий',
    careerOutlook: 'Современные цифровые банки и сервисы выпускают релизы каждый день, без автотестов это невозможно.',
    salaryRange: {
      junior: '80 000 – 125 000 ₽',
      middle: '160 000 – 270 000 ₽',
      senior: '300 000 – 500 000 ₽',
      currency: 'RUB / USD',
      growthOutlook: '+19% в год'
    },
    remoteFeasibility: 'Полностью удалённо (100%)',
    universityMajors: ['09.03.01 Информатика и вычислительная техника'],
    relatedProfessions: ['software-engineer', 'devops-cloud-engineer', 'backend-developer'],
    traitScores: {
      analytical: 92,
      technical: 90,
      creative: 55,
      social: 60,
      entrepreneurial: 45,
      research: 82,
      practical: 92,
      organizational: 85
    },
    iconName: 'CheckCircle2',
    badge: 'Страж качества',
    dayInTheLife: 'Написание автотеста, который воспроизводит редкий сбой в корзине интернет-магазина, защита продукта от регрессионных багов перед релизом.',
    firstStepsToStartNow: [
      'Попробовать протестировать сайт и завести первые понятные баг-репорты',
      'Написать свой первый автотест на Python с использованием Playwright',
      'Изучить теорию тестирования (классы эквивалентности, граничные значения)'
    ]
  }
];
