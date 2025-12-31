"use client";

import { useTranslations } from "next-intl";
import { Mail, Phone, Send, User, RotateCcw, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/social-links/social-links";
import { SpecialHeading } from "@/components/ui/special-heading";
import Image from "next/image";

export function Contact() {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    phoneNumber: "",
    messageText: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate sending
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSent(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden bg-contact-pattern bg-no-repeat bg-cover"
    >
      <div className="container mx-auto px-4">
        <SpecialHeading>
          {t("getInTouch")}
        </SpecialHeading>

        <div className="mt-16 grid gap-0 lg:grid-cols-2 bg-card border rounded-2xl overflow-hidden shadow-2xl">
          {/* Info Side */}
          <div className="p-8 md:p-12 bg-linear-to-b from-[rgb(var(--primary-10))] to-[rgb(var(--primary-20))] text-white flex flex-col justify-between overflow-hidden relative min-h-[500px]">
            <div 
              className="absolute inset-x-0 bottom-0 h-1/2 bg-contain bg-no-repeat bg-bottom opacity-20 pointer-events-none"
              style={{ backgroundImage: 'url(/assets/images/contact-illustration.png)' }}
            />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">{t("getInTouch")}</h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-sm">
                {t("description")}
              </p>
            </div>

            <div className="relative z-10 mt-12 space-y-6">
              <a href="mailto:abubakr.hisham@hotmail.com" className="flex items-center gap-4 text-lg hover:text-primary-80 transition-colors group">
                <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="h-6 w-6" />
                </div>
                <span className="break-all">abubakr.hisham@hotmail.com</span>
              </a>
              <div className="flex flex-col gap-4">
                <a href="tel:+966539581070" className="flex items-center gap-4 text-lg hover:text-primary-80 transition-colors group">
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone className="h-6 w-6" />
                  </div>
                  <span>+966 539581070</span>
                </a>
                <a href="tel:+249904219999" className="flex items-center gap-4 text-lg hover:text-primary-80 transition-colors group">
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone className="h-6 w-6" />
                  </div>
                  <span>+249 904219999</span>
                </a>
              </div>
              
              <div className="pt-8 border-t border-white/10 flex justify-center lg:justify-start">
                <SocialLinks className="invert brightness-0 dark:invert-0 dark:brightness-100" />
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-8 md:p-12 relative bg-card flex flex-col justify-center">
            {isSent ? (
              <div className="flex flex-col items-center justify-center gap-8 h-full text-center animate-in zoom-in-95 duration-500">
                <div className="h-48 w-48 relative mx-auto">
                  <Image 
                    src="/assets/images/thanks-illustration.png" 
                    alt="Thank you" 
                    fill 
                    className="object-contain" 
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold">{t("thanksTitle")}</h3>
                  <p className="text-muted-foreground text-lg">{t("thanksDescription")}</p>
                </div>
                <Button onClick={() => setIsSent(false)} variant="legacy" className="gap-2">
                  <RotateCcw className="h-4 w-4" />
                  {t("sendAgain")}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-10 duration-500">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    name="senderName"
                    placeholder={t("name")}
                    required
                    value={formData.senderName}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border-2 border-muted-foreground/10 bg-muted/30 py-3 pl-10 pr-4 outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="email"
                    name="senderEmail"
                    placeholder={t("email")}
                    required
                    value={formData.senderEmail}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border-2 border-muted-foreground/10 bg-muted/30 py-3 pl-10 pr-4 outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder={t("phone")}
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border-2 border-muted-foreground/10 bg-muted/30 py-3 pl-10 pr-4 outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-muted-foreground" />
                  <textarea
                    name="messageText"
                    placeholder={t("message")}
                    required
                    rows={5}
                    value={formData.messageText}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border-2 border-muted-foreground/10 bg-muted/30 p-4 pl-10 outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>
                <Button type="submit" variant="legacy-primary" size="lg" disabled={isLoading} className="gap-2 mt-2">
                  <Send className="h-5 w-5" />
                  {isLoading ? "Sending..." : t("send")}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
