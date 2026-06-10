import { PageShell } from "@/components/layout/PageShell";
import {
  AiInvestigationsSection,
  ForensicsSection,
  OsintHero,
  OsintWhyChooseSection,
  VulnerabilitySection,
} from "@/components/sections/osint/OsintSections";

export default function OsintPage() {
  return (
    <PageShell headerVariant="osint" footerVariant="osint">
      <OsintHero />
      <AiInvestigationsSection />
      <VulnerabilitySection />
      <ForensicsSection />
      <OsintWhyChooseSection />
    </PageShell>
  );
}
