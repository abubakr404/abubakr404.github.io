export type NavItem = {
  title: string;
  path: string;
  icon?: any;
  disabled?: boolean;
};

export type item = {
  id: string;
  label: string;
  icon?: any;
};

export type MainNavItem = NavItem;

export type HostSidebarConfig = NavItem[];

export type AdminSidebarConfig = NavItem[];

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    youtube: string;
  };
};
