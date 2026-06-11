import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/layout/Section";
import { routes } from "@/lib/navigation";

export const metadata = {
  title: "MNI-X 3D Kit | RP.my",
  description: "MNI-X 3D Kit product overview.",
};

export default function MniX3dKitPage() {
  return (
    <PageShell headerVariant="home" footerVariant="home" activeHref={routes.mniX3dKit}>
      <Section ariaLabelledby="mni-x-heading">
        <h1 id="mni-x-heading" className="text-center font-headline text-3xl font-bold text-white md:text-4xl">
          MNI-X 3D Kit
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-center text-white/90">
          Product details coming soon. Contact us to learn more about the MNI-X 3D Kit.
        </p>
      </Section>
    </PageShell>
  );
}
