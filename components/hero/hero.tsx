import type { ReactNode } from "react";

import { HeroCtas } from "./hero-ctas";
import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";
import { PortraitMorph } from "./portrait-morph";

const PORTRAIT_SRC = "/yvan.png";
const PORTRAIT_HOVER_SRC = "/josh_wave.webp";

export function Hero(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 pt-28 pb-16 sm:px-10 sm:pt-44 sm:pb-24 md:pt-52 md:pb-32">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-8">
          <FadeIn className="flex min-w-0 flex-col gap-4">
            <p className="text-[18px] leading-tight tracking-tight font-medium text-foreground sm:text-[20px]">
              Hey
              <span aria-hidden="true" className="mx-0.5">
                
              </span>
              , I&rsquo;m yvan
            </p>

            <h1 className="text-[2rem] font-medium leading-[1.05] tracking-tight text-foreground break-words sm:text-[2.5rem] md:text-[2.5rem] lg:text-[3.65rem]">
              <span className="block">web developer &</span>
              <span className="block">ui ux designer</span>
            </h1>

            <p className="max-w-[34ch] text-[18px] leading-[1.4] tracking-tight text-foreground/65 sm:text-[22px]">
              Independent engineer focused on interfaces that feel calm,
              considered, and quietly fast.
            </p>

            <HeroCtas />
          </FadeIn>

          <ScaleUnblur className="flex justify-center md:justify-end">
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm md:max-w-105">
              <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                <PortraitMorph
                  srcA={PORTRAIT_SRC}
                  srcB={PORTRAIT_HOVER_SRC}
                  alt="yvan portrait"
                />
              </div>
            </div>
          </ScaleUnblur>
        </div>
      </div>
    </section>
  );
}