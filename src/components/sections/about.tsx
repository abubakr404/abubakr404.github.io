"use client";

import { useTranslations } from "next-intl";
import { SpecialHeading } from "@/components/ui/special-heading";
import Image from "next/image";

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SpecialHeading>
          {t("title")}
        </SpecialHeading>
        
        <div className="mt-16 grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative aspect-square overflow-hidden rounded-2xl border bg-card shadow-xl">
            <Image
              src="/assets/images/about-section.webp"
              alt="About Abubakr"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale transition-all hover:grayscale-0 duration-500"
            />
          </div>
          
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              {t("description")}
            </h3>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed text-start">
              <p>{t("lead1")}</p>
              <p>{t("lead2")}</p>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex flex-col gap-1 p-4 rounded-xl border bg-card/50 backdrop-blur-sm min-w-[120px]">
                <span className="text-3xl font-bold text-primary">3+</span>
                <span className="text-sm font-medium">Years Experience</span>
              </div>
              <div className="flex flex-col gap-1 p-4 rounded-xl border bg-card/50 backdrop-blur-sm min-w-[120px]">
                <span className="text-3xl font-bold text-primary">50+</span>
                <span className="text-sm font-medium">Projects Done</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
