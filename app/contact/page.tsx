import { PageShell } from "@/components/layout/PageShell";
import {
  ContactHero,
  ContactMainSection,
  ContactMapSection,
} from "@/components/sections/contact/ContactSections";

export const metadata = {
  title: "Contact Us | Simulasi.org",
  description:
    "Get in touch with Simulasi.org for platform demos, cyber exercise services, and partnership inquiries.",
};

export default function ContactPage() {
  return (
    <PageShell headerVariant="contact" footerVariant="home" activeHref="/contact">
      <ContactHero />
      <ContactMainSection />
      <ContactMapSection />
    </PageShell>
  );
}
