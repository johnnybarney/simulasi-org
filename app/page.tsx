import { PageShell } from "@/components/layout/PageShell";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { ServicePillarsSection } from "@/components/sections/home/ServicePillarsSection";

export default function HomePage() {
  return (
    <PageShell headerVariant="home" footerVariant="home" activeHref="/">
      <HeroSection />
      <ServicePillarsSection />
    </PageShell>
  );
}
