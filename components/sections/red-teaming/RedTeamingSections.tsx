import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { GradientText } from "@/components/ui/GradientText";
import { ReferenceImage } from "@/components/ui/ReferenceImage";
import { routes } from "@/lib/navigation";

export function RedTeamHero() {
  return (
    <section className="relative py-20 md:py-28">
      <ReferenceImage src="/images/screen5.png" className="absolute inset-0 opacity-50" imageClassName="object-[25%_15%] scale-[1.8]" />
      <Container className="relative max-w-2xl">
        <h1 className="font-headline text-4xl font-bold leading-tight text-white md:text-5xl">
          Red Teaming & Adversarial Simulation
        </h1>
        <p className="mt-6 text-lg text-white/90">
          Simulate real-world adversaries to uncover hidden vulnerabilities and fortify your defenses against sophisticated threats.
        </p>
        <div className="mt-8">
          <Button href={routes.contact} variant="primary" className="shadow-[0_0_20px_rgba(0,229,255,0.5)]">
            Schedule Your Assessment
          </Button>
        </div>
      </Container>
    </section>
  );
}

export function RedTeamMethodologySection() {
  const steps = [
    { title: "Planning", description: "Coordinate objectives and define the scope against business critical assets." },
    { title: "Reconnaissance", description: "Simulate a reconnaissance phase to identify potential entry points." },
    { title: "Attack Simulation", description: "Execute controlled attacks to access sensitive information and systems." },
    { title: "Reporting", description: "Detailed technical and executive reports outlining security gaps." },
    { title: "Remediation", description: "Provide actionable insights to fix identified vulnerabilities and improve security posture." },
  ];

  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="mb-12 text-center font-headline text-2xl font-bold text-white">Our Methodology</h2>
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <li key={step.title} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-cyan-neon text-cyan-neon">{i + 1}</div>
              <h3 className="mb-2 font-headline font-bold text-white">{step.title}</h3>
              <p className="text-xs text-white/80">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function RedTeamBenefitsSection() {
  const items = [
    { title: "Uncover Hidden Vulnerabilities", description: "Identify and address critical weaknesses." },
    { title: "Enhance Cyber Resilience", description: "Build a stronger, more adaptable security posture." },
    { title: "Strengthen Incident Response", description: "Improve your team's readiness and response procedures." },
    { title: "Reduce Risk", description: "Proactively mitigate potential threats and financial loss." },
    { title: "Improve Compliance", description: "Meet industry standards and regulatory requirements." },
  ];

  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="mb-12 text-center font-headline text-2xl font-bold text-white">Key Benefits</h2>
        <ul className="grid gap-8 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item.title} className="flex gap-4">
              <div className="h-10 w-10 shrink-0 rounded-full border border-cyan-neon/50 bg-cyan-neon/10" />
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

export function ComparisonSection() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="mb-12 text-center font-headline text-2xl font-bold text-white">
          Red Teaming vs. Penetration Testing
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border-2 border-cyan-neon p-6 shadow-[0_0_20px_rgba(0,229,255,0.25)]">
            <h3 className="mb-4 font-headline text-xl font-bold text-cyan-neon">Penetration Testing</h3>
            <ul className="mb-6 space-y-2 text-sm text-white/90">
              <li><strong>Objective:</strong> Identify specific vulnerabilities</li>
              <li><strong>Scope:</strong> Limited to target systems</li>
              <li><strong>Outcome:</strong> List of vulnerabilities and remediation</li>
            </ul>
            <p className="text-center font-bold text-cyan-neon">Focused Scope</p>
          </div>
          <div className="rounded-lg border-2 border-magenta-neon p-6 shadow-[0_0_20px_rgba(255,0,255,0.25)]">
            <h3 className="mb-4 font-headline text-xl font-bold text-magenta-neon">Red Teaming</h3>
            <ul className="mb-6 space-y-2 text-sm text-white/90">
              <li><strong>Objective:</strong> Test holistic defense capabilities</li>
              <li><strong>Scope:</strong> Full spectrum: physical, social, digital</li>
              <li><strong>Outcome:</strong> Detailed analysis of attack paths</li>
            </ul>
            <p className="text-center font-bold text-magenta-neon">Holistic Scope</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function RedTeamCtaSection() {
  return (
    <section className="py-16 md:py-24">
      <Container className="text-center">
        <h2 className="font-headline text-3xl font-bold text-white md:text-4xl">
          Ready to Test <GradientText as="span">Your Defenses?</GradientText>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-white/90">
          Simulate real-world adversaries to uncover hidden vulnerabilities and fortify your defenses against sophisticated threats.
        </p>
        <div className="mt-8">
          <Button href={routes.contact} variant="primary" className="px-8 py-4 shadow-[0_0_20px_rgba(0,229,255,0.5)]">
            Schedule Your Assessment
          </Button>
        </div>
      </Container>
    </section>
  );
}
