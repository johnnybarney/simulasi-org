import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Container } from "@/components/layout/Container";
import { ReferenceImage } from "@/components/ui/ReferenceImage";
import { routes } from "@/lib/navigation";

export function CdXHero() {
  return (
    <section className="circuit-pattern-left relative py-16 md:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="font-headline text-6xl font-bold md:text-7xl">
            <GradientText as="span" className="drop-shadow-[0_0_20px_rgba(255,0,255,0.5)]">CD-X</GradientText>
          </h1>
          <p className="mt-2 text-sm font-bold uppercase tracking-widest text-magenta-neon">Dedicated Cyber Exercise Platform</p>
          <p className="mt-6 font-headline text-2xl font-bold leading-tight text-white md:text-3xl">
            Your All-in-One Command Center for Proactive Cyber Resilience
          </p>
          <div className="mt-8">
            <Button href={routes.contact} variant="outline">BOOK A DEMO</Button>
          </div>
        </div>
        <ReferenceImage src="/images/screen2.png" className="aspect-square w-full max-w-lg mx-auto rounded-full" imageClassName="object-[75%_15%] scale-[2.5] rounded-full" priority />
      </Container>
    </section>
  );
}

export function CyberDrillsSection() {
  return (
    <section className="py-16 md:py-20">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <ReferenceImage src="/images/screen2.png" className="aspect-square w-full max-w-xs mx-auto rounded-full border-2 border-cyan-neon/50" imageClassName="object-[20%_35%] scale-[3] rounded-full" />
        <div>
          <p className="text-cyan-neon font-semibold">Cyber Drills Matter</p>
          <h2 className="mt-2 font-headline text-3xl font-bold text-white md:text-4xl">National Critical Infrastructure</h2>
        </div>
      </Container>
    </section>
  );
}

export function ValueDeliveryTable() {
  const rows = [
    { pillar: "Unified Exercise Lifecycle", provide: "End-to-end planning, execution, and reporting in one platform.", outcome: "Reduced coordination overhead and faster exercise turnaround." },
    { pillar: "Red Teaming Precision", provide: "Structured adversary simulation workflows with objective tracking.", outcome: "Clear evidence of defensive gaps across people, process, and technology." },
    { pillar: "Blue Team Empowerment", provide: "Real-time dashboards and after-action analytics for defenders.", outcome: "Improved detection tuning and response readiness." },
    { pillar: "Automated IR Tracking", provide: "Incident response milestones captured automatically during exercises.", outcome: "Audit-ready timelines and measurable IR performance." },
    { pillar: "Compliance-by-Design", provide: "Framework mappings built into every exercise template.", outcome: "Regulatory alignment without additional documentation burden." },
    { pillar: "Isolated Range", provide: "Safe, segmented environments for high-fidelity technical drills.", outcome: "Realistic testing without production risk." },
  ];

  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="mb-8 font-headline text-xl font-bold text-cyan-neon md:text-2xl">
          Value Delivery: How Our Platform Service Delivers Value
        </h2>
        <div className="overflow-x-auto border border-cyan-neon/40">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="gradient-cyan-magenta text-black">
                <th className="px-4 py-3 font-bold">Service Pillar</th>
                <th className="px-4 py-3 font-bold">What We Provide</th>
                <th className="px-4 py-3 font-bold">Business Outcome</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.pillar} className="border-t border-cyan-neon/20">
                  <td className="px-4 py-4 font-bold text-white">{row.pillar}</td>
                  <td className="px-4 py-4 text-white/90">{row.provide}</td>
                  <td className="px-4 py-4 text-white/90">{row.outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

export function CdXWhyChooseSection() {
  const items = [
    { title: "Real-Time Situational Awareness", description: "Live visibility into exercise progress, injects, and team responses." },
    { title: "Threat-Adaptive Readiness", description: "Scenarios evolve based on emerging threats and your maturity level." },
    { title: "Audit-Ready", description: "Every exercise produces evidence aligned to regulatory frameworks." },
    { title: "Scalable Service Model", description: "From single-team drills to enterprise-wide coordinated exercises." },
    { title: "Proactive Defense Focus", description: "Shift from reactive firefighting to measurable, continuous improvement." },
  ];

  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="mb-10 font-headline text-xl font-bold text-cyan-neon md:text-2xl">Why Choose Us</h2>
        <ul className="space-y-8">
          {items.map((item) => (
            <li key={item.title} className="flex gap-4">
              <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-cyan-neon" />
              <div>
                <h3 className="font-headline font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-white/80">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function PartnersSection() {
  const logos = ["Petronas", "HalTech", "Airbus", "Sepang Aircraft Engineering", "Raya Airways", "UMW", "KAF", "KWAP", "Coway", "Universiti Malaya"];

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="rounded-lg border-2 border-magenta-neon p-px shadow-[0_0_24px_rgba(255,0,255,0.35)]">
          <div className="rounded-lg bg-cyber-bg px-6 py-10 md:px-10">
            <h2 className="mb-10 text-center font-headline text-xl font-bold uppercase tracking-widest text-magenta-neon">WE SECURED THE BEST</h2>
            <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
              {logos.map((name) => (
                <li key={name} className="flex h-16 items-center justify-center border border-white/10 px-3 text-center text-xs font-semibold text-white/70">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
