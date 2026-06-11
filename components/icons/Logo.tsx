import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md";
};

export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const textClass = size === "sm" ? "text-base" : "text-lg";
  const iconBox = size === "sm" ? "h-7 w-7 md:h-8 md:w-8" : "h-8 w-8 md:h-10 md:w-10";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn("relative shrink-0 overflow-hidden", iconBox)}>
        <Image
          src="/images/rpmylogo.jpg"
          alt=""
          width={1080}
          height={607}
          priority
          aria-hidden="true"
          className="h-full w-auto max-w-none object-cover object-left"
        />
      </div>
      {showText && (
        <span
          className={cn(
            "font-brand font-bold tracking-tight text-white",
            textClass,
          )}
        >
          Simulasi
        </span>
      )}
    </div>
  );
}
