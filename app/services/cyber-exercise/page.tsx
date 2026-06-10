import { PageShell } from "@/components/layout/PageShell";
import {
  CoreOfferingsSection,
  CyberCtaSection,
  CyberExerciseHero,
  CyberWhyChooseSection,
} from "@/components/sections/cyber-exercise/CyberExerciseSections";

export default function CyberExercisePage() {
  return (
    <PageShell headerVariant="cyber-exercise" footerVariant="cyber-exercise">
      <CyberExerciseHero />
      <CoreOfferingsSection />
      <CyberWhyChooseSection />
      <CyberCtaSection />
    </PageShell>
  );
}
