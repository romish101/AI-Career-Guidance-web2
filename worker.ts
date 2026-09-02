// Cloudflare Workers entry point.
// Replaces the Express server (server.ts) for production deployment on
// Cloudflare Workers, which cannot run a persistent Node/Express server.
// Same behavior and fallback logic as server.ts, reimplemented with fetch().

export interface Env {
  GEMINI_API_KEY?: string;
  ASSETS: { fetch: (request: Request) => Promise<Response> };
}

const GEMINI_MODELS = ['gemini-2.5-flash', 'gemini-2.5-pro'];

async function callGemini(
  apiKey: string,
  model: string,
  prompt: string,
  systemInstruction?: string,
  temperature = 0.25,
  responseMimeType?: string
): Promise<string> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  const body: any = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { temperature },
  };
  if (systemInstruction) {
    body.systemInstruction = { parts: [{ text: systemInstruction }] };
  }
  if (responseMimeType) {
    body.generationConfig.responseMimeType = responseMimeType;
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => '');
    const err: any = new Error(`Gemini HTTP ${res.status}: ${errText}`);
    err.status = res.status;
    throw err;
  }

  const data: any = await res.json();
  const text = (data?.candidates?.[0]?.content?.parts || [])
    .map((p: any) => p.text || '')
    .join('')
    .trim();
  return text;
}

// Resilient multi-model executor with automatic fallback on 503 / 429 / high demand spikes
async function generateWithModelFallback(
  apiKey: string,
  promptOptions: {
    prompt: string;
    systemInstruction?: string;
    temperature?: number;
    responseMimeType?: string;
  },
  modelsToTry: string[] = GEMINI_MODELS
): Promise<string> {
  let lastError: any = null;

  for (const model of modelsToTry) {
    // Try up to 2 attempts per model if temporary 503/429 occurs
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        const text = await callGemini(
          apiKey,
          model,
          promptOptions.prompt,
          promptOptions.systemInstruction,
          promptOptions.temperature ?? 0.25,
          promptOptions.responseMimeType
        );
        if (text) {
          return text;
        }
      } catch (err: any) {
        lastError = err;
        const status = err?.status || '';
        const msg = String(err?.message || err);
        const isTransient = msg.includes('503') || msg.includes('429') || status === 503 || status === 429;

        if (isTransient && attempt === 1) {
          await new Promise((r) => setTimeout(r, 600));
          continue;
        }
        break;
      }
    }
  }

  throw lastError || new Error('All Gemini model candidates failed to generate content');
}

// Fallback high-quality response builder in case API is unavailable or rate-limited
function generateSmartFallback(answers: any[], candidateName?: string, userRole?: string) {
  const answerMap: Record<number, string> = {};
  answers.forEach((a) => {
    answerMap[a.questionId] = a.selectedOptionText || '';
  });

  const isTech = answers.some((a) => a.selectedOptionId?.includes('tech') || a.selectedOptionId?.includes('cs'));
  const isCreative = answers.some((a) => a.selectedOptionId?.includes('creative') || a.selectedOptionId?.includes('arts') || a.selectedOptionId?.includes('aesthetic'));
  const isSocial = answers.some((a) => a.selectedOptionId?.includes('social') || a.selectedOptionId?.includes('human') || a.selectedOptionId?.includes('people'));

  let primaryProf: any;
  let secondProf: any;
  let thirdProf: any;

  if (isTech && isCreative) {
    primaryProf = {
      id: 'prof_ui_ux',
      title: 'Product / UI-UX Дизайнер цифровых продуктов',
      category: 'IT и Дизайн',
      matchScore: 97,
      iconName: 'LayoutTemplate',
      badge: 'Высокий спрос & Креатив',
      shortDescription: 'Проектирование логики, пользовательского опыта и визуального стиля мобильных приложений, веб-сервисов и игр.',
      whyItFits: {
        summary: 'Идеальный баланс между твоим интересом к технологиям, созданию эстетичных продуктов и пониманием психологии пользователей.',
        referencedAnswers: [
          {
            questionTopic: 'Тип задач и творчество',
            userChoice: answerMap[3] || 'Творческий подход и технологии',
            explanation: 'В UX/UI дизайне ты проектируешь с нуля визуальные интерфейсы и превращаешь сложные идеи в красивый и понятный продукт.',
          },
          {
            questionTopic: 'Формат труда',
            userChoice: answerMap[4] || 'Интеллектуальная работа с визуальным результатом',
            explanation: 'Ты сразу видишь результат своей работы на экранах смартфонов миллионов людей.',
          },
          {
            questionTopic: 'Уровень дохода и формат',
            userChoice: answerMap[6] || 'Высокий доход с возможностью удаленки',
            explanation: 'Профессия входит в топ-5 самых востребованных в IT с возможностью работать по всему миру.',
          },
        ],
      },
      keySkills: {
        hardSkills: ['Figma / FigJam', 'UX-исследования и CJM', 'Прототипирование и UI Kit', 'Основы HTML/CSS', 'Аналитика метрик'],
        softSkills: ['Развитая эмпатия', 'Критическое мышление', 'Презентация идей', 'Внимание к деталям'],
      },
      educationPath: {
        recommendedType: 'Бакалавриат + Онлайн-буткемпы + Портфолио',
        degreeOrPrograms: ['«Дизайн цифровых продуктов»', '«Информационные технологии в дизайне»', 'Курсы по UX/UI'],
        topUniversitiesOrPlatforms: ['НИУ ВШЭ (Школа дизайна)', 'ИТМО', 'Skillbox / Contented / Яндекс Практикум', 'Dribbble & Behance'],
        estimatedYears: '2-4 года (первые заказы уже через 6-9 месяцев)',
      },
      salaryRange: {
        junior: '70 000 – 110 000 ₽',
        middle: '140 000 – 240 000 ₽',
        senior: '270 000 – 450 000+ ₽',
        currency: 'RUB / USD',
        growthOutlook: '+20-30% в год с ростом кейсов',
      },
      dayInTheLife:
        'Утро начинается с дизайн-ревью в Figma, днем — интервью с пользователями и проектирование сценариев нового мобильного банка, вечером — полировка дизайн-системы и передача макетов разработчикам.',
      firstStepsToStartNow: [
        'Установи бесплатную Figma и повтори интерфейс любимого приложения (например, Telegram или Spotify)',
        'Изучи базовые правила типографики, композиции и цветового круга Иттена',
        'Пройди бесплатные мини-курсы по UX-проектированию и начни собирать портфолио',
      ],
    };
  } else if (isTech) {
    primaryProf = {
      id: 'prof_ai_eng',
      title: 'Инженер машинного обучения и ИИ (AI / ML Engineer)',
      category: 'IT & Data Science',
      matchScore: 98,
      iconName: 'BrainCircuit',
      badge: 'Профессия будущего №1',
      shortDescription: 'Создание, обучение и внедрение нейросетей, генеративного искусственного интеллекта и умных систем.',
      whyItFits: {
        summary: 'Твоя склонность к логике, точным наукам и технологиям позволяет стать архитектором нейросетей нового поколения.',
        referencedAnswers: [
          {
            questionTopic: 'Любимые предметы и логика',
            userChoice: answerMap[2] || 'Информатика и математика',
            explanation: 'ML-инженерия базируется на линейной алгебре, теории вероятностей и алгоритмическом кодинге.',
          },
          {
            questionTopic: 'Решение сложных задач',
            userChoice: answerMap[10] || 'Эйфория от решения сложной головоломки',
            explanation: 'Обучение нейросети и подбор гиперпараметров — это непрерывный интеллектуальный триумф.',
          },
        ],
      },
      keySkills: {
        hardSkills: ['Python (PyTorch, TensorFlow)', 'Data Science & SQL', 'LLM Prompting & Fine-tuning', 'Математическая статистика', 'Docker & Git'],
        softSkills: ['Системное мышление', 'Упорство при отладке', 'Английский язык (чтение arXiv)'],
      },
      educationPath: {
        recommendedType: 'Фундаментальный IT-бакалавриат + AI-лаборатории',
        degreeOrPrograms: ['«Прикладная математика и информатика»', '«Data Science и ИИ»', '«Программная инженерия»'],
        topUniversitiesOrPlatforms: ['МФТИ (ФПМИ)', 'НИУ ВШЭ (ФКН)', 'МГУ им. Ломоносова', 'Kaggle & Coursera'],
        estimatedYears: '4-5 лет',
      },
      salaryRange: {
        junior: '110 000 – 160 000 ₽',
        middle: '220 000 – 380 000 ₽',
        senior: '400 000 – 750 000+ ₽ ($5000+)',
        currency: 'RUB / USD',
        growthOutlook: '+35% ежегодно',
      },
      dayInTheLife:
        'Анализ массивов данных, обучение языковой модели на GPU-кластере, тестирование качества генерации ответов и интеграция модели в мобильное приложение компании.',
      firstStepsToStartNow: [
        'Изучи синтаксис Python и библиотеки NumPy, Pandas на Stepik или YouTube',
        'Зарегистрируйся на Kaggle и реши свой первый ознакомительный датасет (Titanic / Housing Prices)',
        'Попробуй написать собственного Telegram-бота с подключением Gemini API',
      ],
    };
  } else {
    primaryProf = {
      id: 'prof_product_lead',
      title: 'Product Manager (Менеджер цифровых продуктов)',
      category: 'Менеджмент и IT',
      matchScore: 95,
      iconName: 'Compass',
      badge: 'Лидерство и Стратегия',
      shortDescription: 'Управление созданием продукта на стыке бизнеса, технологий и пользовательских потребностей.',
      whyItFits: {
        summary: 'Твое сочетание организаторских качеств, коммуникабельности и стратегического взгляда делает тебя идеальным лидером продукта.',
        referencedAnswers: [
          {
            questionTopic: 'Командная роль и лидерство',
            userChoice: answerMap[12] || 'Архитектор или Капитан команды',
            explanation: 'Продакт-менеджер ведет за собой команду разработчиков и дизайнеров, определяя видение продукта.',
          },
        ],
      },
      keySkills: {
        hardSkills: ['Unit-экономика', 'Product Analytics (Amplitude, GA4)', 'Agile / Scrum', 'User Interviews / CustDev', 'A/B тестирование'],
        softSkills: ['Харизма и лидерство', 'Умение слушать', 'Принятие решений в условиях неопределенности'],
      },
      educationPath: {
        recommendedType: 'Бакалавриат (Менеджмент/IT) + Практика в стартапах',
        degreeOrPrograms: ['«Управление цифровым продуктом»', '«Бизнес-информатика»', '«Менеджмент инноваций»'],
        topUniversitiesOrPlatforms: ['НИУ ВШЭ', 'Сколтех / РЭУ Плеханова', 'GoPractice Simulator', 'Product Heroes'],
        estimatedYears: '3-4 года',
      },
      salaryRange: {
        junior: '90 000 – 140 000 ₽',
        middle: '190 000 – 320 000 ₽',
        senior: '350 000 – 600 000+ ₽',
        currency: 'RUB / USD',
        growthOutlook: '+25% в год',
      },
      dayInTheLife:
        'Проведение утреннего командного синка, анализ графика конверсий в покупку, формулирование гипотезы для нового функционала и общение с инвесторами.',
      firstStepsToStartNow: [
        'Почитай книгу "Спроси маму" (Роб Фитцпатрик) о правильном общении с клиентами',
        'Проанализируй, чего не хватает твоему любимому сервису, и распиши фичи',
        'Пройди симулятор базового продакт-менеджмента онлайн',
      ],
    };
  }

  secondProf = {
    id: 'prof_fullstack_dev',
    title: 'Full-Stack Web & Mobile Разработчик',
    category: 'IT-инженерия',
    matchScore: 93,
    iconName: 'Code',
    badge: 'Максимальная универсальность',
    shortDescription: 'Создание полноценных веб-сервисов, серверной логики, баз данных и интерактивных интерфейсов.',
    whyItFits: {
      summary: 'Позволяет быстро превращать любые идеи в работающий софт и запускать собственные проекты с нуля.',
      referencedAnswers: [
        {
          questionTopic: 'Стремление видеть результат',
          userChoice: answerMap[4] || 'Интеллектуальная работа с экраном',
          explanation: 'Разработчик видит, как строки кода превращаются в работающий сервис прямо на глазах.',
        },
      ],
    },
    keySkills: {
      hardSkills: ['TypeScript / JavaScript', 'React / Next.js / Tailwind', 'Node.js / Express / PostgreSQL', 'REST / GraphQL', 'Git'],
      softSkills: ['Алгоритмическая логика', 'Внимание к архитектуре', 'Самостоятельность'],
    },
    educationPath: {
      recommendedType: 'Бакалавриат / Колледж + Практические пет-проекты',
      degreeOrPrograms: ['«Информационные системы и технологии»', '«Программная инженерия»'],
      topUniversitiesOrPlatforms: ['ИТМО', 'МГТУ им. Баумана', 'Яндекс Практикум', 'freeCodeCamp'],
      estimatedYears: '2-4 года',
    },
    salaryRange: {
      junior: '80 000 – 130 000 ₽',
      middle: '170 000 – 290 000 ₽',
      senior: '320 000 – 550 000 ₽',
      currency: 'RUB / USD',
      growthOutlook: '+25% ежегодно',
    },
    dayInTheLife: 'Написание новых API-роутов, верстка адаптивных компонентов на React, оптимизация запросов к базе данных и код-ревью с коллегами.',
    firstStepsToStartNow: [
      'Освой основы HTML, CSS и современного JavaScript (ES6+)',
      'Создай свой первый сайт-визитку или интерактивный трекер задач',
      'Заведи профиль на GitHub и загружай туда учебные проекты',
    ],
  };

  thirdProf = {
    id: 'prof_biotech_data',
    title: 'Биоинформатик / Исследователь вычислительной биологии',
    category: 'Наука & Технологии',
    matchScore: 89,
    iconName: 'Dna',
    badge: 'Научный прорыв',
    shortDescription: 'Анализ геномных данных, моделирование лекарств и создание биомедицинских алгоритмов с помощью IT.',
    whyItFits: {
      summary: 'Сочетание научного поиска, пользы для здоровья человечества и высокотехнологичных вычислений.',
      referencedAnswers: [
        {
          questionTopic: 'Научные интересы и польза',
          userChoice: answerMap[1] || 'Наука и эксперименты',
          explanation: 'Биоинформатика позволяет делать открытия мирового масштаба на стыке биологии и компьютерных наук.',
        },
      ],
    },
    keySkills: {
      hardSkills: ['Python & R для анализа данных', 'Молекулярная биология и генетика', 'Алгоритмы секвенирования', 'Базы данных NCBI / BLAST'],
      softSkills: ['Терпение и аккуратность', 'Научная добросовестность', 'Аналитическое мышление'],
    },
    educationPath: {
      recommendedType: 'Университетский специалитет + Магистратура',
      degreeOrPrograms: ['«Биоинженерия и биоинформатика»', '«Медицинская кибернетика»'],
      topUniversitiesOrPlatforms: ['МГУ им. Ломоносова (ФББ)', 'СПбГУ', 'Институт биоинформатики'],
      estimatedYears: '5-6 лет',
    },
    salaryRange: {
      junior: '90 000 – 140 000 ₽',
      middle: '180 000 – 300 000 ₽',
      senior: '320 000 – 500 000+ ₽',
      currency: 'RUB / USD / EUR',
      growthOutlook: '+20% в год',
    },
    dayInTheLife: 'Запуск алгоритмов анализа мутаций ДНК на вычислительном сервере, проверка гипотез о строении белков и обсуждение результатов с биологами.',
    firstStepsToStartNow: [
      'Посмотри научно-популярные лекции Института биоинформатики на YouTube',
      'Освой базовый Python и пройди бесплатный курс по алгоритмам',
      'Почитай статьи на Биомолекуле (biomolecula.ru)',
    ],
  };

  return {
    candidateName: candidateName || 'Исследователь',
    targetAudience: userRole || 'Школьник / Студент',
    recommendations: [primaryProf, secondProf, thirdProf],
    psychologicalProfile: {
      primaryArchetype: isTech ? 'Инноватор-Мыслитель' : isCreative ? 'Креативный Визионер' : 'Стратег-Лидер',
      archetypeSubtitle: 'Глубокий аналитический ум и стремление к созданию ценности',
      archetypeDescription:
        'Ты обладаешь выраженной способностью видеть взаимосвязи между сложными системами, быстро схватываешь суть вещей и ценишь профессиональную свободу. Тебе важно, чтобы деятельность приносила осязаемый интеллектуальный или визуальный результат.',
      traits: {
        analytical: isTech ? 88 : 74,
        creative: isCreative ? 92 : 68,
        social: isSocial ? 85 : 55,
        technical: isTech ? 94 : 65,
        entrepreneurial: 72,
      },
      strengths: [
        'Умение декомпозировать многослойные задачи на понятные шаги',
        'Высокая обучаемость в технологических и цифровых инструментах',
        'Способность находить нестандартные решения там, где другие заходят в тупик',
        'Здоровый перфекционизм и внимание к качеству итогового продукта',
      ],
      growthZones: [
        'Практика публичных выступлений и защиты своих проектов',
        'Не бояться делать первые несовершенные версии (MVP)',
        'Развитие нетворкинга и поиск менторов в интересующей сфере',
      ],
    },
    summaryAdvice: 'Твоя уникальная комбинация навыков дает тебе гигантское преимущество в эпоху искусственного интеллекта. Не бойся начинать с небольших пет-проектов уже сегодня — практический опыт ценится работодателями выше сухих оценок в аттестате!',
    motivationQuote: '«Будущее принадлежит тем, кто верит в красоту своей мечты и не боится делать первые шаги уже сегодня.»',
    generatedAt: new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }),
  };
}

async function handleHealth(env: Env): Promise<Response> {
  return Response.json({
    status: 'ok',
    hasApiKey: !!env.GEMINI_API_KEY,
    timestamp: new Date().toISOString(),
  });
}

async function handleAnalyzeCareer(request: Request, env: Env): Promise<Response> {
  let body: any = {};
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { answers, candidateName, userRole } = body;

  if (!answers || !Array.isArray(answers) || answers.length === 0) {
    return Response.json({ error: 'Answers array is required' }, { status: 400 });
  }

  const apiKey = env.GEMINI_API_KEY;

  if (!apiKey) {
    return Response.json(generateSmartFallback(answers, candidateName, userRole));
  }

  const formattedAnswers = answers
    .map((a: any, idx: number) => `${idx + 1}. Вопрос: "${a.questionTitle}" (${a.category})\n Выбор пользователя: "${a.selectedOptionText}"`)
    .join('\n\n');

  const prompt = `Ты — ведущий эксперт по профориентации, доктор психологических наук и карьерный наставник для подростков и студентов.

На основе следующих ответов пользователя подбери 3 наиболее подходящие профессии. Для каждой профессии объясни: почему она подходит именно этому человеку (ссылаясь на его конкретные ответы), какие навыки нужно развивать, какое образование или курсы нужны, средний уровень дохода.

Ответы пользователя:
${formattedAnswers}

${candidateName ? `Имя кандидата: ${candidateName}` : ''}
${userRole ? `Статус: ${userRole}` : ''}

Оформи ответ СТРОГО в формате валидного JSON со следующей схемой:
{
"candidateName": "Имя или Исследователь",
"targetAudience": "Школьник / Студент",
"recommendations": [
{
"id": "prof_1",
"title": "Точное название профессии на русском (и на английском при необходимости)",
"category": "Категория сферы (например, IT & Разработка, Дизайн и Медиа, Биотехнологии)",
"matchScore": 96,
"iconName": "Одно из Lucide-иконок: Code, BrainCircuit, Palette, LayoutTemplate, Dna, Compass, TrendingUp, ShieldCheck, HeartHandshake, Laptop, Cpu, Sparkles, LineChart, FlaskConical",
"badge": "Короткий яркий бейдж (например: 'Топ спрос 2026', 'Высокий доход', 'Креативный трек')",
"shortDescription": "2-3 емких предложения о сути профессии понятным подростку языком",
"whyItFits": {
"summary": "Глубокое психологическое и логическое резюме, почему эта профессия создана для него",
"referencedAnswers": [
{
"questionTopic": "Тема вопроса (например: Любимые школьные предметы)",
"userChoice": "Что именно выбрал пользователь в анкете",
"explanation": "Как конкретно этот ответ доказывает предрасположенность к профессии"
},
{
"questionTopic": "Тема второго вопроса (например: Отношение к общению / тип задач)",
"userChoice": "Что выбрал пользователь",
"explanation": "Связка с реальными рабочими обязанностями"
}
]
},
"keySkills": {
"hardSkills": ["Ключевой тех навык 1", "Тех навык 2", "Тех навык 3", "Тех навык 4", "Тех навык 5"],
"softSkills": ["Гибкий навык 1", "Гибкий навык 2", "Гибкий навык 3", "Гибкий навык 4"]
},
"educationPath": {
"recommendedType": "Вуз / Колледж / Онлайн-курсы / Комбинированный путь",
"degreeOrPrograms": ["Направление бакалавриата/специалитета 1", "Направление 2"],
"topUniversitiesOrPlatforms": ["Топ Вуз/Платформа 1", "Топ Вуз/Платформа 2", "Платформа 3"],
"estimatedYears": "Срок обучения (например: 4 года бакалавриата + стажировки)"
},
"salaryRange": {
"junior": "Например: 80 000 – 120 000 ₽",
"middle": "Например: 160 000 – 280 000 ₽",
"senior": "Например: 300 000 – 550 000+ ₽ ($4000+)",
"currency": "RUB / USD",
"growthOutlook": "+25% в год"
},
"dayInTheLife": "Живое, вдохновляющее описание одного дня из жизни специалиста (утро, задачи, команда, кайф от работы)",
"firstStepsToStartNow": [
"Конкретный шаг 1, который подросток может сделать прямо сегодня (бесплатный курс, софт, книга)",
"Конкретный шаг 2 (мини-проект или практика)",
"Конкретный шаг 3"
]
}
],
"psychologicalProfile": {
"primaryArchetype": "Название архетипа личности (например: 'Инноватор-Мыслитель', 'Креативный Архитектор', 'Технический Первопроходец')",
"archetypeSubtitle": "Емкий слоган архетипа",
"archetypeDescription": "Подробное теплое психологическое описание сильных сторон характера и драйверов",
"traits": {
"analytical": 85,
"creative": 90,
"social": 70,
"technical": 88,
"entrepreneurial": 65
},
"strengths": [
"Сильная сторона 1",
"Сильная сторона 2",
"Сильная сторона 3",
"Сильная сторона 4"
],
"growthZones": [
"Зона роста / рекомендация 1",
"Зона роста / рекомендация 2",
"Зона роста / рекомендация 3"
]
},
"summaryAdvice": "Вдохновляющее финальное напутствие от карьерного наставника",
"motivationQuote": "Цитата великого человека или вдохновляющая мысль"
}`;

  let rawText: string;
  try {
    rawText = await generateWithModelFallback(apiKey, {
      prompt,
      responseMimeType: 'application/json',
      temperature: 0.2,
      systemInstruction:
        'Ты — ведущий профессиональный эксперт по профориентации и карьерный психолог. Формируй глубокий, реалистичный, строго структурированный и логически безупречный анализ на основе ответов пользователя, связывая каждый вывод с его выбором.',
    });
  } catch (err) {
    console.error('Error generating career guidance with Gemini API:', err);
    return Response.json(generateSmartFallback(answers, candidateName, userRole));
  }

  let parsedData: any;
  try {
    const jsonMatch = rawText.match(/\{[\s\S]*\}/);
    const jsonString = jsonMatch ? jsonMatch[0] : rawText;
    parsedData = JSON.parse(jsonString);
  } catch {
    try {
      const cleanJson = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
      parsedData = JSON.parse(cleanJson);
    } catch (parseError) {
      console.error('Failed to parse Gemini response as JSON:', parseError);
      return Response.json(generateSmartFallback(answers, candidateName, userRole));
    }
  }

  if (!parsedData.generatedAt) {
    parsedData.generatedAt = new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  return Response.json(parsedData);
}

async function handleAskCounselor(request: Request, env: Env): Promise<Response> {
  let body: any = {};
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { question, userContext, history, candidateName, userRole, language } = body;

  if (!question || typeof question !== 'string') {
    return Response.json({ error: 'Question is required' }, { status: 400 });
  }

  const apiKey = env.GEMINI_API_KEY;

  const nameStr = candidateName || userContext?.candidateName || 'друг';
  const roleStr = userRole || userContext?.targetAudience || 'учащийся / студент';
  const archetypeStr = userContext?.dominantArchetype || userContext?.psychologicalProfile?.primaryArchetype;
  const langCode = (language || 'ru').toLowerCase();

  let langInstruction = 'Отвечай на чистом русском языке.';
  if (langCode === 'tg' || langCode === 'tjk' || langCode === 'tajik') {
    langInstruction = 'Муҳим: Ба забони тоҷикӣ (бо хатти кириллии тоҷикӣ ва грамматикаи дуруст) ҷавоб деҳ.';
  } else if (langCode === 'en' || langCode === 'eng' || langCode === 'english') {
    langInstruction = 'IMPORTANT: Answer in clear, professional English.';
  }

  let recsStr = '';
  if (userContext?.topRecommendations && Array.isArray(userContext.topRecommendations)) {
    recsStr = userContext.topRecommendations.map((r: any) => r.profession?.title || r.title).filter(Boolean).join(', ');
  } else if (userContext?.recommendations && Array.isArray(userContext.recommendations)) {
    recsStr = userContext.recommendations.map((r: any) => r.title).filter(Boolean).join(', ');
  }

  let userContextSummary = `Имя собеседника: ${nameStr}. Статус: ${roleStr}.`;
  if (archetypeStr) {
    userContextSummary += ` Психологический архетип: ${archetypeStr}.`;
  }
  if (recsStr) {
    userContextSummary += ` Рекомендованные профессии по тесту: ${recsStr}.`;
  }

  const systemInstruction = `Ты — ведущий профессиональный карьерный консультант, эксперт по профессиям, IT, дизайну, инженерии, вузам, олимпиадам и развитию навыков.

${langInstruction}

ГЛАВНЫЕ ПРАВИЛА СОСТАВЛЕНИЯ ОТВЕТА (ПОРЯДОК СТРОГИЙ):
1. ПЕРВЫМ ДЕЛОМ: Дай прямой, точный, аргументированный и содержательный ответ именно на заданный вопрос пользователя (${nameStr}). Если спросили про разницу между Python и JS, как поступить на бюджет, с чего начать дизайн или какие зарплаты — ответь по фактам, глубоко и структурированно.
2. СТРУКТУРА: Выделяй главное жирным шрифтом, используй аккуратные списки, конкретные примеры и проверенные инструменты.
3. НИКАКОЙ ВОДЫ: Не начинай с пустых общих приветствий или банальных шаблонных фраз.
4. В САМОМ КОНЦЕ (ОПЦИОНАЛЬНО, максимум 1-2 предложения): можешь дать один полезный практический совет или ориентир, строго вытекающий из темы вопроса.`;

  if (apiKey) {
    let dialogueText = '';
    if (Array.isArray(history) && history.length > 0) {
      const cleanHistory = history.filter(
        (m: any) => m && m.content && m.id !== 'msg_welcome' && !String(m.id).startsWith('msg_welcome_') && m.id !== 'welcome'
      );
      for (const msg of cleanHistory.slice(-6)) {
        const sender = msg.role === 'assistant' || msg.role === 'model' ? 'Наставник' : 'Пользователь';
        dialogueText += `${sender}: ${msg.content}\n\n`;
      }
    }

    const prompt = `${dialogueText ? `История диалога:\n${dialogueText}\n` : ''}Пользователь (${nameStr}, ${roleStr}) спрашивает:
${question}

Дай прямой, содержательный, точный и структурированный ответ на этот вопрос:`;

    try {
      const timeoutPromise = new Promise<string>((_, reject) => setTimeout(() => reject(new Error('AI_TIMEOUT')), 16000));

      const generatePromise = generateWithModelFallback(apiKey, {
        prompt,
        systemInstruction,
        temperature: 0.25,
      });

      const generatedText = await Promise.race([generatePromise, timeoutPromise]);

      if (generatedText && generatedText.trim()) {
        return Response.json({ reply: generatedText.trim() });
      }
    } catch (geminiError) {
      console.warn('Gemini model calls failed, using contextual fallback engine:', geminiError);
    }
  }

  // Dynamic intelligent answering engine for specific topic keywords
  const qLower = question.toLowerCase();
  let smartReply = '';

  if (qLower.includes('python') || qLower.includes('питон') || qLower.includes('пайтон')) {
    smartReply = `**Python** — один из самых популярных и универсальных языков программирования в мире.

**Где и для чего применяется:**
• **Data Science и ИИ / Нейросети:** безусловный лидер благодаря библиотекам PyTorch, TensorFlow, Pandas, NumPy.
• **Бэкенд-разработка:** создание веб-сервисов и API на фреймворках FastAPI, Django, Flask.
• **Автоматизация и парсинг:** написание скриптов, ботов для Telegram, парсеров данных.

**С чего начать изучение:**
1. **Базовый синтаксис:** переменные, циклы, функции, структуры данных (списки, словари).
2. **Практика:** реши 30–50 задач на LeetCode / Codewars (уровень Easy).
3. **Первый проект:** создай Telegram-бота с базой данных SQLite или парсер цен.

**Рекомендация:** Начни с интерактивного бесплатного курса «Поколение Python» на платформе Stepik — он дает отличный фундамент.`;
  } else if (qLower.includes('javascript') || qLower.includes('js') || qLower.includes('джаваскрипт')) {
    smartReply = `**JavaScript (JS)** — главный язык веб-разработки и создания интерактивных интерфейсов.

**Основные направления:**
• **Фронтенд:** создание сайтов и веб-приложений (React, Vue, Next.js).
• **Бэкенд:** разработка серверной логики на Node.js и Express.
• **Мобильные приложения:** кроссплатформенная разработка на React Native.

**Рекомендация:** Изучай современный стандарт ES6+ и учебник learn.javascript.ru, а затем переходи к React.`;
  } else if (qLower.includes('дизайн') || qLower.includes('дизайнер') || qLower.includes('figma') || qLower.includes('ui')) {
    smartReply = `**Профессия UI/UX дизайнера** объединяет эстетику, аналитику поведения людей и цифровые технологии.

**Ключевые навыки:**
• **Инструменты:** уверенное владение Figma (Auto Layout, Components, Variables).
• **UX (Опыт пользователя):** проведение интервью, CJM (Customer Journey Map), прототипирование и тестирование гипотез.
• **UI (Интерфейс):** типографика, композиция, цветовая теория и создание дизайн-систем.

**Рекомендация:** Начни с копирования 3–4 понравившихся экранов популярных мобильных приложений в Figma для развития насмотренности.`;
  } else if (qLower.includes('вуз') || qLower.includes('университет') || qLower.includes('поступлени') || qLower.includes('бюджет')) {
    smartReply = `**Стратегия успешного поступления в вуз:**

1. **Определи профильные предметы:** сфокусируйся на 2-3 ключевых дисциплинах (математика, информатика, физика, обществознание или иностранный язык).
2. **Олимпиады и конкурсы:** победы в олимпиадах перечня дают право поступления БВИ (без вступительных испытаний) или 100 баллов за предмет.
3. **Индивидуальные достижения:** золотая медаль, значок ГТО, участие в профильных хакатонах и волонтёрство добавляют до 10 дополнительных баллов к рейтингу.

**Рекомендация:** Выбери 3-5 целевых вузов и изучи проходные баллы прошлых лет на официальных сайтах приемных комиссий.`;
  } else if (qLower.includes('зарплат') || qLower.includes('деньги') || qLower.includes('доход') || qLower.includes('сколько платят')) {
    smartReply = `**Уровни дохода и карьерные ступени в современных профессиях:**

• **Junior (начинающий, 0–1.5 года):** 60 000 – 110 000 ₽ ($700–$1200) — освоение рабочих процессов и решение типовых задач под присмотром наставника.
• **Middle (самостоятельный специалист, 2–4 года):** 150 000 – 280 000 ₽ ($1800–$3200) — автономная разработка крупных фичей и архитектурные решения.
• **Senior / Lead (эксперт / тимлид, 5+ лет):** 320 000 – 600 000+ ₽ ($3500–$6500+) — руководство командами, сложная архитектура и бизнес-влияние.

**Рекомендация:** Быстрее всего доход растет при наличии сильного портфолио реальных проектов и уверенного технического английского.`;
  } else {
    smartReply = `**По твоему вопросу «${question}»:**

Для достижения конкретных результатов в этом направлении ключевыми факторами являются:
1. **Фундаментальная база:** четкое понимание базовых принципов и практических требований сферы.
2. **Портфолио и пет-проекты:** работодатели и приемные комиссии в первую очередь смотрят на реальные результаты работы, а не только на оценки.
3. **Регулярная практика:** уделяй выбранной теме по 40–60 минут каждый день для непрерывного прогресса.

**Рекомендация:** Если хочешь детальный пошаговый план действий под твой текущий уровень — уточни свой класс/курс или конкретную цель!`;
  }

  return Response.json({ reply: smartReply });
}

export default {
  async fetch(request: Request, env: Env, _ctx: any): Promise<Response> {
    const url = new URL(request.url);

    try {
      if (url.pathname === '/api/health' && request.method === 'GET') {
        return await handleHealth(env);
      }
      if (url.pathname === '/api/analyze-career' && request.method === 'POST') {
        return await handleAnalyzeCareer(request, env);
      }
      if (url.pathname === '/api/ask-counselor' && request.method === 'POST') {
        return await handleAskCounselor(request, env);
      }
      if (url.pathname.startsWith('/api/')) {
        return Response.json({ error: 'Not found' }, { status: 404 });
      }
    } catch (error) {
      console.error('Unhandled error in fetch handler:', error);
      return Response.json({ error: 'Internal server error' }, { status: 500 });
    }

    // Serve static assets built by Vite (dist/), with an SPA fallback to index.html.
    const assetResponse = await env.ASSETS.fetch(request);
    if (assetResponse.status !== 404) {
      return assetResponse;
    }
    const indexUrl = new URL(request.url);
    indexUrl.pathname = '/index.html';
    return env.ASSETS.fetch(new Request(indexUrl.toString(), request));
  },
};
