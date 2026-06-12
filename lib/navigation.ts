export const routes = {
  home: "/",
  tsx: "/services/tsx",
  ittx: "/services/ittx",
  asx: "/services/asx",
  attackSimulation: "/services/attack-simulation",
  reconIntel: "/services/recon-intelligence",
  training: "https://rp.my/training",
  cdX: "/products/cd-x",
  mniX3dKit: "/products/mni-x-3d-kit",
  contact: "/about-us#contact",
  aboutUs: "/about-us",
  privacy: "/#privacy",
  terms: "/#terms",
  careers: "/#careers",
} as const;

export type HeaderVariant =
  | "home"
  | "about-us"
  | "tabletop-exercise"
  | "advance-simulation"
  | "cd-x"
  | "technical-simulation-exercise"
  | "reconnaissance-intelligence"
  | "offensive-operations";

export type FooterVariant =
  | "home"
  | "tabletop-exercise"
  | "advance-simulation"
  | "cd-x"
  | "technical-simulation-exercise"
  | "reconnaissance-intelligence"
  | "offensive-operations";

export type NavChild = {
  label: string;
  labelCode?: string;
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
  { label: "Technical Simulation Exercise", labelCode: "TSX", href: routes.tsx },
  { label: "Interactive Tabletop Exercise", labelCode: "iTTX", href: routes.ittx },
  { label: "Advance Simulation Exercise", labelCode: "ASX", href: routes.asx },
  { label: "Offensive Operations", labelCode: "Attack Simulation", href: routes.attackSimulation },
  { label: "Reconnaissance Intelligence", labelCode: "Recon Intel", href: routes.reconIntel },
  { label: "Capacity Building", href: routes.training },
];

export const servicesMenuChildren: NavChild[] = servicePages;

export const productPages = [
  { label: "CD-X Platform", href: routes.cdX },
  { label: "MNI-X 3D Kit", href: routes.mniX3dKit },
];

const homeNavItems: NavItem[] = [
  { label: "Home", href: routes.home },
  {
    label: "Services",
    href: routes.tsx,
    hasDropdown: true,
    children: servicesMenuChildren,
  },
  {
    label: "Products",
    href: routes.cdX,
    hasDropdown: true,
    children: productPages,
  },
  { label: "News", href: routes.reconIntel },
  { label: "About Us", href: routes.aboutUs },
];

export const headerConfigs: Record<HeaderVariant, NavItem[]> = {
  home: homeNavItems,
  "about-us": homeNavItems,
  "tabletop-exercise": [
    { label: "Home", href: routes.home },
    {
      label: "Services",
      href: routes.tsx,
      hasDropdown: true,
      children: servicesMenuChildren,
    },
    { label: "Solutions", href: routes.cdX },
    { label: "About Us", href: routes.aboutUs },
    { label: "Contact", href: routes.contact },
  ],
  "advance-simulation": [
    { label: "Home", href: routes.home },
    {
      label: "Services",
      href: routes.tsx,
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
      href: routes.tsx,
      hasDropdown: true,
      children: servicesMenuChildren,
    },
    { label: "Blog", href: routes.reconIntel },
    { label: "About Us", href: routes.aboutUs },
    { label: "Contact Us", href: routes.contact },
  ],
  "technical-simulation-exercise": [
    { label: "Home", href: routes.home },
    {
      label: "Services",
      href: routes.tsx,
      hasDropdown: true,
      children: servicesMenuChildren,
    },
    { label: "Solutions", href: routes.cdX },
    { label: "About Us", href: routes.aboutUs },
    { label: "Resources", href: routes.reconIntel },
    { label: "Contact", href: routes.contact },
  ],
  "reconnaissance-intelligence": [
    { label: "Home", href: routes.home },
    { label: "Solutions", href: routes.reconIntel },
    {
      label: "Services",
      href: routes.tsx,
      hasDropdown: true,
      children: servicesMenuChildren,
    },
    { label: "Intelligence Platform", href: routes.reconIntel },
    { label: "Resources", href: routes.reconIntel },
    { label: "About Us", href: routes.aboutUs },
  ],
  "offensive-operations": [
    { label: "Home", href: routes.home },
    {
      label: "Services",
      href: routes.attackSimulation,
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
  "technical-simulation-exercise": {
    type: "client-portal",
    label: "Client Portal",
    href: routes.contact,
  },
  "reconnaissance-intelligence": {
    type: "contact-sales",
    label: "Contact Sales",
    href: routes.contact,
  },
  "offensive-operations": {
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
  "tabletop-exercise": {
    variant: "tabletop-exercise",
    copyright: "Copyright © 2024 - Simulasi.org, Inc.",
    links: [],
    layout: "three-column",
    leftLinks: [
      { label: "Services", href: routes.ittx },
      { label: "Solutions", href: routes.cdX },
      { label: "About Us", href: routes.aboutUs },
      { label: "Contact", href: routes.contact },
    ],
    rightLinks: [],
  },
  "advance-simulation": {
    variant: "advance-simulation",
    copyright: "Copyright © 2024 - Simulasi.org, Inc.",
    links: [],
    layout: "three-column",
    leftLinks: [
      { label: "Services", href: routes.asx },
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
  "technical-simulation-exercise": {
    variant: "technical-simulation-exercise",
    copyright: "© 2024 Simulasi.org. All Rights Reserved.",
    links: [
      { label: "Privacy Policy", href: routes.privacy },
      { label: "Terms of Service", href: routes.terms },
      { label: "Contact", href: routes.contact },
    ],
    layout: "centered",
    showLogo: false,
  },
  "reconnaissance-intelligence": {
    variant: "reconnaissance-intelligence",
    copyright: "© 2024 Simulasi.org. All rights reserved.",
    links: [
      { label: "Privacy Policy", href: routes.privacy },
      { label: "Terms of Service", href: routes.terms },
      { label: "Contact", href: routes.contact },
    ],
    layout: "centered",
    showLogo: false,
  },
  "offensive-operations": {
    variant: "offensive-operations",
    copyright: "",
    links: [],
    layout: "three-column",
    showLogo: true,
    leftLinks: [
      { label: "Home", href: routes.home },
      { label: "Services", href: routes.attackSimulation },
    ],
    rightLinks: [
      { label: "About Us", href: routes.aboutUs },
      { label: "Contact", href: routes.contact },
    ],
  },
};
