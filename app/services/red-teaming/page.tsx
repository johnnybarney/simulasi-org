import { PageShell } from "@/components/layout/PageShell";
import {
  ComparisonSection,
  RedTeamBenefitsSection,
  RedTeamCtaSection,
  RedTeamHero,
  RedTeamMethodologySection,
} from "@/components/sections/red-teaming/RedTeamingSections";

export default function RedTeamingPage() {
  return (
    <PageShell headerVariant="red-teaming" footerVariant="red-teaming" activeHref="/services/red-teaming">
      <RedTeamHero />
      <RedTeamMethodologySection />
      <RedTeamBenefitsSection />
      <ComparisonSection />
      <RedTeamCtaSection />
    </PageShell>
  );
}
