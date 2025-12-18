"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    const newPathname = pathname.replace(`/${locale}`, `/${nextLocale}`) || `/${nextLocale}`;
    router.push(newPathname);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="h-9 w-9"
      title={locale === "en" ? "Switch to Arabic" : "تبديل للإنجليزية"}
    >
      <Languages className="h-5 w-5" />
      <span className="sr-only">Toggle language</span>
    </Button>
  );
}
