import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
}

const socialLinks = [
  {
    href: "https://www.facebook.com/abubakr404",
    icon: Facebook,
    label: "Facebook",
  },
  {
    href: "https://twitter.com/abubakr_404",
    icon: Twitter,
    label: "Twitter",
  },
  {
    href: "https://linkedin.com/in/abubakr-hisham",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/abubakr404",
    icon: Github,
    label: "GitHub",
  },
];

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <Button
            key={link.href}
            variant="outline"
            size="icon"
            asChild
            className="h-10 w-10 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <Icon className="h-4 w-4" />
            </a>
          </Button>
        );
      })}
    </div>
  );
}
