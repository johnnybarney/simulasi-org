import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { routes } from "@/lib/navigation";
import { homeContent } from "@/lib/constants/home";

function HeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-xl overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 560px"
        className="object-contain object-center"
      />
    </div>
  );
}

export function HeroSection() {
  const { hero } = homeContent;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden py-20 md:py-28"
    >
      <div
        className="circuit-pattern-left pointer-events-none absolute inset-y-0 left-0 w-1/2 opacity-60"
        aria-hidden="true"
      />
      <Container className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h1
            id="hero-heading"
            className="font-headline text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.25rem]"
          >
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={routes.contact} variant="primary">
              {hero.primaryCta}
            </Button>
            <Button href={routes.contact} variant="outline">
              {hero.secondaryCta}
            </Button>
          </div>
        </div>
        <HeroImage src={hero.imageSrc} alt={hero.imageAlt} />
      </Container>
    </section>
  );
}
