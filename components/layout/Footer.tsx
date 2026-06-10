import Link from "next/link";
import { Logo } from "@/components/icons/Logo";
import { Container } from "@/components/layout/Container";
import { footerConfigs, type FooterVariant } from "@/lib/navigation";

type FooterProps = {
  variant?: FooterVariant;
};

function SocialIcons() {
  const icons = ["Facebook", "X", "LinkedIn", "YouTube"];
  return (
    <ul className="flex items-center gap-4">
      {icons.map((name) => (
        <li key={name}>
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-[10px] text-white/60"
            aria-label={name}
          >
            {name[0]}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Footer({ variant = "home" }: FooterProps) {
  const config = footerConfigs[variant];

  if (config.layout === "minimal") {
    return (
      <footer role="contentinfo" className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-sm text-white/60 sm:flex-row">
          <p>{config.copyright}</p>
          {config.themeCredit && <p>{config.themeCredit}</p>}
        </Container>
      </footer>
    );
  }

  if (config.layout === "three-column") {
    return (
      <footer role="contentinfo" className="border-t border-white/10 py-8">
        <Container className="grid items-center gap-6 md:grid-cols-3">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-4">
              {config.leftLinks?.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col items-center gap-2 text-center">
            {config.showLogo && <Logo size="sm" />}
            {config.copyright && (
              <p className="text-sm text-white/70">{config.copyright}</p>
            )}
          </div>
          <div className="flex justify-end">
            {config.rightLinks && config.rightLinks.length > 0 ? (
              <nav aria-label="Footer secondary navigation">
                <ul className="flex flex-wrap justify-end gap-4">
                  {config.rightLinks.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-white/70 hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : (
              <SocialIcons />
            )}
          </div>
        </Container>
      </footer>
    );
  }

  return (
    <footer
      role="contentinfo"
      className="relative overflow-hidden pb-10 pt-6"
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56 overflow-hidden opacity-70"
        aria-hidden="true"
      >
        <div className="synthwave-grid absolute inset-x-0 bottom-0 h-full w-full" />
      </div>
      <Container className="relative flex flex-col items-center gap-5 text-center">
        {config.showLogo && <Logo size="sm" />}
        <p className="text-sm text-white/80">{config.copyright}</p>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-8">
            {config.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
