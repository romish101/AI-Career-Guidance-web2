/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type NavCategory = 'main' | 'quiz_result' | 'battle' | 'volunteering' | 'ai_assistant';

export interface BattleProfession {
  id: string;
  name: string;
  category: string;
  salary_range: {
    min: number;
    max: number;
    display: string;
    currency: string;
  };
  entry_difficulty: number; // 1-10 (1 = very easy, 10 = extremely difficult)
  stress_level: number;     // 1-10 (1 = minimal stress, 10 = extreme pressure)
  demand_future: number;    // 1-100% (or score 1-100)
  demand_future_text: string;
  remote_potential?: number; // 1-10
  pros: string[];
  cons: string[];
  key_skills: string[];
  description?: string;
  education_years?: string;
  icon?: string;
}

export type TraitKey = 
  | 'analytical'
  | 'creative'
  | 'social'
  | 'technical'
  | 'entrepreneurial'
  | 'research'
  | 'practical'
  | 'organizational';

export type TraitScores = Record<TraitKey, number>;

export interface TraitWeights {
  analytical?: number;
  creative?: number;
  social?: number;
  technical?: number;
  entrepreneurial?: number;
  research?: number;
  practical?: number;
  organizational?: number;
}

export type SectorCategory =
  | 'IT и программирование'
  | 'Искусственный интеллект'
  | 'Data Science и аналитика'
  | 'Математика'
  | 'Физика'
  | 'Инженерия'
  | 'Медицина и здравоохранение'
  | 'Биология и биотехнологии'
  | 'Химия и фармацевтика'
  | 'Экономика'
  | 'Финансы'
  | 'Бизнес и стартапы'
  | 'Менеджмент и управление'
  | 'Маркетинг и PR'
  | 'Дизайн и UI/UX'
  | 'Архитектура и урбанистика'
  | 'Право и юриспруденция'
  | 'Образование и педагогика'
  | 'Журналистика и медиа'
  | 'Языки и перевод'
  | 'Психология'
  | 'Социальные науки'
  | 'Экология и природопользование'
  | 'Сельское хозяйство и агротех'
  | 'Строительство'
  | 'Транспорт и логистика'
  | 'Авиация и космонавтика'
  | 'Энергетика'
  | 'Телекоммуникации'
  | 'Телекоммуникации и сети'
  | 'Робототехника и IoT'
  | 'Кибербезопасность'
  | 'Кино, видео и анимация'
  | 'Музыка и саунд-дизайн'
  | 'Спорт и фитнес'
  | 'Спорт и фитнес-индустрия'
  | 'Туризм и гостеприимство'
  | 'Туризм и гостиничный бизнес'
  | 'Международные отношения'
  | 'Государственная служба'
  | 'Социология и общество'
  | 'Научные исследования'
  | 'Новые и быстрорастущие профессии';

export type ThinkingType =
  | 'Аналитическое и логическое'
  | 'Креативное и образное'
  | 'Системное и архитектурное'
  | 'Критическое и исследовательское'
  | 'Эмпатическое и эмоциональное'
  | 'Стратегическое и предпринимательское'
  | 'Пространственно-конструкторское'
  | 'Алгоритмическое и математическое'
  | 'Практическое и прикладное';

export type WorkEnvironment =
  | 'Офис / Удалённо (Digital)'
  | 'Лаборатория / Научный центр'
  | 'Клиника / Медицинский центр'
  | 'Креативная студия / Съёмочная площадка'
  | 'Производство / Инженерный цех'
  | 'Полевые исследования / Экспедиции'
  | 'Строительная площадка / Объект'
  | 'Школа / Университет / Лекторий'
  | 'Аэропорт / Кабина пилота / Диспетчерская'
  | 'Суд / Государственное ведомство'
  | 'Отель / Курорт / Природа'
  | 'Спортивная арена / Стадион';

export type RemoteFeasibility = 
  | 'Полностью удалённо (100%)'
  | 'Гибридный формат'
  | 'Преимущественно очно'
  | 'Только очно';

export type DemandLevel = 'Очень высокий' | 'Высокий' | 'Стабильный';

export interface Profession {
  id: string;
  title: string;
  category: SectorCategory;
  shortDescription: string;
  dailyTasks: string[];
  keySkills: {
    hardSkills: string[];
    softSkills: string[];
  };
  matchingInterests: string[];
  thinkingType: ThinkingType;
  workEnvironment: WorkEnvironment;
  schoolSubjects: string[];
  recommendedEducation: {
    degreeType: string;
    majors: string[];
    topUniversities: string[];
    estimatedYears: string;
  };
  demandLevel: DemandLevel;
  careerOutlook: string;
  salaryRange: {
    junior: string;
    middle: string;
    senior: string;
    currency: string;
    growthOutlook: string;
    note?: string;
  };
  remoteFeasibility: RemoteFeasibility;
  universityMajors: string[];
  relatedProfessions: string[];
  traitScores: Record<TraitKey, number>;
  iconName: string;
  badge: string;
  dayInTheLife: string;
  firstStepsToStartNow: string[];
}

export interface TreeQuestionOption {
  id: string;
  text: string;
  subtext?: string;
  explanation?: string;
  iconName?: string;
  accentColor?: string;
  traitWeights?: TraitWeights;
  weightModifiers?: Record<string, number>;
  targetSectors?: SectorCategory[];
  preferredSectors?: SectorCategory[];
  boostProfessionIds?: string[];
  penalizeProfessionIds?: string[];
  nextQuestionId?: string;
}

export type TreeOption = TreeQuestionOption;

export type QuestionType =
  | 'root_interest'
  | 'domain_branch'
  | 'task_preference'
  | 'work_scenario'
  | 'cognitive_style'
  | 'work_environment'
  | 'risk_decision'
  | 'deep_discriminator';

export interface TreeQuestion {
  id: string;
  title: string;
  subtitle?: string;
  category?: string;
  categoryContext?: string;
  description?: string;
  code?: string;
  stepNumber?: number;
  questionType?: QuestionType;
  iconName?: string;
  depthLevel?: number;
  relevantSectors?: SectorCategory[];
  options: TreeQuestionOption[];
}

export interface QuestionOption {
  id: string;
  text: string;
  subtext?: string;
  iconName?: string;
  accentColor?: string;
  traitWeights?: TraitWeights;
}

export interface Question {
  id: number | string;
  title: string;
  category: string;
  description: string;
  iconName?: string;
  options: QuestionOption[];
}

export type CareerAnalysisResult = any;


export interface UserAnswer {
  questionId: string | number;
  questionTitle: string;
  category?: string;
  selectedOptionId: string;
  selectedOptionText: string;
  selectedOptionSubtext?: string;
  subtext?: string;
  traitWeights?: TraitWeights;
  targetSectors?: SectorCategory[];
}

export interface CareerRecommendation {
  profession: Profession;
  matchPercentage: number;
  fitReasons: string[];
  strengthsSynergy: string[];
  growthAreas: string[];
  educationRoadmap: {
    schoolFocus: string[];
    undergraduateDegree: string;
    targetInstitutions: string[];
    internshipsAndFirstProjects: string[];
  };
}

export interface LearningTrack {
  stepTitle: string;
  actionItems: string[];
}

export interface SectorAffinity {
  category: SectorCategory;
  percentage: number;
}

export interface AssessmentResult {
  id: string;
  createdAt: string;
  userTraits: Record<TraitKey, number>;
  topRecommendations: CareerRecommendation[];
  alternativePaths: CareerRecommendation[];
  sectorAffinities: SectorAffinity[];
  dominantArchetype: string;
  archetypeDescription: string;
  cognitiveProfileSummary: string;
  recommendedLearningTracks: LearningTrack[];
  candidateName?: string;
  userRole?: string;
}

export interface CounselorChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface AIChatSession {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  messages: CounselorChatMessage[];
}
