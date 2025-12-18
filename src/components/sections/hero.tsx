"use client";

import { useTranslations } from "next-intl";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/social-links/social-links";
import { Divider } from "@/components/divider/divider";
import Image from "next/image";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/images/Ellipse.svg), url(/assets/images/languages.png), url(/assets/images/pattern.png), radial-gradient(50% 50% at 50% 50%, #505d84 0%, #212f53 100%)',
        backgroundPosition: '0px -60px, 90% 90%, center, center',
        backgroundRepeat: 'no-repeat, no-repeat, repeat, no-repeat',
        backgroundSize: '400px, 30rem, auto, cover',
      }}
    >
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Hero Content */}
          <div className="flex flex-col gap-6 text-center lg:text-start hero-content">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              <span className="block text-white">
                {t("greeting")}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-xl mx-auto lg:mx-0">
              {t("description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mt-4">
              <Button size="lg" variant="legacy-primary" asChild className="w-full sm:w-auto min-w-[160px]">
                <a
                  href="https://drive.google.com/file/d/1fDdCcaUDnjsP0SDb1-zTr1deGp7hpCbc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("getResume")}
                </a>
              </Button>
              <Button size="lg" variant="legacy" asChild className="w-full sm:w-auto min-w-[160px]">
                <a href="#contact">{t("cta")}</a>
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start mt-4">
              <SocialLinks />
            </div>
          </div>

          {/* Hero Figure */}
          <div className="relative h-[400px] md:h-[500px] w-full lg:flex items-center justify-center">
            <div className="relative w-full h-full max-w-lg">
              {/* Screen / background sec */}
              <div 
                className="absolute inset-x-0 bottom-20 h-3/4 bg-contain bg-no-repeat bg-center opacity-40 z-0"
                style={{ backgroundImage: 'url(/assets/images/screen.png), url(/assets/images/background-sec.png)' }}
              />
              {/* Person */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[110%] w-full z-20">
                <Image 
                  src="/assets/images/person & chair.png" 
                  alt="Abubakr" 
                  fill
                  priority
                  className="object-contain object-bottom" 
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Project Link on Screen */}
              <Button 
                variant="legacy-primary" 
                size="sm" 
                asChild 
                className="absolute left-[15%] bottom-[40%] z-30 hidden lg:flex"
              >
                <a href="#portfolio">{t("viewPortfolio")}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#portfolio"
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group md:hidden"
      >
        <ArrowDown className="h-8 w-8 text-white animate-bounce" />
      </a>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <Divider />
      </div>
    </section>
  );
}
