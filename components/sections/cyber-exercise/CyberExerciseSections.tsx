import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { GradientText } from "@/components/ui/GradientText";
import { Container } from "@/components/layout/Container";
import { ReferenceImage } from "@/components/ui/ReferenceImage";
import { routes } from "@/lib/navigation";

type OfferingBlock = {
  label: string;
  text: string;
  iconSrc?: string;
  iconAlt?: string;
};

type Offering = {
  title: string;
  blocks: OfferingBlock[];
};

function OfferingBlockContent({ block }: { block: OfferingBlock }) {
  return (
    <div className="flex flex-col items-center text-center">
      {block.iconSrc && (
        <div className="relative mb-4 h-32 w-32 shrink-0">
          <Image
            src={block.iconSrc}
            alt={block.iconAlt ?? block.label}
            fill
            sizes="128px"
            className="object-contain"
          />
        </div>
      )}
      <p className="mb-2 text-sm font-bold text-cyan-neon">{block.label}</p>
      <p className="text-sm leading-relaxed text-white/90">{block.text}</p>
    </div>
  );
}

function OfferingCard({ offering }: { offering: Offering }) {
  const hasIcons = offering.blocks.some((block) => block.iconSrc);

  return (
    <li className="gradient-cyan-magenta border-glow-cyan-magenta rounded-lg p-px">
      <div className="h-full rounded-lg bg-cyber-bg p-6">
        <h3 className="mb-6 flex min-h-[4.5rem] items-center justify-center text-center font-headline text-lg font-bold">
          <GradientText as="span">{offering.title}</GradientText>
        </h3>
        <div
          className={
            hasIcons
              ? "grid grid-cols-2 gap-6"
              : "space-y-6"
          }
        >
          {offering.blocks.map((block) => (
            <OfferingBlockContent key={block.label} block={block} />
          ))}
        </div>
      </div>
    </li>
  );
}

export function CyberExerciseHero() {
  return (
    <section className="py-16 md:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Breadcrumb items={[{ label: "Cyber Exercise Services", href: routes.cyberExercise }, { label: "Page" }]} />
          <h1 className="font-headline text-4xl font-bold md:text-5xl">
            <GradientText as="span">Cyber Exercise Services</GradientText>
          </h1>
          <p className="mt-4 font-headline text-xl font-bold text-white">Validate. Prepare. Secure.</p>
          <p className="mt-6 text-base leading-relaxed text-white/90">
            Transform theoretical knowledge into hands-on readiness through immersive simulations and exercises designed to test your organisation&apos;s resilience against modern cyber threats.
          </p>
        </div>
        <ReferenceImage
          src="/images/cyberexercise.jpg"
          alt="Cyber exercise services illustration"
          className="aspect-[4/3] w-full"
          imageClassName="object-contain object-center"
          priority
        />
      </Container>
    </section>
  );
}

export function CoreOfferingsSection() {
  const offerings: Offering[] = [
    {
      title: "Tabletop Exercises (TTX)",
      blocks: [
        {
          label: "Strategy",
          text: "Scenario-driven discussions for C-Suite, Legal, and executive decision-makers using Expected vs. Observed frameworks.",
          iconSrc: "/images/horseandbishop.jpg",
          iconAlt: "Strategy — chess knight",
        },
        {
          label: "Decision-Making",
          text: "Structured facilitation that exposes gaps in communication, authority, and crisis response under pressure.",
          iconSrc: "/images/decisionmaking.jpg",
          iconAlt: "Decision-Making",
        },
      ],
    },
    {
      title: "Technical Cyber Drills",
      blocks: [
        {
          label: "SOC",
          text: "Hands-on SOC playbook validation against real-world attack vectors and coordinated response workflows.",
          iconSrc: "/images/soc.jpg",
          iconAlt: "SOC",
        },
        {
          label: "IT Response",
          text: "Improve MTTD and MTTR through controlled technical drills aligned to your environment and tooling.",
          iconSrc: "/images/it-response.jpg",
          iconAlt: "IT Response",
        },
      ],
    },
    {
      title: "Compliance & Maturity Gap Assessment",
      blocks: [
        {
          label: "Regulation",
          text: "Alignment with NIST CSF and industry best practices mapped to your regulatory obligations.",
          iconSrc: "/images/regulation.jpg",
          iconAlt: "Regulation",
        },
        {
          label: "Maturity",
          text: "Deliver an Actionable Resilience Score with prioritized remediation pathways.",
          iconSrc: "/images/maturity.jpg",
          iconAlt: "Maturity",
        },
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="mb-12 text-center font-headline text-2xl font-bold text-white md:text-3xl">Core Offerings</h2>
        <ul className="grid gap-6 lg:grid-cols-3">
          {offerings.map((item) => (
            <OfferingCard key={item.title} offering={item} />
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function CyberWhyChooseSection() {
  const items = [
    {
      title: "Realistic Threat Modeling",
      description: "Scenarios grounded in current adversary tradecraft and your sector-specific threat landscape.",
      iconSrc: "/images/realistic-threat-modeling.jpg",
      iconAlt: "Realistic Threat Modeling",
    },
    {
      title: "Actionable Reporting",
      description: "Executive and technical deliverables that drive prioritized remediation — not shelf-ware.",
      iconSrc: "/images/actionable-reporting.jpg",
      iconAlt: "Actionable Reporting",
    },
    {
      title: "Regulatory Alignment",
      description: "Exercise outputs mapped to compliance frameworks and audit requirements.",
      iconSrc: "/images/regulatory-alignment.jpg",
      iconAlt: "Regulatory Alignment",
    },
    {
      title: "Continuous Improvement",
      description: "Track capability growth across exercises with measurable maturity indicators.",
      iconSrc: "/images/continuous-improvement.jpg",
      iconAlt: "Continuous Improvement",
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="mb-12 text-center font-headline text-2xl font-bold text-white md:text-3xl">Why Choose Us</h2>
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.title} className="text-center">
              <div className="relative mx-auto mb-4 h-20 w-20">
                <Image
                  src={item.iconSrc}
                  alt={item.iconAlt}
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </div>
              <h3 className="mb-2 font-headline text-base font-bold text-white">{item.title}</h3>
              <p className="text-sm text-white/80">{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function CyberCtaSection() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="gradient-cyan-magenta border-glow-cyan-magenta rounded-lg p-px">
          <div className="rounded-lg bg-cyber-bg px-6 py-12 text-center">
            <Button href={routes.contact} variant="primary" className="px-10 py-4 text-base">
              Contact Us for a Consultation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
