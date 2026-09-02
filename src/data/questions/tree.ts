import { TreeQuestion } from '../../types';

export const DECISION_TREE_QUESTIONS: Record<string, TreeQuestion> = {
  // ROOT QUESTION: Macro Sphere
  'root': {
    id: 'root',
    code: 'Q_MACRO_DOMAIN',
    stepNumber: 1,
    category: 'Вектор интересов',
    categoryContext: 'Базовое определение вектора интересов',
    title: 'Что вас по-настоящему вдохновляет и заряжает энергией?',
    subtitle: 'Выберите глобальное направление, которое вызывает у вас наибольший искренний интерес',
    iconName: 'Compass',
    options: [
      {
        id: 'opt_tech_engineering',
        text: '💻 Технологии, код, искусственный интеллект, роботы и точные науки',
        explanation: 'Создание программных систем, алгоритмов, сложной техники и цифровых сервисов будущего',
        weightModifiers: { technical: 30, analytical: 25, practical: 20 },
        preferredSectors: ['IT и программирование', 'Искусственный интеллект', 'Data Science и аналитика', 'Робототехника и IoT', 'Кибербезопасность'],
        nextQuestionId: 'branch_tech_focus'
      },
      {
        id: 'opt_biomed_science',
        text: '🧬 Медицина, биология, спасение жизней, генная инженерия и природа',
        explanation: 'Изучение живых организмов, хирургия, биотехнологии, исследование мозга и экология планеты',
        weightModifiers: { research: 30, practical: 25, analytical: 20, social: 15 },
        preferredSectors: ['Медицина и здравоохранение', 'Биология и биотехнологии', 'Химия и фармацевтика', 'Экология и природопользование'],
        nextQuestionId: 'branch_biomed_focus'
      },
      {
        id: 'opt_business_finance',
        text: '📈 Бизнес, стартапы, большие финансы, управление и маркетинг',
        explanation: 'Запуск компаний, привлечение инвестиций, масштабирование рынков и лидерство в командах',
        weightModifiers: { entrepreneurial: 35, organizational: 25, social: 20, analytical: 15 },
        preferredSectors: ['Бизнес и стартапы', 'Финансы', 'Менеджмент и управление', 'Маркетинг и PR', 'Экономика'],
        nextQuestionId: 'branch_business_focus'
      },
      {
        id: 'opt_creative_arts',
        text: '🎨 Креатив, дизайн, кино, музыка, архитектура и визуальные искусства',
        explanation: 'Создание эстетичных интерфейсов, фильмов, 3D-графики, саундтреков и архитектурных концепций',
        weightModifiers: { creative: 35, practical: 20, social: 15, analytical: 10 },
        preferredSectors: ['Дизайн и UI/UX', 'Архитектура и урбанистика', 'Кино, видео и анимация', 'Музыка и саунд-дизайн', 'Журналистика и медиа'],
        nextQuestionId: 'branch_creative_focus'
      },
      {
        id: 'opt_humanities_society',
        text: '⚖️ Психология, право, дипломатия, языки, образование и помощь обществу',
        explanation: 'Понимание людей, защита прав, межкультурные коммуникации, преподавание и мировая политика',
        weightModifiers: { social: 35, research: 20, organizational: 20, analytical: 15 },
        preferredSectors: ['Психология', 'Право и юриспруденция', 'Международные отношения', 'Образование и педагогика', 'Языки и перевод'],
        nextQuestionId: 'branch_humanities_focus'
      }
    ]
  },

  // BRANCH: TECH & ENGINEERING
  'branch_tech_focus': {
    id: 'branch_tech_focus',
    code: 'Q_TECH_FOCUS',
    stepNumber: 2,
    category: 'Специализация в IT',
    title: 'Какая грань технологий притягивает вас сильнее всего?',
    subtitle: 'Выберите уровень погружения в технологии',
    categoryContext: 'Специализация в IT и инженерии',
    iconName: 'Cpu',
    options: [
      {
        id: 'opt_ai_deep_data',
        text: '🧠 Искусственный интеллект, машинное обучение и математические алгоритмы',
        explanation: 'Обучение нейросетей, генеративный ИИ, анализ гигантских массивов данных и создание AGI',
        weightModifiers: { analytical: 35, research: 25, technical: 25 },
        preferredSectors: ['Искусственный интеллект', 'Data Science и аналитика', 'Математика'],
        nextQuestionId: 'q_thinking_style'
      },
      {
        id: 'opt_software_web_arch',
        text: '💻 Разработка цифровых продуктов, масштабируемых сервисов и приложений',
        explanation: 'Написание чистого кода, создание веб-платформ, мобильных приложений и высоконагруженных систем',
        weightModifiers: { technical: 35, practical: 25, analytical: 20 },
        preferredSectors: ['IT и программирование'],
        nextQuestionId: 'q_thinking_style'
      },
      {
        id: 'opt_cybersec_networks',
        text: '🛡️ Кибербезопасность, этичный хакинг, криптография и защита от кибератак',
        explanation: 'Поиск уязвимостей, расследование инцидентов, криптографические протоколы и защита цифровой инфраструктуры',
        weightModifiers: { analytical: 30, technical: 30, practical: 20 },
        preferredSectors: ['Кибербезопасность', 'Телекоммуникации'],
        nextQuestionId: 'q_thinking_style'
      },
      {
        id: 'opt_hardware_robotics_space',
        text: '🤖 Робототехника, дроны, космические аппараты и физическое «железо»',
        explanation: 'Конструирование физических механизмов, автопилотов, электроники и ракетных комплексов',
        weightModifiers: { technical: 35, practical: 30, research: 15 },
        preferredSectors: ['Робототехника и IoT', 'Авиация и космонавтика', 'Инженерия'],
        nextQuestionId: 'q_thinking_style'
      }
    ]
  },

  // BRANCH: BIOLOGY & MEDICINE
  'branch_biomed_focus': {
    id: 'branch_biomed_focus',
    code: 'Q_BIOMED_FOCUS',
    stepNumber: 2,
    category: 'Биомедицина и наука',
    title: 'Какое направление в медицине и биологии вам ближе?',
    subtitle: 'Практическая помощь людям или фундаментальные научные открытия',
    categoryContext: 'Специализация в науках о жизни',
    iconName: 'HeartPulse',
    options: [
      {
        id: 'opt_clinical_surgery',
        text: '🏥 Высокотехнологичная хирургия и непосредственное лечение пациентов',
        explanation: 'Сложные операции, диагностика в клиниках, реабилитация и спасение жизней каждый день',
        weightModifiers: { practical: 35, social: 25, analytical: 20 },
        preferredSectors: ['Медицина и здравоохранение'],
        nextQuestionId: 'q_thinking_style'
      },
      {
        id: 'opt_genetics_biotech',
        text: '🧬 Генная инженерия (CRISPR), биоинформатика и продление жизни',
        explanation: 'Редактирование ДНК, синтез вакцин, клеточная терапия и борьба со старением',
        weightModifiers: { research: 35, analytical: 30, technical: 20 },
        preferredSectors: ['Биология и биотехнологии', 'Новые и быстрорастущие профессии'],
        nextQuestionId: 'q_thinking_style'
      },
      {
        id: 'opt_pharma_chemistry',
        text: '💊 Разработка новых лекарств, молекулярный синтез и фармакология',
        explanation: 'Создание молекул против онкологии, клинические испытания и чистый органический синтез',
        weightModifiers: { research: 30, practical: 25, analytical: 25 },
        preferredSectors: ['Химия и фармацевтика'],
        nextQuestionId: 'q_thinking_style'
      },
      {
        id: 'opt_ecology_planet',
        text: '🌿 Экология планеты, климатические исследования и умные агротехнологии',
        explanation: 'Сохранение биоразнообразия, вертикальные фермы, возобновляемая энергия и очистка океанов',
        weightModifiers: { practical: 30, research: 25, social: 20 },
        preferredSectors: ['Экология и природопользование', 'Сельское хозяйство и агротех'],
        nextQuestionId: 'q_thinking_style'
      }
    ]
  },

  // BRANCH: BUSINESS & FINANCE
  'branch_business_focus': {
    id: 'branch_business_focus',
    code: 'Q_BUSINESS_FOCUS',
    stepNumber: 2,
    category: 'Бизнес и финансы',
    title: 'Какая роль в мире бизнеса вам наиболее органична?',
    subtitle: 'От создания инноваций до математики биржевых рынков',
    categoryContext: 'Специализация в бизнесе и финансах',
    iconName: 'TrendingUp',
    options: [
      {
        id: 'opt_founder_startup',
        text: '🚀 Создание собственного стартапа и вывод продукта на мировой рынок',
        explanation: 'Запуск компаний с нуля, поиск инвестиций, формирование команды и изменение индустрий',
        weightModifiers: { entrepreneurial: 40, creative: 25, organizational: 20 },
        preferredSectors: ['Бизнес и стартапы', 'Менеджмент и управление'],
        nextQuestionId: 'q_thinking_style'
      },
      {
        id: 'opt_quant_investment',
        text: '📊 Алгоритмический трейдинг, хедж-фонды и инвестиционный банкинг',
        explanation: 'Математическое моделирование рынков, оценка миллиардных сделок M&A и управление капиталом',
        weightModifiers: { analytical: 35, entrepreneurial: 25, practical: 20 },
        preferredSectors: ['Финансы', 'Экономика'],
        nextQuestionId: 'q_thinking_style'
      },
      {
        id: 'opt_product_lead',
        text: '🎯 Управление цифровым продуктом (Product Management)',
        explanation: 'Исследование поведения пользователей, создание востребованных фичей и синхронизация команды',
        weightModifiers: { organizational: 30, entrepreneurial: 25, social: 25 },
        preferredSectors: ['Менеджмент и управление', 'Бизнес и стартапы'],
        nextQuestionId: 'q_thinking_style'
      },
      {
        id: 'opt_growth_marketing',
        text: '📢 Маркетинг влияния, виральный рост брендов и PR-кампании',
        explanation: 'Масштабные рекламные кампании, работа с трендами, инфлюенсерами и психология масс',
        weightModifiers: { creative: 30, social: 30, entrepreneurial: 25 },
        preferredSectors: ['Маркетинг и PR'],
        nextQuestionId: 'q_thinking_style'
      }
    ]
  },

  // BRANCH: CREATIVE & ARTS
  'branch_creative_focus': {
    id: 'branch_creative_focus',
    code: 'Q_CREATIVE_FOCUS',
    stepNumber: 2,
    category: 'Креативные индустрии',
    title: 'Какое творческое медиа вас привлекает сильнее всего?',
    subtitle: 'Форма выражения и визуального воплощения',
    categoryContext: 'Специализация в креативных индустриях',
    iconName: 'Palette',
    options: [
      {
        id: 'opt_digital_uiux_design',
        text: '📱 Продуктовый UI/UX дизайн и эстетика цифровых интерфейсов',
        explanation: 'Проектирование супераппов, веб-сервисов, интерактивных анимаций и дизайн-систем',
        weightModifiers: { creative: 35, analytical: 20, practical: 25 },
        preferredSectors: ['Дизайн и UI/UX'],
        nextQuestionId: 'q_thinking_style'
      },
      {
        id: 'opt_3d_motion_cgi',
        text: '🎬 3D-графика, визуальные спецэффекты (VFX), моушн-дизайн и кино',
        explanation: 'Создание фотореалистичных 3D-миров, анимация в Blender/Cinema 4D и кинорежиссура',
        weightModifiers: { creative: 40, technical: 25, practical: 20 },
        preferredSectors: ['Кино, видео и анимация', 'Дизайн и UI/UX'],
        nextQuestionId: 'q_thinking_style'
      },
      {
        id: 'opt_architecture_spaces',
        text: '🏛️ Архитектура зданий, урбанистика и дизайн умных городов',
        explanation: 'Проектирование небоскребов, футуристичных парков, жилых кварталов и музейных пространств',
        weightModifiers: { creative: 35, practical: 25, technical: 20 },
        preferredSectors: ['Архитектура и урбанистика', 'Строительство'],
        nextQuestionId: 'q_thinking_style'
      },
      {
        id: 'opt_music_sound_stories',
        text: '🎧 Музыкальный продакшн, саунд-дизайн и нарративные сценарии',
        explanation: 'Синтез фантастических звуков для игр и кино, написание треков и драматургия историй',
        weightModifiers: { creative: 40, practical: 20, social: 15 },
        preferredSectors: ['Музыка и саунд-дизайн', 'Журналистика и медиа'],
        nextQuestionId: 'q_thinking_style'
      }
    ]
  },

  // BRANCH: HUMANITIES & SOCIETY
  'branch_humanities_focus': {
    id: 'branch_humanities_focus',
    code: 'Q_HUMANITIES_FOCUS',
    stepNumber: 2,
    category: 'Гуманитарная сфера',
    title: 'В какой сфере взаимодействия с людьми вы видите свое призвание?',
    subtitle: 'От индивидуальной психологической помощи до международной политики',
    categoryContext: 'Специализация в социогуманитарной сфере',
    iconName: 'Users',
    options: [
      {
        id: 'opt_psychology_therapy',
        text: '🧠 Психотерапия, когнитивные науки и раскрытие человеческого потенциала',
        explanation: 'Индивидуальные сессии, помощь в преодолении кризисов, коучинг и исследование эмоций',
        weightModifiers: { social: 40, research: 25, practical: 20 },
        preferredSectors: ['Психология'],
        nextQuestionId: 'q_thinking_style'
      },
      {
        id: 'opt_law_intellectual_prop',
        text: '⚖️ Корпоративное и цифровое право, судебные дебаты и защита интересов',
        explanation: 'Юридическое сопровождение масштабных сделок, международный арбитраж и законы об ИИ',
        weightModifiers: { analytical: 35, social: 25, research: 25 },
        preferredSectors: ['Право и юриспруденция'],
        nextQuestionId: 'q_thinking_style'
      },
      {
        id: 'opt_diplomacy_intl_affairs',
        text: '🌐 Международная дипломатия, переговоры и глобальное сотрудничество',
        explanation: 'Работа в посольствах, ООН, урегулирование международных отношений и языковые мосты',
        weightModifiers: { social: 35, organizational: 30, research: 20 },
        preferredSectors: ['Международные отношения', 'Государственная служба'],
        nextQuestionId: 'q_thinking_style'
      },
      {
        id: 'opt_edtech_mentorship',
        text: '🎓 Образовательный дизайн (EdTech), методики обучения и наставничество',
        explanation: 'Создание увлекательных онлайн-университетов, интерактивных тренажеров и преподавание',
        weightModifiers: { social: 35, creative: 25, organizational: 20 },
        preferredSectors: ['Образование и педагогика', 'Языки и перевод'],
        nextQuestionId: 'q_thinking_style'
      }
    ]
  },

  // QUESTION 3: Thinking Style
  'q_thinking_style': {
    id: 'q_thinking_style',
    code: 'Q_THINKING_STYLE',
    stepNumber: 3,
    category: 'Стиль мышления',
    title: 'Какой стиль мышления для вас наиболее естественен?',
    subtitle: 'Как ваш мозг решает сложные нестандартные задачи',
    categoryContext: 'Определение когнитивного профиля',
    iconName: 'Brain',
    options: [
      {
        id: 'opt_algo_logical',
        text: '📐 Алгоритмическое и структурное (четкая логика, формулы, декомпозиция на шаги)',
        explanation: 'Вы любите разбирать сложные системы на четкие составные элементы и строить надежные схемы',
        weightModifiers: { analytical: 30, technical: 20 },
        nextQuestionId: 'q_daily_task_preference'
      },
      {
        id: 'opt_creative_spatial',
        text: '✨ Креативное и образное (интуиция, эстетика, нестандартные идеи и визуал)',
        explanation: 'Вы мыслите целостными образами, чувствуете гармонию форм, цветов и генерируете свежие идеи',
        weightModifiers: { creative: 35, practical: 15 },
        nextQuestionId: 'q_daily_task_preference'
      },
      {
        id: 'opt_strategic_biz',
        text: '🎯 Стратегическое и предпринимательское (поиск возможностей, масштабирование, результат)',
        explanation: 'Вы видите выгоду, умеете организовывать людей вокруг цели и доводить задуманное до прибыли',
        weightModifiers: { entrepreneurial: 35, organizational: 25 },
        nextQuestionId: 'q_daily_task_preference'
      },
      {
        id: 'opt_empathic_social',
        text: '🤝 Эмпатическое и эмоциональное (понимание мотивов, поддержка, переговоры)',
        explanation: 'Вы тонко чувствуете эмоциональное состояние собеседника и умеете находить общий язык с каждым',
        weightModifiers: { social: 35, practical: 15 },
        nextQuestionId: 'q_daily_task_preference'
      }
    ]
  },

  // QUESTION 4: Daily Task Preference
  'q_daily_task_preference': {
    id: 'q_daily_task_preference',
    code: 'Q_DAILY_TASKS',
    stepNumber: 4,
    category: 'Рабочий процесс',
    title: 'Чем бы вы с увлечением занимались 4–5 часов подряд, забыв о времени?',
    subtitle: 'Ваш идеальный рабочий процесс',
    categoryContext: 'Практические рабочие активности',
    iconName: 'Clock',
    options: [
      {
        id: 'opt_task_deep_focus_screen',
        text: '💻 Написание кода, сборка сложной математической модели или проектирование архитектуры',
        explanation: 'Глубокое интеллектуальное погружение в тишине с наушниками и чашкой кофе',
        weightModifiers: { technical: 25, analytical: 25, practical: 20 },
        nextQuestionId: 'q_work_environment'
      },
      {
        id: 'opt_task_design_prototype',
        text: '🎨 Отрисовка дизайн-концепта, анимация 3D-сцены или сборка интерактивного прототипа',
        explanation: 'Создание осязаемого красивого продукта, который можно увидеть и потрогать',
        weightModifiers: { creative: 30, practical: 25 },
        nextQuestionId: 'q_work_environment'
      },
      {
        id: 'opt_task_lab_experiments',
        text: '🔬 Проведение научных экспериментов, микроскопия, химический синтез или сборка прибора',
        explanation: 'Реальная лабораторная работа с материалами, реактивами, сенсорами или биологическими образцами',
        weightModifiers: { research: 30, practical: 30 },
        nextQuestionId: 'q_work_environment'
      },
      {
        id: 'opt_task_people_negotiation',
        text: '🗣️ Проведение переговоров, мозговой штурм с командой, консультация или выступление',
        explanation: 'Динамичное живое общение, обмен идеями, вдохновение других и заключение договоренностей',
        weightModifiers: { social: 30, entrepreneurial: 25, organizational: 20 },
        nextQuestionId: 'q_work_environment'
      }
    ]
  },

  // QUESTION 5: Work Environment
  'q_work_environment': {
    id: 'q_work_environment',
    code: 'Q_WORK_ENVIRONMENT',
    stepNumber: 5,
    category: 'Рабочая среда',
    title: 'Какая рабочая среда вам наиболее комфортна?',
    subtitle: 'Где вы чувствуете себя максимально продуктивно',
    categoryContext: 'Формат и локация работы',
    iconName: 'Building2',
    options: [
      {
        id: 'opt_env_digital_remote',
        text: '🏡 Полностью удаленная работа (Digital Nomad) из любой точки мира с ноутбука',
        explanation: 'Гибкий график, свобода перемещений и ориентация исключительно на результат',
        weightModifiers: { technical: 20, analytical: 15 },
        nextQuestionId: 'q_favorite_subjects'
      },
      {
        id: 'opt_env_lab_clinic',
        text: '🔬 Высокотехнологичная лаборатория, исследовательский центр или медицинская клиника',
        explanation: 'Работа с передовым научным оборудованием, чистые комнаты и реальные образцы',
        weightModifiers: { research: 25, practical: 25 },
        nextQuestionId: 'q_favorite_subjects'
      },
      {
        id: 'opt_env_modern_office',
        text: '🏙️ Современный технологичный офис в небоскребе в центре мегаполиса',
        explanation: 'Кипящая жизнь, общение с топовыми коллегами, кофе-поинты и ритм большого бизнеса',
        weightModifiers: { organizational: 25, entrepreneurial: 20, social: 20 },
        nextQuestionId: 'q_favorite_subjects'
      },
      {
        id: 'opt_env_field_creative_studio',
        text: '🌲 Полевые экспедиции, съемочные площадки, строительные объекты или креативная мастерская',
        explanation: 'Смена локаций, живая природа, масштабные строительные конструкции и творческий драйв',
        weightModifiers: { practical: 30, creative: 20 },
        nextQuestionId: 'q_favorite_subjects'
      }
    ]
  },

  // QUESTION 6: Favorite Subjects & Intellectual Affinity
  'q_favorite_subjects': {
    id: 'q_favorite_subjects',
    code: 'Q_FAVORITE_SUBJECTS',
    stepNumber: 6,
    category: 'Любимые предметы',
    title: 'Какие предметы и темы в учебе даются вам легче и интереснее всего?',
    subtitle: 'Академический и практический фундамент',
    categoryContext: 'Предметная склонность',
    iconName: 'BookOpen',
    options: [
      {
        id: 'opt_subj_math_cs_physics',
        text: '📐 Математика, информатика, физика и точные алгоритмические расчеты',
        explanation: 'Уравнения, логические задачи, программирование и законы природы',
        weightModifiers: { analytical: 30, technical: 30 },
        nextQuestionId: 'q_risk_and_career_goals'
      },
      {
        id: 'opt_subj_bio_chem_geography',
        text: '🧬 Биология, химия, анатомия человека и науки о Земле',
        explanation: 'Строение клеток, химические реакции, медицина, экология и природа',
        weightModifiers: { research: 30, practical: 20, analytical: 15 },
        nextQuestionId: 'q_risk_and_career_goals'
      },
      {
        id: 'opt_subj_social_econ_history',
        text: '📊 Обществознание, экономика, история и иностранные языки',
        explanation: 'Устройство общества, финансовые законы, мировая политика и культура',
        weightModifiers: { social: 25, entrepreneurial: 25, organizational: 20 },
        nextQuestionId: 'q_risk_and_career_goals'
      },
      {
        id: 'opt_subj_arts_literature',
        text: '🎨 Рисование, черчение, литература, музыка и мировая художественная культура',
        explanation: 'Создание визуальных образов, сочинение текстов, пространственные композиции и эстетика',
        weightModifiers: { creative: 35, social: 15 },
        nextQuestionId: 'q_risk_and_career_goals'
      }
    ]
  },

  // QUESTION 7: Risk & Career Ambition
  'q_risk_and_career_goals': {
    id: 'q_risk_and_career_goals',
    code: 'Q_CAREER_GOALS',
    stepNumber: 7,
    category: 'Карьерные цели',
    title: 'Что для вас является главным критерием успеха в карьере?',
    subtitle: 'Ваша главная жизненная цель',
    categoryContext: 'Ценностная ориентация',
    iconName: 'Target',
    options: [
      {
        id: 'opt_goal_impact_creation',
        text: '🚀 Создать инновационный продукт или технологию, которой будут пользоваться миллионы',
        explanation: 'Масштаб влияния, технологическое лидерство и изменение мира к лучшему',
        weightModifiers: { entrepreneurial: 30, technical: 20, creative: 20 },
        nextQuestionId: 'q_team_dynamics'
      },
      {
        id: 'opt_goal_save_lives_help',
        text: '❤️ Помогать конкретным людям, спасать жизни и делать общество более справедливым',
        explanation: 'Глубокий человеческий смысл, благодарность людей и польза обществу',
        weightModifiers: { social: 35, practical: 20 },
        nextQuestionId: 'q_team_dynamics'
      },
      {
        id: 'opt_goal_high_wealth_freedom',
        text: '💎 Высокий финансовый доход, независимость и управление крупным капиталом',
        explanation: 'Материальное благополучие, инвестиции и свобода выбора стиля жизни',
        weightModifiers: { entrepreneurial: 35, analytical: 20 },
        nextQuestionId: 'q_team_dynamics'
      },
      {
        id: 'opt_goal_mastery_science',
        text: '🏆 Стать признанным мировым экспертом или ученым, сделавшим великое открытие',
        explanation: 'Глубочайшая экспертность, научное признание и решение нерешенных задач',
        weightModifiers: { research: 35, analytical: 25 },
        nextQuestionId: 'q_team_dynamics'
      }
    ]
  },

  // QUESTION 8: Team Dynamics & Responsibility
  'q_team_dynamics': {
    id: 'q_team_dynamics',
    code: 'Q_TEAM_DYNAMICS',
    stepNumber: 8,
    category: 'Роль в команде',
    title: 'В какой роли в коллективе вы чувствуете себя наиболее органично?',
    subtitle: 'Командное взаимодействие и персональная ответственность',
    categoryContext: 'Роль в команде',
    iconName: 'Award',
    options: [
      {
        id: 'opt_team_individual_master',
        text: '🧙‍♂️ Глубокий эксперт-индивидуал (фокус на сложных задачах, где важна личная филигранная точность)',
        explanation: 'Вы берете сложный участок работы и делаете его безупречно лучше всех',
        weightModifiers: { analytical: 25, technical: 25, practical: 20 },
        nextQuestionId: 'finish'
      },
      {
        id: 'opt_team_leader_captain',
        text: '👑 Лидер и капитан (вдохновлять команду, распределять задачи и отвечать за финальный результат)',
        explanation: 'Вам нравится направлять других, разрешать спорные вопросы и приводить команду к победе',
        weightModifiers: { organizational: 35, social: 25, entrepreneurial: 25 },
        nextQuestionId: 'finish'
      },
      {
        id: 'opt_team_creative_catalyst',
        text: '💡 Генератор идей и концептов (придумывать смелые решения и заряжать команду энергией)',
        explanation: 'Вы фонтанируете идеями, ломаете шаблоны и находите свежие нестандартные ходы',
        weightModifiers: { creative: 35, entrepreneurial: 20 },
        nextQuestionId: 'finish'
      },
      {
        id: 'opt_team_bridge_mediator',
        text: '🌉 Дипломатичный координатор и наставник (выстраивать теплые отношения и помогать коллегам)',
        explanation: 'Вы создаете доверительную атмосферу, сглаживаете конфликты и растите таланты',
        weightModifiers: { social: 35, organizational: 20 },
        nextQuestionId: 'finish'
      }
    ]
  }
};

// Aliases for backwards compatibility and fallback safety
DECISION_TREE_QUESTIONS['q_root'] = DECISION_TREE_QUESTIONS['root'];

