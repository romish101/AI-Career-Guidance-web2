export type Language = 'ru' | 'en' | 'tg';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
  shortLabel: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  {
    code: 'ru',
    name: 'Русский',
    nativeName: 'Русский',
    flag: '🇷🇺',
    shortLabel: 'RU',
  },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
    shortLabel: 'EN',
  },
  {
    code: 'tg',
    name: 'Таджикский',
    nativeName: 'Тоҷикӣ',
    flag: '🇹🇯',
    shortLabel: 'TG',
  },
];
