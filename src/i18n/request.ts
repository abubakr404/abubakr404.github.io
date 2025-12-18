import {getRequestConfig} from 'next-intl/server';

export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({requestLocale}) => {
  const locale = (await requestLocale) as Locale || 'en';
  
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
