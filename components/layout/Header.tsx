import Link from "next/link";
import { Logo } from "@/components/icons/Logo";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import {
  headerActions,
  headerConfigs,
  type HeaderVariant,
  type NavChild,
  type NavItem,
} from "@/lib/navigation";

type HeaderProps = {
  variant?: HeaderVariant;
  activeHref?: string;
};

function NavSubmenuItem({ child }: { child: NavChild }) {
  const hasNestedMenu = Boolean(child.children?.length);

  if (!child.children) {
    return (
      <li>
        <Link
          href={child.href}
          className="block px-4 py-2 text-sm text-white hover:bg-cyan-neon/10 hover:text-cyan-neon"
        >
          {child.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="group/submenu relative">
      <Link
        href={child.href}
        className="flex items-center justify-between gap-3 px-4 py-2 text-sm text-white hover:bg-cyan-neon/10 hover:text-cyan-neon"
      >
        {child.label}
        <span className="text-[10px] opacity-70" aria-hidden="true">
          ▸
        </span>
      </Link>
      <ul
        className={cn(
          "invisible absolute right-full top-0 z-50 mr-1 min-w-[220px] border border-cyan-neon/30 bg-cyber-bg py-2 opacity-0 shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all",
          "group-hover/submenu:visible group-hover/submenu:opacity-100",
        )}
      >
        {hasNestedMenu ? (
          child.children!.map((nested) => (
            <li key={nested.href}>
              <Link
                href={nested.href}
                className="block px-4 py-2 text-sm text-white hover:bg-cyan-neon/10 hover:text-cyan-neon"
              >
                {nested.label}
              </Link>
            </li>
          ))
        ) : (
          <li className="px-4 py-2 text-sm text-white/50">Coming soon</li>
        )}
      </ul>
    </li>
  );
}

function NavDropdown({ item }: { item: NavItem }) {
  return (
    <li className="group relative">
      <Link
        href={item.href}
        className="flex items-center gap-1 text-sm font-medium text-white transition-colors hover:text-cyan-neon"
      >
        {item.label}
        {item.hasDropdown && (
          <span className="text-[10px] opacity-70" aria-hidden="true">
            ▾
          </span>
        )}
      </Link>
      {item.children && item.children.length > 0 && (
        <ul className="invisible absolute right-0 top-full z-50 mt-2 min-w-[240px] border border-cyan-neon/30 bg-cyber-bg py-2 opacity-0 shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all group-hover:visible group-hover:opacity-100">
          {item.children.map((child) => (
            <NavSubmenuItem key={child.label} child={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

export function Header({ variant = "home", activeHref }: HeaderProps) {
  const links = headerConfigs[variant];
  const action = headerActions[variant];

  return (
    <header role="banner" className="relative z-20 bg-cyber-bg">
      <Container as="div" className="flex items-center justify-between gap-4 py-6">
        <Link href="/" aria-label="Simulasi.org home">
          <Logo />
        </Link>
        <div className="flex items-center gap-4 md:gap-6">
          <nav aria-label="Main navigation">
            <ul className="flex flex-wrap items-center justify-end gap-4 md:gap-8">
              {links.map((item) =>
                item.hasDropdown ? (
                  <NavDropdown key={item.label} item={item} />
                ) : (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-cyan-neon",
                        activeHref === item.href
                          ? "text-cyan-neon"
                          : "text-white",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
          {action?.type === "search" && (
            <button
              type="button"
              aria-label="Search"
              className="text-white hover:text-cyan-neon"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          )}
          {action?.type === "client-portal" && (
            <Button href={action.href} variant="outline" className="px-4 py-2 text-xs">
              {action.label}
            </Button>
          )}
          {action?.type === "contact-sales" && (
            <Button href={action.href} variant="outline" className="px-4 py-2 text-xs">
              {action.label}
            </Button>
          )}
          {action?.type === "schedule" && (
            <Button href={action.href} variant="primary" className="px-4 py-2 text-xs">
              {action.label}
            </Button>
          )}
        </div>
      </Container>
    </header>
  );
}
