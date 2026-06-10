import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { routes } from "@/lib/navigation";
import { homeContent } from "@/lib/constants/home";

function HeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[320px] w-full sm:h-[400px] lg:h-[560px] xl:h-[620px]">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 900px"
        className="rounded-lg object-cover object-center shadow-[0_0_40px_rgba(0,229,255,0.12)]"
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
      <Container className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,38%)_minmax(0,62%)] lg:gap-12 xl:gap-16">
        <div className="lg:py-4">
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
        <div className="w-full lg:justify-self-end">
          <HeroImage src={hero.imageSrc} alt={hero.imageAlt} />
        </div>
      </Container>
    </section>
  );
}
