import { useTranslations } from "next-intl";
import { SpecialHeading } from "@/components/ui/special-heading";
import { ProjectCard } from "@/components/project-card/project-card";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiFramer, SiStrapi, SiPostgresql } from "react-icons/si";

export function Portfolio() {
  const t = useTranslations("portfolio");

  const projects = [
    {
      title: "Abubakr Hisham Website",
      desc: "Modern personal portfolio built with Next.js, Tailwind CSS, and Framer Motion. Featuring localized content and dark mode support.",
      images: {
        desktop: "/assets/images/projects/abubakr-desktop.webp",
        tablet: "/assets/images/projects/abubakr-tablet.webp",
        mobile: "/assets/images/projects/abubakr-mobile.webp",
      },
      technologies: [<SiNextdotjs key="next" />, <SiTailwindcss key="tw" />, <SiTypescript key="ts" />, <SiFramer key="fm" />],
      liveUrl: "https://abubakr404.github.io",
      githubUrl: "https://github.com/abubakr404/abubakr404.github.io",
    },
    {
      title: "Elzero Team",
      desc: "A community platform for developers to share knowledge, collaborate on projects, and grow together in the tech industry.",
      images: {
        desktop: "/assets/images/projects/elzero-team-desktop.webp",
        tablet: "/assets/images/projects/elzero-team-tablet.webp",
        mobile: "/assets/images/projects/elzero-team-mobile.webp",
      },
      technologies: [<SiNextdotjs key="next" />, <SiStrapi key="strapi" />, <SiPostgresql key="pg" />, <SiTailwindcss key="tw" />],
      liveUrl: "https://elzero.org",
      githubUrl: "https://github.com/elzero-team",
    },
  ];

  return (
    <section 
      id="portfolio" 
      className="py-20 relative bg-portfolio-pattern bg-no-repeat bg-cover bg-blend-[var(--second-surface-blend-mode)]"
    >
      <div className="container mx-auto px-4">
        <SpecialHeading>
          {t("title")}
        </SpecialHeading>
        
        <div className="grid gap-16 mt-16 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
