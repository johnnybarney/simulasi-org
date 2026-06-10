import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { GradientBorder } from "@/components/ui/GradientBorder";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/navigation";

type LabeledPoint = {
  label: string;
  text: string;
};

type MethodologyCard = {
  title: string;
  diagramSrc?: string;
  points: LabeledPoint[];
};

type BenefitItem = {
  title: string;
  iconSrc?: string;
  points: string[];
};

type LifecycleStep = {
  title: string;
  description: string;
  iconSrc?: string;
};

function OfferingIcon({
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

function LabeledBulletList({ points }: { points: LabeledPoint[] }) {
  return (
    <ul className="space-y-3 text-left">
      {points.map((point) => (
        <li key={point.label} className="text-sm leading-relaxed text-white/90">
          <span className="font-bold text-white">{point.label}:</span> {point.text}
        </li>
      ))}
    </ul>
  );
}

export function LiveSimHero() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <GradientBorder rounded="lg" glow innerClassName="px-6 py-16 text-center md:px-12 md:py-20">
          <h1 className="font-headline text-4xl font-bold text-cyan-neon drop-shadow-[0_0_20px_rgba(0,229,255,0.5)] md:text-5xl">
            Live Technical Simulation
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
            Stress-Test Your Defenses with Real-World, Custom-Crafted Attacks
          </p>
          <div className="mt-8">
            <Button href={routes.contact} variant="outline">
              Schedule a Consultation
            </Button>
          </div>
        </GradientBorder>
      </Container>
    </section>
  );
}

export function MethodologySection() {
  const cards: MethodologyCard[] = [
    {
      title: "Custom Threat Modeling",
      points: [
        {
          label: "Payload Engineering",
          text: "Crafting multi-stage, bespoke exploits.",
        },
        {
          label: "Stealth & Evasion",
          text: "Bypassing advanced threat detection and sandboxes.",
        },
        {
          label: "Attack Vector Analysis",
          text: "Mapping organization-specific weaknesses.",
        },
      ],
    },
    {
      title: "SD-WAF Injection Delivery",
      points: [
        {
          label: "Advanced Obfuscation",
          text: "Evading web application firewalls.",
        },
        {
          label: "Targeted Injection Points",
          text: "Exploiting API and application logic flaws.",
        },
        {
          label: "Protocol Manipulation",
          text: "Leveraging non-standard communication channels.",
        },
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="mb-12 text-center font-headline text-2xl font-bold text-white md:text-3xl">
          Methodology: Tailored Attack Simulation
        </h2>
        <ul className="grid gap-6 lg:grid-cols-2">
          {cards.map((card) => (
            <li
              key={card.title}
              className="rounded-lg border-2 border-magenta-neon/70 bg-cyber-bg p-6 shadow-[0_0_24px_rgba(255,0,255,0.25)]"
            >
              <div className="mb-6 overflow-hidden rounded-md border border-magenta-neon/40 bg-black">
                <div className="flex aspect-[16/10] items-center justify-center px-4">
                  {card.diagramSrc ? (
                    <Image
                      src={card.diagramSrc}
                      alt={card.title}
                      width={560}
                      height={350}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <p className="text-center font-headline text-sm font-bold text-magenta-neon/70">
                      {card.title}
                    </p>
                  )}
                </div>
              </div>
              <LabeledBulletList points={card.points} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function LiveSimBenefitsSection() {
  const items: BenefitItem[] = [
    {
      title: "Infrastructure Validation",
      points: [
        "Validate firewall, IPS, and WAF configurations.",
        "Assess cloud security posture (AWS, Azure, GCP).",
        "Verify network segmentation effectiveness.",
      ],
    },
    {
      title: "Detection & Response Tuning",
      points: [
        "Optimize SOC alert accuracy and tuning.",
        "Test EDR and SIEM detection logic.",
        "Improve mean time to detect (MTTD) and respond (MTTR).",
      ],
    },
    {
      title: "Process & People Readiness",
      points: [
        "Evaluate incident response plan effectiveness.",
        "Train SOC analysts in real-world scenarios.",
        "Identify communication and decision-making gaps.",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="mb-12 text-center font-headline text-2xl font-bold text-cyan-neon md:text-3xl">
          Key Benefits of Live Simulation
        </h2>
        <ul className="grid gap-10 md:grid-cols-3">
          {items.map((item) => (
            <li key={item.title} className="flex flex-col">
              <OfferingIcon src={item.iconSrc} alt={item.title} className="mb-4" />
              <h3 className="mb-4 text-center font-headline text-base font-bold text-white md:text-lg">
                {item.title}
              </h3>
              <ul className="space-y-2 text-sm text-white/90">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1 shrink-0 text-cyan-neon">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function LifecycleSection() {
  const steps: LifecycleStep[] = [
    {
      title: "Delivery",
      description:
        "Initial payload delivery via custom vectors (phishing, web, network ingress) to establish foothold.",
    },
    {
      title: "Execution & C2",
      description:
        "Payload execution, establishing covert command and control (C2) communications channel.",
    },
    {
      title: "Lateral Movement",
      description:
        "Attacker moves across the network, escalating privileges and mapping internal assets.",
    },
    {
      title: "Impact",
      description:
        "Simulation achieves the objective, whether it's data exfiltration, system disruption, or gaining access.",
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="mb-12 text-center font-headline text-2xl font-bold text-white md:text-3xl">
          Simulation Lifecycle
        </h2>
        <ol className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-center">
          {steps.map((step, index) => (
            <li key={step.title} className="contents">
              <div className="flex w-full max-w-xs flex-col items-center text-center md:w-auto md:max-w-[220px]">
                <OfferingIcon src={step.iconSrc} alt={step.title} className="mb-4" />
                <h3 className="mb-2 font-headline text-base font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/80">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <span
                  className="hidden shrink-0 self-center px-2 text-xl text-cyan-neon md:inline"
                  aria-hidden="true"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function LiveSimCtaSection() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <GradientBorder thick glow rounded="lg" innerClassName="px-6 py-12 text-center md:px-12 md:py-14">
          <p className="mx-auto mb-8 max-w-3xl text-lg text-white md:text-xl">
            Are you ready to{" "}
            <span className="font-bold text-cyan-neon">find your blind spots</span> before a real
            attacker does?
          </p>
          <Button href={routes.contact} variant="primary" className="px-8 py-4">
            Contact Us to Schedule a Consultation
          </Button>
        </GradientBorder>
      </Container>
    </section>
  );
}
