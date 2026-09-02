import { Language } from './types';

export interface Translations {
  header: {
    appTitle: string;
    appSubtitle: string;
    navMain: string;
    navQuiz: string;
    navBattle: string;
    navVolunteering: string;
    navAiAssistant: string;
    navBattleTitle: string;
    navVolunteeringTitle: string;
    navAiAssistantTitle: string;
    resetBtn: string;
    language: string;
    selectLanguage: string;
  };
  battle: {
    badge: string;
    title: string;
    subtitle: string;
    searchFighter1Placeholder: string;
    searchFighter2Placeholder: string;
    fighter1Label: string;
    fighter2Label: string;
    cornerBlue: string;
    cornerRed: string;
    selectPrompt: string;
    quickBattlesTitle: string;
    categoriesAll: string;
    categoriesLabel: string;
    vsBadge: string;
    salaryComparison: string;
    entryDifficulty: string;
    stressLevel: string;
    demandFuture: string;
    remoteFormat: string;
    keyMetricsTitle: string;
    deepProfileTitle: string;
    prosTitle: string;
    consTitle: string;
    skillsTitle: string;
    winnerBadge: string;
    easyEntry: string;
    lowStress: string;
    highSalary: string;
    highDemand: string;
    aiVerdictTitle: string;
    aiVerdictText: string;
    actionTakeTest: string;
    actionAskAI: string;
    actionSwap: string;
    actionRandom: string;
    actionReset: string;
    scoreExplanation: string;
    noResults: string;
    startBattle: string;
    restartBattle: string;
    viewDetailedComparison: string;
    interactiveTournament: string;
    directComparison: string;
    rulesTitle: string;
    rulesDesc: string;
    round: string;
    roundOf: string;
    chooseBtn: string;
    skipBtn: string;
    winnerLabel: string;
    winnerRatio: string;
    winnerBreakdown: string;
    congratulations: string;
    drawTitle: string;
    drawDesc: string;
    whyWonTitle: string;
    takeQuizCta: string;
    backToSelect: string;
    round1Title: string;
    round1Question: string;
    round2Title: string;
    round2Question: string;
    round3Title: string;
    round3Question: string;
    round4Title: string;
    round4Question: string;
    round5Title: string;
    round5Question: string;
    presetBattles: {
      devVsAi: string;
      surgeonVsCardio: string;
      roboticsVsEv: string;
      uiuxVsMotion: string;
      cyberVsCloud: string;
      pilotVsAero: string;
    };
  };
  hero: {
    topBadge: string;
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    nameLabel: string;
    nameOptional: string;
    namePlaceholder: string;
    statusLabel: string;
    startBtn: string;
    questionsCount: string;
    timeEstimate: string;
    freeBadge: string;
    roles: {
      school: string;
      college: string;
      university: string;
      careerChange: string;
    };
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    articleTitle: string;
    articleSubtitle: string;
    articlePara1: string;
    articlePara2: string;
    articlePara3: string;
    articleWhyImportantTitle: string;
    articleWhyImportantList: string[];
    articleConclusion: string;
    bottomCtaTitle: string;
    bottomCtaSubtitle: string;
    bottomCtaBtn: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
    pathTitle: string;
    pathSubtitle: string;
    step1Num: string;
    step1Title: string;
    step1Desc: string;
    step2Num: string;
    step2Title: string;
    step2Desc: string;
    step3Num: string;
    step3Title: string;
    step3Desc: string;
  };
  quiz: {
    step: string;
    of: string;
    question: string;
    orientation: string;
    backBtn: string;
    nextBtn: string;
    finishBtn: string;
    selectOptionHint: string;
    keyboardHint: string;
    evaluatingTitle: string;
    evaluatingSubtitle: string;
    calibration: string;
    adaptivePath: string;
    getResults: string;
    selectToContinue: string;
    loadingTitle?: string;
    loadingFor?: string;
    loadingSubtitle?: string;
    step1?: string;
    step2?: string;
    step3?: string;
    step4?: string;
    step5?: string;
  };
  results: {
    badge: string;
    title: string;
    subtitle: string;
    matchScore: string;
    topProfessions: string;
    radarTitle: string;
    radarDesc: string;
    detailsTitle: string;
    whyFitsYou: string;
    dailyTasks: string;
    keySkills: string;
    hardSkills: string;
    softSkills: string;
    educationPath: string;
    recommendedMajors: string;
    topUniversities: string;
    salaryAndOutlook: string;
    salaryJunior: string;
    salaryMiddle: string;
    salarySenior: string;
    remoteFormat: string;
    firstSteps: string;
    askAiAboutThis: string;
    consultantCta: string;
    consultantCtaDesc: string;
    consultantCtaBtn: string;
    volunteeringCta: string;
    volunteeringCtaDesc: string;
    volunteeringCtaBtn: string;
    retakeTest: string;
    printResults: string;
    copyLink: string;
    linkCopied: string;
    archetypeLabel: string;
    leadingProfile: string;
    affinitySpheres: string;
    matrixTitle: string;
    scaleLabel: string;
    algorithmNote: string;
    top5Title: string;
    top5Subtitle: string;
    skillsLabel: string;
    formatLabel: string;
    middleIncomeLabel: string;
    collapseDetails: string;
    detailedPlan: string;
    moreDetails: string;
    askMentorAbout: string;
    demandLabel: string;
    degreeLabel: string;
    subjectsLabel: string;
    dayInLifeLabel: string;
    threeStepsLabel: string;
    altPathsTitle: string;
    altPathsSubtitle: string;
    roadmapTitle: string;
    roadmapSubtitle: string;
    mentorFarewellTitle: string;
    askCounselorBtn: string;
    explorer: string;
    prosTitle: string;
    consTitle: string;
    coreSkillsTitle: string;
    traits: {
      analytical: string;
      technical: string;
      creative: string;
      research: string;
      social: string;
      entrepreneurial: string;
      practical: string;
      organizational: string;
    };
  };
  volunteering: {
    badge: string;
    title: string;
    subtitle: string;
    allFilter: string;
    applyBtn: string;
    appliedBtn: string;
    viewDetails: string;
    requirements: string;
    skillsGain: string;
    duration: string;
    location: string;
    spotsLeft: string;
    spots: string;
    applyModalTitle: string;
    applyModalSubtitle: string;
    nameInput: string;
    emailInput: string;
    phoneInput: string;
    motivationInput: string;
    submitApplication: string;
    successMessage: string;
    closeBtn: string;
    topBadge: string;
    quizBtn: string;
    mainBtn: string;
    searchPlaceholder: string;
    foundPrefix: string;
    foundOf: string;
    availableRoles: string;
    skillsGained: string;
    tryRole: string;
    howHelpsTitle: string;
    howHelpsSubtitle: string;
    takeQuizCta: string;
    benefit1Title: string;
    benefit1Desc: string;
    benefit2Title: string;
    benefit2Desc: string;
    benefit3Title: string;
    benefit3Desc: string;
    officialWebsite: string;
    noResultsFound: string;
    resetSearch: string;
  };
  assistant: {
    badge: string;
    title: string;
    subtitle: string;
    welcomeMsg: string;
    contextActive: string;
    noContext: string;
    inputPlaceholder: string;
    sendBtn: string;
    quickPromptsTitle: string;
    quickPrompts: string[];
    disclaimer: string;
    consultantName: string;
    consultantRole: string;
    dialogHistory: string;
    newChat: string;
    personalDialog: string;
    historySavedFor: string;
    takeTestBtn: string;
    volunteeringBtn: string;
    online: string;
    typingResponse: string;
    topicsLabel: string;
    askBtn: string;
    guest: string;
  };
  aiAssistant: {
    badge: string;
    title: string;
    subtitle: string;
    welcomeMsg: string;
    contextActive: string;
    noContext: string;
    inputPlaceholder: string;
    sendBtn: string;
    quickPromptsTitle: string;
    quickPrompts: string[];
    disclaimer: string;
    consultantName: string;
    consultantRole: string;
  };
  counselorModal: {
    title: string;
    subtitle: string;
    quickQuestions: string;
    placeholder: string;
    send: string;
    close: string;
    suggestions: string[];
    onlineStatus: string;
    typingText: string;
    suggestionsLabel: string;
    sendBtn: string;
  };
  footer: {
    systemTitle: string;
    systemDesc: string;
    volunteeringText: string;
    aiAssistantText: string;
    allRightsReserved: string;
    startNowBtn: string;
    copyright: string;
    adaptiveDb: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  ru: {
    header: {
      appTitle: 'Профориентация',
      appSubtitle: 'Интеллектуальный навигатор профессий',
      navMain: 'Главная',
      navQuiz: 'Тестирование',
      navBattle: 'Баттл профессий',
      navVolunteering: 'Волонтерства',
      navAiAssistant: 'AI Помощник',
      navBattleTitle: 'Сравнение профессий Head-to-Head: зарплаты, сложность входа, стресс и востребованность',
      navVolunteeringTitle: 'Волонтерства которые помогут попробовать себя в новых ролях',
      navAiAssistantTitle: 'Индивидуальный карьерный наставник с ИИ для точных ответов на любые вопросы',
      resetBtn: 'Сбросить',
      language: 'Язык',
      selectLanguage: 'Выбрать язык интерфейса',
    },
    battle: {
      badge: 'Интерактивное сравнение Head-to-Head • 260+ профессий',
      title: 'Баттл профессий',
      subtitle: 'Сравнивайте любые две специальности лоб в лоб: детальный анализ зарплат, порога входа, уровня стресса, перспектив до 2030 года и ключевых навыков.',
      searchFighter1Placeholder: 'Поиск профессии №1 (напр., Frontend разработчик)...',
      searchFighter2Placeholder: 'Поиск профессии №2 (напр., Data Scientist)...',
      fighter1Label: 'Профессия №1',
      fighter2Label: 'Профессия №2',
      cornerBlue: '(Синий угол)',
      cornerRed: '(Красный угол)',
      selectPrompt: 'Выберите специальность для сравнения',
      quickBattlesTitle: 'Популярные дуэли:',
      categoriesAll: 'Все направления',
      categoriesLabel: 'Направления:',
      vsBadge: 'VS БАТТЛ',
      salaryComparison: 'Вилка доходов',
      entryDifficulty: 'Порог входа / Сложность обучения',
      stressLevel: 'Уровень стресса на работе',
      demandFuture: 'Востребованность до 2030+',
      remoteFormat: 'Удаленный формат',
      keyMetricsTitle: 'Ключевые метрики сравнения',
      deepProfileTitle: 'Детальный профиль',
      prosTitle: 'Ключевые плюсы и преимущества',
      consTitle: 'Подводные камни и вызовы',
      skillsTitle: 'Ключевые навыки',
      winnerBadge: 'Преимущество',
      easyEntry: 'Легче',
      lowStress: 'Спокойнее',
      highSalary: 'Выше доход',
      highDemand: 'Выше спрос',
      aiVerdictTitle: 'Экспертный вердикт нейросети',
      aiVerdictText: 'Сравнение формируется на основе актуальных метрик рынка труда, образовательных траекторий и карьерных трендов 2026–2030 годов.',
      actionTakeTest: 'Пройти тест под эти профессии',
      actionAskAI: 'Спросить у AI-помощника',
      actionSwap: 'Поменять',
      actionRandom: 'Случайно',
      actionReset: 'Сбросить',
      scoreExplanation: 'Шкала от 1 до 10 (1 — минимальный уровень, 10 — максимальный).',
      noResults: 'Профессия не найдена. Попробуйте изменить запрос.',
      startBattle: 'Начать баттл',
      restartBattle: 'Сыграть снова',
      viewDetailedComparison: 'Подробный анализ 1 на 1',
      interactiveTournament: 'Интерактивный баттл (5 раундов)',
      directComparison: 'Аналитическое сравнение',
      rulesTitle: 'Правила баттла',
      rulesDesc: 'Сравните две специальности в 5 ключевых раундах: выберите победителя в каждом раунде или доверьтесь объективной аналитике ИИ!',
      round: 'Раунд',
      roundOf: 'из 5',
      chooseBtn: 'Выбрать',
      skipBtn: 'Пропустить',
      winnerLabel: 'Победитель',
      winnerRatio: 'Соотношение побед',
      winnerBreakdown: 'Итоговая аналитика баттла',
      congratulations: 'Поздравляем с завершением дуэли!',
      drawTitle: 'Боевая ничья!',
      drawDesc: 'Обе профессии набрали равное количество баллов по сумме всех факторов.',
      whyWonTitle: 'Почему победила эта профессия?',
      takeQuizCta: 'Пройти тест и узнать, подходит ли она тебе',
      backToSelect: 'Выбрать других участников',
      round1Title: 'Раунд 1: Зарплата и финансовый рост',
      round1Question: 'Где выше уровень оплаты труда и финансовые перспективы?',
      round2Title: 'Раунд 2: Порог входа и легкость обучения',
      round2Question: 'Где легче и быстрее освоить профессию и войти в специальность?',
      round3Title: 'Раунд 3: Уровень стресса и баланс жизни',
      round3Question: 'Где меньше психологического давления и спокойнее условия работы?',
      round4Title: 'Раунд 4: Востребованность и защита от ИИ до 2030+',
      round4Question: 'Какая специальность гарантированно останется востребованной и высокооплачиваемой?',
      round5Title: 'Раунд 5: Удаленная работа и свобода графика',
      round5Question: 'Где больше возможностей работать удаленно из любой точки мира?',
      presetBattles: {
        devVsAi: '💻 Software Engineer vs AI Engineer',
        surgeonVsCardio: '🏥 Нейрохирург vs Кардиолог',
        roboticsVsEv: '🤖 Робототехник vs Инженер электрокаров',
        uiuxVsMotion: '🎨 UI/UX vs 3D Motion',
        cyberVsCloud: '🛡️ Кибербезопасность vs Cloud Architect',
        pilotVsAero: '✈️ Пилот авиалайнера vs Авиаконструктор',
      },
    },
    hero: {
      topBadge: 'Персональный ИИ-профориентолог • Комплексный тест и анализ',
      titlePart1: 'Найди профессию, в которой ты будешь',
      titleHighlight: 'счастлив и успешен',
      subtitle: 'Пройди научно выверенный тест за 4-5 минут. Нейросеть сопоставит твои интересы, способ мышления и таланты, чтобы подобрать топ-3 идеальные профессии с персональным планом старта.',
      nameLabel: 'Как тебя зовут?',
      nameOptional: '(необязательно)',
      namePlaceholder: 'Например: Артём, Фарангис или София',
      statusLabel: 'Твой текущий статус:',
      startBtn: 'Пройти тест',
      questionsCount: '13 вопросов',
      timeEstimate: '~4-5 минут',
      freeBadge: 'Бесплатно',
      roles: {
        school: 'Школьник (8-11 класс)',
        college: 'Студент колледжа / техникума',
        university: 'Студент вуза (1-4 курс)',
        careerChange: 'Ищу новое призвание / Смена сферы',
      },
      feature1Title: 'Глубокая связка с ответами',
      feature1Desc: 'Нейросеть детально объясняет, почему профессия подходит именно тебе, цитируя твои конкретные выборы.',
      feature2Title: 'Зарплаты и траектория',
      feature2Desc: 'Реальные зарплатные вилки (Junior, Middle, Senior) и актуальные тренды рынка труда на 2026-2030 годы.',
      feature3Title: 'Шаги «С чего начать»',
      feature3Desc: 'Вузы, колледжи, онлайн-курсы и 3 первых действия, которые ты можешь сделать уже сегодня вечером.',
      articleTitle: 'Что такое осознанная профориентация в 2026 году?',
      articleSubtitle: 'Почему правильный выбор профессии на стыке талантов, интересов и рынка важнее следования моде',
      articlePara1: 'Профориентация — это не просто заполнение анкеты из прошлого века, а комплексный процесс самопознания. Это поиск идеальной точки пересечения того, что вы искренне любите делать, в чём вы объективно сильны и за что современный рынок готов щедро платить.',
      articlePara2: 'В эпоху стремительного развития искусственного интеллекта и автоматизации многие рутинные специальности трансформируются. Успешными становятся специалисты с уникальным набором гибких навыков (Soft Skills), системным мышлением и готовностью непрерывно учиться.',
      articlePara3: 'Наш тест использует алгоритмы адаптивного дерева решений и психологическое профилирование Холланда и Климова, чтобы не просто выдать шаблонный ярлык, а построить живую траекторию развития.',
      articleWhyImportantTitle: 'Главные преимущества осознанного выбора:',
      articleWhyImportantList: [
        'Экономия 4–6 лет жизни на обучении в неподходящем вузе или колледже',
        'Понимание своих истинных сильных сторон и зон потенциального выгорания',
        'Четкий план: от выбора школьных предметов до первой стажировки',
        'Уверенность в завтрашнем дне и востребованности на глобальном рынке',
      ],
      articleConclusion: 'Сделайте первый шаг навстречу своему призванию прямо сейчас — тест займет всего несколько минут!',
      bottomCtaTitle: 'Готовы узнать свой идеальный карьерный трек?',
      bottomCtaSubtitle: 'Ответьте на адаптивные вопросы и получите персональный разбор от искусственного интеллекта',
      bottomCtaBtn: 'Начать тестирование',
      card1Title: 'Интеллектуальный тест',
      card1Desc: '13 вопросов для раскрытия мышления, склонностей и архетипа.',
      card2Title: 'Топ-3 профессии',
      card2Desc: 'Детальные выкладки по навыкам, образованию и зарплатам 2026+.',
      card3Title: 'Волонтёрство',
      card3Desc: 'Реальные молодежные проекты и стажировки для портфолио.',
      card4Title: 'ИИ-наставник',
      card4Desc: 'Онлайн-чат для ответов на вопросы о карьере, вузах и стажировках.',
      pathTitle: 'Твой путь от первого вопроса к любимой профессии',
      pathSubtitle: 'Простой и понятный маршрут профессионального самоопределения',
      step1Num: '1',
      step1Title: 'Ответь на 13 вопросов теста',
      step1Desc: 'Без правильных и неправильных ответов — просто выбери то, что ближе именно тебе в повседневной жизни.',
      step2Num: '2',
      step2Title: 'Получи персональный карьерный паспорт',
      step2Desc: 'Узнай свой психологический архетип, карту навыков, топовые профессии и зарплатные перспективы.',
      step3Num: '3',
      step3Title: 'Попробуй себя в волонтёрстве',
      step3Desc: 'Примени полученные советы на практике в проверенных молодёжных и образовательных организациях.',
    },
    quiz: {
      step: 'Вопрос',
      of: 'из',
      question: 'Вопрос',
      orientation: 'Профориентация',
      backBtn: 'Назад',
      nextBtn: 'Далее',
      finishBtn: 'Завершить и рассчитать',
      selectOptionHint: 'Выберите один вариант ответа для продолжения',
      keyboardHint: 'Совет: можно нажимать цифры 1–5 на клавиатуре',
      evaluatingTitle: 'ИИ анализирует ваш профиль...',
      evaluatingSubtitle: 'Сопоставляем ваши склонности с базой более 60 современных профессий',
      calibration: 'калибровки',
      adaptivePath: 'Адаптивный путь:',
      getResults: 'Узнать результаты',
      selectToContinue: 'Выберите вариант для перехода к следующему вопросу',
      loadingTitle: 'Создаем карьерный паспорт',
      loadingFor: 'для',
      loadingSubtitle: 'Искусственный интеллект обрабатывает ваши ответы и формирует индивидуальные рекомендации',
      step1: 'Анализ ваших ответов и личностных драйверов...',
      step2: 'Сопоставление склонностей с матрицей профессий 2026+...',
      step3: 'Психологический расчет архетипа и баланса навыков...',
      step4: 'Генерация карьерной траектории и обоснований с Gemini AI...',
      step5: 'Финализация персонального отчета и зарплатных вилок...',
    },
    results: {
      badge: 'Персональный отчет готов',
      title: 'Ваш карьерный профиль и рекомендации',
      subtitle: 'Комплексный анализ психологического профиля, склонностей и карты профессий',
      matchScore: 'совпадение',
      topProfessions: 'Топ-3 рекомендованные профессии',
      radarTitle: 'Карта ваших компетенций и склонностей',
      radarDesc: 'Оценка ключевых векторов развития на основе ваших ответов',
      detailsTitle: 'Детальный разбор профессии',
      whyFitsYou: 'Почему именно вам подходит эта профессия:',
      dailyTasks: 'Типичные рабочие задачи:',
      keySkills: 'Необходимые навыки:',
      hardSkills: 'Профессиональные навыки (Hard Skills)',
      softSkills: 'Личностные качества (Soft Skills)',
      educationPath: 'Где учиться и образовательный трек:',
      recommendedMajors: 'Направления подготовки:',
      topUniversities: 'Ведущие вузы и колледжи:',
      salaryAndOutlook: 'Зарплатная вилка и перспективы:',
      salaryJunior: 'На старте (Junior)',
      salaryMiddle: 'Опытный (Middle)',
      salarySenior: 'Эксперт / Руководитель (Senior)',
      remoteFormat: 'Формат работы:',
      firstSteps: '3 первых практических шага сегодня:',
      askAiAboutThis: 'Задать вопрос ИИ об этой профессии',
      consultantCta: 'Нужен совет по выбору профессии?',
      consultantCtaDesc: 'Пообщайтесь с нашим умным ИИ-наставником. Он ответит на любые вопросы об экзаменах, вузах, стажировках и зарплатах.',
      consultantCtaBtn: 'Открыть чат с ИИ-консультантом',
      volunteeringCta: 'Хотите протестировать профессию на практике?',
      volunteeringCtaDesc: 'Попробуйте волонтерские проекты — это отличный способ получить первый реальный опыт в резюме и понять профессию изнутри.',
      volunteeringCtaBtn: 'Смотреть волонтерские программы',
      retakeTest: 'Пройти тест заново',
      printResults: 'Печать / Сохранить PDF',
      copyLink: 'Поделиться результатом',
      linkCopied: 'Ссылка скопирована в буфер обмена!',
      archetypeLabel: 'Психологический архетип',
      leadingProfile: 'Ведущий профиль мышления',
      affinitySpheres: 'Аффинитивные сферы интересов:',
      matrixTitle: '8-мерная матрица способностей и склонностей',
      scaleLabel: 'Шкала 0-100%',
      algorithmNote: 'Рассчитано по алгоритму векторного подобия (Cosine Similarity & Euclidean Distance)',
      top5Title: 'Топ-5 рекомендованных профессий',
      top5Subtitle: 'Нажмите «Подробнее» на любой карточке, чтобы открыть план развития, вузы, зарплаты и практические шаги.',
      skillsLabel: 'Навыки:',
      formatLabel: 'Формат:',
      middleIncomeLabel: 'Middle доход:',
      collapseDetails: 'Свернуть детали',
      detailedPlan: 'Детальный план',
      moreDetails: 'Подробнее',
      askMentorAbout: 'Спросить наставника об этой профессии',
      demandLabel: 'Востребованность:',
      degreeLabel: 'Ступень:',
      subjectsLabel: 'Школьные предметы:',
      dayInLifeLabel: 'Один день из жизни специалиста:',
      threeStepsLabel: '3 практических шага, которые можно сделать уже сегодня:',
      altPathsTitle: 'Смежные и альтернативные специализации',
      altPathsSubtitle: 'Направления, которые также гармонично сочетаются с вашим профилем и расширяют карьерную гибкость:',
      roadmapTitle: 'Пошаговая дорожная карта развития',
      roadmapSubtitle: 'Четкий маршрут от школьника / студента до высокооплачиваемого эксперта',
      mentorFarewellTitle: 'Напутствие карьерного наставника',
      askCounselorBtn: 'Задать вопрос карьерному консультанту',
      explorer: 'Исследователь',
      prosTitle: 'Ключевые преимущества и плюсы',
      consTitle: 'Сложности и точки роста',
      coreSkillsTitle: 'Необходимые ключевые навыки',
      traits: {
        analytical: 'Аналитическое мышление',
        technical: 'Техническая инженерия',
        creative: 'Творчество и визуализация',
        research: 'Исследовательская страсть',
        social: 'Социальный интеллект и эмпатия',
        entrepreneurial: 'Предпринимательский драйв',
        practical: 'Практическая реализация',
        organizational: 'Организованность и системность',
      },
    },
    volunteering: {
      badge: 'Практический опыт',
      title: 'Волонтерства, которые помогут попробовать себя в новых ролях',
      subtitle: 'Волонтёрская деятельность — это лучший способ примерить реальные профессиональные обязанности до поступления в вуз или трудоустройства. Выберите организацию в Душанбе и начните прокачивать портфолио!',
      allFilter: 'Все',
      applyBtn: 'Подать заявку',
      appliedBtn: 'Заявка отправлена',
      viewDetails: 'Подробнее о проекте',
      requirements: 'Требования к участникам:',
      skillsGain: 'Что вы прокачаете:',
      duration: 'Длительность:',
      location: 'Формат и локация:',
      spotsLeft: 'Осталось мест:',
      spots: 'мест',
      applyModalTitle: 'Заявка на участие в волонтерском проекте',
      nameInput: 'Ваше имя и фамилия',
      emailInput: 'Электронная почта',
      phoneInput: 'Номер телефона / Telegram',
      motivationInput: 'Почему вам интересен этот проект? (кратко)',
      submitApplication: 'Отправить заявку',
      successMessage: 'Спасибо! Ваша заявка успешно отправлена куратору проекта.',
      closeBtn: 'Закрыть',
      topBadge: 'Категория 3 • Реальная практика и проба ролей в Таджикистане',
      quizBtn: 'Пройти тест для подбора роли',
      mainBtn: 'На Главную',
      searchPlaceholder: 'Поиск по названию организации, ролям или навыкам...',
      foundPrefix: 'Найдено организаций',
      foundOf: 'из',
      availableRoles: 'Кем можно стать:',
      skillsGained: 'Приобретаемые навыки:',
      tryRole: 'Примерить роль',
      applyModalSubtitle: 'Заполните короткую анкету для связи с координатором организации',
      howHelpsTitle: 'Как волонтёрство помогает определиться с профессией?',
      howHelpsSubtitle: 'Практика в Таджикистане и международные карьерные стандарты',
      takeQuizCta: 'Пройти профориентационный тест',
      benefit1Title: '01. Тест-драйв задач',
      benefit1Desc: 'Вы пробуете себя в маркетинге, IT, организации событий или педагогике без риска и понимаете, к чему лежит душа.',
      benefit2Title: '02. Первый нетворкинг',
      benefit2Desc: 'Знакомство с опытными менторами, работодателями и единомышленниками, которые помогут при поступлении и поиске работы.',
      benefit3Title: '03. Сильное резюме',
      benefit3Desc: 'Сертификаты волонтёра признаются ведущими университетами мира и дают преимущество при получении грантов.',
      officialWebsite: 'Официальный сайт',
      noResultsFound: 'Организации не найдены',
      resetSearch: 'Сбросить фильтры',
    },
    assistant: {
      badge: 'Интеллектуальный ментор',
      title: 'Карьерный AI-наставник',
      subtitle: 'Задайте любой вопрос о профессиях, экзаменах, вузах, стажировках и построении траектории развития',
      welcomeMsg: 'Привет! Я твой персональный карьерный ИИ-наставник. Задай мне любой вопрос о выборе профессии, образовании или подготовке к будущей карьере!',
      contextActive: 'ИИ учитывает результаты твоего теста',
      noContext: 'Пройдите тест, чтобы ответы были максимально персонализированы',
      inputPlaceholder: 'Задай любой вопрос о профессиях, вузах, навыках или будущем...',
      sendBtn: 'Спросить',
      quickPromptsTitle: 'Темы:',
      quickPrompts: [
        'Какие направления и профессии будут самыми востребованными?',
        'Как составить первое резюме без коммерческого опыта?',
        'Как понять, что мне больше подходит: IT, дизайн или менеджмент?',
        'Составь пошаговый план развития навыков на 3 месяца.',
      ],
      disclaimer: 'ИИ-наставник предоставляет ориентировочные рекомендации на основе аналитических данных рынка труда.',
      consultantName: 'ПрофГид AI',
      consultantRole: 'Персональный карьерный консультант',
      dialogHistory: 'История диалогов',
      newChat: 'Новый чат',
      personalDialog: 'Персональный диалог с ИИ-ментором • История сохраняется для профиля:',
      historySavedFor: 'История сохраняется для профиля:',
      takeTestBtn: 'Пройти тест профессий',
      volunteeringBtn: 'База волонтерств',
      online: 'Онлайн',
      typingResponse: 'Формирую точный ответ...',
      topicsLabel: 'Темы:',
      askBtn: 'Спросить',
      guest: 'Гость',
    },
    aiAssistant: {
      badge: 'Интеллектуальный ментор',
      title: 'Карьерный AI-наставник',
      subtitle: 'Задайте любой вопрос о профессиях, экзаменах ОГЭ/ЕГЭ, вузах, стажировках и построении траектории развития',
      welcomeMsg: 'Привет! Я твой персональный карьерный ИИ-наставник. Задай мне любой вопрос о выборе профессии, образовании или подготовке к будущей карьере!',
      contextActive: 'ИИ учитывает результаты твоего теста',
      noContext: 'Пройдите тест, чтобы ответы были максимально персонализированы',
      inputPlaceholder: 'Спросите о поступлении, зарплатах, выборе вуза или навыках...',
      sendBtn: 'Отправить',
      quickPromptsTitle: 'Популярные вопросы:',
      quickPrompts: [
        'Какие предметы сдавать для IT-специальностей?',
        'Как подготовиться к первой стажировке без опыта?',
        'В чем разница между Data Science и разработкой ПО?',
        'Какие профессии будут наиболее востребованы к 2030 году?',
      ],
      disclaimer: 'ИИ-наставник предоставляет ориентировочные рекомендации на основе аналитических данных рынка труда.',
      consultantName: 'ПрофГид AI',
      consultantRole: 'Персональный карьерный консультант',
    },
    counselorModal: {
      title: 'Консультация с карьерным ИИ-наставником',
      subtitle: 'Задайте уточняющий вопрос о рекомендованной профессии или траектории обучения',
      quickQuestions: 'Быстрые вопросы:',
      placeholder: 'Напишите ваш вопрос...',
      send: 'Спросить',
      close: 'Закрыть',
      suggestions: [
        'С чего мне начать уже в 10-11 классе?',
        'Что лучше выбрать: вуз или онлайн-курсы?',
        'Как создать первое портфолио без опыта работы?',
        'Какие навыки сейчас наиболее востребованы?'
      ],
      onlineStatus: 'Онлайн',
      typingText: 'Формирую точный ответ...',
      suggestionsLabel: 'Подсказки',
      sendBtn: 'Отправить',
    },
    footer: {
      systemTitle: 'Профориентация',
      systemDesc: 'Интеллектуальная система профессионального самоопределения и карьерного ориентирования на базе искусственного интеллекта.',
      volunteeringText: 'Каталог проверенных волонтерских организаций для первой практики.',
      aiAssistantText: 'Индивидуальный ИИ-ментор для ответов на вопросы о карьере.',
      allRightsReserved: 'Все права защищены.',
      startNowBtn: 'Пройти тест',
      copyright: 'Профориентация AI. Все права защищены.',
      adaptiveDb: 'Адаптивная база из 260+ профессий и волонтерств',
    },
  },
  en: {
    header: {
      appTitle: 'Career Guide',
      appSubtitle: 'Intelligent Career Navigator',
      navMain: 'Home',
      navQuiz: 'Assessment',
      navBattle: 'Career Battle',
      navVolunteering: 'Volunteering',
      navAiAssistant: 'AI Assistant',
      navBattleTitle: 'Head-to-head career comparisons: salaries, entry barrier, stress and demand',
      navVolunteeringTitle: 'Volunteering programs to try yourself in new roles',
      navAiAssistantTitle: 'Personal AI career mentor for accurate answers to all your questions',
      resetBtn: 'Reset',
      language: 'Language',
      selectLanguage: 'Choose interface language',
    },
    battle: {
      badge: 'Interactive Head-to-Head Comparison • 260+ Careers',
      title: 'Career Battle',
      subtitle: 'Compare any two professions head-to-head: deep insights into salaries, entry barriers, stress levels, 2030 market demand, and core skills.',
      searchFighter1Placeholder: 'Search profession #1 (e.g., Software Engineer)...',
      searchFighter2Placeholder: 'Search profession #2 (e.g., AI Engineer)...',
      fighter1Label: 'Profession #1',
      fighter2Label: 'Profession #2',
      cornerBlue: '(Blue corner)',
      cornerRed: '(Red corner)',
      selectPrompt: 'Select a profession to compare',
      quickBattlesTitle: 'Popular Duels:',
      categoriesAll: 'All Categories',
      categoriesLabel: 'Categories:',
      vsBadge: 'VS BATTLE',
      salaryComparison: 'Salary Bracket',
      entryDifficulty: 'Entry Barrier / Learning Curve',
      stressLevel: 'Job Stress Level',
      demandFuture: 'Market Demand to 2030+',
      remoteFormat: 'Remote format',
      keyMetricsTitle: 'Key Comparison Metrics',
      deepProfileTitle: 'Detailed Profile',
      prosTitle: 'Key Advantages & Pros',
      consTitle: 'Challenges & Bottlenecks',
      skillsTitle: 'Essential Core Skills',
      winnerBadge: 'Advantage',
      easyEntry: 'Easier',
      lowStress: 'Lower Stress',
      highSalary: 'Higher Earnings',
      highDemand: 'Higher Demand',
      aiVerdictTitle: 'AI Expert Assessment',
      aiVerdictText: 'Analysis synthesized using updated labor market data, education pathways, and 2026–2030 workforce trends.',
      actionTakeTest: 'Take Assessment for these Careers',
      actionAskAI: 'Ask AI Assistant',
      actionSwap: 'Swap',
      actionRandom: 'Random',
      actionReset: 'Reset',
      scoreExplanation: 'Scale from 1 to 10 (1 = minimal level, 10 = maximum level).',
      noResults: 'Profession not found. Try another search query.',
      startBattle: 'Start Battle',
      restartBattle: 'Restart Battle',
      viewDetailedComparison: 'Detailed Head-to-Head',
      interactiveTournament: 'Interactive Battle (5 Rounds)',
      directComparison: 'Analytical Comparison',
      rulesTitle: 'Battle Rules',
      rulesDesc: 'Compare two professions across 5 key rounds: pick your favorite in each round or rely on objective AI labor metrics!',
      round: 'Round',
      roundOf: 'of 5',
      chooseBtn: 'Choose',
      skipBtn: 'Skip',
      winnerLabel: 'Winner',
      winnerRatio: 'Victory Ratio',
      winnerBreakdown: 'Final Battle Analytics',
      congratulations: 'Duel Completed Successfully!',
      drawTitle: "It's a Tie!",
      drawDesc: 'Both professions demonstrated equal overall strength across all criteria.',
      whyWonTitle: 'Why this profession won?',
      takeQuizCta: 'Take assessment to check your personal match',
      backToSelect: 'Choose other fighters',
      round1Title: 'Round 1: Salary & Financial Growth',
      round1Question: 'Which career offers higher earning potential and financial upside?',
      round2Title: 'Round 2: Entry Barrier & Learning Ease',
      round2Question: 'Which path is faster and more accessible to learn for beginners?',
      round3Title: 'Round 3: Daily Stress & Work Comfort',
      round3Question: 'Which role has lower day-to-day stress and healthier balance?',
      round4Title: 'Round 4: Market Demand & Job Security to 2030+',
      round4Question: 'Which profession has higher guaranteed demand through 2030+?',
      round5Title: 'Round 5: Remote Freedom & Schedule Flexibility',
      round5Question: 'Which profession offers greater freedom for remote and hybrid work?',
      presetBattles: {
        devVsAi: '💻 Software Engineer vs AI Engineer',
        surgeonVsCardio: '🏥 Neurosurgeon vs Cardiologist',
        roboticsVsEv: '🤖 Robotics Engineer vs EV Engineer',
        uiuxVsMotion: '🎨 UI/UX vs 3D Motion',
        cyberVsCloud: '🛡️ Cybersecurity vs Cloud Architect',
        pilotVsAero: '✈️ Commercial Pilot vs Aerospace Engineer',
      },
    },
    hero: {
      topBadge: 'Personal AI Career Counselor • Comprehensive Assessment',
      titlePart1: 'Find a career where you will be',
      titleHighlight: 'happy and successful',
      subtitle: 'Take a scientifically grounded 4-5 minute test. AI matches your interests, mindset, and talents to discover your top 3 ideal professions with a personalized action plan.',
      nameLabel: 'What is your name?',
      nameOptional: '(optional)',
      namePlaceholder: 'e.g., Alex, Farangis, or Sophia',
      statusLabel: 'Your current status:',
      startBtn: 'Start Test',
      questionsCount: '13 questions',
      timeEstimate: '~4-5 minutes',
      freeBadge: 'Free',
      roles: {
        school: 'High School Student (8-11th grade)',
        college: 'College / Vocational Student',
        university: 'University Student (Year 1-4)',
        careerChange: 'Seeking New Calling / Career Switch',
      },
      feature1Title: 'Deep Link to Your Answers',
      feature1Desc: 'AI explains in detail why a profession suits you, referencing your exact choices.',
      feature2Title: 'Salaries & Career Trajectory',
      feature2Desc: 'Realistic salary brackets (Junior, Middle, Senior) and 2026-2030 labor market trends.',
      feature3Title: 'Actionable First Steps',
      feature3Desc: 'Universities, colleges, online courses, and 3 first steps you can take today.',
      articleTitle: 'What is Conscious Career Guidance in 2026?',
      articleSubtitle: 'Why choosing a path at the intersection of talent, interest, and market demand beats following trends',
      articlePara1: 'Career guidance is not just filling out outdated surveys, but an insightful journey of self-discovery. It is finding the sweet spot where what you genuinely love doing aligns with what you excel at and what the modern global economy pays for.',
      articlePara2: 'In an era of rapid AI evolution and automation, many routine jobs are transforming. Professionals equipped with strong Soft Skills, systemic thinking, and a drive for lifelong learning thrive the most.',
      articlePara3: 'Our assessment uses adaptive decision tree logic combined with Holland and Klimov psychological profiling to build an authentic, actionable growth roadmap.',
      articleWhyImportantTitle: 'Key benefits of conscious career choice:',
      articleWhyImportantList: [
        'Save 4–6 years of life by avoiding the wrong major or college',
        'Gain clarity on your core strengths and burnout vulnerability zones',
        'A clear roadmap: from subject preparation to landing your first internship',
        'Confidence in long-term demand across global industries',
      ],
      articleConclusion: 'Take your first step toward your true vocation right now — the test takes just a few minutes!',
      bottomCtaTitle: 'Ready to discover your ideal career path?',
      bottomCtaSubtitle: 'Answer adaptive questions and receive an in-depth AI-powered analysis',
      bottomCtaBtn: 'Start Assessment Now',
      card1Title: 'Smart Adaptive Quiz',
      card1Desc: '13 dynamic questions revealing your mindset, aptitudes, and personality archetype.',
      card2Title: 'Top-3 Career Matches',
      card2Desc: 'Comprehensive breakdown of skills, education pathways, and 2026+ salary insights.',
      card3Title: 'Volunteering & Practice',
      card3Desc: 'Hands-on youth initiatives and internships to build an authentic portfolio.',
      card4Title: 'Personal AI Mentor',
      card4Desc: '24/7 chat to answer questions about careers, college admissions, and skills.',
      pathTitle: 'Your Journey from First Question to Your Dream Career',
      pathSubtitle: 'A clear and actionable roadmap to personal career discovery',
      step1Num: '1',
      step1Title: 'Answer 13 Adaptive Questions',
      step1Desc: 'No right or wrong answers — simply pick what naturally resonates with you in real life.',
      step2Num: '2',
      step2Title: 'Receive Your Career Blueprint',
      step2Desc: 'Discover your psychological archetype, skill matrix, top career matches, and salary horizons.',
      step3Num: '3',
      step3Title: 'Test Your Skills in Volunteering',
      step3Desc: 'Put advice into action across verified youth and educational organizations in Tajikistan.',
    },
    quiz: {
      step: 'Question',
      of: 'of',
      question: 'Question',
      orientation: 'Career Guidance',
      backBtn: 'Back',
      nextBtn: 'Next',
      finishBtn: 'Finish & Calculate',
      selectOptionHint: 'Please select an option to continue',
      keyboardHint: 'Tip: You can press 1–5 on your keyboard',
      evaluatingTitle: 'AI is analyzing your profile...',
      evaluatingSubtitle: 'Matching your preferences against a database of 60+ modern professions',
      calibration: 'calibration',
      adaptivePath: 'Adaptive Path:',
      getResults: 'View Results',
      selectToContinue: 'Select an option to proceed to the next question',
      loadingTitle: 'Creating Career Blueprint',
      loadingFor: 'for',
      loadingSubtitle: 'Artificial intelligence is processing your responses to generate personalized career recommendations',
      step1: 'Analyzing your answers and psychological drivers...',
      step2: 'Matching aptitudes with 2026+ profession matrix...',
      step3: 'Calculating dominant archetype and skill balance...',
      step4: 'Synthesizing career trajectory and rationale with Gemini AI...',
      step5: 'Finalizing personalized report and salary benchmarks...',
    },
    results: {
      badge: 'Personal Report Ready',
      title: 'Your Career Profile & Recommendations',
      subtitle: 'Comprehensive analysis of psychological mindset, aptitudes, and career roadmap',
      matchScore: 'match',
      topProfessions: 'Top 3 Recommended Careers',
      radarTitle: 'Competency & Aptitude Radar',
      radarDesc: 'Assessment of key developmental vectors based on your answers',
      detailsTitle: 'Detailed Career Breakdown',
      whyFitsYou: 'Why this career suits you specifically:',
      dailyTasks: 'Typical daily tasks:',
      keySkills: 'Required skills:',
      hardSkills: 'Hard Skills',
      softSkills: 'Soft Skills',
      educationPath: 'Where to study & educational tracks:',
      recommendedMajors: 'Recommended Majors:',
      topUniversities: 'Top Universities & Colleges:',
      salaryAndOutlook: 'Salary ranges & outlook:',
      salaryJunior: 'Entry Level (Junior)',
      salaryMiddle: 'Experienced (Middle)',
      salarySenior: 'Expert / Lead (Senior)',
      remoteFormat: 'Work format:',
      firstSteps: '3 immediate practical steps today:',
      askAiAboutThis: 'Ask AI about this career',
      consultantCta: 'Need advice choosing your path?',
      consultantCtaDesc: 'Chat with our AI mentor. Get answers about exams, colleges, internships, and salaries.',
      consultantCtaBtn: 'Open AI Career Chat',
      volunteeringCta: 'Want to test this career in real life?',
      volunteeringCtaDesc: 'Try volunteering projects — the best way to gain real resume experience and explore industries from within.',
      volunteeringCtaBtn: 'Explore Volunteering Programs',
      retakeTest: 'Retake Assessment',
      printResults: 'Print / Save PDF',
      copyLink: 'Share Result',
      linkCopied: 'Link copied to clipboard!',
      archetypeLabel: 'Psychological Archetype',
      leadingProfile: 'Dominant Mindset Profile',
      affinitySpheres: 'Affinity Spheres of Interest:',
      matrixTitle: '8-Dimensional Competency & Aptitude Matrix',
      scaleLabel: 'Scale 0-100%',
      algorithmNote: 'Calculated using vector similarity algorithm (Cosine Similarity & Euclidean Distance)',
      top5Title: 'Top 5 Recommended Professions',
      top5Subtitle: 'Click "More details" on any card to explore development plans, universities, salaries, and practical steps.',
      skillsLabel: 'Skills:',
      formatLabel: 'Format:',
      middleIncomeLabel: 'Middle Income:',
      collapseDetails: 'Collapse Details',
      detailedPlan: 'Detailed Plan',
      moreDetails: 'More Details',
      askMentorAbout: 'Ask mentor about this profession',
      demandLabel: 'Market Demand:',
      degreeLabel: 'Degree Level:',
      subjectsLabel: 'School Subjects:',
      dayInLifeLabel: 'A Day in the Life of a Professional:',
      threeStepsLabel: '3 practical steps you can take today:',
      altPathsTitle: 'Adjacent & Alternative Specializations',
      altPathsSubtitle: 'Directions that also harmonize with your profile and expand career flexibility:',
      roadmapTitle: 'Step-by-Step Development Roadmap',
      roadmapSubtitle: 'Clear trajectory from student to high-earning expert',
      mentorFarewellTitle: 'Career Mentor Parting Advice',
      askCounselorBtn: 'Ask Career Counselor a Question',
      explorer: 'Explorer',
      prosTitle: 'Key Advantages & Pros',
      consTitle: 'Challenges & Growth Areas',
      coreSkillsTitle: 'Essential Core Skills',
      traits: {
        analytical: 'Analytical Thinking',
        technical: 'Technical Engineering',
        creative: 'Creativity & Visualization',
        research: 'Research Passion',
        social: 'Social Intelligence & Empathy',
        entrepreneurial: 'Entrepreneurial Drive',
        practical: 'Practical Execution',
        organizational: 'Organization & Systematics',
      },
    },
    volunteering: {
      badge: 'Hands-on Experience',
      title: 'Volunteering Programs to Explore New Roles',
      subtitle: 'Volunteering is the fastest way to try real professional duties before college or employment. Choose an organization in Dushanbe and start building your portfolio!',
      allFilter: 'All',
      applyBtn: 'Apply Now',
      appliedBtn: 'Application Sent',
      viewDetails: 'Project Details',
      requirements: 'Requirements:',
      skillsGain: 'Skills you will develop:',
      duration: 'Duration:',
      location: 'Location & Format:',
      spotsLeft: 'Spots left:',
      spots: 'spots',
      applyModalTitle: 'Apply for Volunteering Project',
      nameInput: 'Full Name',
      emailInput: 'Email Address',
      phoneInput: 'Phone / Telegram',
      motivationInput: 'Why are you interested in this project? (briefly)',
      submitApplication: 'Submit Application',
      successMessage: 'Thank you! Your application has been sent to the project coordinator.',
      closeBtn: 'Close',
      topBadge: 'Category 3 • Hands-on practice & role sampling in Tajikistan',
      quizBtn: 'Take quiz to match your role',
      mainBtn: 'Back to Home',
      searchPlaceholder: 'Search by organization name, roles, or skills...',
      foundPrefix: 'Organizations found',
      foundOf: 'of',
      availableRoles: 'Available Roles:',
      skillsGained: 'Skills Gained:',
      tryRole: 'Try this role',
      applyModalSubtitle: 'Fill out this quick form to connect with the organization coordinator',
      howHelpsTitle: 'How volunteering helps choose a career?',
      howHelpsSubtitle: 'Practice in Tajikistan and global career standards',
      takeQuizCta: 'Take Career Orientation Quiz',
      benefit1Title: '01. Real Task Test-Drive',
      benefit1Desc: 'Try real responsibilities in marketing, IT, event management, or education without risk to find what you truly enjoy.',
      benefit2Title: '02. First Networking',
      benefit2Desc: 'Meet experienced mentors, employers, and like-minded peers who will help during college admission and job search.',
      benefit3Title: '03. Strong Resume',
      benefit3Desc: 'Volunteer certificates and recommendation letters are recognized by top universities worldwide and boost scholarship opportunities.',
      officialWebsite: 'Official Website',
      noResultsFound: 'No organizations found',
      resetSearch: 'Reset filters',
    },
    assistant: {
      badge: 'Intelligent Mentor',
      title: 'AI Career Mentor',
      subtitle: 'Ask anything about careers, exams, universities, internships, and skill growth trajectories',
      welcomeMsg: 'Hello! I am your personal AI career mentor. Ask me any question regarding career choice, education paths, or interview preparation!',
      contextActive: 'AI is taking your test results into account',
      noContext: 'Take the test to receive fully personalized recommendations',
      inputPlaceholder: 'Ask any question about professions, universities, skills, or your future...',
      sendBtn: 'Ask',
      quickPromptsTitle: 'Topics:',
      quickPrompts: [
        'Which career fields will be in highest demand in 5 years?',
        'How do I create my first resume with no prior experience?',
        'How to choose between IT, UI/UX design, or product management?',
        'Create a step-by-step 3-month skill growth plan for me.',
      ],
      disclaimer: 'The AI mentor provides advisory recommendations based on labor market analytical data.',
      consultantName: 'CareerGuide AI',
      consultantRole: 'Personal Career Advisor',
      dialogHistory: 'Chat History',
      newChat: 'New Chat',
      personalDialog: 'Personal dialogue with AI mentor • History saved for:',
      historySavedFor: 'History saved for:',
      takeTestBtn: 'Take Career Test',
      volunteeringBtn: 'Volunteering Database',
      online: 'Online',
      typingResponse: 'Formulating accurate answer...',
      topicsLabel: 'Topics:',
      askBtn: 'Ask',
      guest: 'Guest',
    },
    aiAssistant: {
      badge: 'Intelligent Mentor',
      title: 'AI Career Mentor',
      subtitle: 'Ask anything about careers, exams, universities, internships, and skill growth trajectories',
      welcomeMsg: 'Hello! I am your personal AI career mentor. Ask me any question regarding career choice, education paths, or interview preparation!',
      contextActive: 'AI is taking your test results into account',
      noContext: 'Take the test to receive fully personalized recommendations',
      inputPlaceholder: 'Ask about university admission, salaries, major choices, or skills...',
      sendBtn: 'Send',
      quickPromptsTitle: 'Popular Questions:',
      quickPrompts: [
        'Which exams should I prepare for IT careers?',
        'How can I get my first tech internship with zero experience?',
        'What is the difference between Data Science and Software Engineering?',
        'Which careers will be in highest demand by 2030?',
      ],
      disclaimer: 'The AI mentor provides advisory recommendations based on labor market analytical data.',
      consultantName: 'CareerGuide AI',
      consultantRole: 'Personal Career Advisor',
    },
    counselorModal: {
      title: 'Consultation with AI Career Mentor',
      subtitle: 'Ask follow-up questions about recommended professions or learning trajectories',
      quickQuestions: 'Quick questions:',
      placeholder: 'Type your question here...',
      send: 'Ask',
      close: 'Close',
      suggestions: [
        'Where should I start in high school?',
        'Which is better: college or online certifications?',
        'How to build my first portfolio without work experience?',
        'Which skills are most in demand right now?'
      ],
      onlineStatus: 'Online',
      typingText: 'Formulating accurate response...',
      suggestionsLabel: 'Suggestions',
      sendBtn: 'Send',
    },
    footer: {
      systemTitle: 'Career Guide',
      systemDesc: 'Intelligent AI-powered career orientation and personal career navigation platform.',
      volunteeringText: 'Verified volunteering programs for hands-on experience in Tajikistan.',
      aiAssistantText: 'Personal AI mentor for real-time career and education advice.',
      allRightsReserved: 'All rights reserved.',
      startNowBtn: 'Start Test',
      copyright: 'Career Guide AI. All rights reserved.',
      adaptiveDb: 'Adaptive database of 260+ careers & volunteering programs',
    },
  },
  tg: {
    header: {
      appTitle: 'Касбинтихобкунӣ',
      appSubtitle: 'Роҳнамои зеҳнии касбҳо',
      navMain: 'Асосӣ',
      navQuiz: 'Санҷиш',
      navBattle: 'Баттли касбҳо',
      navVolunteering: 'Волонтёрӣ',
      navAiAssistant: 'Ёрдамчии AI',
      navBattleTitle: 'Муқоисаи касбҳо Head-to-Head: маош, душвории дохилшавӣ, сатҳи стресс ва талабот',
      navVolunteeringTitle: 'Барномаҳои волонтёрӣ барои санҷидани худ дар нақшҳои нав',
      navAiAssistantTitle: 'Мушовири инфиродии касбӣ бо AI барои посух ба ҳама саволҳо',
      resetBtn: 'Аз нав',
      language: 'Забон',
      selectLanguage: 'Интихоби забони интерфейс',
    },
    battle: {
      badge: 'Муқоисаи интерактивии Head-to-Head • 260+ касб',
      title: 'Баттли касбҳо',
      subtitle: 'Ҳар ду ихтисосро мустақиман муқоиса намоед: таҳлили муфассали маош, дастрасии оғоз, сатҳи стресс, дурнамо то соли 2030 ва малакаҳои асосӣ.',
      searchFighter1Placeholder: 'Ҷустуҷӯи касби №1 (масалан, Муҳандиси барномасоз)...',
      searchFighter2Placeholder: 'Ҷустуҷӯи касби №2 (масалан, Мутахассиси AI)...',
      fighter1Label: 'Касби №1',
      fighter2Label: 'Касби №2',
      cornerBlue: '(Гӯшаи кабуд)',
      cornerRed: '(Гӯшаи сурх)',
      selectPrompt: 'Ихтисосро барои муқоиса интихоб кунед',
      quickBattlesTitle: 'Муқоисаҳои маъмул:',
      categoriesAll: 'Ҳамаи самтҳо',
      categoriesLabel: 'Самтҳо:',
      vsBadge: 'VS БАТТЛ',
      salaryComparison: 'Ҳаҷми маош',
      entryDifficulty: 'Сатҳи душвории омӯзиш',
      stressLevel: 'Сатҳи стресс дар кор',
      demandFuture: 'Талабот то соли 2030+',
      remoteFormat: 'Формати фосилавӣ',
      keyMetricsTitle: 'Нишондиҳандаҳои асосии муқоиса',
      deepProfileTitle: 'Профили муфассал',
      prosTitle: 'Афзалиятҳо ва ҷиҳатҳои мусбат',
      consTitle: 'Мушкилот ва монеаҳо',
      skillsTitle: 'Малакаҳои асосии зарурӣ',
      winnerBadge: 'Бартарӣ',
      easyEntry: 'Осонтар',
      lowStress: 'Оромтар',
      highSalary: 'Даромади баландтар',
      highDemand: 'Талаботи бештар',
      aiVerdictTitle: 'Хулосаи коршиносии AI',
      aiVerdictText: 'Муқоиса дар асоси нишондиҳандаҳои воқеии бозори меҳнат, барномаҳои таълимӣ ва тамоюлҳои касбии солҳои 2026–2030 таҳия шудааст.',
      actionTakeTest: 'Гузаштани санҷиш барои ин касбҳо',
      actionAskAI: 'Пурсиш аз ёвари AI',
      actionSwap: 'Иваз кардан',
      actionRandom: 'Тасодуфӣ',
      actionReset: 'Аз нав',
      scoreExplanation: 'Миқёс аз 1 то 10 (1 — сатҳи минималӣ, 10 — максималӣ).',
      noResults: 'Касб ёфт нашуд. Ҷустуҷӯро тағйир диҳед.',
      startBattle: 'Оғози баттл',
      restartBattle: 'Аз нав оғоз кардан',
      viewDetailedComparison: 'Муқоисаи муфассали 1 ба 1',
      interactiveTournament: 'Баттли интерактивӣ (5 давр)',
      directComparison: 'Муқоисаи таҳлилӣ',
      rulesTitle: 'Қоидаҳои баттл',
      rulesDesc: 'Ду ихтисосро дар 5 даври асосӣ муқоиса кунед: дар ҳар як давр касби беҳтаринро интихоб кунед ё ба таҳлили воқеии AI такя намоед!',
      round: 'Даври',
      roundOf: 'аз 5',
      chooseBtn: 'Интихоб кардан',
      skipBtn: 'Гузаронидан',
      winnerLabel: 'Ғолиб',
      winnerRatio: 'Таносуби ғалаба',
      winnerBreakdown: 'Таҳлили ниҳоии баттл',
      congratulations: 'Шуморо бо анҷоми бомуваффақияти баттл табрик мегӯем!',
      drawTitle: 'Мусовӣ!',
      drawDesc: 'Ҳарду касб аз рӯи маҷмӯи омилҳо холҳои баробар гирифтанд.',
      whyWonTitle: 'Чаро ин касб ғолиб омад?',
      takeQuizCta: 'Гузаштани санҷиш барои санҷидани мувофиқати шахсӣ',
      backToSelect: 'Интихоби иштирокчиёни дигар',
      round1Title: 'Даври 1: Маош ва даромади молиявӣ',
      round1Question: 'Дар куҷо сатҳи маош ва имконияти молиявӣ баландтар аст?',
      round2Title: 'Даври 2: Осонии омӯзиш ва оғози кор',
      round2Question: 'Дар кадом касб оғози омӯзиш ва ворид шудан осонтару дастрастар аст?',
      round3Title: 'Даври 3: Сатҳи стресс ва оромӣ дар кор',
      round3Question: 'Дар куҷо фишори равонӣ камтар буда, муҳити корӣ оромтар аст?',
      round4Title: 'Даври 4: Талабот ва дурнамо то соли 2030+',
      round4Question: 'Кадом ихтисос то соли 2030+ талаботи бештар ва устувор дорад?',
      round5Title: 'Даври 5: Реҷаи фосилавӣ ва озодӣ',
      round5Question: 'Дар кадом ихтисос имконияти кори фосилавӣ аз дилхоҳ ҷо бештар аст?',
      presetBattles: {
        devVsAi: '💻 Муҳандиси барномасоз vs Муҳандиси AI',
        surgeonVsCardio: '🏥 Ҷарроҳи асаб vs Кардиолог',
        roboticsVsEv: '🤖 Муҳандиси робототехника vs Муҳандиси электромобилҳо',
        uiuxVsMotion: '🎨 Тарроҳи UI/UX vs 3D Motion',
        cyberVsCloud: '🛡️ Амнияти киберӣ vs Cloud Architect',
        pilotVsAero: '✈️ Ҳавонавард (Пилот) vs Муҳандиси кайҳоннавардӣ',
      },
    },
    hero: {
      topBadge: 'Мушовири инфиродии касбӣ бо AI • Санҷиш ва таҳлили пурра',
      titlePart1: 'Касберо пайдо кун, ки дар он',
      titleHighlight: 'хушбахт ва муваффақ мешавӣ',
      subtitle: 'Санҷиши дақиқи илмии 4-5 дақиқагиро гузаред. Зеҳни сунъӣ шавқу завқ, тарзи тафаккур ва истеъдодҳои шуморо муқоиса намуда, 3 касби беҳтаринро бо нақшаи рушди шахсӣ пешниҳод мекунад.',
      nameLabel: 'Номи шумо чист?',
      nameOptional: '(ихтиёрӣ)',
      namePlaceholder: 'Масалан: Фарангис, Сомон ё Алишер',
      statusLabel: 'Мақоми ҳозираи шумо:',
      startBtn: 'Санҷишро гузаштан',
      questionsCount: '13 савол',
      timeEstimate: '~4-5 дақиқа',
      freeBadge: 'Ройгон',
      roles: {
        school: 'Хонандаи мактаб (синфҳои 8-11)',
        college: 'Донишҷӯи коллеҷ / омӯзишгоҳ',
        university: 'Донишҷӯи донишгоҳ (курси 1-4)',
        careerChange: 'Ҷустуҷӯи ихтисоси нав / Ивази соҳа',
      },
      feature1Title: 'Алоқамандии амиқ бо ҷавобҳо',
      feature1Desc: 'Зеҳни сунъӣ муфассал мефаҳмонад, ки чаро ин касб ба шумо мувофиқ аст ва интихобҳои шуморо таҳлил мекунад.',
      feature2Title: 'Маош ва рушди касбӣ',
      feature2Desc: 'Ҳаҷми воқеии маош (Junior, Middle, Senior) ва тамоюлҳои бозори меҳнат барои солҳои 2026-2030.',
      feature3Title: 'Қадамҳои «Аз куҷо оғоз кардан»',
      feature3Desc: 'Донишгоҳҳо, коллеҷҳо, курсҳои омӯзишӣ ва 3 қадами аввалин, ки имрӯз метавонед шурӯъ кунед.',
      articleTitle: 'Интихоби бошууронаи касб дар соли 2026 чист?',
      articleSubtitle: 'Чаро пайвастани истеъдод, шавқу завқ ва талаботи бозор аз пайравӣ ба мӯди муваққатӣ муҳимтар аст',
      articlePara1: 'Интихоби касб танҳо пур кардани саволнома нест, балки раванди амиқи шинохти худи худ аст. Ин дарёфти нуқтаи беҳтарини пайвастани он чизест, ки шумо самимона дӯст медоред, дар он қавӣ ҳастед ва бозори муосир барои он маоши хуб мепардозад.',
      articlePara2: 'Дар даврони рушди босуръати зеҳни сунъӣ ва автоматӣ гардидани корҳо, бисёр ихтисосҳо дигаргун мешаванд. Мутахассисоне муваффақ мешаванд, ки дорои маҳоратҳои мулоим (Soft Skills), тафаккури системавӣ ва омодагӣ ба омӯзиши пайваста ҳастанд.',
      articlePara3: 'Санҷиши мо алгоритмҳои дарахти қарорҳо ва назарияҳои машҳури равоншиносии Холланд ва Климовро истифода мебарад, то барои шумо харитаи равшани ояндаро созад.',
      articleWhyImportantTitle: 'Бартариҳои асосии интихоби огоҳона:',
      articleWhyImportantList: [
        'Сарфаи 4–6 соли умр аз таҳсил дар ихтисос ё донишгоҳи номувофиқ',
        'Шинохти ҷонибҳои қавии худ ва пешгирии мондашавии касбӣ',
        'Нақшаи мушаххас: аз интихоби фанҳои имтиҳонӣ то аввалин таҷрибаомӯзӣ',
        'Боварии комил ба талабот дар бозори меҳнати минтақавӣ ва ҷаҳонӣ',
      ],
      articleConclusion: 'Қадами аввалинро ба сӯи касби ояндаи худ ҳозир гузоред — санҷиш танҳо чанд дақиқа вақт мегирад!',
      bottomCtaTitle: 'Омодаед, ки касби идеалии худро бидонед?',
      bottomCtaSubtitle: 'Ба саволҳои санҷиш посух диҳед ва таҳлили инфиродиро аз зеҳни сунъӣ гиред',
      bottomCtaBtn: 'Оғози санҷиш',
      card1Title: 'Санҷиши зеҳнӣ',
      card1Desc: '13 саволи мутобиқшаванда барои муайян кардани тарзи тафаккур ва архетип.',
      card2Title: 'Топ-3 касби беҳтарин',
      card2Desc: 'Маълумоти муфассал оид ба малакаҳо, донишгоҳҳо ва маош барои солҳои 2026+.',
      card3Title: 'Волонтёрӣ ва амалия',
      card3Desc: 'Лоиҳаҳои воқеии ҷавонон ва таҷрибаомӯзӣ барои ташаккули портфолио.',
      card4Title: 'Мураббии AI',
      card4Desc: 'Чати мустақим барои посух ба саволҳо оид ба касб, донишгоҳ ва грантҳо.',
      pathTitle: 'Роҳи ту аз саволи аввал то касби дӯстдошта',
      pathSubtitle: 'Хатсайри содда ва возеҳи интихоби касби оянда',
      step1Num: '1',
      step1Title: 'Ба 13 саволи санҷиш ҷавоб диҳед',
      step1Desc: 'Бе ҷавобҳои дурусту нодуруст — танҳо он чиро интихоб намоед, ки ба шумо дар зиндагӣ наздиктар аст.',
      step2Num: '2',
      step2Title: 'Шиносномаи инфиродии касбиро ба даст оред',
      step2Desc: 'Архетипи равонӣ, харитаи малакаҳо, касбҳои беҳтарин ва дурнамои маошро омӯзед.',
      step3Num: '3',
      step3Title: 'Худро дар волонтёрӣ санҷед',
      step3Desc: 'Маслиҳатҳои гирифташударо дар ташкилотҳои санҷидашудаи ҷавонон ва таълимӣ амалӣ намоед.',
    },
    quiz: {
      step: 'Савол',
      of: 'аз',
      question: 'Савол',
      orientation: 'Интихоби касб',
      backBtn: 'Ба қафо',
      nextBtn: 'Ба пеш',
      finishBtn: 'Анҷом ва ҳисоб кардан',
      selectOptionHint: 'Барои давом додан яке аз вариантҳоро интихоб кунед',
      keyboardHint: 'Маслиҳат: метавонед рақамҳои 1–5-ро дар клавиатура пахш кунед',
      evaluatingTitle: 'AI профили шуморо таҳлил мекунад...',
      evaluatingSubtitle: 'Муқоисаи қобилиятҳои шумо бо пойгоҳи беш аз 60 касби муосир',
      calibration: 'калибркунӣ',
      adaptivePath: 'Роҳи мутобиқшаванда:',
      getResults: 'Дидани натиҷаҳо',
      selectToContinue: 'Барои гузаштан ба саволи навбатӣ яке аз вариантҳоро интихоб намоед',
      loadingTitle: 'Таҳияи шиносномаи касбӣ',
      loadingFor: 'барои',
      loadingSubtitle: 'Зеҳни сунъӣ ҷавобҳои шуморо коркард намуда, тавсияҳои фардиро омода мекунад',
      step1: 'Таҳлили ҷавобҳо ва ҳавасмандкунандагони шахсии шумо...',
      step2: 'Муқоисаи қобилиятҳо бо матритсаи касбҳои соли 2026+...',
      step3: 'Ҳисоби равонии архетип ва мувозинати маҳоратҳо...',
      step4: 'Ташаккули хатсайри касбӣ ва асосноккунӣ бо Gemini AI...',
      step5: 'Анҷом додани гузориши инфиродӣ ва дурнамои маош...',
    },
    results: {
      badge: 'Гузориши шахсӣ омода аст',
      title: 'Профили касбӣ ва тавсияҳои шумо',
      subtitle: 'Таҳлили мукаммали психологӣ, майлу рағбатҳо ва харитаи касбҳо',
      matchScore: 'мувофиқат',
      topProfessions: '3 касби беҳтарини тавсияшуда',
      radarTitle: 'Харитаи салоҳиятҳо ва қобилиятҳо',
      radarDesc: 'Арзёбии самтҳои калидӣ дар асоси ҷавобҳои шумо',
      detailsTitle: 'Шарҳи муфассали касб',
      whyFitsYou: 'Чаро ин касб махсус ба шумо мувофиқ аст:',
      dailyTasks: 'Вазифаҳои маъмулии ҳаррӯза:',
      keySkills: 'Маҳоратҳои зарурӣ:',
      hardSkills: 'Маҳоратҳои касбӣ (Hard Skills)',
      softSkills: 'Сифатҳои шахсӣ (Soft Skills)',
      educationPath: 'Дар куҷо хондан ва самтҳои таҳсилот:',
      recommendedMajors: 'Самтҳои таҳсил:',
      topUniversities: 'Донишгоҳҳо ва коллеҷҳои пешқадам:',
      salaryAndOutlook: 'Ҳаҷми маош ва дурнамо:',
      salaryJunior: 'Дар оғоз (Junior)',
      salaryMiddle: 'Мутахассис (Middle)',
      salarySenior: 'Коршинос / Роҳбар (Senior)',
      remoteFormat: 'Формати корӣ:',
      firstSteps: '3 қадами аввалин барои имрӯз:',
      askAiAboutThis: 'Ба AI дар бораи ин касб савол додан',
      consultantCta: 'Ба маслиҳат дар бораи касб ниёз доред?',
      consultantCtaDesc: 'Бо мушовири зеҳнии AI сӯҳбат кунед. Ӯ ба ҳама саволҳо дар бораи имтиҳонҳо, донишгоҳҳо ва маошҳо посух медиҳад.',
      consultantCtaBtn: 'Кушодани чат бо мушовири AI',
      volunteeringCta: 'Мехоҳед касбро дар амал санҷед?',
      volunteeringCtaDesc: 'Лоиҳаҳои волонтёриро санҷед — ин роҳи олиҷаноби гирифтани аввалин таҷриба барои резюме мебошад.',
      volunteeringCtaBtn: 'Дидани барномаҳои волонтёрӣ',
      retakeTest: 'Санҷишро аз нав гузаштан',
      printResults: 'Чоп / Сабт ҳамчун PDF',
      copyLink: 'Пайвандро нусхабардорӣ кардан',
      linkCopied: 'Пайванд ба ҳофиза нусхабардорӣ шуд!',
      archetypeLabel: 'Архетипи психологӣ',
      leadingProfile: 'Профили пешбари тафаккур',
      affinitySpheres: 'Соҳаҳои мувофиқи шавқу рағбат:',
      matrixTitle: 'Матритсаи 8-ченакаи қобилиятҳо ва майлҳо',
      scaleLabel: 'Миқёс 0-100%',
      algorithmNote: 'Тибқи алгоритми монандшавии векторӣ ҳисоб шудааст (Cosine Similarity & Euclidean Distance)',
      top5Title: 'Топ-5 касбҳои тавсияшуда',
      top5Subtitle: 'Барои кушодани нақшаи рушд, донишгоҳҳо, маош ва қадамҳои амалӣ тугмаи «Муфассал»-ро пахш кунед.',
      skillsLabel: 'Маҳоратҳо:',
      formatLabel: 'Формат:',
      middleIncomeLabel: 'Даромади Middle:',
      collapseDetails: 'Пӯшонидани ҷузъиёт',
      detailedPlan: 'Нақшаи муфассал',
      moreDetails: 'Муфассал',
      askMentorAbout: 'Дар бораи ин касб аз мураббӣ пурсидан',
      demandLabel: 'Талабот:',
      degreeLabel: 'Дараҷа:',
      subjectsLabel: 'Фанҳои мактабӣ:',
      dayInLifeLabel: 'Як рӯз аз ҳаёти мутахассис:',
      threeStepsLabel: '3 қадами амалӣ, ки аллакай имрӯз метавон кард:',
      altPathsTitle: 'Ихтисосҳои ҳамшафат ва алтернативӣ',
      altPathsSubtitle: 'Самтҳое, ки низ ба профили шумо мувофиқанд ва чандирии касбиро васеъ мекунанд:',
      roadmapTitle: 'Харитаи қадам ба қадами рушд',
      roadmapSubtitle: 'Масири равшан аз мактабхон / донишҷӯ то мутахассиси баландмаош',
      mentorFarewellTitle: 'Маслиҳати мураббии касбӣ',
      askCounselorBtn: 'Ба мушовири касбӣ савол додан',
      explorer: 'Муҳаққиқ',
      prosTitle: 'Афзалиятҳо ва ҷиҳатҳои мусбат',
      consTitle: 'Мушкилот ва ҷонибҳои сахт',
      coreSkillsTitle: 'Малакаҳои асосии зарурӣ',
      traits: {
        analytical: 'Тафаккури таҳлилӣ',
        technical: 'Муҳандисии техникӣ',
        creative: 'Эҷодкорӣ ва тасаввурот',
        research: 'Шавқи тадқиқотӣ',
        social: 'Интеллекти иҷтимоӣ ва ҳамдардӣ',
        entrepreneurial: 'Ҳаракати соҳибкорӣ',
        practical: 'Татбиқи амалӣ',
        organizational: 'Муташаккилӣ ва низоммандӣ',
      },
    },
    volunteering: {
      badge: 'Таҷрибаи амалӣ',
      title: 'Волонтёриҳое, ки барои озмудани нақшҳои нав кӯмак мерасонанд',
      subtitle: 'Фаъолияти волонтёрӣ — роҳи беҳтарини санҷидани вазифаҳои воқеии касбӣ пеш аз дохилшавӣ ба донишгоҳ ё ба кор қабул шудан аст. Ташкилотро дар Душанбе интихоб намуда, сохтани портфолиоро оғоз кунед!',
      allFilter: 'Ҳама',
      applyBtn: 'Дархост додан',
      appliedBtn: 'Дархост фиристода шуд',
      viewDetails: 'Муфассал дар бораи лоиҳа',
      requirements: 'Талабот ба иштирокчиён:',
      skillsGain: 'Чӣ чизҳоро меомӯзед:',
      duration: 'Муддат:',
      location: 'Ҷойгиршавӣ ва формат:',
      spotsLeft: 'Ҷойҳои боқимонда:',
      spots: 'ҷой',
      applyModalTitle: 'Дархост барои иштирок дар лоиҳаи волонтёрӣ',
      nameInput: 'Ном ва насаб',
      emailInput: 'Почтаи электронӣ',
      phoneInput: 'Рақами телефон / Telegram',
      motivationInput: 'Чаро ин лоиҳа барои шумо шавқовар аст? (кӯтоҳ)',
      submitApplication: 'Фиристодани дархост',
      successMessage: 'Ташаккур! Дархости шумо бо муваффақият ба роҳбари лоиҳа фиристода шуд.',
      closeBtn: 'Пӯшидан',
      topBadge: 'Категорияи 3 • Амалияи воқеӣ ва санҷиши нақшҳо дар Тоҷикистон',
      quizBtn: 'Гузаштани санҷиш барои интихоби нақш',
      mainBtn: 'Ба саҳифаи асосӣ',
      searchPlaceholder: 'Ҷустуҷӯ аз рӯи номи ташкилот, нақшҳо ё малакаҳо...',
      foundPrefix: 'Ташкилотҳои ёфтшуда',
      foundOf: 'аз',
      availableRoles: 'Кадом нақшҳо дастрасанд:',
      skillsGained: 'Малакаҳои бадастомада:',
      tryRole: 'Интихоби нақш',
      applyModalSubtitle: 'Барои тамос бо ҳамоҳангсози ташкилот варақаи кӯтоҳро пур кунед',
      howHelpsTitle: 'Чӣ тавр ихтиёригӣ дар интихоби касб кӯмак мекунад?',
      howHelpsSubtitle: 'Таҷриба дар Тоҷикистон ва меъёрҳои байналмилалии касбӣ',
      takeQuizCta: 'Гузаштани санҷиши касбӣ',
      benefit1Title: '01. Санҷиши вазифаҳои воқеӣ',
      benefit1Desc: 'Худро дар маркетинг, IT, ташкили чорабиниҳо ё омӯзгорӣ бидуни хатар санҷед ва фаҳмед, ки дилатон ба чӣ майл дорад.',
      benefit2Title: '02. Шабакасозии аввалин',
      benefit2Desc: 'Шиносоӣ бо мураббиёни ботаҷриба, корфармоён ва ҳамсафоне, ки ҳангоми дохилшавӣ ва ёфтани кор кӯмак мекунанд.',
      benefit3Title: '03. Резюмеи қавӣ',
      benefit3Desc: 'Шаҳодатномаҳои ихтиёригӣ аз ҷониби донишгоҳҳои пешрафтаи ҷаҳон эътироф шуда, ҳангоми гирифтани бурсияҳо бартарӣ медиҳанд.',
      officialWebsite: 'Сомонаи расмӣ',
      noResultsFound: 'Ҳеҷ ташкилоте ёфт нашуд',
      resetSearch: 'Тоза кардани филтрҳо',
    },
    assistant: {
      badge: 'Мушовири зеҳнӣ',
      title: 'Мураббии касбии AI',
      subtitle: 'Саволҳои худро оид ба касбҳо, имтиҳонҳо, донишгоҳҳо, таҷрибаомӯзӣ ва рушди шахсӣ диҳед',
      welcomeMsg: 'Салом! Ман роҳнамои касбии AI ҳастам. Ҳама гуна саволро дар бораи интихоби ихтисос, таҳсилот ё омодагӣ ба касби оянда бипурсед!',
      contextActive: 'AI натиҷаҳои санҷиши шуморо ба назар мегирад',
      noContext: 'Санҷишро гузаред, то посухҳо комилан мувофиқи шумо бошанд',
      inputPlaceholder: 'Саволи худро дар бораи касбҳо, донишгоҳҳо, маҳорат ё оянда бинависед...',
      sendBtn: 'Пурсидан',
      quickPromptsTitle: 'Мавзӯъҳо:',
      quickPrompts: [
        'Кадом касбҳо дар 5 соли оянда бештар серталаб мешаванд?',
        'Чӣ тавр бе таҷриба аввалин резюмеи қавӣ сохтан мумкин аст?',
        'Чӣ тавр фаҳмам, ки ба ман кадом соҳа бештар мувофиқ аст: IT, тарроҳӣ ё менеҷмент?',
        'Барои ман нақшаи 3-моҳаи қадам ба қадами рушди малакаҳоро тартиб деҳ.',
      ],
      disclaimer: 'Мушовири AI тавсияҳои машваратиро дар асоси маълумоти бозори меҳнат пешниҳод мекунад.',
      consultantName: 'Роҳнамои Касбӣ AI',
      consultantRole: 'Мушовири инфиродии касбӣ',
      dialogHistory: 'Таърихи сӯҳбатҳо',
      newChat: 'Чати нав',
      personalDialog: 'Муколамаи инфиродӣ бо AI-мураббӣ • Таърих сабт мешавад барои:',
      historySavedFor: 'Таърих сабт мешавад барои:',
      takeTestBtn: 'Санҷиши касбӣ',
      volunteeringBtn: 'Пойгоҳи волонтёрӣ',
      online: 'Онлайн',
      typingResponse: 'Ҷавоби дақиқ омода шуда истодааст...',
      topicsLabel: 'Мавзӯъҳо:',
      askBtn: 'Пурсидан',
      guest: 'Меҳмон',
    },
    aiAssistant: {
      badge: 'Мушовири зеҳнӣ',
      title: 'Мураббии касбии AI',
      subtitle: 'Саволҳои худро оид ба касбҳо, имтиҳонҳо, донишгоҳҳо, таҷрибаомӯзӣ ва рушди шахсӣ диҳед',
      welcomeMsg: 'Салом! Ман роҳнамои касбии AI ҳастам. Ҳама гуна саволро дар бораи интихоби ихтисос, таҳсилот ё омодагӣ ба касби оянда бипурсед!',
      contextActive: 'AI натиҷаҳои санҷиши шуморо ба назар мегирад',
      noContext: 'Санҷишро гузаред, то посухҳо комилан мувофиқи шумо бошанд',
      inputPlaceholder: 'Дар бораи дохилшавӣ, маош, интихоби ихтисос ва маҳоратҳо пурсед...',
      sendBtn: 'Фиристодан',
      quickPromptsTitle: 'Саволҳои маъмул:',
      quickPrompts: [
        'Барои ихтисосҳои IT кадом фанҳоро бояд хонд?',
        'Чӣ тавр метавон бе таҷриба аввалин таҷрибаомӯзиро пайдо кард?',
        'Фарқи байни Data Science ва таҳияи барномаҳо дар чист?',
        'Кадом касбҳо то соли 2030 бештар серталаб мешаванд?',
      ],
      disclaimer: 'Мушовири AI тавсияҳои машваратиро дар асоси маълумоти бозори меҳнат пешниҳод мекунад.',
      consultantName: 'Роҳнамои Касбӣ AI',
      consultantRole: 'Мушовири инфиродии касбӣ',
    },
    counselorModal: {
      title: 'Машварат бо мушовири касбии AI',
      subtitle: 'Дар бораи касби тавсияшуда ё роҳи таҳсилот саволи худро бидиҳед',
      quickQuestions: 'Саволҳои фаврӣ:',
      placeholder: 'Саволи худро нависед...',
      send: 'Пурсидан',
      close: 'Пӯшидан',
      suggestions: [
        'Дар синфҳои 10-11 аз чӣ оғоз кардан беҳтар аст?',
        'Кадомаш беҳтар аст: донишгоҳ ё курсҳои онлайн?',
        'Чӣ гуна бе таҷриба аввалин портфолиоро созем?',
        'Ҳоло кадом малакаҳо бештар серталабанд?'
      ],
      onlineStatus: 'Онлайн',
      typingText: 'Ҷавоби дақиқ омода шуда истодааст...',
      suggestionsLabel: 'Маслиҳатҳо',
      sendBtn: 'Фиристодан',
    },
    footer: {
      systemTitle: 'Касбинтихобкунӣ',
      systemDesc: 'Низоми зеҳнии интихоби касб ва роҳнамоии шахсӣ дар асоси зеҳни сунъӣ.',
      volunteeringText: 'Пойгоҳи барномаҳои волонтёрӣ барои озмудани худ дар амал дар Тоҷикистон.',
      aiAssistantText: 'Мураббии инфиродии AI барои посух ба саволҳо оид ба таҳсилот ва касб.',
      allRightsReserved: 'Ҳамаи ҳуқуқҳо маҳфузанд.',
      startNowBtn: 'Оғози санҷиш',
      copyright: 'Касбинтихобкунӣ AI. Ҳамаи ҳуқуқҳо маҳфузанд.',
      adaptiveDb: 'Пойгоҳи мутобиқшавандаи 260+ касбҳо ва волонтёрӣ',
    },
  },
};
