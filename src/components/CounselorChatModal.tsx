import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, User, Loader2 } from 'lucide-react';
import { AssessmentResult, CareerAnalysisResult, CounselorChatMessage } from '../types';
import { AIAvatar } from './AIAvatar';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedProfessionTitle, getLocalizedArchetype } from '../i18n/assessmentLocalization';

interface CounselorChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: AssessmentResult | CareerAnalysisResult | any;
}

export const CounselorChatModal: React.FC<CounselorChatModalProps> = ({
  isOpen,
  onClose,
  result,
}) => {
  const { t, language } = useLanguage();

  const getProfTitles = () => {
    if (result.topRecommendations && Array.isArray(result.topRecommendations)) {
      return result.topRecommendations
        .slice(0, 3)
        .map((r: any) => getLocalizedProfessionTitle(r.profession?.title || r.title, language))
        .join(', ');
    }
    if (result.recommendations && Array.isArray(result.recommendations)) {
      return result.recommendations
        .map((r: any) => getLocalizedProfessionTitle(r.title, language))
        .join(', ');
    }
    return t.results.top5Title;
  };

  const getArchetypeName = () => {
    const rawName = result.dominantArchetype || result.psychologicalProfile?.primaryArchetype || t.results.explorer;
    return getLocalizedArchetype(rawName, language);
  };

  const dateLocale = language === 'ru' ? 'ru-RU' : language === 'tg' ? 'tg-TG' : 'en-US';

  const [messages, setMessages] = useState<CounselorChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: language === 'en' 
        ? `Hello, ${result.candidateName || 'friend'}! I am your personal AI career mentor. We identified your archetype as "${getArchetypeName()}", and highlighted careers: ${getProfTitles()}. Ask me anything: where to start, choosing colleges, or preparing for admissions!`
        : language === 'tg'
        ? `Салом, ${result.candidateName || 'дӯст'}! Ман мураббии инфиродии касбии AI-и шумо ҳастам. Мо архетипи шуморо ҳамчун «${getArchetypeName()}» муайян кардем ва чунин касбҳоро тавсия додем: ${getProfTitles()}. Саволи худро бидиҳед: аз чӣ оғоз кардан, чӣ гуна донишгоҳро интихоб кардан ва чӣ тавр омода шудан!`
        : `Привет, ${result.candidateName || 'друг'}! Я твой персональный карьерный наставник. Мы определили твой архетип как «${getArchetypeName()}», а также выделили профессии: ${getProfTitles()}. Задай мне любой вопрос: с чего начать, как выбрать вуз, как совмещать учебу или как подготовиться к поступлению!`,
      timestamp: new Date().toLocaleTimeString(dateLocale, { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sampleQuestions = t.counselorModal.suggestions;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isLoading) return;

    const userMsg: CounselorChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString(dateLocale, { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ask-counselor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: text,
          userContext: result,
          history: messages.slice(-4),
          language
        })
      });

      const data = await response.json();
      const assistantMsg: CounselorChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply || (language === 'en' ? 'Thank you! Could you please clarify your question for more details?' : language === 'tg' ? 'Ташаккур барои савол! Лутфан барои ҷавоби муфассалтар саволро дақиқтар кунед.' : 'Спасибо за вопрос! Попробуй уточнить подробности для более детального ответа.'),
        timestamp: new Date().toLocaleTimeString(dateLocale, { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMsg: CounselorChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: language === 'en' ? 'Key practical tip: start with a small learning project in your chosen field today!' : language === 'tg' ? 'Маслиҳати асосии амалӣ: аллакай имрӯз аз як лоиҳаи хурди таълимӣ дар соҳаи дилхоҳатон оғоз кунед!' : 'Главный практический совет: начни с небольшого учебного мини-проекта в понравившейся сфере уже сегодня!',
        timestamp: new Date().toLocaleTimeString(dateLocale, { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-[#FAF6F0] border border-stone-200 rounded-3xl shadow-2xl w-full max-w-2xl h-[600px] max-h-[90vh] flex flex-col overflow-hidden"
        >
          {/* Modal Header */}
          <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-white/90">
            <div className="flex items-center gap-3">
              <AIAvatar size="lg" glow={true} />
              <div>
                <h3 className="text-base font-bold text-stone-900 font-heading">
                  {t.counselorModal.title}
                </h3>
                <p className="text-xs text-stone-500 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-emerald-700">{t.counselorModal.onlineStatus}</span> • Gemini Flash
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white hover:bg-stone-100 text-stone-400 hover:text-stone-700 border border-stone-200 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages list */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-[#FAF6F0]">
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!isUser && (
                    <AIAvatar size="sm" className="mt-1" />
                  )}

                  <div
                    className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-3.5 sm:p-4 text-xs sm:text-sm leading-relaxed ${
                      isUser
                        ? 'bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-600 text-white rounded-tr-none shadow-md shadow-rose-500/15'
                        : 'bg-white border border-stone-200 text-stone-800 rounded-tl-none shadow-xs'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                    <div className={`text-[10px] mt-1.5 ${isUser ? 'text-amber-100' : 'text-stone-400'} text-right font-medium`}>
                      {msg.timestamp}
                    </div>
                  </div>

                  {isUser && (
                    <div className="w-7 h-7 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-800 flex-shrink-0 mt-1 font-bold text-xs">
                      {result.candidateName ? result.candidateName.slice(0, 1).toUpperCase() : <User className="w-3.5 h-3.5" />}
                    </div>
                  )}
                </div>
              );
            })}

            {isLoading && (
              <div className="flex gap-3 justify-start items-center text-stone-500 text-xs py-2">
                <AIAvatar size="sm" className="animate-pulse" />
                <div className="flex items-center gap-1.5 bg-white border border-stone-200 px-3 py-2 rounded-xl shadow-xs">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-600" />
                  <span className="font-medium text-stone-700">{t.counselorModal.typingText}</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions */}
          <div className="px-4 py-2.5 border-t border-stone-200 bg-white/80 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-[11px] font-bold text-stone-400 flex-shrink-0">{t.counselorModal.suggestionsLabel}:</span>
            {sampleQuestions.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(q)}
                disabled={isLoading}
                className="text-[11px] bg-stone-100 hover:bg-stone-200/80 text-stone-700 font-medium px-3 py-1 rounded-full whitespace-nowrap border border-stone-200 transition-colors cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 sm:p-4 border-t border-stone-200 bg-white/95">
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
                placeholder={t.counselorModal.placeholder}
                disabled={isLoading}
                className="flex-1 bg-stone-50 border border-stone-200 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-100 text-stone-900 placeholder-stone-400 text-xs sm:text-sm rounded-xl px-4 py-2.5 outline-none transition-all"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isLoading}
                className={`p-2.5 sm:px-4 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer ${
                  inputText.trim() && !isLoading
                    ? 'bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-600 hover:from-amber-700 hover:via-rose-700 hover:to-indigo-700 text-white shadow-md shadow-rose-500/25'
                    : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                }`}
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">{t.counselorModal.sendBtn}</span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};


