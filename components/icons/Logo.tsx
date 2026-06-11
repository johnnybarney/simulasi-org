import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md";
};

export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const textClass = size === "sm" ? "text-base" : "text-lg";

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Image
        src="/images/rpmylogo.jpg"
        alt=""
        width={1080}
        height={607}
        priority
        aria-hidden="true"
        className={cn(
          "w-auto object-contain",
          size === "sm" ? "h-7 md:h-8" : "h-8 md:h-10",
        )}
      />
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
