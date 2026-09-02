export interface TreeQuestionTranslation {
  title: string;
  subtitle?: string;
  category?: string;
  categoryContext?: string;
  description?: string;
  options: Record<string, {
    text: string;
    subtext?: string;
    explanation?: string;
  }>;
}

export const TREE_TRANSLATIONS: Record<'ru' | 'en' | 'tg', Record<string, TreeQuestionTranslation>> = {
  ru: {
    root: {
      category: 'Вектор интересов',
      categoryContext: 'Базовое определение вектора интересов',
      title: 'Что вас по-настоящему вдохновляет и заряжает энергией?',
      subtitle: 'Выберите глобальное направление, которое вызывает у вас наибольший искренний интерес',
      options: {
        opt_tech_engineering: {
          text: '💻 Технологии, код, искусственный интеллект, роботы и точные науки',
          explanation: 'Создание программных систем, алгоритмов, сложной техники и цифровых сервисов будущего',
        },
        opt_biomed_science: {
          text: '🧬 Медицина, биология, спасение жизней, генная инженерия и природа',
          explanation: 'Изучение живых организмов, хирургия, биотехнологии, исследование мозга и экология планеты',
        },
        opt_business_finance: {
          text: '📈 Бизнес, стартапы, большие финансы, управление и маркетинг',
          explanation: 'Запуск компаний, привлечение инвестиций, масштабирование рынков и лидерство в командах',
        },
        opt_creative_arts: {
          text: '🎨 Креатив, дизайн, кино, музыка, архитектура и визуальные искусства',
          explanation: 'Создание эстетичных интерфейсов, фильмов, 3D-графики, саундтреков и архитектурных концепций',
        },
        opt_humanities_society: {
          text: '⚖️ Психология, право, дипломатия, языки, образование и помощь обществу',
          explanation: 'Понимание людей, защита прав, межкультурные коммуникации, преподавание и мировая политика',
        },
      },
    },
    branch_tech_focus: {
      category: 'Специализация в IT',
      categoryContext: 'Специализация в IT и инженерии',
      title: 'Какая грань технологий притягивает вас сильнее всего?',
      subtitle: 'Выберите уровень погружения в технологии',
      options: {
        opt_ai_deep_data: {
          text: '🧠 Искусственный интеллект, машинное обучение и математические алгоритмы',
          explanation: 'Обучение нейросетей, генеративный ИИ, анализ гигантских массивов данных и создание AGI',
        },
        opt_software_web_arch: {
          text: '💻 Разработка цифровых продуктов, масштабируемых сервисов и приложений',
          explanation: 'Написание чистого кода, создание веб-платформ, мобильных приложений и высоконагруженных систем',
        },
        opt_cybersec_networks: {
          text: '🛡️ Кибербезопасность, этичный хакинг, криптография и защита от кибератак',
          explanation: 'Поиск уязвимостей, расследование инцидентов, криптографические протоколы и защита цифровой инфраструктуры',
        },
        opt_hardware_robotics_space: {
          text: '🤖 Робототехника, дроны, космические аппараты и физическое «железо»',
          explanation: 'Конструирование физических механизмов, автопилотов, электроники и ракетных комплексов',
        },
      },
    },
    branch_biomed_focus: {
      category: 'Биомедицина и наука',
      categoryContext: 'Специализация в науках о жизни',
      title: 'Какое направление в медицине и биологии вам ближе?',
      subtitle: 'Практическая помощь людям или фундаментальные научные открытия',
      options: {
        opt_clinical_surgery: {
          text: '🏥 Высокотехнологичная хирургия и непосредственное лечение пациентов',
          explanation: 'Сложные операции, диагностика в клиниках, реабилитация и спасение жизней каждый день',
        },
        opt_genetics_biotech: {
          text: '🧬 Генная инженерия (CRISPR), биоинформатика и продление жизни',
          explanation: 'Редактирование ДНК, синтез вакцин, клеточная терапия и борьба со старением',
        },
        opt_pharma_chemistry: {
          text: '💊 Разработка новых лекарств, молекулярный синтез и фармакология',
          explanation: 'Создание молекул против онкологии, клинические испытания и чистый органический синтез',
        },
        opt_ecology_planet: {
          text: '🌿 Экология планеты, климатические исследования и умные агротехнологии',
          explanation: 'Сохранение биоразнообразия, вертикальные фермы, возобновляемая энергия и очистка океанов',
        },
      },
    },
    branch_business_focus: {
      category: 'Бизнес и финансы',
      categoryContext: 'Специализация в бизнесе и финансах',
      title: 'Какая роль в мире бизнеса вам наиболее органична?',
      subtitle: 'От создания инноваций до математики биржевых рынков',
      options: {
        opt_founder_startup: {
          text: '🚀 Создание собственного стартапа и вывод продукта на мировой рынок',
          explanation: 'Запуск компаний с нуля, поиск инвестиций, формирование команды и изменение индустрий',
        },
        opt_quant_investment: {
          text: '📊 Алгоритмический трейдинг, хедж-фонды и инвестиционный банкинг',
          explanation: 'Математическое моделирование рынков, оценка миллиардных сделок M&A и управление капиталом',
        },
        opt_product_lead: {
          text: '🎯 Управление цифровым продуктом (Product Management)',
          explanation: 'Исследование поведения пользователей, создание востребованных фичей и синхронизация команды',
        },
        opt_growth_marketing: {
          text: '📢 Маркетинг влияния, виральный рост брендов и PR-кампании',
          explanation: 'Масштабные рекламные кампании, работа с трендами, инфлюенсерами и психология масс',
        },
      },
    },
    branch_creative_focus: {
      category: 'Креативные индустрии',
      categoryContext: 'Специализация в креативных индустриях',
      title: 'Какое творческое медиа вас привлекает сильнее всего?',
      subtitle: 'Форма выражения и визуального воплощения',
      options: {
        opt_digital_uiux_design: {
          text: '📱 Продуктовый UI/UX дизайн и эстетика цифровых интерфейсов',
          explanation: 'Проектирование супераппов, веб-сервисов, интерактивных анимаций и дизайн-систем',
        },
        opt_3d_motion_cgi: {
          text: '🎬 3D-графика, визуальные спецэффекты (VFX), моушн-дизайн и кино',
          explanation: 'Создание фотореалистичных 3D-миров, анимация в Blender/Cinema 4D и кинорежиссура',
        },
        opt_architecture_spaces: {
          text: '🏛️ Архитектура зданий, урбанистика и дизайн умных городов',
          explanation: 'Проектирование небоскребов, футуристичных парков, жилых кварталов и музейных пространств',
        },
        opt_music_sound_stories: {
          text: '🎧 Музыкальный продакшн, саунд-дизайн и нарративные сценарии',
          explanation: 'Синтез фантастических звуков для игр и кино, написание треков и драматургия историй',
        },
      },
    },
    branch_humanities_focus: {
      category: 'Гуманитарная сфера',
      categoryContext: 'Специализация в социогуманитарной сфере',
      title: 'В какой сфере взаимодействия с людьми вы видите свое призвание?',
      subtitle: 'От индивидуальной психологической помощи до международной политики',
      options: {
        opt_psychology_therapy: {
          text: '🧠 Психотерапия, когнитивные науки и раскрытие человеческого потенциала',
          explanation: 'Индивидуальные сессии, помощь в преодолении кризисов, коучинг и исследование эмоций',
        },
        opt_law_intellectual_prop: {
          text: '⚖️ Корпоративное и цифровое право, судебные дебаты и защита интересов',
          explanation: 'Юридическое сопровождение масштабных сделок, международный арбитраж и законы об ИИ',
        },
        opt_diplomacy_intl_affairs: {
          text: '🌐 Международная дипломатия, переговоры и глобальное сотрудничество',
          explanation: 'Работа в посольствах, ООН, урегулирование международных отношений и языковые мосты',
        },
        opt_edtech_mentorship: {
          text: '🎓 Образовательный дизайн (EdTech), методики обучения и наставничество',
          explanation: 'Создание увлекательных онлайн-университетов, интерактивных тренажеров и преподавание',
        },
      },
    },
    q_thinking_style: {
      category: 'Стиль мышления',
      categoryContext: 'Определение когнитивного профиля',
      title: 'Какой стиль мышления для вас наиболее естественен?',
      subtitle: 'Как ваш мозг решает сложные нестандартные задачи',
      options: {
        opt_algo_logical: {
          text: '📐 Алгоритмическое и структурное (четкая логика, формулы, декомпозиция на шаги)',
          explanation: 'Вы любите разбирать сложные системы на четкие составные элементы и строить надежные схемы',
        },
        opt_creative_spatial: {
          text: '✨ Креативное и образное (интуиция, эстетика, нестандартные идеи и визуал)',
          explanation: 'Вы мыслите целостными образами, чувствуете гармонию форм, цветов и генерируете свежие идеи',
        },
        opt_strategic_biz: {
          text: '🎯 Стратегическое и предпринимательское (поиск возможностей, масштабирование, результат)',
          explanation: 'Вы видите выгоду, умеете организовывать людей вокруг цели и доводить задуманное до прибыли',
        },
        opt_empathic_social: {
          text: '🤝 Эмпатическое и эмоциональное (понимание мотивов, поддержка, переговоры)',
          explanation: 'Вы тонко чувствуете эмоциональное состояние собеседника и умеете находить общий язык с каждым',
        },
      },
    },
    q_daily_task_preference: {
      category: 'Рабочий процесс',
      categoryContext: 'Практические рабочие активности',
      title: 'Чем бы вы с увлечением занимались 4–5 часов подряд, забыв о времени?',
      subtitle: 'Ваш идеальный рабочий процесс',
      options: {
        opt_task_deep_focus_screen: {
          text: '💻 Написание кода, сборка сложной математической модели или проектирование архитектуры',
          explanation: 'Глубокое интеллектуальное погружение в тишине с наушниками и чашкой кофе',
        },
        opt_task_design_prototype: {
          text: '🎨 Отрисовка дизайн-концепта, анимация 3D-сцены или сборка интерактивного прототипа',
          explanation: 'Создание осязаемого красивого продукта, который можно увидеть и потрогать',
        },
        opt_task_lab_experiments: {
          text: '🔬 Проведение научных экспериментов, микроскопия, химический синтез или сборка прибора',
          explanation: 'Реальная лабораторная работа с материалами, реактивами, сенсорами или биологическими образцами',
        },
        opt_task_people_negotiation: {
          text: '🗣️ Проведение переговоров, мозговой штурм с командой, консультация или выступление',
          explanation: 'Динамичное живое общение, обмен идеями, вдохновение других и заключение договоренностей',
        },
      },
    },
    q_work_environment: {
      category: 'Рабочая среда',
      categoryContext: 'Формат и локация работы',
      title: 'Какая рабочая среда вам наиболее комфортна?',
      subtitle: 'Где вы чувствуете себя максимально продуктивно',
      options: {
        opt_env_digital_remote: {
          text: '🏡 Полностью удаленная работа (Digital Nomad) из любой точки мира с ноутбука',
          explanation: 'Гибкий график, свобода перемещений и ориентация исключительно на результат',
        },
        opt_env_lab_clinic: {
          text: '🔬 Высокотехнологичная лаборатория, исследовательский центр или медицинская клиника',
          explanation: 'Работа с передовым научным оборудованием, чистые комнаты и реальные образцы',
        },
        opt_env_modern_office: {
          text: '🏙️ Современный технологичный офис в небоскребе в центре мегаполиса',
          explanation: 'Кипящая жизнь, общение с топовыми коллегами, кофе-поинты и ритм большого бизнеса',
        },
        opt_env_field_creative_studio: {
          text: '🌲 Полевые экспедиции, съемочные площадки, строительные объекты или креативная мастерская',
          explanation: 'Смена локаций, живая природа, масштабные строительные конструкции и творческий драйв',
        },
      },
    },
    q_favorite_subjects: {
      category: 'Любимые предметы',
      categoryContext: 'Предметная склонность',
      title: 'Какие предметы и темы в учебе даются вам легче и интереснее всего?',
      subtitle: 'Академический и практический фундамент',
      options: {
        opt_subj_math_cs_physics: {
          text: '📐 Математика, информатика, физика и точные алгоритмические расчеты',
          explanation: 'Уравнения, логические задачи, программирование и законы природы',
        },
        opt_subj_bio_chem_geography: {
          text: '🧬 Биология, химия, анатомия человека и науки о Земле',
          explanation: 'Строение клеток, химические реакции, медицина, экология и природа',
        },
        opt_subj_social_econ_history: {
          text: '📊 Обществознание, экономика, история и иностранные языки',
          explanation: 'Устройство общества, финансовые законы, мировая политика и культура',
        },
        opt_subj_arts_literature: {
          text: '🎨 Рисование, черчение, литература, музыка и мировая художественная культура',
          explanation: 'Создание визуальных образов, сочинение текстов, пространственные композиции и эстетика',
        },
      },
    },
    q_risk_and_career_goals: {
      category: 'Карьерные цели',
      categoryContext: 'Ценностная ориентация',
      title: 'Что для вас является главным критерием успеха в карьере?',
      subtitle: 'Ваша главная жизненная цель',
      options: {
        opt_goal_impact_creation: {
          text: '🚀 Создать инновационный продукт или технологию, которой будут пользоваться миллионы',
          explanation: 'Масштаб влияния, технологическое лидерство и изменение мира к лучшему',
        },
        opt_goal_save_lives_help: {
          text: '❤️ Помогать конкретным людям, спасать жизни и делать общество более справедливым',
          explanation: 'Глубокий человеческий смысл, благодарность людей и польза обществу',
        },
        opt_goal_high_wealth_freedom: {
          text: '💎 Высокий финансовый доход, независимость и управление крупным капиталом',
          explanation: 'Материальное благополучие, инвестиции и свобода выбора стиля жизни',
        },
        opt_goal_mastery_science: {
          text: '🏆 Стать признанным мировым экспертом или ученым, сделавшим великое открытие',
          explanation: 'Глубочайшая экспертность, научное признание и решение нерешенных задач',
        },
      },
    },
    q_team_dynamics: {
      category: 'Роль в команде',
      categoryContext: 'Роль в команде',
      title: 'В какой роли в коллективе вы чувствуете себя наиболее органично?',
      subtitle: 'Командное взаимодействие и персональная ответственность',
      options: {
        opt_team_individual_master: {
          text: '🧙‍♂️ Глубокий эксперт-индивидуал (фокус на сложных задачах, где важна личная филигранная точность)',
          explanation: 'Вы берете сложный участок работы и делаете его безупречно лучше всех',
        },
        opt_team_leader_captain: {
          text: '👑 Лидер и капитан (вдохновлять команду, распределять задачи и отвечать за финальный результат)',
          explanation: 'Вам нравится направлять других, разрешать спорные вопросы и приводить команду к победе',
        },
        opt_team_creative_catalyst: {
          text: '💡 Генератор идей и концептов (придумывать смелые решения и заряжать команду энергией)',
          explanation: 'Вы фонтанируете идеями, ломаете шаблоны и находите свежие нестандартные ходы',
        },
        opt_team_bridge_mediator: {
          text: '🌉 Дипломатичный координатор и наставник (выстраивать теплые отношения и помогать коллегам)',
          explanation: 'Вы создаете доверительную атмосферу, сглаживаете конфликты и растите таланты',
        },
      },
    },
  },
  en: {
    root: {
      category: 'Interest Vector',
      categoryContext: 'Core Career Interest Vector',
      title: 'What truly inspires and energizes you?',
      subtitle: 'Select the primary global direction that sparks your most authentic interest',
      options: {
        opt_tech_engineering: {
          text: '💻 Technology, Code, Artificial Intelligence, Robotics & Exact Sciences',
          explanation: 'Building software architectures, algorithms, advanced hardware, and next-gen digital ecosystems',
        },
        opt_biomed_science: {
          text: '🧬 Medicine, Biology, Lifesaving, Genetic Engineering & Nature',
          explanation: 'Studying living organisms, surgical care, biotechnology, neuroscience, and planetary ecology',
        },
        opt_business_finance: {
          text: '📈 Business, Startups, High Finance, Leadership & Growth Marketing',
          explanation: 'Launching enterprises, raising venture capital, scaling markets, and leading high-performing teams',
        },
        opt_creative_arts: {
          text: '🎨 Creativity, UI/UX Design, Cinema, Music, Architecture & Visual Arts',
          explanation: 'Designing sleek interfaces, films, 3D graphics, soundscapes, and spatial architectural concepts',
        },
        opt_humanities_society: {
          text: '⚖️ Psychology, Law, Diplomacy, Languages, Education & Social Impact',
          explanation: 'Understanding human behavior, human rights, global affairs, teaching, and intercultural bridges',
        },
      },
    },
    branch_tech_focus: {
      category: 'IT Specialization',
      categoryContext: 'Specialization in IT & Engineering',
      title: 'Which frontier of technology attracts you the most?',
      subtitle: 'Choose your desired level of technological depth',
      options: {
        opt_ai_deep_data: {
          text: '🧠 Artificial Intelligence, Machine Learning & Mathematical Algorithms',
          explanation: 'Training neural networks, generative AI, big data intelligence, and engineering toward AGI',
        },
        opt_software_web_arch: {
          text: '💻 Digital Product Development, Scalable Web Platforms & Mobile Apps',
          explanation: 'Writing clean code, architecting full-stack systems, mobile apps, and distributed cloud services',
        },
        opt_cybersec_networks: {
          text: '🛡️ Cybersecurity, Ethical Hacking, Cryptography & Threat Defense',
          explanation: 'Discovering vulnerabilities, forensic investigations, secure cryptographic protocols, and infrastructure defense',
        },
        opt_hardware_robotics_space: {
          text: '🤖 Robotics, Autonomous Drones, Aerospace Systems & Physical Hardware',
          explanation: 'Engineering physical mechanisms, microcontrollers, embedded robotics, and rocket systems',
        },
      },
    },
    branch_biomed_focus: {
      category: 'Biomedicine & Science',
      categoryContext: 'Specialization in Life Sciences',
      title: 'Which direction in medicine and biology resonates with you?',
      subtitle: 'Hands-on patient care versus breakthrough scientific discovery',
      options: {
        opt_clinical_surgery: {
          text: '🏥 High-Tech Surgery, Clinical Diagnostics & Direct Patient Care',
          explanation: 'Complex surgical procedures, clinical diagnostics, rehabilitation, and saving human lives daily',
        },
        opt_genetics_biotech: {
          text: '🧬 Genetic Engineering (CRISPR), Bioinformatics & Longevity',
          explanation: 'DNA editing, vaccine synthesis, stem cell therapy, and extending healthy human lifespan',
        },
        opt_pharma_chemistry: {
          text: '💊 Drug Discovery, Molecular Synthesis & Advanced Pharmacology',
          explanation: 'Designing oncology therapies, leading clinical trials, and cutting-edge organic chemistry synthesis',
        },
        opt_ecology_planet: {
          text: '🌿 Planetary Ecology, Climate Research & Smart Agritech',
          explanation: 'Biodiversity conservation, vertical farming, clean energy transitions, and ocean restoration',
        },
      },
    },
    branch_business_focus: {
      category: 'Business & Finance',
      categoryContext: 'Specialization in Business & Finance',
      title: 'Which business leadership role feels most natural to you?',
      subtitle: 'From zero-to-one startup innovation to global capital markets',
      options: {
        opt_founder_startup: {
          text: '🚀 Launching a High-Growth Startup & Scaling to Global Markets',
          explanation: 'Building companies from scratch, raising investments, hiring elite talent, and disrupting industries',
        },
        opt_quant_investment: {
          text: '📊 Quantitative Trading, Hedge Funds & Investment Banking',
          explanation: 'Algorithmic market modeling, evaluating multi-billion M&A deals, and portfolio management',
        },
        opt_product_lead: {
          text: '🎯 Digital Product Management & User Experience Strategy',
          explanation: 'Researching customer needs, prioritizing high-impact features, and aligning engineering with business',
        },
        opt_growth_marketing: {
          text: '📢 Viral Growth Marketing, Brand Storytelling & PR Campaigns',
          explanation: 'Running massive ad campaigns, trend forecasting, influencer partnerships, and behavioral psychology',
        },
      },
    },
    branch_creative_focus: {
      category: 'Creative Industries',
      categoryContext: 'Specialization in Creative Industries',
      title: 'Which creative medium inspires you the most?',
      subtitle: 'Your preferred medium of visual and narrative expression',
      options: {
        opt_digital_uiux_design: {
          text: '📱 Product UI/UX Design & Digital Interface Aesthetics',
          explanation: 'Designing mobile super-apps, web products, micro-interactions, and design systems',
        },
        opt_3d_motion_cgi: {
          text: '🎬 3D Motion Graphics, Visual Effects (VFX) & Cinematography',
          explanation: 'Creating photorealistic 3D worlds, animations in Blender/Cinema 4D, and cinematic directing',
        },
        opt_architecture_spaces: {
          text: '🏛️ Architectural Engineering, Urban Planning & Smart City Design',
          explanation: 'Designing futuristic towers, public plazas, sustainable living districts, and cultural landmarks',
        },
        opt_music_sound_stories: {
          text: '🎧 Music Production, Audio Engineering & Narrative Screenwriting',
          explanation: 'Synthesizing soundscapes for games/films, scoring tracks, and crafting compelling story scripts',
        },
      },
    },
    branch_humanities_focus: {
      category: 'Humanities & Society',
      categoryContext: 'Specialization in Social Sciences & Humanities',
      title: 'Where do you see your human-centric vocation?',
      subtitle: 'From personal psychological support to international policymaking',
      options: {
        opt_psychology_therapy: {
          text: '🧠 Psychotherapy, Cognitive Science & Human Potential Development',
          explanation: 'Guiding 1-on-1 therapeutic sessions, crisis coaching, emotional intelligence, and brain science',
        },
        opt_law_intellectual_prop: {
          text: '⚖️ Corporate & Digital Law, Litigation & Rights Advocacy',
          explanation: 'Advising major international transactions, AI regulatory policy, and courtroom advocacy',
        },
        opt_diplomacy_intl_affairs: {
          text: '🌐 International Diplomacy, Global Negotiations & NGO Leadership',
          explanation: 'Representing nations in embassies/UN, resolving conflicts, and building multilateral treaties',
        },
        opt_edtech_mentorship: {
          text: '🎓 Educational Design (EdTech), Interactive Pedagogy & Mentorship',
          explanation: 'Building digital learning platforms, gamified curriculum design, and inspiring next generations',
        },
      },
    },
    q_thinking_style: {
      category: 'Thinking Style',
      categoryContext: 'Cognitive Profile Identification',
      title: 'Which thinking style comes most naturally to you?',
      subtitle: 'How your mind tackles complex, unstructured challenges',
      options: {
        opt_algo_logical: {
          text: '📐 Algorithmic & Structured (Strict logic, formulas, systematic step-by-step breakdown)',
          explanation: 'You excel at decomposing complex systems into robust modules and building predictable frameworks',
        },
        opt_creative_spatial: {
          text: '✨ Creative & Spatial (Intuition, aesthetics, outside-the-box conceptual thinking)',
          explanation: 'You perceive holistic patterns, balance visual and conceptual harmony, and invent novel ideas',
        },
        opt_strategic_biz: {
          text: '🎯 Strategic & Entrepreneurial (Opportunity spotting, resource leverage, ROI focus)',
          explanation: 'You quickly identify practical upside, organize people around a goal, and drive initiatives to results',
        },
        opt_empathic_social: {
          text: '🤝 Empathetic & Relational (Deep motive understanding, coaching, negotiation)',
          explanation: 'You read underlying emotional states effortlessly and build high-trust rapport across diverse groups',
        },
      },
    },
    q_daily_task_preference: {
      category: 'Daily Workflow',
      categoryContext: 'Hands-on Activity Preferences',
      title: 'What activity would engage you deeply for 4–5 hours without noticing time?',
      subtitle: 'Your ideal deep-work state',
      options: {
        opt_task_deep_focus_screen: {
          text: '💻 Writing clean code, building complex mathematical models, or architecting systems',
          explanation: 'Immersive analytical flow in quiet focus with headphones and clear problem specifications',
        },
        opt_task_design_prototype: {
          text: '🎨 Crafting visual design prototypes, animating 3D scenes, or polishing UI micro-interactions',
          explanation: 'Creating a tangible, aesthetically refined digital artifact that people can see and interact with',
        },
        opt_task_lab_experiments: {
          text: '🔬 Running laboratory experiments, microscopy, chemical synthesis, or prototyping hardware',
          explanation: 'Real-world physical experimentation with materials, biological samples, reagents, or sensors',
        },
        opt_task_people_negotiation: {
          text: '🗣️ Leading negotiations, team brainstorming sessions, client consultations, or keynote talks',
          explanation: 'High-energy live interaction, pitching ideas, inspiring collaborators, and closing agreements',
        },
      },
    },
    q_work_environment: {
      category: 'Work Environment',
      categoryContext: 'Location and Work Format',
      title: 'Which work environment brings out your highest productivity?',
      subtitle: 'Where you feel energized, focused, and comfortable',
      options: {
        opt_env_digital_remote: {
          text: '🏡 100% Remote / Digital Nomad freedom with a laptop from anywhere in the world',
          explanation: 'Flexible hours, geographic mobility, autonomy, and an output-driven evaluation culture',
        },
        opt_env_lab_clinic: {
          text: '🔬 Cutting-edge research laboratory, medical center, or specialized testing facility',
          explanation: 'Working with advanced scientific apparatus, cleanrooms, and physical empirical data',
        },
        opt_env_modern_office: {
          text: '🏙️ Modern high-tech skyscraper office in a vibrant downtown business hub',
          explanation: 'Bustling workplace energy, fast collaboration with top peers, coffee lounges, and business momentum',
        },
        opt_env_field_creative_studio: {
          text: '🌲 Field expeditions, movie sets, construction projects, or creative artisan workshops',
          explanation: 'Dynamic scenery changes, connection with nature, physical builds, and artistic drive',
        },
      },
    },
    q_favorite_subjects: {
      category: 'Favorite Subjects',
      categoryContext: 'Academic & Intellectual Affinity',
      title: 'Which academic topics and school subjects engage you most naturally?',
      subtitle: 'Your intellectual and practical foundation',
      options: {
        opt_subj_math_cs_physics: {
          text: '📐 Mathematics, Computer Science, Physics & Exact Quantitative Calculations',
          explanation: 'Equations, algorithmic logic puzzles, programming concepts, and natural laws',
        },
        opt_subj_bio_chem_geography: {
          text: '🧬 Biology, Chemistry, Human Anatomy & Earth Sciences',
          explanation: 'Cellular mechanics, chemical reactions, medical physiology, ecology, and natural systems',
        },
        opt_subj_social_econ_history: {
          text: '📊 Social Studies, Economics, World History & Foreign Languages',
          explanation: 'Social structures, macroeconomic forces, global geopolitics, and world cultures',
        },
        opt_subj_arts_literature: {
          text: '🎨 Visual Arts, Drafting, Literature, Music & World Culture',
          explanation: 'Visual composition, creative writing, spatial drawing, and aesthetic analysis',
        },
      },
    },
    q_risk_and_career_goals: {
      category: 'Career Goals',
      categoryContext: 'Core Value Orientation',
      title: 'What represents the ultimate marker of career fulfillment for you?',
      subtitle: 'Your core guiding professional ambition',
      options: {
        opt_goal_impact_creation: {
          text: '🚀 Creating a breakthrough product or technology used by millions worldwide',
          explanation: 'Global scale, technological leadership, and reshaping an industry for the better',
        },
        opt_goal_save_lives_help: {
          text: '❤️ Directly saving lives, healing people, and building a more compassionate society',
          explanation: 'Profound humanitarian meaning, genuine gratitude, and tangible positive societal impact',
        },
        opt_goal_high_wealth_freedom: {
          text: '💎 Exceptional financial wealth, capital ownership, and complete lifestyle autonomy',
          explanation: 'Financial abundance, investment freedom, and independence in how you live and work',
        },
        opt_goal_mastery_science: {
          text: '🏆 Becoming a world-renowned authority or scientist solving historic unsolved problems',
          explanation: 'Peer recognition, scientific breakthroughs, and deep intellectual mastery in your chosen field',
        },
      },
    },
    q_team_dynamics: {
      category: 'Team Role',
      categoryContext: 'Collaboration & Responsibility Profile',
      title: 'In which team capacity do you operate at your highest potential?',
      subtitle: 'Your collaborative dynamic and ownership style',
      options: {
        opt_team_individual_master: {
          text: '🧙‍♂️ Deep Individual Contributor (Mastering complex specialized tasks requiring flawless precision)',
          explanation: 'You own a high-complexity domain and deliver world-class execution independently',
        },
        opt_team_leader_captain: {
          text: '👑 Team Leader & Captain (Inspiring people, delegating effectively, and owning the final result)',
          explanation: 'You thrive directing groups, resolving friction, and guiding everyone toward victory',
        },
        opt_team_creative_catalyst: {
          text: '💡 Creative Catalyst & Idea Pioneer (Challenging conventions and energizing team innovation)',
          explanation: 'You generate bold hypotheses, shatter mental blocks, and introduce fresh perspectives',
        },
        opt_team_bridge_mediator: {
          text: '🌉 Diplomatic Mediator & Mentor (Fostering psychological safety, cohesion, and talent growth)',
          explanation: 'You cultivate high trust, resolve misunderstandings, and elevate the skills of people around you',
        },
      },
    },
  },
  tg: {
    root: {
      category: 'Самти шавқу рағбат',
      categoryContext: 'Муайянкунии самти асосии шавқу ҳавас',
      title: 'Кадом соҳа шуморо воқеан илҳом мебахшад ва ба шумо нерӯ медиҳад?',
      subtitle: 'Самти калидиеро интихоб намоед, ки ба он самимона таваҷҷуҳи зиёд доред',
      options: {
        opt_tech_engineering: {
          text: '💻 Технологияҳо, рамзнависӣ, зеҳни сунъӣ, роботҳо ва илмҳои дақиқ',
          explanation: 'Офаридани барномаҳо, алгоритмҳо, техникаи мураккаб ва хидматҳои рақамии оянда',
        },
        opt_biomed_science: {
          text: '🧬 Тиб, биология, наҷоти ҳаёти инсонҳо, муҳандисии генетикӣ ва табиат',
          explanation: 'Омӯзиши организмҳои зинда, ҷарроҳӣ, биотехнология ва экологияи сайёра',
        },
        opt_business_finance: {
          text: '📈 Бизнес, стартапҳо, молияи бузург, роҳбарӣ ва маркетинг',
          explanation: 'Роҳандозии ширкатҳо, ҷалби сармоя, рушди бозорҳо ва роҳбарӣ дар гурӯҳҳо',
        },
        opt_creative_arts: {
          text: '🎨 Эҷодиёт, дизайн, синамо, мусиқӣ, меъморӣ ва санъати тасвирӣ',
          explanation: 'Офаридани интерфейсҳои зебо, филмҳо, графикаи 3D ва консепсияҳои меъморӣ',
        },
        opt_humanities_society: {
          text: '⚖️ Равоншиносӣ, ҳуқуқ, дипломатия, забонҳо, маориф ва кӯмак ба ҷомеа',
          explanation: 'Шинохти инсонҳо, ҳимояи ҳуқуқ, муоширати байналмилалӣ ва сиёсати ҷаҳонӣ',
        },
      },
    },
    branch_tech_focus: {
      category: 'Ихтисос дар IT',
      categoryContext: 'Ихтисос дар соҳаи IT ва муҳандисӣ',
      title: 'Кадом самти технология шуморо бештар ҷалб мекунад?',
      subtitle: 'Сатҳи фарогирии худро дар соҳаи технология интихоб намоед',
      options: {
        opt_ai_deep_data: {
          text: '🧠 Зеҳни сунъӣ, омӯзиши мошинӣ ва алгоритмҳои математикӣ',
          explanation: 'Омӯзиши шабакаҳои асабӣ, таҳлили ҳаҷми азими додаҳо ва офаридани AGI',
        },
        opt_software_web_arch: {
          text: '💻 Барномасозии маҳсулоти рақамӣ, сомонаҳо ва замимаҳои мобилӣ',
          explanation: 'Навиштани коди босифат, сохтани платформаҳои веб ва системаҳои пуриқтидор',
        },
        opt_cybersec_networks: {
          text: '🛡️ Амнияти киберӣ, ҳакерҳои ахлоқӣ ва ҳимоя аз ҳамлаҳои рақамӣ',
          explanation: 'Ҷустуҷӯи осебпазириҳо, таҳқиқи ҳодисаҳо ва ҳифзи инфрасохтори рақамӣ',
        },
        opt_hardware_robotics_space: {
          text: '🤖 Робототехника, дронҳо, дастгоҳҳои кайҳонӣ ва техникаи сахтафзор',
          explanation: 'Лоиҳакашии механизмҳои физикӣ, автопилотҳо, электроника ва муҳаррикҳо',
        },
      },
    },
    branch_biomed_focus: {
      category: 'Биотиб ва илм',
      categoryContext: 'Ихтисос дар илмҳои ҳаётшиносӣ',
      title: 'Кадом самт дар соҳаи тиб ва биология ба шумо наздиктар аст?',
      subtitle: 'Кӯмаки амалӣ ба беморон ё кашфиётҳои бузурги илмӣ',
      options: {
        opt_clinical_surgery: {
          text: '🏥 Ҷарроҳии пешрафта ва табобати мустақими беморон',
          explanation: 'Амалиётҳои мураккаб, ташхис дар беморхонаҳо ва наҷоти ҳаёти одамон ҳар рӯз',
        },
        opt_genetics_biotech: {
          text: '🧬 Муҳандисии генетикӣ (CRISPR), биоинформатика ва дарозумрӣ',
          explanation: 'Таҳрири ДНК, синтези ваксинаҳо, терапияи ҳуҷайраҳо ва мубориза бо пиршавӣ',
        },
        opt_pharma_chemistry: {
          text: '💊 Кашфи доруҳои нав, синтези молекулавӣ ва фармакология',
          explanation: 'Офаридани молекулаҳо бар зидди бемориҳо ва озмоишҳои клиникӣ',
        },
        opt_ecology_planet: {
          text: '🌿 Экологияи сайёра, таҳқиқоти иқлим ва агротехнологияҳои ҳушманд',
          explanation: 'Ҳифзи гуногунии биологӣ, фермаҳои амудӣ ва тозакунии уқёнусҳо',
        },
      },
    },
    branch_business_focus: {
      category: 'Бизнес ва молия',
      categoryContext: 'Ихтисос дар бизнес ва молия',
      title: 'Кадом нақш дар олами тиҷорат барои шумо мувофиқтар аст?',
      subtitle: 'Аз офаридани стартапҳои инноватсионӣ то бозорҳои молиявӣ',
      options: {
        opt_founder_startup: {
          text: '🚀 Офаридани стартапи шахсӣ ва ба бозори ҷаҳонӣ баровардани он',
          explanation: 'Таъсиси ширкатҳо аз сифр, ҷалби сармоя ва тағйир додани соҳаҳо',
        },
        opt_quant_investment: {
          text: '📊 Трейдинги алгоритмӣ, фондҳои сармоягузорӣ ва бонкинг',
          explanation: 'Моделсозии математикии бозорҳо ва идоракунии сармояҳои бузург',
        },
        opt_product_lead: {
          text: '🎯 Идоракунии маҳсулоти рақамӣ (Product Management)',
          explanation: 'Таҳлили рафтори корбарон ва ҳамоҳангсозии кори гурӯҳи барномасозон',
        },
        opt_growth_marketing: {
          text: '📢 Маркетинги таъсиррасон, рушди брендҳо ва маъракаҳои PR',
          explanation: 'Рекламаҳои бузургҳаҷм, ҳамкорӣ бо чеҳраҳои шинохта ва равоншиносии омма',
        },
      },
    },
    branch_creative_focus: {
      category: 'Соҳаҳои эҷодӣ',
      categoryContext: 'Ихтисос дар соҳаҳои эҷодӣ',
      title: 'Кадом медиаи эҷодӣ шуморо бештар ба худ ҷалб мекунад?',
      subtitle: 'Шакли баёни истеъдод ва таҷассуми визуалӣ',
      options: {
        opt_digital_uiux_design: {
          text: '📱 Дизайни UI/UX ва зебоишиносии интерфейсҳои рақамӣ',
          explanation: 'Лоиҳакашии замимаҳо, сомонаҳо ва системаҳои дизайни муосир',
        },
        opt_3d_motion_cgi: {
          text: '🎬 Графикаи 3D, эффектҳои махсуси визуалӣ (VFX) ва синамо',
          explanation: 'Офаридани оламҳои 3D, аниматсия ва коргардонии филмҳо',
        },
        opt_architecture_spaces: {
          text: '🏛️ Меъмории биноҳо, шаҳрсозӣ ва дизайни шаҳрҳои ҳушманд',
          explanation: 'Лоиҳакашии осмонбӯсҳо, боғҳои оянда ва маҳаллаҳои замонавӣ',
        },
        opt_music_sound_stories: {
          text: '🎧 Офаридани мусиқӣ, дизайни савтӣ ва сенариянависӣ',
          explanation: 'Синтези садоҳо барои бозиҳо/филмҳо ва эҷоди оҳангҳои таъсирбахш',
        },
      },
    },
    branch_humanities_focus: {
      category: 'Соҳаи гуманитарӣ',
      categoryContext: 'Ихтисос дар соҳаи иҷтимоӣ ва гуманитарӣ',
      title: 'Дар кадом бахши муносибат бо одамон рисолати худро мебинед?',
      subtitle: 'Аз кӯмаки инфиродии равонӣ то сиёсати байналмилалӣ',
      options: {
        opt_psychology_therapy: {
          text: '🧠 Равоншиносӣ, илмҳои маърифатӣ ва рушди потенсиали инсон',
          explanation: 'Машваратҳои инфиродӣ, кӯмак дар баромадан аз буҳронҳо ва омӯзиши эҳсосот',
        },
        opt_law_intellectual_prop: {
          text: '⚖️ Ҳуқуқи корпоративӣ ва рақамӣ, муҳокимаҳои судӣ ва дифои манфиатҳо',
          explanation: 'Ҳамроҳии ҳуқуқии шартномаҳо ва қонунгузории зеҳни сунъӣ',
        },
        opt_diplomacy_intl_affairs: {
          text: '🌐 Дипломатияи байналмилалӣ, гуфтушунидҳо ва ҳамкории ҷаҳонӣ',
          explanation: 'Кор дар сафоратхонаҳо, СММ ва танзими муносибатҳои давлатӣ',
        },
        opt_edtech_mentorship: {
          text: '🎓 Тарҳрезии таълимӣ (EdTech), усулҳои нави омӯзиш ва роҳнамоӣ',
          explanation: 'Офаридани донишгоҳҳои онлайн, барномаҳои интерактивии таълимӣ ва омӯзгорӣ',
        },
      },
    },
    q_thinking_style: {
      category: 'Тарзи тафаккур',
      categoryContext: 'Муайянкунии тарзи тафаккури шахсӣ',
      title: 'Кадом тарзи тафаккур барои шумо табиӣ ва наздиктар аст?',
      subtitle: 'Майнаи шумо масъалаҳои мураккабро чӣ тавр ҳал мекунад',
      options: {
        opt_algo_logical: {
          text: '📐 Алгоритмӣ ва сохторӣ (мантиқи қатъӣ, формулаҳо, тақсим ба марҳилаҳо)',
          explanation: 'Шумо дӯст медоред системаҳои мураккабро ба қисмҳои дақиқ ҷудо кунед',
        },
        opt_creative_spatial: {
          text: '✨ Эҷодӣ ва образнок (интуитсия, зебоӣ, ғояҳои ғайриоддӣ ва визуалӣ)',
          explanation: 'Шумо бо тасвирҳои комил фикр мекунед ва ғояҳои нав меофаред',
        },
        opt_strategic_biz: {
          text: '🎯 Стратегӣ ва соҳибкорӣ (ҷустуҷӯи имкониятҳо, рушд ва натиҷа)',
          explanation: 'Шумо манфиатро мебинед ва одамонро барои расидан ба ҳадаф муттаҳид месозед',
        },
        opt_empathic_social: {
          text: '🤝 Эмпатикӣ ва эҳсосӣ (дарки нияти дигарон, дастгирӣ ва гуфтушунид)',
          explanation: 'Шумо ҳолати рӯҳии ҳамсуҳбатро хуб ҳис мекунед ва бо ҳар кас забон меёбед',
        },
      },
    },
    q_daily_task_preference: {
      category: 'Раванди корӣ',
      categoryContext: 'Фаъолиятҳои амалии корӣ',
      title: 'Бо кадом кор 4–5 соат пайдарпай бехабар аз вақт бо шавқ машғул мешудед?',
      subtitle: 'Раванди кории идеалии шумо',
      options: {
        opt_task_deep_focus_screen: {
          text: '💻 Навиштани код, сохтани модели математикӣ ё лоиҳакашии меъморӣ',
          explanation: 'Ғӯтаваршавии амиқи зеҳнӣ дар оромиш бо гӯшмонак ва як пиёла чой/қаҳва',
        },
        opt_task_design_prototype: {
          text: '🎨 Тарҳрезии консепсияи дизайн, аниматсияи 3D ё сохтани прототипи интерактивӣ',
          explanation: 'Офаридани маҳсулоти зебо ва воқеӣ, ки дидан ва истифода кардан мумкин аст',
        },
        opt_task_lab_experiments: {
          text: '🔬 Гузаронидани таҷрибаҳои илмӣ, микроскопия, синтези кимиёвӣ ё сохтани дастгоҳ',
          explanation: 'Кори воқеии лабораторӣ бо маводҳо, моддаҳо, сенсорҳо ва намунаҳои биологӣ',
        },
        opt_task_people_negotiation: {
          text: '🗣️ Гузаронидани музокирот, ҳамфикрии гурӯҳӣ, машварат ё баромад дар назди одамон',
          explanation: 'Муоширати зинда ва серҳаракат, табодули афкор, илҳом бахшидан ба дигарон',
        },
      },
    },
    q_work_environment: {
      category: 'Муҳити корӣ',
      categoryContext: 'Формат ва макони корӣ',
      title: 'Кадом муҳити корӣ барои шумо бароҳаттарин аст?',
      subtitle: 'Дар куҷо шумо худро самараноктар ҳис мекунед',
      options: {
        opt_env_digital_remote: {
          text: '🏡 Кори комилан фосилавӣ (Digital Nomad) аз ҳар нуқтаи ҷаҳон бо ноутбук',
          explanation: 'Ҷадвали озоди корӣ, озодии сафар ва таваҷҷуҳ танҳо ба натиҷаи ниҳоӣ',
        },
        opt_env_lab_clinic: {
          text: '🔬 Лабораторияи пешрафта, маркази таҳқиқотӣ ё беморхонаи замонавӣ',
          explanation: 'Кор бо таҷҳизоти замонавии илмӣ ва намунаҳои воқеии табиӣ',
        },
        opt_env_modern_office: {
          text: '🏙️ Дафтари кории муосир ва баландтехнологӣ дар маркази шаҳр',
          explanation: 'Фазои пурҷӯшу хурӯш, муошират бо ҳамкорони беҳтарин ва суръати баланди бизнес',
        },
        opt_env_field_creative_studio: {
          text: '🌲 Сафарҳои илмӣ, майдонҳои наворбардорӣ, иншооти сохтмонӣ ё устохонаи эҷодӣ',
          explanation: 'Ивазшавии ҷойҳо, табиати зинда, сохтмонҳои бузург ва нерӯи баланди эҷодӣ',
        },
      },
    },
    q_favorite_subjects: {
      category: 'Фанҳои дӯстдошта',
      categoryContext: 'Майлу рағбати фаннӣ',
      title: 'Кадом фанҳо ва мавзӯъҳо дар таҳсил барои шумо осонтар ва шавқовартаранд?',
      subtitle: 'Пойдевори илмӣ ва амалии шумо',
      options: {
        opt_subj_math_cs_physics: {
          text: '📐 Математика, информатика, физика ва ҳисобҳои дақиқи алгоритмӣ',
          explanation: 'Муодилаҳо, масъалаҳои мантиқӣ, барномасозӣ ва қонунҳои табиат',
        },
        opt_subj_bio_chem_geography: {
          text: '🧬 Биология, химия, анатомияи инсон ва илмҳои заминшиносӣ',
          explanation: 'Сохтори ҳуҷайраҳо, реаксияҳои кимиёвӣ, тиб, экология ва табиат',
        },
        opt_subj_social_econ_history: {
          text: '📊 Ҷомеашиносӣ, иқтисод, таърих ва забонҳои хориҷӣ',
          explanation: 'Сохтори ҷомеа, қонунҳои молиявӣ, сиёсати ҷаҳонӣ ва фарҳанг',
        },
        opt_subj_arts_literature: {
          text: '🎨 Рассомӣ, нақшакашӣ, адабиёт, мусиқӣ ва фарҳанги бадеии ҷаҳон',
          explanation: 'Офаридани тасвирҳои визуалӣ, навиштани матнҳо ва зебоишиносӣ',
        },
      },
    },
    q_risk_and_career_goals: {
      category: 'Ҳадафҳои касбӣ',
      categoryContext: 'Самтгирии арзишҳо',
      title: 'Барои шумо меъёри асосии муваффақият дар касб чист?',
      subtitle: 'Ҳадафи асосии ҳаётии шумо',
      options: {
        opt_goal_impact_creation: {
          text: '🚀 Офаридани маҳсулот ё технологияи инноватсионие, ки миллионҳо нафар истифода мебаранд',
          explanation: 'Сатҳи таъсиррасонӣ, пешвоии технологӣ ва тағйири мусбати ҷаҳон',
        },
        opt_goal_save_lives_help: {
          text: '❤️ Кӯмаки мушаххас ба одамон, наҷоти ҳаёт ва одилонатар сохтани ҷомеа',
          explanation: 'Маънои амиқи инсонӣ, миннатдории одамон ва манфиат ба ҷамъият',
        },
        opt_goal_high_wealth_freedom: {
          text: '💎 Даромади баланди молиявӣ, озодӣ ва идоракунии сармояи калон',
          explanation: 'Осудагии моддӣ, сармоягузорӣ ва озодӣ дар интихоби тарзи зиндагӣ',
        },
        opt_goal_mastery_science: {
          text: '🏆 Шуҳрати ҷаҳонӣ ҳамчун коршинос ё олиме, ки кашфиёти бузург кардааст',
          explanation: 'Маҳорати баланди касбӣ, эътирофи илмӣ ва ҳалли масъалаҳои душвор',
        },
      },
    },
    q_team_dynamics: {
      category: 'Нақш дар гурӯҳ',
      categoryContext: 'Нақш дар гурӯҳ',
      title: 'Дар кадом нақш дар дохили коллектив худро бароҳаттар ҳис мекунед?',
      subtitle: 'Ҳамкорӣ дар гурӯҳ ва масъулияти шахсӣ',
      options: {
        opt_team_individual_master: {
          text: '🧙‍♂️ Мутахассиси амиқи инфиродӣ (тамаркуз ба вазифаҳои мураккаб ва дақиқ)',
          explanation: 'Шумо қисмати мураккаби корро ба дӯш гирифта, онро беҳамто иҷро мекунед',
        },
        opt_team_leader_captain: {
          text: '👑 Роҳбар ва пешво (илҳом бахшидан ба даста, тақсими вазифаҳо ва ҷавобгарӣ)',
          explanation: 'Ба шумо роҳнамоӣ кардани дигарон ва овардани даста ба ғалаба маъқул аст',
        },
        opt_team_creative_catalyst: {
          text: '💡 Генератори ғояҳо ва консепсияҳо (пешниҳоди роҳҳои ҷасурона ва тоза)',
          explanation: 'Шумо ғояҳои тоза эҷод мекунед ва роҳҳои нави эҷодиро пешниҳод менамоед',
        },
        opt_team_bridge_mediator: {
          text: '🌉 Мутобиқсози дипломат ва мураббӣ (сохтани муносибатҳои самимӣ ва кӯмак)',
          explanation: 'Шумо муҳити бовариро эҷод карда, истеъдодҳои ҳамкоронро парвариш медиҳед',
        },
      },
    },
  },
};
