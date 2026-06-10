import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/navigation";

function AiAugmentedEmblem({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto h-24 w-28", className)}>
      <div
        className="absolute inset-0 gradient-cyan-magenta shadow-[0_0_20px_rgba(255,0,255,0.35)]"
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      />
      <div
        className="absolute inset-[2px] flex items-center justify-center bg-cyber-bg px-2"
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      >
        <span className="text-center font-headline text-xs font-bold leading-tight text-white">
          AI-Augmented
        </span>
      </div>
    </div>
  );
}

function SectionIcon({
  src,
  alt,
  className,
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-cyan-neon/50 bg-cyber-bg shadow-[0_0_16px_rgba(0,229,255,0.15)]",
        className,
      )}
    >
      {src ? (
        <Image src={src} alt={alt} fill sizes="64px" className="object-contain p-2" />
      ) : (
        <span className="h-7 w-7 rounded-full bg-cyan-neon/20" aria-hidden="true" />
      )}
    </div>
  );
}

function FeatureRow({
  title,
  description,
  iconSrc,
}: {
  title: string;
  description: string;
  iconSrc?: string;
}) {
  return (
    <li className="flex gap-4">
      <SectionIcon src={iconSrc} alt={title} className="mx-0 h-12 w-12" />
      <div>
        <h3 className="font-headline text-sm font-bold text-cyan-neon">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-white/80">{description}</p>
      </div>
    </li>
  );
}

function CapabilityChip({
  label,
  border,
}: {
  label: string;
  border: "cyan" | "magenta";
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-lg border-2 px-4 py-6 text-center",
        border === "magenta" ? "border-magenta-neon/70" : "border-cyan-neon/70",
      )}
    >
      <SectionIcon alt={label} className="mb-3 h-14 w-14" />
      <p
        className={cn(
          "font-headline text-sm font-bold",
          border === "magenta" ? "text-magenta-neon" : "text-cyan-neon",
        )}
      >
        {label}
      </p>
    </div>
  );
}

/* ── 1. Hero ─────────────────────────────────────────────── */

export function OsintHero() {
  return (
    <section className="relative py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 40%, rgba(0,229,255,0.15) 0%, transparent 55%), radial-gradient(circle at 70% 60%, rgba(255,0,255,0.1) 0%, transparent 50%)",
        }}
      />
      <Container className="relative text-center">
        <h1 className="font-headline text-4xl font-bold text-cyan-neon drop-shadow-[0_0_20px_rgba(0,229,255,0.5)] md:text-5xl">
          OSINT &amp; AI-Driven Intelligence
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">
          Transform raw data into actionable military and cyber intelligence. Accelerate
          decision-making with automated sensemaking and predictive insights.
        </p>
        <div className="mt-8">
          <Button href={routes.osintAi} variant="outline">
            Explore Our Platform
          </Button>
        </div>
        <AiAugmentedEmblem className="mt-12" />
      </Container>
    </section>
  );
}

/* ── 2. AI-Augmented Investigations ─────────────────────── */

export function AiInvestigationsSection() {
  const features = [
    {
      title: "Automated Sensemaking",
      description: "Synthesize vast datasets and identify patterns automatically.",
    },
    {
      title: "AI Probes",
      description: "Conduct deep, autonomous inquiries and test hypotheses.",
    },
    {
      title: "Skill Gap Mitigation",
      description: "Augment human capabilities and accelerate learning curves.",
    },
  ];

  const magentaCapabilities = ["GitHub Scraping", "Social Media Monitoring"];
  const cyanCapabilities = [
    "Meta-Search Engines",
    "Custom Web Scraping",
    "API Connectors",
    "Secure Data Storage",
  ];

  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="mb-12 text-center font-headline text-2xl font-bold text-white md:text-3xl">
          AI-Augmented Investigations: Bridging the Socio-Technical Gap
        </h2>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="overflow-hidden rounded-lg border border-cyan-neon/30 bg-black/40">
            <div className="flex aspect-[4/3] items-center justify-center px-6">
              <p className="text-center text-sm text-white/40">
                Human Analyst → LLMs &amp; AI Models → Complex Data Environment
              </p>
            </div>
          </div>

          <div>
            <p className="mb-6 text-white/90">
              Leveraging <strong className="text-white">Large Language Models</strong> to bridge
              the socio-technical gap.
            </p>
            <ul className="space-y-6">
              {features.map((feature) => (
                <FeatureRow key={feature.title} {...feature} />
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {magentaCapabilities.map((label) => (
              <CapabilityChip key={label} label={label} border="magenta" />
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {cyanCapabilities.map((label) => (
              <CapabilityChip key={label} label={label} border="cyan" />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── 3. Automated Vulnerability Assessment ──────────────── */

type BorderTone = "cyan" | "magenta" | "purple";

const borderToneClass: Record<BorderTone, string> = {
  cyan: "border-cyan-neon/70 shadow-[0_0_20px_rgba(0,229,255,0.15)]",
  magenta: "border-magenta-neon/70 shadow-[0_0_20px_rgba(255,0,255,0.15)]",
  purple: "border-violet-500/70 shadow-[0_0_20px_rgba(139,92,246,0.2)]",
};

export function VulnerabilitySection() {
  const cards: {
    title: string;
    description: string;
    border: BorderTone;
    iconSrc?: string;
  }[] = [
    {
      title: "Attack Surface Mapping",
      description:
        "Continuous discovery and mapping of external assets, exposed services, and entry points across your digital footprint.",
      border: "cyan",
    },
    {
      title: "Breached Data Discovery",
      description:
        "Search the deep and dark web for leaked credentials, exposed databases, and compromised organizational data.",
      border: "magenta",
    },
    {
      title: "Automated Reconnaissance",
      description:
        "Zero-touch continuous monitoring using tools like Nmap and SpiderFoot to maintain real-time situational awareness.",
      border: "purple",
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="mb-12 text-center font-headline text-2xl font-bold text-white md:text-3xl">
          Automated Vulnerability Assessment: Zero-Touch Reconnaissance
        </h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <li
              key={card.title}
              className={cn(
                "rounded-lg border-2 bg-cyber-bg p-6",
                borderToneClass[card.border],
              )}
            >
              <SectionIcon src={card.iconSrc} alt={card.title} className="mb-4" />
              <h3 className="mb-3 font-headline text-lg font-bold text-white">{card.title}</h3>
              <p className="text-sm leading-relaxed text-white/80">{card.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ── 4. Digital Forensics & Investigations ──────────────── */

export function ForensicsSection() {
  const items = [
    {
      title: "Deep/Dark Web Analysis",
      description:
        "Monitor underground forums, marketplaces, and hidden services for threats targeting your organization.",
      border: "cyan" as const,
    },
    {
      title: "HUMINT Digitization",
      description:
        "Structure human intelligence into searchable, actionable data with AI-assisted classification and linking.",
      border: "magenta" as const,
    },
    {
      title: "Business Intelligence",
      description:
        "Competitive and strategic insights from open-source data to inform executive and operational decisions.",
      border: "cyan" as const,
    },
  ];

  return (
    <section className="relative py-16 md:py-24">
      <div
        className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(0,229,255,0.06) 0px, rgba(0,229,255,0.06) 1px, transparent 1px, transparent 48px)",
        }}
      />
      <Container className="relative">
        <h2 className="mb-12 text-center font-headline text-2xl font-bold text-white md:text-3xl">
          Digital Forensics &amp; Investigations: Uncover Hidden Threats
        </h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.title}
              className={cn(
                "rounded-lg border-2 bg-black/60 p-6 text-center backdrop-blur-sm",
                item.border === "magenta"
                  ? "border-magenta-neon/70"
                  : "border-cyan-neon/70",
              )}
            >
              <SectionIcon src={undefined} alt={item.title} className="mb-4" />
              <h3 className="mb-3 font-headline text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/80">{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ── 5. Why Choose Simulasi.org for OSINT & AIT ─────────── */

export function OsintWhyChooseSection() {
  const items = [
    {
      title: "Scalability",
      description:
        "Handle massive datasets across multiple sources simultaneously without compromising analysis depth or speed.",
    },
    {
      title: "Passive & Safe (Zero-Touch)",
      description:
        "Remain undetected during investigations with passive collection methods that protect your operational security.",
    },
    {
      title: "Actionable Insights",
      description:
        "Turn raw information into strategic advantage with prioritized, decision-ready intelligence deliverables.",
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="mb-12 text-center font-headline text-2xl font-bold text-white md:text-3xl">
          Why Choose Simulasi.org for OSINT &amp; AIT
        </h2>
        <ul className="grid gap-10 md:grid-cols-3">
          {items.map((item) => (
            <li key={item.title} className="text-center">
              <SectionIcon alt={item.title} className="mb-4" />
              <h3 className="mb-3 font-headline text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/80">{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
