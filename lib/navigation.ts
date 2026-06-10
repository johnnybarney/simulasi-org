export const routes = {
  home: "/",
  cyberExercise: "/services/cyber-exercise",
  liveSimulation: "/services/live-technical-simulation",
  osintAi: "/services/osint-ai-intelligence",
  redTeaming: "/services/red-teaming",
  training: "/training",
  cdX: "/products/cd-x",
  contact: "/about-us#contact",
  aboutUs: "/about-us",
  privacy: "/#privacy",
  terms: "/#terms",
  careers: "/#careers",
} as const;

export type HeaderVariant =
  | "home"
  | "about-us"
  | "cyber-exercise"
  | "cd-x"
  | "live-simulation"
  | "osint"
  | "red-teaming";

export type FooterVariant =
  | "home"
  | "cyber-exercise"
  | "cd-x"
  | "live-simulation"
  | "osint"
  | "red-teaming";

export type NavChild = {
  label: string;
  href: string;
  children?: NavChild[];
};

export type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  children?: NavChild[];
};

export const servicePages: NavChild[] = [
  { label: "Cyber Exercise Services", href: routes.cyberExercise },
  { label: "Live Technical Simulation", href: routes.liveSimulation },
  { label: "OSINT & AI Intelligence", href: routes.osintAi },
  { label: "Red Teaming", href: routes.redTeaming },
];

/** Add training program links here when ready. */
export const trainingPages: NavChild[] = [];

export const servicesMenuChildren: NavChild[] = [
  ...servicePages,
  {
    label: "Training",
    href: routes.training,
    children: trainingPages,
  },
];

export const productPages = [
  { label: "CD-X Platform", href: routes.cdX },
];

const homeNavItems: NavItem[] = [
  { label: "Home", href: routes.home },
  {
    label: "Services",
    href: routes.cyberExercise,
    hasDropdown: true,
    children: servicesMenuChildren,
  },
  {
    label: "Products",
    href: routes.cdX,
    hasDropdown: true,
    children: productPages,
  },
  { label: "Insights", href: routes.osintAi },
  { label: "About Us", href: routes.aboutUs },
];

export const headerConfigs: Record<HeaderVariant, NavItem[]> = {
  home: homeNavItems,
  "about-us": homeNavItems,
  "cyber-exercise": [
    { label: "Home", href: routes.home },
    {
      label: "Services",
      href: routes.cyberExercise,
      hasDropdown: true,
      children: servicesMenuChildren,
    },
    { label: "Solutions", href: routes.cdX },
    { label: "About Us", href: routes.aboutUs },
    { label: "Contact", href: routes.contact },
  ],
  "cd-x": [
    { label: "Home", href: routes.home },
    { label: "Platform", href: routes.cdX },
    {
      label: "Services",
      href: routes.cyberExercise,
      hasDropdown: true,
      children: servicesMenuChildren,
    },
    { label: "Blog", href: routes.osintAi },
    { label: "About Us", href: routes.aboutUs },
    { label: "Contact Us", href: routes.contact },
  ],
  "live-simulation": [
    { label: "Home", href: routes.home },
    {
      label: "Services",
      href: routes.liveSimulation,
      hasDropdown: true,
      children: servicesMenuChildren,
    },
    { label: "Solutions", href: routes.cdX },
    { label: "About Us", href: routes.aboutUs },
    { label: "Resources", href: routes.osintAi },
    { label: "Contact", href: routes.contact },
  ],
  osint: [
    { label: "Home", href: routes.home },
    { label: "Solutions", href: routes.osintAi },
    {
      label: "Services",
      href: routes.cyberExercise,
      hasDropdown: true,
      children: servicesMenuChildren,
    },
    { label: "Intelligence Platform", href: routes.osintAi },
    { label: "Resources", href: routes.osintAi },
    { label: "About Us", href: routes.aboutUs },
  ],
  "red-teaming": [
    { label: "Home", href: routes.home },
    {
      label: "Services",
      href: routes.redTeaming,
      hasDropdown: true,
      children: servicesMenuChildren,
    },
    { label: "About Us", href: routes.aboutUs },
    { label: "Contact", href: routes.contact },
  ],
};

export type HeaderAction =
  | { type: "client-portal"; label: string; href: string }
  | { type: "contact-sales"; label: string; href: string }
  | { type: "schedule"; label: string; href: string }
  | { type: "search" };

export const headerActions: Partial<Record<HeaderVariant, HeaderAction>> = {
  "cd-x": { type: "search" },
  "live-simulation": {
    type: "client-portal",
    label: "Client Portal",
    href: routes.contact,
  },
  osint: {
    type: "contact-sales",
    label: "Contact Sales",
    href: routes.contact,
  },
  "red-teaming": {
    type: "schedule",
    label: "Schedule Your Assessment",
    href: routes.contact,
  },
};

export type FooterConfig = {
  variant: FooterVariant;
  copyright: string;
  links: { label: string; href: string }[];
  layout: "centered" | "three-column" | "minimal";
  showLogo?: boolean;
  leftLinks?: { label: string; href: string }[];
  rightLinks?: { label: string; href: string }[];
  themeCredit?: string;
};

export const footerConfigs: Record<FooterVariant, FooterConfig> = {
  home: {
    variant: "home",
    copyright:
      "Copyright © 2024 Simulasi.org | Cyber Resilience & Simulation Platform",
    links: [
      { label: "Privacy Policy", href: routes.privacy },
      { label: "Terms of Service", href: routes.terms },
      { label: "Careers", href: routes.careers },
      { label: "Contact", href: routes.contact },
    ],
    layout: "centered",
    showLogo: true,
  },
  "cyber-exercise": {
    variant: "cyber-exercise",
    copyright: "Copyright © 2024 - Simulasi.org, Inc.",
    links: [],
    layout: "three-column",
    leftLinks: [
      { label: "Services", href: routes.cyberExercise },
      { label: "Solutions", href: routes.cdX },
      { label: "About Us", href: routes.aboutUs },
      { label: "Contact", href: routes.contact },
    ],
    rightLinks: [],
  },
  "cd-x": {
    variant: "cd-x",
    copyright: "Copyright © 2028 Cyber Drill Exercises",
    links: [],
    layout: "minimal",
    themeCredit: "Inspire Theme by WPZOOM",
  },
  "live-simulation": {
    variant: "live-simulation",
    copyright: "© 2024 Simulasi.org. All Rights Reserved.",
    links: [
      { label: "Privacy Policy", href: routes.privacy },
      { label: "Terms of Service", href: routes.terms },
      { label: "Contact", href: routes.contact },
    ],
    layout: "centered",
    showLogo: false,
  },
  osint: {
    variant: "osint",
    copyright: "© 2024 Simulasi.org. All rights reserved.",
    links: [
      { label: "Privacy Policy", href: routes.privacy },
      { label: "Terms of Service", href: routes.terms },
      { label: "Contact", href: routes.contact },
    ],
    layout: "centered",
    showLogo: false,
  },
  "red-teaming": {
    variant: "red-teaming",
    copyright: "",
    links: [],
    layout: "three-column",
    showLogo: true,
    leftLinks: [
      { label: "Home", href: routes.home },
      { label: "Services", href: routes.redTeaming },
    ],
    rightLinks: [
      { label: "About Us", href: routes.aboutUs },
      { label: "Contact", href: routes.contact },
    ],
  },
};
