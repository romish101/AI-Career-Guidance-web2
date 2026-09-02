import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HeartHandshake, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  MapPin, 
  Users, 
  Award, 
  Compass, 
  ExternalLink,
  CheckCircle2,
  Filter,
  Search,
  X,
  Send,
  Building2,
  Globe
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { 
  VOLUNTEERING_ORGANIZATIONS, 
  VOLUNTEERING_CATEGORIES, 
  VolunteeringOrganization,
  getLocalizedText,
  getLocalizedArray
} from '../data/volunteeringData';

interface VolunteeringViewProps {
  onGoToMain: () => void;
  onGoToQuiz: () => void;
}

export const VolunteeringView: React.FC<VolunteeringViewProps> = ({
  onGoToMain,
  onGoToQuiz,
}) => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [imgErrorMap, setImgErrorMap] = useState<Record<string, boolean>>({});
  
  // Application Modal state
  const [selectedOrgForApply, setSelectedOrgForApply] = useState<VolunteeringOrganization | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantContact, setApplicantContact] = useState('');
  const [applicantMotivation, setApplicantMotivation] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleImgError = (id: string) => {
    setImgErrorMap((prev) => ({ ...prev, [id]: true }));
  };

  const handleOpenApply = (org: VolunteeringOrganization) => {
    const roles = getLocalizedArray(org.roles, language);
    setSelectedOrgForApply(org);
    setSelectedRole(roles[0] || '');
    setIsSubmitted(false);
  };

  const handleCloseApply = () => {
    setSelectedOrgForApply(null);
    setIsSubmitted(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      // Keep state for nice feedback
    }, 400);
  };

  const filteredOrgs = VOLUNTEERING_ORGANIZATIONS.filter((org) => {
    const matchesCategory = selectedCategory === 'all' || org.categoryId === selectedCategory;

    const query = searchQuery.trim().toLowerCase();
    if (!query) return matchesCategory;

    const nameText = getLocalizedText(org.name, language).toLowerCase();
    const descText = getLocalizedText(org.description, language).toLowerCase();
    const locText = getLocalizedText(org.location, language).toLowerCase();
    const catText = getLocalizedText(org.category, language).toLowerCase();
    const rolesList = getLocalizedArray(org.roles, language).map(r => r.toLowerCase());
    const skillsList = getLocalizedArray(org.skillsGained, language).map(s => s.toLowerCase());

    const matchesSearch = 
      nameText.includes(query) ||
      descText.includes(query) ||
      locText.includes(query) ||
      catText.includes(query) ||
      rolesList.some(r => r.includes(query)) ||
      skillsList.some(s => s.includes(query)) ||
      // Also match across other languages for multi-language search support
      org.name.ru.toLowerCase().includes(query) ||
      org.name.en.toLowerCase().includes(query) ||
      org.name.tg.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const renderFallbackSvg = (id: string) => {
    switch (id) {
      case 'american-space':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#FFFFFF" />
            <defs>
              <clipPath id="as-right-leg">
                <polygon points="100,16 113,16 160,146 126,146 111,105 100,74" />
              </clipPath>
            </defs>
            <polygon points="100,16 87,16 38,146 72,146 87,105 100,74" fill="#1C2754" />
            <g clipPath="url(#as-right-leg)">
              <rect x="90" y="10" width="75" height="140" fill="#D2232A" />
              <rect x="90" y="24" width="75" height="10" fill="#FFFFFF" />
              <rect x="90" y="44" width="75" height="10" fill="#FFFFFF" />
              <rect x="90" y="64" width="75" height="10" fill="#FFFFFF" />
              <rect x="90" y="84" width="75" height="10" fill="#FFFFFF" />
              <rect x="90" y="104" width="75" height="10" fill="#FFFFFF" />
              <rect x="90" y="124" width="75" height="10" fill="#FFFFFF" />
            </g>
            <polygon 
              points="100,64 109,87 133,87 114,101 121,124 100,110 79,124 86,101 67,87 91,87" 
              fill="#FFFFFF" 
            />
            <text x="100" y="166" textAnchor="middle" fill="#202A54" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">
              American Space
            </text>
            <text x="100" y="186" textAnchor="middle" fill="#202A54" fontSize="18" fontWeight="600" fontFamily="system-ui, sans-serif">
              Dushanbe
            </text>
          </svg>
        );
      case 'unicef':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#FFFFFF" />
            <g transform="translate(100, 78)">
              <circle cx="0" cy="0" r="48" fill="#1CABE2" />
              <circle cx="0" cy="0" r="48" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
              <ellipse cx="0" cy="0" rx="48" ry="24" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.85" fill="none" />
              <line x1="-48" y1="0" x2="48" y2="0" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.85" />
              <line x1="0" y1="-48" x2="0" y2="48" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.85" />
              <circle cx="16" cy="-14" r="11" fill="#FFFFFF" />
              <path d="M4 28 C 4 10, 18 -2, 30 14 C 36 22, 38 34, 38 42 C 28 46, 12 46, 4 28 Z" fill="#FFFFFF" />
              <circle cx="-16" cy="-20" r="9" fill="#FFFFFF" />
              <path d="M-28 18 C -28 4, -14 -6, -6 6 C -2 12, -2 24, -4 30 C -14 32, -26 28, -28 18 Z" fill="#FFFFFF" />
              <path d="M-36 34 C -54 20, -58 -10, -42 -34" stroke="#1CABE2" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M36 34 C 54 20, 58 -10, 42 -34" stroke="#1CABE2" strokeWidth="4" strokeLinecap="round" fill="none" />
            </g>
            <text x="100" y="174" textAnchor="middle" fill="#1CABE2" fontSize="34" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="-0.5">
              unicef
            </text>
          </svg>
        );
      case 'y-peer':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="ypeer-grad-v" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF4F00" />
                <stop offset="100%" stopColor="#FF7A00" />
              </linearGradient>
            </defs>
            <rect width="200" height="200" rx="16" fill="url(#ypeer-grad-v)" />
            <g fill="#FFFFFF" transform="translate(14, 76)">
              <path d="M 0 4 C 0 -6, 28 -6, 28 4 C 28 10, 20 18, 18 24 L 18 42 C 18 46, 10 46, 10 42 L 10 24 C 8 18, 0 10, 0 4 Z" />
              <rect x="34" y="20" width="16" height="10" rx="5" />
              <path d="M 56 4 C 56 -4, 82 -4, 82 14 C 82 28, 68 30, 68 30 L 68 44 C 68 47, 56 47, 56 44 Z M 68 10 L 68 20 C 72 20, 74 18, 74 14 C 74 10, 72 10, 68 10 Z" />
              <path d="M 88 4 C 88 -2, 114 -2, 114 4 L 100 4 L 100 16 L 112 16 C 112 22, 100 22, 100 22 L 100 34 L 114 34 C 114 40, 88 40, 88 34 Z" />
              <path d="M 120 4 C 120 -2, 146 -2, 146 4 L 132 4 L 132 16 L 144 16 C 144 22, 132 22, 132 22 L 132 34 L 146 34 C 146 40, 120 40, 120 34 Z" />
              <path d="M 152 4 C 152 -4, 178 -4, 178 14 C 178 22, 170 26, 164 28 L 176 43 C 176 46, 166 48, 160 43 L 152 30 L 152 44 C 152 47, 142 47, 142 44 Z M 152 10 L 152 20 C 156 20, 166 20, 166 14 C 166 10, 156 10, 152 10 Z" />
            </g>
            <text x="100" y="148" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="2">
              TAJIKISTAN
            </text>
          </svg>
        );
      case 'peshraft':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#FFFFFF" />
            <g transform="translate(16, 68)">
              <circle cx="12" cy="4" r="6" fill="#FFC72C" />
              <circle cx="12" cy="60" r="6" fill="#FFC72C" />
              <circle cx="62" cy="32" r="6" fill="#FFC72C" />
              <path d="M 12 14 L 12 28 C 12 30, 22 36, 28 32 C 34 28, 26 18, 22 16 Z" fill="#38B6FF" />
              <path d="M 12 50 L 12 36 C 12 34, 22 28, 28 32 C 34 36, 26 46, 22 48 Z" fill="#38B6FF" />
              <path d="M 34 32 L 48 20 C 52 17, 56 22, 54 28 L 48 32 L 54 36 C 56 42, 52 47, 48 44 Z" fill="#38B6FF" />
            </g>
            <text x="82" y="100" fill="#38B6FF" fontSize="27" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="-0.5">
              peshraft
            </text>
            <text x="82" y="116" fill="#4FBDFE" fontSize="8.5" fontWeight="600" fontFamily="system-ui, sans-serif">
              public charity organization
            </text>
          </svg>
        );
      case 'russian-house':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#FFFFFF" />
            <g transform="translate(30, 20)">
              <rect x="4" y="4" width="34" height="34" rx="4" stroke="#162282" strokeWidth="6" fill="none" />
              <rect x="14" y="14" width="14" height="14" rx="2" fill="#162282" />
              <rect x="102" y="4" width="34" height="34" rx="4" stroke="#162282" strokeWidth="6" fill="none" />
              <rect x="112" y="14" width="14" height="14" rx="2" fill="#162282" />
              <polygon points="70,10 56,54 84,54" fill="#162282" />
              <rect x="52" y="54" width="36" height="74" fill="#162282" />
              <rect x="62" y="66" width="16" height="18" rx="2" stroke="#FFFFFF" strokeWidth="4" fill="none" />
              <path d="M 4 50 C 4 36, 38 36, 38 50 L 38 84 L 4 84 Z" fill="#162282" />
              <path d="M 102 50 C 102 36, 136 36, 136 50 L 136 84 L 102 84 Z" fill="#162282" />
            </g>
            <text x="100" y="180" textAnchor="middle" fill="#162282" fontSize="18" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="0.8">
              RUSSIAN HOUSE
            </text>
          </svg>
        );
      case 'ilmhona':
        return (
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 flex flex-col items-center justify-center p-3 text-white">
            <div className="text-2xl font-black tracking-wider">ILMHONA</div>
            <div className="text-[10px] font-semibold opacity-90 tracking-widest uppercase">Tech Accelerator</div>
          </div>
        );
      case 'little-earth':
        return (
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-emerald-500 to-green-700 flex flex-col items-center justify-center p-3 text-white">
            <div className="text-xl font-black">LITTLE EARTH</div>
            <div className="text-[10px] font-medium opacity-90">Eco Tajikistan</div>
          </div>
        );
      case 'red-crescent':
        return (
          <div className="w-full h-full rounded-2xl bg-white border border-red-200 flex flex-col items-center justify-center p-2">
            <div className="text-3xl text-red-600 font-bold mb-1">☪</div>
            <div className="text-[11px] font-extrabold text-red-700 tracking-tight text-center">RED CRESCENT</div>
          </div>
        );
      default:
        return (
          <div className="w-full h-full rounded-2xl bg-stone-100 flex items-center justify-center text-stone-600">
            <Building2 className="w-8 h-8 text-stone-400" />
          </div>
        );
    }
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] py-8 sm:py-14 px-4 sm:px-6 max-w-6xl mx-auto w-full space-y-10">
      {/* Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center space-y-4 max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-stone-200 shadow-2xs text-stone-700 text-xs sm:text-sm font-semibold">
          <HeartHandshake className="w-4 h-4 text-indigo-600" />
          <span>{t.volunteering.topBadge}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight font-heading leading-tight">
          {t.volunteering.title}
        </h1>

        <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl mx-auto">
          {t.volunteering.subtitle}
        </p>

        {/* Action bar on top */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onGoToQuiz}
            type="button"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#9333ea] hover:from-[#1d4ed8] hover:via-[#4338ca] hover:to-[#7e22ce] text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/35 transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>{t.volunteering.quizBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onGoToMain}
            type="button"
            className="px-5 py-3 rounded-xl bg-white hover:bg-stone-50 text-stone-700 font-semibold text-xs sm:text-sm border border-stone-200 shadow-2xs transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4 text-stone-400" />
            <span>{t.volunteering.mainBtn}</span>
          </button>
        </div>
      </motion.div>

      {/* Filter and Search Bar */}
      <div className="bg-white/90 backdrop-blur-xs border border-stone-200 p-4 sm:p-5 rounded-3xl shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.volunteering.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-600 rounded-full hover:bg-stone-200"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium px-2">
            <Filter className="w-3.5 h-3.5 text-indigo-600" />
            <span>{t.volunteering.foundPrefix}: <strong className="text-stone-900">{filteredOrgs.length}</strong> {t.volunteering.foundOf} {VOLUNTEERING_ORGANIZATIONS.length}</span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
          {VOLUNTEERING_CATEGORIES.map((cat) => {
            const label = getLocalizedText(cat.label, language);
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#2563eb] to-[#9333ea] text-white border-transparent shadow-xs'
                    : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Organizations Grid */}
      {filteredOrgs.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white/70 rounded-3xl border border-stone-200 space-y-4">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-stone-100 flex items-center justify-center text-stone-400">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-stone-800">{t.volunteering.noResultsFound}</h3>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-xl hover:bg-indigo-100 transition-colors"
          >
            {t.volunteering.resetSearch}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOrgs.map((org, index) => {
            const orgName = getLocalizedText(org.name, language);
            const orgCategory = getLocalizedText(org.category, language);
            const orgLocation = getLocalizedText(org.location, language);
            const orgDescription = getLocalizedText(org.description, language);
            const orgRoles = getLocalizedArray(org.roles, language);
            const orgSkills = getLocalizedArray(org.skillsGained, language);
            const orgWebsiteHint = getLocalizedText(org.websiteHint, language);

            return (
              <motion.div
                key={org.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="bg-white/95 backdrop-blur-xs border border-stone-200/90 hover:border-indigo-300 rounded-3xl p-6 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  {/* Logo & Category Badge Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl p-1.5 bg-white border border-stone-200 shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-300 flex-shrink-0 flex items-center justify-center overflow-hidden">
                      {renderFallbackSvg(org.id)}
                    </div>
                    <div className="text-right flex-1 min-w-0">
                      <span className={`inline-block text-[11px] font-bold px-2.5 py-1 rounded-full border max-w-full truncate ${org.tagColor}`}>
                        {orgCategory}
                      </span>
                    </div>
                  </div>

                  {/* Bold Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-stone-900 mb-2 font-heading tracking-tight leading-snug">
                    {orgName}
                  </h3>

                  {/* Location Badge */}
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-3 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" />
                    <span className="line-clamp-1">{orgLocation}</span>
                  </div>

                  {/* 1-2 Sentences Brief Description */}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {orgDescription}
                  </p>

                  {/* Volunteer Roles */}
                  <div className="mb-4">
                    <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-indigo-500" />
                      <span>{t.volunteering.availableRoles}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {orgRoles.map((roleText, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg bg-stone-100/80 text-stone-700 text-[11px] font-medium border border-stone-200/80">
                          {roleText}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Skills Gained */}
                  <div className="mb-5">
                    <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{t.volunteering.skillsGained}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {orgSkills.map((skillText, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-200/70 flex items-center gap-1">
                          <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                          {skillText}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold text-stone-400 truncate flex items-center gap-1">
                    <Globe className="w-3 h-3 text-stone-400 flex-shrink-0" />
                    <span className="truncate">{orgWebsiteHint}</span>
                  </span>
                  <button
                    onClick={() => handleOpenApply(org)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-indigo-50 text-stone-700 hover:text-indigo-700 font-bold text-xs transition-colors cursor-pointer flex-shrink-0"
                  >
                    <span>{t.volunteering.tryRole}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Educational info callout card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/90 backdrop-blur-xs border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-xs text-left"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900 font-heading">
                {t.volunteering.howHelpsTitle}
              </h3>
              <p className="text-xs text-stone-500">
                {t.volunteering.howHelpsSubtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onGoToQuiz}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#9333ea] hover:from-[#1d4ed8] hover:via-[#4338ca] hover:to-[#7e22ce] text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-500/20 transition-all hover:scale-105 cursor-pointer flex items-center gap-2"
          >
            <span>{t.volunteering.takeQuizCta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
            <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
              {t.volunteering.benefit1Title}
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {t.volunteering.benefit1Desc}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
            <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
              {t.volunteering.benefit2Title}
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {t.volunteering.benefit2Desc}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
            <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
              {t.volunteering.benefit3Title}
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {t.volunteering.benefit3Desc}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Role Selection & Application Modal */}
      <AnimatePresence>
        {selectedOrgForApply && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-stone-200 relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseApply}
                className="absolute top-5 right-5 p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-extrabold text-stone-900 font-heading">
                    {t.volunteering.appliedBtn}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed max-w-sm mx-auto">
                    {t.volunteering.successMessage}
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row gap-2 justify-center">
                    <button
                      onClick={() => {
                        handleCloseApply();
                        onGoToQuiz();
                      }}
                      className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                    >
                      {t.volunteering.quizBtn}
                    </button>
                    <button
                      onClick={handleCloseApply}
                      className="px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs sm:text-sm transition-all"
                    >
                      {t.volunteering.closeBtn}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                      {getLocalizedText(selectedOrgForApply.category, language)}
                    </span>
                    <h3 className="text-xl font-black text-stone-900 font-heading mt-2">
                      {getLocalizedText(selectedOrgForApply.name, language)}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      {t.volunteering.applyModalSubtitle}
                    </p>
                  </div>

                  {/* Role Selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700 uppercase tracking-wide">
                      {t.volunteering.availableRoles}
                    </label>
                    <select
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none"
                    >
                      {getLocalizedArray(selectedOrgForApply.roles, language).map((r, i) => (
                        <option key={i} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>

                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700 uppercase tracking-wide">
                      {t.volunteering.nameInput}
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder={language === 'en' ? 'Your Name' : language === 'tg' ? 'Номи шумо' : 'Иван Иванов'}
                      className="w-full px-3.5 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none"
                    />
                  </div>

                  {/* Contact Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700 uppercase tracking-wide">
                      {t.volunteering.phoneInput}
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantContact}
                      onChange={(e) => setApplicantContact(e.target.value)}
                      placeholder="+992 9X XXX XX XX / @telegram"
                      className="w-full px-3.5 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none"
                    />
                  </div>

                  {/* Motivation Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700 uppercase tracking-wide">
                      {t.volunteering.motivationInput}
                    </label>
                    <textarea
                      rows={2}
                      value={applicantMotivation}
                      onChange={(e) => setApplicantMotivation(e.target.value)}
                      placeholder={language === 'en' ? 'Tell briefly about your goals...' : language === 'tg' ? 'Дар бораи ҳадафҳои худ кӯтоҳ нависед...' : 'Хочу получить опыт и развить навыки...'}
                      className="w-full px-3.5 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={handleCloseApply}
                      className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold"
                    >
                      {t.volunteering.closeBtn}
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>{t.volunteering.submitApplication}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
