import { PageShell } from "@/components/layout/PageShell";
import {
  LifecycleSection,
  LiveSimBenefitsSection,
  LiveSimCtaSection,
  LiveSimHero,
  MethodologySection,
} from "@/components/sections/live-simulation/LiveSimulationSections";

export default function LiveSimulationPage() {
  return (
    <PageShell headerVariant="live-simulation" footerVariant="live-simulation">
      <LiveSimHero />
      <MethodologySection />
      <LiveSimBenefitsSection />
      <LifecycleSection />
      <LiveSimCtaSection />
    </PageShell>
  );
}
