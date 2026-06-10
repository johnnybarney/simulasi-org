import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md";
};

export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const iconSize = size === "sm" ? 28 : 36;
  const textClass = size === "sm" ? "text-base" : "text-lg";

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="36" y2="36">
            <stop offset="0%" stopColor="#00e5ff" />
            <stop offset="100%" stopColor="#ff00ff" />
          </linearGradient>
        </defs>
        <circle cx="18" cy="18" r="16" stroke="url(#logo-gradient)" strokeWidth="1.5" />
        <path
          d="M12 11c2.5 0 4.5 2 4.5 4.5S14.5 20 12 20M24 25c-2.5 0-4.5-2-4.5-4.5S21.5 16 24 16"
          stroke="url(#logo-gradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M12 20c2.5 0 4.5 2 4.5 4.5S14.5 29 12 29M24 11c-2.5 0-4.5 2-4.5 4.5S21.5 20 24 20"
          stroke="url(#logo-gradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>
      {showText && (
        <span
          className={cn(
            "font-headline font-bold tracking-tight text-white",
            textClass,
          )}
        >
          Simulasi.org
        </span>
      )}
    </div>
  );
}
