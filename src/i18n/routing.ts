import { defineRouting } from "next-intl/routing";
export const locales = ["ar", "en"];
export const routing = defineRouting({
  locales: locales,
  defaultLocale: "en",
  localePrefix: "as-needed"
});
