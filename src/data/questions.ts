import { Question } from '../types';

export const CAREER_QUESTIONS: Question[] = [
  {
    id: 1,
    title: 'Какого вы пола?',
    category: 'Личные данные',
    description: 'Выберите ваш пол для персонализации карьерных рекомендаций и психологического профиля',
    iconName: 'User',
    options: [
      {
        id: 'gender_female',
        text: 'Женский',
        subtext: 'Девушка / Женский пол',
        iconName: 'Sparkles',
        accentColor: 'pink',
        traitWeights: {}
      },
      {
        id: 'gender_male',
        text: 'Мужской',
        subtext: 'Парень / Мужской пол',
        iconName: 'Zap',
        accentColor: 'green',
        traitWeights: {}
      }
    ]
  },
  {
    id: 2,
    title: 'Интересы и драйверы',
    category: 'Интересы',
    description: 'Что из перечисленного заряжает тебя наибольшей энергией и увлекает часами в свободное время?',
    iconName: 'Compass',
    options: [
      {
        id: 'q1_tech',
        text: 'Технологии, кодинг, гаджеты, устройство игр и цифровая среда',
        subtext: 'Нравится понимать, как все устроено "под капотом", пробовать новые приложения, писать код или изучать технику',
        iconName: 'Code',
        traitWeights: { technical: 3, analytical: 2 }
      },
      {
        id: 'q1_creative',
        text: 'Творчество, визуальное искусство, музыка, дизайн, видеомонтаж',
        subtext: 'Любишь выражать идеи через образы, стиль, графику, анимацию, эстетику или медиаконтент',
        iconName: 'Palette',
        traitWeights: { creative: 3, social: 1 }
      },
      {
        id: 'q1_social',
        text: 'Люди, психология, общение, организация событий, блогинг',
        subtext: 'Интересно разбираться в поведении людей, объединять единомышленников, вести дискуссии или помогать',
        iconName: 'Users',
        traitWeights: { social: 3, entrepreneurial: 1 }
      },
      {
        id: 'q1_science',
        text: 'Наука, эксперименты, медицина, биология, разгадка тайн природы',
        subtext: 'Увлекают научные факты, исследования, анатомия, экология, микромир или космос',
        iconName: 'FlaskConical',
        traitWeights: { analytical: 3, technical: 1 }
      },
      {
        id: 'q1_business',
        text: 'Бизнес, проекты, маркетинг, финансы и управление',
        subtext: 'Нравится генерировать бизнес-идеи, считать выгоду, запускать проекты, продавать или лидировать',
        iconName: 'TrendingUp',
        traitWeights: { entrepreneurial: 3, analytical: 1 }
      }
    ]
  },
  {
    id: 3,
    title: 'Любимые школьные или профильные предметы',
    category: 'Предметы',
    description: 'На каких занятиях или лекциях время для тебя летит быстрее и интереснее всего?',
    iconName: 'BookOpen',
    options: [
      {
        id: 'q2_math_cs',
        text: 'Информатика, математика, физика, робототехника',
        subtext: 'Четкие алгоритмы, формулы, вычислительные задачи и точные законы',
        iconName: 'Binary',
        traitWeights: { analytical: 3, technical: 2 }
      },
      {
        id: 'q2_humanities',
        text: 'Литература, история, обществознание, иностранные языки',
        subtext: 'Работа с текстами, смыслами, культурным контекстом, коммуникация и языки',
        iconName: 'Languages',
        traitWeights: { social: 2, creative: 2 }
      },
      {
        id: 'q2_bio_chem',
        text: 'Биология, химия, география, медицина и экология',
        subtext: 'Живые организмы, химические реакции, экосистемы и процессы в теле',
        iconName: 'Dna',
        traitWeights: { analytical: 3, social: 1 }
      },
      {
        id: 'q2_arts',
        text: 'ИЗО, черчение, дизайн, медиа, технологии и труд',
        subtext: 'Визуализация форм, моделирование, работа с материалами и инструментами',
        iconName: 'Brush',
        traitWeights: { creative: 3, technical: 1 }
      },
      {
        id: 'q2_econ',
        text: 'Экономика, право, обществознание, основы бизнеса',
        subtext: 'Рыночные процессы, законы, структура общества и финансы',
        iconName: 'Landmark',
        traitWeights: { entrepreneurial: 3, analytical: 2 }
      }
    ]
  },
  {
    id: 4,
    title: 'Тип задач и способ мышления',
    category: 'Тип задач',
    description: 'Какая деятельность доставляет тебе глубокое интеллектуальное удовольствие?',
    iconName: 'Sparkles',
    options: [
      {
        id: 'q3_analytical',
        text: 'Аналитический: распутывать сложные данные, строить логические цепочки',
        subtext: 'Поиск закономерностей, оптимизация систем, проверка фактов и структурирование хаоса',
        iconName: 'LineChart',
        traitWeights: { analytical: 4 }
      },
      {
        id: 'q3_creative',
        text: 'Творческий: создавать нечто принципиально новое и нестандартное с нуля',
        subtext: 'Генерация оригинальных концепций, придумывание историй, эстетических решений и образов',
        iconName: 'Lightbulb',
        traitWeights: { creative: 4 }
      },
      {
        id: 'q3_technical',
        text: 'Инженерно-технический: конструировать, настраивать алгоритмы и механизмы',
        subtext: 'Создание работающих систем, написание программ, сборка устройств и устранение багов',
        iconName: 'Cpu',
        traitWeights: { technical: 4 }
      },
      {
        id: 'q3_social',
        text: 'Социально-коммуникативный: вдохновлять людей, обучать и находить компромиссы',
        subtext: 'Понимание эмоций, модерация команд, наставничество, ведение сложных переговоров',
        iconName: 'HeartHandshake',
        traitWeights: { social: 4 }
      }
    ]
  },
  {
    id: 5,
    title: 'Работа головой vs Работа руками',
    category: 'Формат деятельности',
    description: 'Какое соотношение умственного труда и физической / прикладной практики для тебя идеально?',
    iconName: 'Layers',
    options: [
      {
        id: 'q4_pure_mind',
        text: '100% интеллектуальная работа: концепции, экран монитора, архитектура идей',
        subtext: 'Фокус на умственном труде, коде, текстах, анализе и виртуальных продуктах',
        iconName: 'BrainCircuit',
        traitWeights: { analytical: 2, technical: 2 }
      },
      {
        id: 'q4_mixed_digital',
        text: 'Интеллектуальная работа с визуальным и интерактивным результатом',
        subtext: 'Дизайн интерфейсов, 3D-графика, режиссура, геймдев — видишь и ощущаешь плоды труда',
        iconName: 'Eye',
        traitWeights: { creative: 2, technical: 2 }
      },
      {
        id: 'q4_hybrid_physical',
        text: 'Смешанный формат: интеллектуальный анализ + реальные объекты/оборудование',
        subtext: 'Лаборатории, прототипирование на 3D-принтере, робототехника, медицина, инженерия',
        iconName: 'Wrench',
        traitWeights: { technical: 3, analytical: 1 }
      },
      {
        id: 'q4_dynamic_action',
        text: 'Динамичный прикладной формат с активным перемещением и взаимодействием',
        subtext: 'Съемки на площадке, выездные мероприятия, полевые исследования, организация на месте',
        iconName: 'Zap',
        traitWeights: { entrepreneurial: 2, social: 2 }
      }
    ]
  },
  {
    id: 6,
    title: 'Отношение к общению и людям',
    category: 'Коммуникация',
    description: 'В каком стиле взаимодействия с окружающими твоя продуктивность на максимуме?',
    iconName: 'MessageSquare',
    options: [
      {
        id: 'q5_introvert',
        text: 'Глубокий фокус в одиночку: минимум шума, четкое личное пространство',
        subtext: 'Лучше всего думается в тишине, где можно спокойно погрузиться в сложную задачу',
        iconName: 'UserCheck',
        traitWeights: { analytical: 3, technical: 2 }
      },
      {
        id: 'q5_team_core',
        text: 'Компактная команда единомышленников и профильных экспертов',
        subtext: 'Комфортно работать в сплоченном коллективе разработчиков/дизайнеров/исследователей',
        iconName: 'UsersRound',
        traitWeights: { technical: 2, social: 2 }
      },
      {
        id: 'q5_extrovert_public',
        text: 'Активное публичное общение: клиенты, аудитория, консультации, нетворкинг',
        subtext: 'Энергия прибывает от новых знакомств, презентаций, работы с аудиторией и клиентами',
        iconName: 'Mic',
        traitWeights: { social: 3, entrepreneurial: 2 }
      },
      {
        id: 'q5_leader',
        text: 'Лидерство и управление: мотивация команды, распределение ролей и контроль',
        subtext: 'Нравится вести за собой, объединять людей вокруг цели и отвечать за общий результат',
        iconName: 'Crown',
        traitWeights: { entrepreneurial: 3, social: 2 }
      }
    ]
  },
  {
    id: 7,
    title: 'Финансовые амбиции и ценности',
    category: 'Уровень дохода',
    description: 'Что для тебя на первом месте при оценке привлекательности будущей профессии?',
    iconName: 'Coins',
    options: [
      {
        id: 'q6_top_tier',
        text: 'Максимальный доход (250 000+ ₽ / $3000+): готов к высокой нагрузке и ответственности',
        subtext: 'Приоритет — финансовая независимость, топ-индустрии, быстрый капитал и готовность к челленджам',
        iconName: 'Gem',
        traitWeights: { entrepreneurial: 3, technical: 2 }
      },
      {
        id: 'q6_solid_growth',
        text: 'Высокий стабильный доход (150 000 – 250 000 ₽) с понятной карьерной лестницей',
        subtext: 'Важны прозрачный рост от джуна до лида в сильной международной или федеральной компании',
        iconName: 'TrendingUp',
        traitWeights: { analytical: 2, technical: 2 }
      },
      {
        id: 'q6_balance',
        text: 'Комфортный доход (90 000 – 160 000 ₽) + гармоничный Work-Life Balance',
        subtext: 'Главное — отсутствие выгорания, свободное время для хобби, путешествий и семьи',
        iconName: 'Smile',
        traitWeights: { creative: 2, social: 2 }
      },
      {
        id: 'q6_mission',
        text: 'Смысл и общественная миссия: спасать жизни, развивать науку, менять мир',
        subtext: 'Ценность создаваемого блага важнее сиюминутных сверхдоходов',
        iconName: 'HeartHandshake',
        traitWeights: { social: 3, analytical: 2 }
      }
    ]
  },
  {
    id: 8,
    title: 'Образовательная стратегия и старт',
    category: 'Образование',
    description: 'Какая траектория обучения кажется тебе наиболее реалистичной и привлекательной?',
    iconName: 'GraduationCap',
    options: [
      {
        id: 'q7_deep_uni',
        text: 'Фундаментальный академический путь (5–8 лет): вуз, магистратура, наука',
        subtext: 'Глубокая фундаментальная база для сложных профессий: медицина, биотех, ИИ-исследования, архитектура',
        iconName: 'Library',
        traitWeights: { analytical: 3 }
      },
      {
        id: 'q7_standard_bachelor',
        text: 'Классический бакалавриат (4 года) + стажировки со 2–3 курса',
        subtext: 'Сбалансированный диплом и параллельное накопление реального рабочего опыта',
        iconName: 'School',
        traitWeights: { technical: 2, analytical: 1 }
      },
      {
        id: 'q7_fast_track',
        text: 'Быстрый практический старт (колледж или буткемпы 6–18 месяцев) + работа',
        subtext: 'Минимум лишней теории, максимум прикладных навыков, ранний заработок и самостоятельность',
        iconName: 'Rocket',
        traitWeights: { technical: 2, entrepreneurial: 2 }
      },
      {
        id: 'q7_self_made',
        text: 'Самообучение, пет-проекты, практика и запуск своего дела с ранних лет',
        subtext: 'Обучение через реальные ошибки, портфолио, фриланс и нетворкинг',
        iconName: 'Flame',
        traitWeights: { entrepreneurial: 3, creative: 2 }
      }
    ]
  },
  {
    id: 9,
    title: 'Идеальное рабочее пространство',
    category: 'Локация и формат',
    description: 'Где ты видишь свое идеальное рабочее место через 3-5 лет?',
    iconName: 'MapPin',
    options: [
      {
        id: 'q8_remote',
        text: 'Полная свобода и удаленка (Remote): дом, пляж, коворкинги по всему миру',
        subtext: 'Нужен только ноутбук, быстрый Wi-Fi и удобный график без пробок',
        iconName: 'Laptop',
        traitWeights: { technical: 2, creative: 1 }
      },
      {
        id: 'q8_cool_office',
        text: 'Современный высокотехнологичный офис (как в Яндекс / Google / VK)',
        subtext: 'Стильное пространство, бесплатный кофе, спортзал, зоны отдыха и живое общение с коллегами',
        iconName: 'Building2',
        traitWeights: { social: 2, technical: 1 }
      },
      {
        id: 'q8_lab_studio',
        text: 'Специализированная лаборатория, мастерская, дизайн-студия или клиника',
        subtext: 'Профессиональное оборудование, чистая среда, уникальные приборы и инструменты',
        iconName: 'TestTube2',
        traitWeights: { analytical: 2, technical: 2 }
      },
      {
        id: 'q8_mobile',
        text: 'Командировки, съемки, мероприятия и постоянное движение',
        subtext: 'Не выношу сидеть на одном месте — хочу смену локаций, городов и стран',
        iconName: 'PlaneTakeoff',
        traitWeights: { entrepreneurial: 2, social: 2 }
      }
    ]
  },
  {
    id: 10,
    title: 'Отношение к риску и стабильности',
    category: 'Стиль работы',
    description: 'В какой атмосфере предсказуемости ты чувствуешь себя увереннее?',
    iconName: 'ShieldAlert',
    options: [
      {
        id: 'q9_stable',
        text: 'Высокая стабильность: четкие регламенты, понятные критерии успеха',
        subtext: 'Предпочитаю спокойную работу с предсказуемым результатом без форс-мажоров',
        iconName: 'ShieldCheck',
        traitWeights: { analytical: 2 }
      },
      {
        id: 'q9_flexible',
        text: 'Умеренная гибкость: задача поставлена, а путь решения выбираю сам',
        subtext: 'Здоровый баланс между свободой творчества и ясными целями бизнеса',
        iconName: 'Sliders',
        traitWeights: { creative: 2, technical: 2 }
      },
      {
        id: 'q9_dynamic',
        text: 'Динамичный стартап-ритм: постоянные эксперименты, инновации и вызовы',
        subtext: 'Люблю драйв, когда задачи меняются каждую неделю, и нужно быстро учиться новому',
        iconName: 'Zap',
        traitWeights: { technical: 2, entrepreneurial: 2 }
      },
      {
        id: 'q9_entrepreneur',
        text: 'Высокий предпринимательский риск: стартап, свой бизнес, фриланс',
        subtext: 'Готов к нестабильности ради возможности владеть бизнесом и определять будущее',
        iconName: 'Target',
        traitWeights: { entrepreneurial: 4 }
      }
    ]
  },
  {
    id: 11,
    title: 'Главный источник вдохновения и радости',
    category: 'Мотивация',
    description: 'Какой результат проделанной работы вызывает у тебя искреннюю гордость?',
    iconName: 'Award',
    options: [
      {
        id: 'q10_logic_solved',
        text: 'Когда сложная архитектурная, программная или научная загадка решена',
        subtext: 'Эйфория от найденного бага, красивого алгоритма или доказанной гипотезы',
        iconName: 'Puzzle',
        traitWeights: { analytical: 3, technical: 2 }
      },
      {
        id: 'q10_aesthetic_created',
        text: 'Когда создан осязаемый шедевр: визуал, игра, бренд, анимация, интерфейс',
        subtext: 'Гордость за эстетичность, стиль, удобство и восторг пользователей от визуала',
        iconName: 'Sparkle',
        traitWeights: { creative: 4 }
      },
      {
        id: 'q10_human_helped',
        text: 'Когда я реально улучшил чью-то жизнь, вылечил, обучил или решил проблему',
        subtext: 'Искренняя благодарность людей, осознание того, что день прожит с пользой для общества',
        iconName: 'Heart',
        traitWeights: { social: 4 }
      },
      {
        id: 'q10_profit_growth',
        text: 'Когда проект вырос в метриках, принес миллионную выручку и масштабировался',
        subtext: 'Победа на рынке, победа в конкуренции, рост продаж и признание лидерства',
        iconName: 'TrendingUp',
        traitWeights: { entrepreneurial: 4 }
      }
    ]
  },
  {
    id: 12,
    title: 'Стиль принятия решений',
    category: 'Принятие решений',
    description: 'Когда перед тобой стоит важный сложный выбор, на что ты опираешься?',
    iconName: 'GitFork',
    options: [
      {
        id: 'q11_data_driven',
        text: 'Строго на цифры, холодные факты, статистику и логический расчет',
        subtext: 'Собираю метрики, строю сравнительные таблицы и отсекаю эмоции',
        iconName: 'Calculator',
        traitWeights: { analytical: 3 }
      },
      {
        id: 'q11_intuition_vision',
        text: 'На интуицию, внутренний вкус, чувство гармонии и видение будущего',
        subtext: 'Чувствую, как сделать "правильно" и красиво, даже если нет прямых данных',
        iconName: 'Wand2',
        traitWeights: { creative: 3 }
      },
      {
        id: 'q11_people_centric',
        text: 'На то, как это повлияет на людей, советуюсь с экспертами и командой',
        subtext: 'Эмпатия, этичность и взаимопонимание — главные критерии верного выбора',
        iconName: 'Users',
        traitWeights: { social: 3 }
      },
      {
        id: 'q11_fast_test',
        text: 'Быстро тестирую гипотезу на практике: сделать черновик и проверить реакцию',
        subtext: 'Лучше сделать быстро и доработать на ходу, чем бесконечно сомневаться',
        iconName: 'Gauge',
        traitWeights: { entrepreneurial: 2, technical: 2 }
      }
    ]
  },
  {
    id: 13,
    title: 'Роль в командной игре или проекте',
    category: 'Роль в команде',
    description: 'Кем ты естественным образом становишься, когда делаешь проект в группе?',
    iconName: 'Users2',
    options: [
      {
        id: 'q12_architect',
        text: '«Архитектор / Стратег» — продумываю общую структуру, логику и план',
        subtext: 'Люблю видеть картину целиком и следить, чтобы все детали состыковались',
        iconName: 'Boxes',
        traitWeights: { analytical: 3, entrepreneurial: 1 }
      },
      {
        id: 'q12_specialist',
        text: '«Главный специалист / Кодер» — погружаюсь в сложную техническую часть',
        subtext: 'Беру на себя самый сложный кусок работы и делаю его качественно и надежно',
        iconName: 'Terminal',
        traitWeights: { technical: 3, analytical: 1 }
      },
      {
        id: 'q12_creative_designer',
        text: '«Креативный визионер» — отвечаю за стиль, вау-эффект, презентацию и визуал',
        subtext: 'Делаю так, чтобы проект выглядел потрясающе и захватывал дух',
        iconName: 'Palette',
        traitWeights: { creative: 3, social: 1 }
      },
      {
        id: 'q12_captain_speaker',
        text: '«Лидер / Презентатор» — координирую участников и защищаю проект перед публикой',
        subtext: 'Умею ярко подать результаты, вдохновить команду и сорвать аплодисменты',
        iconName: 'Megaphone',
        traitWeights: { entrepreneurial: 2, social: 3 }
      }
    ]
  }
];
