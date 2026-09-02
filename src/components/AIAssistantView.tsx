import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  User,
  Send,
  Plus,
  Trash2,
  Sparkles,
  MessageSquare,
  Copy,
  Check,
  Zap,
  BookOpen,
  GraduationCap,
  Briefcase,
  Layers,
  ChevronRight,
  RefreshCw,
  Clock,
  HelpCircle,
  Menu,
  X
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { AssessmentResult, CareerAnalysisResult, CounselorChatMessage, AIChatSession } from '../types';
import { AIAvatar } from './AIAvatar';
import { useLanguage } from '../i18n/LanguageContext';

interface AIAssistantViewProps {
  candidateName: string;
  userRole: string;
  analysisResult: AssessmentResult | CareerAnalysisResult | any | null;
  onGoToQuiz: () => void;
  onGoToVolunteering: () => void;
}

export const AIAssistantView: React.FC<AIAssistantViewProps> = ({
  candidateName,
  userRole,
  analysisResult,
  onGoToQuiz,
  onGoToVolunteering,
}) => {
  const { language, t } = useLanguage();

  // Key for local storage based on candidate name or default profile
  const userStorageKey = `proforientation_ai_sessions_${(candidateName || 'guest').trim().toLowerCase()}_${language}`;

  const getArchetypeName = () => {
    if (!analysisResult) return '';
    return analysisResult.dominantArchetype || analysisResult.psychologicalProfile?.primaryArchetype || 'Исследователь';
  };

  const getTopProfessionsText = () => {
    if (!analysisResult) return '';
    if (analysisResult.topRecommendations && Array.isArray(analysisResult.topRecommendations)) {
      return analysisResult.topRecommendations.slice(0, 3).map((r: any) => r.profession?.title || r.title).join(', ');
    }
    if (analysisResult.recommendations && Array.isArray(analysisResult.recommendations)) {
      return analysisResult.recommendations.map((r: any) => r.title).join(', ');
    }
    return '';
  };

  const defaultInitialSession = (): AIChatSession => {
    let welcomeContent = '';
    if (language === 'tg') {
      welcomeContent = `Салом, ${candidateName || 'дӯст'}! 👋\n\nМан **мушовири инфиродии касбии AI** ҳастам. Вазифаи ман кӯмак расонидан дар интихоби касби оянда, донишгоҳ ё коллеҷ, нақшаи рушди малакаҳо ва омодагӣ ба лоиҳаҳо мебошад.\n\n${
        analysisResult
          ? `Аз рӯи натиҷаҳои санҷиш психотипи шумо **«${getArchetypeName()}»** ва касбҳои мувофиқ: **${getTopProfessionsText()}** муайян шуданд.`
          : 'Шумо метавонед ҳама гуна саволро дар бораи таҳсил, ихтисосҳои серталаб ё санҷиши касбӣ пурсед.'
      }\n\nҲоло дар бораи чӣ маълумот гирифтан мехоҳед? Саволатонро нависед ё аз тугмаҳои зер интихоб кунед!`;
    } else if (language === 'en') {
      welcomeContent = `Hello, ${candidateName || 'friend'}! 👋\n\nI am your **AI Career Counselor**. My goal is to help you find the right profession, choose a university or college, build a practical skill development plan, and prepare for your first real projects.\n\n${
        analysisResult
          ? `Based on your test results, your archetype is **"${getArchetypeName()}"** and key recommended careers are: **${getTopProfessionsText()}**.`
          : 'Feel free to ask me anything about admissions, high-demand skills, internships, or taking the quiz.'
      }\n\nWhat would you like to explore today? Type your question or pick a quick suggestion below!`;
    } else {
      welcomeContent = `Привет, ${candidateName || 'друг'}! 👋\n\nЯ твой **интеллектуальный AI-карьерный консультант**. Моя задача — помочь тебе определиться с будущей профессией, выбрать вуз или колледж, составить план развития навыков и подготовиться к первым проектам.\n\n${
        analysisResult
          ? `По твоим результатам тестирования мы определили психотип **«${getArchetypeName()}»** и ключевые профессии: **${getTopProfessionsText()}**.`
          : 'Ты можешь задать мне любой вопрос о поступлении, востребованных профессиях, грантах или пройти наше тестирование для точного анализа.'
      }\n\nО чем хочешь узнать прямо сейчас? Выбери подсказку ниже или напиши свой вопрос!`;
    }

    return {
      id: 'session_' + Date.now(),
      title: t.assistant.newChat,
      createdAt: new Date().toLocaleDateString(language === 'en' ? 'en-US' : 'ru-RU', { day: 'numeric', month: 'short' }),
      updatedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      messages: [
        {
          id: 'msg_welcome',
          role: 'assistant',
          content: welcomeContent,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ],
    };
  };

  const [sessions, setSessions] = useState<AIChatSession[]>(() => {
    try {
      const saved = localStorage.getItem(userStorageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to load chat sessions:', e);
    }
    return [defaultInitialSession()];
  });

  const [currentSessionId, setCurrentSessionId] = useState<string>(() => {
    return sessions[0]?.id || 'session_' + Date.now();
  });

  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedMsgId, setCopiedMsgId] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeSession = sessions.find((s) => s.id === currentSessionId) || sessions[0] || defaultInitialSession();

  // Save sessions to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(userStorageKey, JSON.stringify(sessions));
    } catch (e) {
      console.warn('Failed to save chat sessions:', e);
    }
  }, [sessions, userStorageKey]);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeSession.messages, isLoading]);

  const quickPrompts = [
    {
      icon: GraduationCap,
      label: language === 'en' ? 'Colleges & Universities' : language === 'tg' ? 'Донишгоҳҳо ва коллеҷҳо' : 'Вузы и колледжи',
      query: language === 'en' ? 'Which universities and majors in Tajikistan and abroad are best for a career start?' : language === 'tg' ? 'Кадом донишгоҳҳо ва ихтисосҳо дар Тоҷикистон ва хориҷ барои оғози касб беҳтаранд?' : 'Какие вузы и специальности в Таджикистане и за рубежом лучше всего выбрать для старта?',
    },
    {
      icon: Briefcase,
      label: language === 'en' ? 'Careers 2026–2030' : language === 'tg' ? 'Касбҳои 2026–2030' : 'Профессии 2026–2030',
      query: language === 'en' ? 'Which fields and professions will be highest paying and in high demand in the next 5 years?' : language === 'tg' ? 'Кадом самтҳо ва касбҳо дар 5 соли оянда сердаромадтарин ва серталабтарин хоҳанд буд?' : 'Какие направления и профессии будут самыми высокооплачиваемыми и востребованными в ближайшие 5 лет?',
    },
    {
      icon: BookOpen,
      label: language === 'en' ? 'Resume without experience' : language === 'tg' ? 'Резюме бидуни таҷриба' : 'Резюме без опыта',
      query: language === 'en' ? 'How can a high school or college student build a great first resume and portfolio with no commercial experience?' : language === 'tg' ? 'Чӣ тавр як хонанда ё донишҷӯ метавонад бидуни таҷрибаи корӣ аввалин резюме ва портфолиои аъло созад?' : 'Как составить первое крутое резюме и портфолио школьнику или студенту 1-2 курса без коммерческого опыта?',
    },
    {
      icon: Zap,
      label: language === 'en' ? 'IT or Marketing?' : language === 'tg' ? 'IT ё Маркетинг?' : 'IT или Маркетинг?',
      query: language === 'en' ? 'How can I understand what fits me best: programming, design, or project management?' : language === 'tg' ? 'Чӣ тавр фаҳмидан мумкин аст, ки кадоме аз инҳо бештар ба ман мувофиқ аст: барномасозӣ, тарроҳӣ ё идоракунии лоиҳа?' : 'Как понять, что мне больше подходит: программирование, дизайн или проектный менеджмент?',
    },
    {
      icon: Layers,
      label: language === 'en' ? 'Step-by-step plan' : language === 'tg' ? 'Нақшаи марҳилавӣ' : 'Пошаговый план',
      query: language === 'en' ? 'Create a step-by-step 3-month skill development plan for me (30 minutes a day).' : language === 'tg' ? 'Барои ман як нақшаи марҳила ба марҳилаи рушди малакаҳоро барои 3 моҳ таҳия намоед (рӯзе 30 дақиқа).' : 'Составь для меня пошаговый план развития навыков на ближайшие 3 месяца (по 30 минут в день).',
    },
  ];

  const handleCreateNewChat = () => {
    const newSession: AIChatSession = {
      id: 'session_' + Date.now(),
      title: t.assistant.newChat || 'Новый диалог',
      createdAt: new Date().toLocaleDateString(language === 'en' ? 'en-US' : language === 'tg' ? 'tg-TG' : 'ru-RU', { day: 'numeric', month: 'short' }),
      updatedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      messages: [
        {
          id: 'msg_welcome_' + Date.now(),
          role: 'assistant',
          content: language === 'en' 
            ? 'Hello! This is a new conversation. Ask me any question about professions, exams, universities, or careers!'
            : language === 'tg'
            ? 'Салом! Ин як гуфтугӯи нав аст. Ҳама гуна саволро дар бораи касбҳо, имтиҳонҳо, донишгоҳҳо ё касбу кор пурсед!'
            : `Привет! Это новый диалог. Задай вопрос о профессиях, экзаменах, вузах или карьере — отвечу за 1-2 секунды! 🚀`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ],
    };

    setSessions((prev) => [newSession, ...prev]);
    setCurrentSessionId(newSession.id);
    setSidebarOpen(false);
  };

  const handleDeleteSession = (sessionId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (sessions.length <= 1) {
      // Reset the only session
      const fresh = [defaultInitialSession()];
      setSessions(fresh);
      setCurrentSessionId(fresh[0].id);
      return;
    }

    const updated = sessions.filter((s) => s.id !== sessionId);
    setSessions(updated);
    if (currentSessionId === sessionId) {
      setCurrentSessionId(updated[0].id);
    }
  };

  const handleCopyMessage = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedMsgId(id);
    setTimeout(() => setCopiedMsgId(null), 2000);
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isLoading) return;

    const userMsg: CounselorChatMessage = {
      id: 'usr_' + Date.now(),
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
    };

    // Update session title if it's default or new
    const isFirstUserMsg = activeSession.messages.filter((m) => m.role === 'user').length === 0;
    const newTitle = isFirstUserMsg
      ? text.slice(0, 28) + (text.length > 28 ? '...' : '')
      : activeSession.title;

    const updatedMessages = [...activeSession.messages, userMsg];

    setSessions((prev) =>
      prev.map((s) =>
        s.id === activeSession.id
          ? {
              ...s,
              title: newTitle,
              updatedAt: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
              messages: updatedMessages,
            }
          : s
      )
    );

    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ask-counselor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: text,
          userContext: analysisResult,
          candidateName,
          userRole,
          language,
          history: updatedMessages.slice(-6),
        }),
      });

      const data = await response.json();
      const botMsg: CounselorChatMessage = {
        id: 'bot_' + Date.now(),
        role: 'assistant',
        content: data.reply || 'Спасибо за вопрос! Попробуй уточнить детали для более точного совета.',
        timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
      };

      setSessions((prev) =>
        prev.map((s) =>
          s.id === activeSession.id
            ? {
                ...s,
                updatedAt: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
                messages: [...updatedMessages, botMsg],
              }
            : s
        )
      );
    } catch (error) {
      console.error('AI chat error:', error);
      const fallbackMsg: CounselorChatMessage = {
        id: 'bot_err_' + Date.now(),
        role: 'assistant',
        content:
          'Главный совет для старта: начни с небольшого практического мини-проекта в интересующей сфере и не бойся пробовать! Реальная практика даст 90% ясности.',
        timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
      };

      setSessions((prev) =>
        prev.map((s) =>
          s.id === activeSession.id
            ? { ...s, messages: [...updatedMessages, fallbackMsg] }
            : s
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
      {/* Category Header Banner */}
      <div className="mb-4 sm:mb-6 flex flex-col md:flex-row md:items-center justify-between gap-3 bg-white/90 border border-stone-200/90 rounded-2xl p-4 sm:p-5 shadow-xs">
        <div className="flex items-center gap-3.5">
          <AIAvatar size="xl" glow={true} />
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-lg sm:text-2xl font-extrabold text-stone-900 font-heading">
                {t.assistant.title || 'AI Карьерный Наставник'}
              </h1>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Gemini Flash • &lt;2 сек
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
              {t.assistant.personalDialog || 'Персональный диалог с ИИ-ментором • История сохраняется для профиля:'}{' '}
              <strong className="text-stone-800">{candidateName || t.assistant.guest || 'Гость'}</strong>
            </p>
          </div>
        </div>

        {/* Quick actions on header */}
        <div className="flex items-center gap-2 flex-wrap">
          {!analysisResult && (
            <button
              onClick={onGoToQuiz}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3 py-2 rounded-xl transition-all cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 text-amber-700" />
              {t.assistant.takeTestBtn || 'Пройти тест профессий'}
            </button>
          )}
          <button
            onClick={onGoToVolunteering}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-200 px-3 py-2 rounded-xl transition-all cursor-pointer"
          >
            <Briefcase className="w-4 h-4 text-stone-600" />
            {t.assistant.volunteeringBtn || 'База волонтерств'}
          </button>
        </div>
      </div>

      {/* Main Chat Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-[720px] max-h-[82vh]">
        {/* Left: Chat Sessions History Sidebar (Desktop & Mobile Drawer) */}
        <div
          className={`lg:col-span-4 bg-white/95 border border-stone-200/90 rounded-2xl flex flex-col overflow-hidden shadow-xs ${
            sidebarOpen ? 'fixed inset-4 z-50 lg:static' : 'hidden lg:flex'
          }`}
        >
          {/* Sidebar Top */}
          <div className="p-3.5 border-b border-stone-200 flex items-center justify-between bg-stone-50/70">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                {t.assistant.dialogHistory || 'История диалогов'} ({sessions.length})
              </span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={handleCreateNewChat}
                className="flex items-center gap-1 text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white px-2.5 py-1.5 rounded-lg shadow-2xs transition-all cursor-pointer"
                title={t.assistant.newChat}
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{t.assistant.newChat || 'Новый чат'}</span>
              </button>
              {sidebarOpen && (
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="lg:hidden p-1.5 text-stone-500 hover:text-stone-800"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Sessions List */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1.5">
            {sessions.map((sess) => {
              const isSelected = sess.id === activeSession.id;
              const msgCount = sess.messages.length;

              return (
                <div
                  key={sess.id}
                  onClick={() => {
                    setCurrentSessionId(sess.id);
                    setSidebarOpen(false);
                  }}
                  className={`group flex items-center justify-between p-2.5 rounded-xl text-left transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-amber-50/80 border-amber-200/90 text-amber-950 font-semibold shadow-2xs'
                      : 'border-transparent hover:bg-stone-100/70 text-stone-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    <AIAvatar size="sm" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold truncate">{sess.title}</p>
                      <p className="text-[10px] text-stone-400 flex items-center gap-1 mt-0.5">
                        <Clock className="w-2.5 h-2.5" />
                        {sess.createdAt} • {msgCount} {language === 'en' ? 'msg.' : language === 'tg' ? 'паём' : 'сообщ.'}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={(e) => handleDeleteSession(sess.id, e)}
                    className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-50 text-stone-400 hover:text-red-600 rounded-md transition-all cursor-pointer"
                    title={language === 'en' ? 'Delete chat' : language === 'tg' ? 'Нест кардани муколама' : 'Удалить диалог'}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Sidebar Footer Context info */}
          <div className="p-3 bg-stone-50 border-t border-stone-200 text-[11px] text-stone-600">
            {analysisResult ? (
              <div className="flex items-start gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="line-clamp-2">
                  {language === 'en' ? 'AI considers your key strengths:' : language === 'tg' ? 'AI ҷиҳатҳои қавии шуморо ба назар мегирад:' : 'ИИ учитывает твои сильные стороны:'} <strong>{getArchetypeName()}</strong>
                </p>
              </div>
            ) : (
              <div className="flex items-center justify-between text-stone-500">
                <span>{language === 'en' ? 'Take test for personalized advice' : language === 'tg' ? 'Барои маслиҳати фардӣ санҷиш гузаред' : 'Пройди тест для персонализации'}</span>
                <button
                  onClick={onGoToQuiz}
                  className="font-bold text-amber-700 hover:underline cursor-pointer"
                >
                  {language === 'en' ? 'Test →' : language === 'tg' ? 'Санҷиш →' : 'Тест →'}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right: Active Chat Window */}
        <div className="lg:col-span-8 bg-white/95 border border-stone-200/90 rounded-2xl flex flex-col overflow-hidden shadow-xs relative">
          {/* Chat Window Header */}
          <div className="p-3.5 sm:p-4 border-b border-stone-200 flex items-center justify-between bg-stone-50/60">
            <div className="flex items-center gap-3">
              {/* Mobile toggle sidebar button */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-1.5 text-stone-600 hover:bg-stone-200 rounded-lg"
                title={language === 'en' ? 'Show chats' : language === 'tg' ? 'Нишон додани муколамаҳо' : 'Показать диалоги'}
              >
                <Menu className="w-5 h-5" />
              </button>

              <AIAvatar size="lg" glow={true} />
              <div>
                <h3 className="text-sm sm:text-base font-extrabold text-stone-900 leading-tight">
                  {activeSession.title}
                </h3>
                <p className="text-[11px] text-stone-500 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-emerald-700">{t.assistant.online || 'Онлайн'}</span> • Gemini Flash
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleCreateNewChat}
                className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-stone-700 bg-white hover:bg-stone-100 border border-stone-200 px-2.5 py-1.5 rounded-lg shadow-2xs transition-all cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                {t.assistant.newChat || 'Новая беседа'}
              </button>
            </div>
          </div>

          {/* Message Stream */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-[#FAF6F0]/40">
            {activeSession.messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex gap-2.5 sm:gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!isUser && (
                    <AIAvatar size="md" className="mt-1" />
                  )}

                  <div
                    className={`relative group max-w-[88%] sm:max-w-[80%] rounded-2xl p-3.5 sm:p-4 text-xs sm:text-sm leading-relaxed ${
                      isUser
                        ? 'bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-600 text-white rounded-tr-none shadow-md shadow-rose-500/15'
                        : 'bg-white border border-stone-200 text-stone-800 rounded-tl-none shadow-xs'
                    }`}
                  >
                    {!isUser ? (
                      <div className="prose prose-sm max-w-none text-stone-800 prose-p:my-1.5 prose-headings:my-2 prose-ul:my-1.5 prose-li:my-0.5">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    ) : (
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    )}

                    <div className="flex items-center justify-between gap-2 mt-2 pt-1 border-t border-stone-200/50">
                      <span
                        className={`text-[10px] font-medium ${
                          isUser ? 'text-amber-100' : 'text-stone-400'
                        }`}
                      >
                        {msg.timestamp}
                      </span>

                      {!isUser && (
                        <button
                          onClick={() => handleCopyMessage(msg.id, msg.content)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-stone-400 hover:text-stone-700 p-0.5 rounded cursor-pointer"
                          title={language === 'en' ? 'Copy answer' : language === 'tg' ? 'Нусхабардории ҷавоб' : 'Скопировать ответ'}
                        >
                          {copiedMsgId === msg.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>

                  {isUser && (
                    <div className="w-8 h-8 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-900 flex-shrink-0 shadow-2xs mt-1 font-bold text-xs">
                      {candidateName ? candidateName.slice(0, 1).toUpperCase() : <User className="w-4 h-4" />}
                    </div>
                  )}
                </motion.div>
              );
            })}

            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-2.5 sm:gap-3 justify-start items-center text-stone-500 text-xs py-2"
              >
                <AIAvatar size="md" className="animate-pulse" />
                <div className="flex items-center gap-2 bg-white border border-stone-200 px-4 py-2.5 rounded-2xl rounded-tl-none shadow-xs">
                  <div className="w-2 h-2 rounded-full bg-amber-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 rounded-full bg-rose-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                  <span className="text-xs font-semibold text-stone-600 ml-1">{t.assistant.typingResponse || 'Формирую точный ответ...'}</span>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div className="px-3 sm:px-4 py-2 bg-white border-t border-stone-200/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <span className="text-[11px] font-bold text-stone-400 whitespace-nowrap flex-shrink-0">
              {t.assistant.topicsLabel || 'Темы:'}
            </span>
            {quickPrompts.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(item.query)}
                  disabled={isLoading}
                  className="inline-flex items-center gap-1.5 text-[11px] bg-stone-100 hover:bg-stone-200/80 text-stone-700 font-medium px-3 py-1.5 rounded-full whitespace-nowrap border border-stone-200/90 transition-colors cursor-pointer flex-shrink-0 disabled:opacity-50"
                >
                  <Icon className="w-3 h-3 text-indigo-600" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Chat Input Box */}
          <div className="p-3 sm:p-4 border-t border-stone-200 bg-white">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={t.assistant.inputPlaceholder || 'Задай любой вопрос о профессиях, вузах, навыках или будущем...'}
                disabled={isLoading}
                className="flex-1 bg-stone-50 border border-stone-200 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 text-stone-900 placeholder-stone-400 text-xs sm:text-sm rounded-xl px-4 py-2.5 sm:py-3 outline-none transition-all"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isLoading}
                className={`p-2.5 sm:px-4 sm:py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer ${
                  inputText.trim() && !isLoading
                    ? 'bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#9333ea] hover:from-[#1d4ed8] hover:via-[#4338ca] hover:to-[#7e22ce] text-white shadow-md shadow-indigo-500/25'
                    : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                }`}
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">{t.assistant.askBtn || 'Спросить'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
