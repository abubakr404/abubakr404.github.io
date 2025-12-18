"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../theme-toggle/theme-toggle";
import { LanguageToggle } from "../language-toggle/language-toggle";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const t = useTranslations("navigation");
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const isHome = pathname === `/${locale}` || pathname === `/${locale}/` || pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsFilled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHref = (id: string) => {
    if (isHome) return `#${id}`;
    if (id === "home") return `/${locale}`;
    return `/${locale}/${id}`;
  };

  const navItems = [
    { href: getHref("home"), label: t("home") },
    { href: getHref("about"), label: t("about") },
    { href: getHref("portfolio"), label: t("portfolio") },
    { href: getHref("blogs"), label: t("blog") },
    { href: getHref("contact"), label: t("contact") },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all",
        isFilled ? "navbar-filled" : "bg-transparent",
        className
      )}
    >
      <nav className="site-nav container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 text-xl font-semibold md:text-2xl"
          >
            <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Abubakr
            </span>
          </Link>

          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={cn(
            "border-t md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isOpen ? "max-h-screen opacity-100 py-4 translate-y-0" : "max-h-0 opacity-0 py-0 translate-y-16 pointer-events-none"
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
