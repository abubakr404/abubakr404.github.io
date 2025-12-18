import { Divider } from "@/components/divider/divider";
import { SocialLinks } from "@/components/social-links/social-links";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-linear-to-b from-[rgb(var(--primary-10))] to-[rgb(var(--primary-20))] text-white pt-24 pb-12">
      <div className="absolute top-0 left-0 right-0 rotate-180 transform -translate-y-[99%]">
        <Divider className="h-24 w-full" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/10 pb-12 transition-all">
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold md:text-3xl text-white"
          >
            <span>Abubakr</span>
          </Link>

          <div className="flex items-center gap-6">
            <SocialLinks className="invert brightness-0 dark:invert-0 dark:brightness-100" />
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            Designed and Powered by <span className="font-semibold text-white">Abubakr</span> © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
