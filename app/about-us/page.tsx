import { PageShell } from "@/components/layout/PageShell";
import { AboutSection } from "@/components/sections/home/AboutSection";
import { CriticalInsightSection } from "@/components/sections/home/CriticalInsightSection";
import { MeasurableOutcomesSection } from "@/components/sections/home/MeasurableOutcomesSection";
import { WhyChooseSection } from "@/components/sections/home/WhyChooseSection";

export default function AboutUsPage() {
  return (
    <PageShell headerVariant="about-us" footerVariant="home" activeHref="/about-us">
      <AboutSection />
      <WhyChooseSection />
      <CriticalInsightSection />
      <MeasurableOutcomesSection />
    </PageShell>
  );
}
