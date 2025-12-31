"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../theme-toggle/theme-toggle";
import { LanguageToggle } from "../language-toggle/language-toggle";
import { cn } from "@/lib/utils";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const t = useTranslations("navigation");
  console.log(t)
  const [isOpen, setIsOpen] = useState(false);
  const [isFilled, setIsFilled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsFilled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/portfolio", label: t("portfolio") },
    { href: "/blog", label: t("blog") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all overflow-hidden",
        isFilled ? "text-[rgb(var(--primary-90))]" : "bg-transparent",
        className
      )}
    >
      <nav
        className={cn(
          "container mx-auto relative transition-all duration-400 ease-out",
          "before:content-[''] before:z-[-1] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2",
          isFilled
            ? "shadow-[0_0.125rem_0.25rem_rgba(var(--primary-10),0.5)] p-0 before:animate-[filledColorStart_0.4s_ease-out_forwards]"
            : "before:animate-[filledColorEnd_0.4s_ease-out_forwards]"
        )}
      >
        <div className="flex items-center justify-between h-16 px-4">
          <Link
            href={"/"}
            className="flex items-center text-xl font-semibold md:text-2xl"
          >
            <Image src={Logo} alt="Logo" width={18} height={18} />
            <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text">
              Abubakr
            </span>
          </Link>

          <div className="hidden items-center gap-4 md:flex">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium capitalize transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 border-l pl-4">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div 
          className={cn(
            "border-t md:hidden py-4 transition-all duration-300 ease-in-out overflow-hidden",
            isOpen ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 py-0 translate-y-16 pointer-events-none"
          )}
        >
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-sm font-medium capitalize transition-colors hover:text-primary text-center"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 border-t flex items-center justify-center gap-4">
              <LanguageToggle />
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
