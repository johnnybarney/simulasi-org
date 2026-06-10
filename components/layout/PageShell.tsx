import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { FooterVariant, HeaderVariant } from "@/lib/navigation";

type PageShellProps = {
  children: React.ReactNode;
  headerVariant?: HeaderVariant;
  footerVariant?: FooterVariant;
  activeHref?: string;
};

export function PageShell({
  children,
  headerVariant = "home",
  footerVariant = "home",
  activeHref,
}: PageShellProps) {
  return (
    <>
      <Header variant={headerVariant} activeHref={activeHref} />
      <main>{children}</main>
      <Footer variant={footerVariant} />
    </>
  );
}
