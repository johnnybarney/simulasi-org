import Image from "next/image";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { GradientText } from "@/components/ui/GradientText";
import { Container } from "@/components/layout/Container";
import {
  cyberExerciseSharedContent,
  type CyberOffering,
  type CyberOfferingBlock,
} from "@/lib/constants/cyber-exercise-content";
import { routes } from "@/lib/navigation";

function OfferingBlockContent({ block }: { block: CyberOfferingBlock }) {
  return (
    <div className="flex flex-col items-center text-center">
      {block.iconSrc && (
        <div className="relative mb-4 h-32 w-32 shrink-0">
          <Image
            src={block.iconSrc}
            alt={block.iconAlt ?? block.label}
            fill
            sizes="128px"
            className="object-contain"
          />
        </div>
      )}
      <p className="mb-2 text-sm font-bold text-cyan-neon">{block.label}</p>
      <p className="text-sm leading-relaxed text-white/90">{block.text}</p>
    </div>
  );
}

function OfferingCard({ offering }: { offering: CyberOffering }) {
  const hasIcons = offering.blocks.some((block) => block.iconSrc);

  return (
    <li className="gradient-cyan-magenta border-glow-cyan-magenta rounded-lg p-px">
      <div className="h-full rounded-lg bg-cyber-bg p-6">
        <h3 className="mb-6 flex min-h-[4.5rem] items-center justify-center text-center font-headline text-lg font-bold">
          <GradientText as="span">{offering.title}</GradientText>
        </h3>
        <div className={hasIcons ? "grid grid-cols-2 gap-6" : "space-y-6"}>
          {offering.blocks.map((block) => (
            <OfferingBlockContent key={block.label} block={block} />
          ))}
        </div>
      </div>
    </li>
  );
}

export function TabletopExerciseHero() {
  const { tagline, heroDescription, heroVideo } = cyberExerciseSharedContent;

  return (
    <section className="py-16 md:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Breadcrumb
            items={[
              { label: "Interactive Tabletop Exercise ( iTTX )", href: routes.ittx },
              { label: "Page" },
            ]}
          />
          <h1 className="font-headline text-4xl font-bold md:text-5xl">
            <GradientText as="span">Interactive Tabletop Exercise ( iTTX )</GradientText>
          </h1>
          <p className="mt-4 font-headline text-xl font-bold text-white">{tagline}</p>
          <p className="mt-6 text-base leading-relaxed text-white/90">{heroDescription}</p>
        </div>
        <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border-gradient-cyan-magenta bg-cyber-bg">
          <video
            src={heroVideo.src}
            aria-label={heroVideo.alt}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
}

export function TabletopCoreOfferingsSection() {
  const { offerings } = cyberExerciseSharedContent;

  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="mb-12 text-center font-headline text-2xl font-bold text-white md:text-3xl">
          Strategy & Tactical Solutions
        </h2>
        <ul className="grid gap-6 lg:grid-cols-3">
          {offerings.map((item) => (
            <OfferingCard key={item.title} offering={item} />
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function TabletopWhyChooseSection() {
  const { whyChoose } = cyberExerciseSharedContent;

  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="mb-12 text-center font-headline text-2xl font-bold text-white md:text-3xl">
          Mission Assurance
        </h2>
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((item) => (
            <li key={item.title} className="text-center">
              <div className="relative mx-auto mb-4 h-20 w-20">
                <Image
                  src={item.iconSrc}
                  alt={item.iconAlt}
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </div>
              <h3 className="mb-2 font-headline text-base font-bold text-white">{item.title}</h3>
              <p className="text-sm text-white/80">{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

