import {
  ArrowRight,
  Bot,
  Compass,
  Layers,
  LineChart,
  Sparkles,
  Wand2,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/motion-primitives";
// import img projects from "@/public/images/projects";
import d1 from "@/public/d1.png"
import d2 from "@/public/d2.png"
import d3 from "@/public/d3.png"

// web site: https://www.joelcalifa.com/projects
import s1 from "@/public/s1.png"
import s2 from "@/public/s2.png"
import s3 from "@/public/s3.png"
/**
 * Project imagery below is mockup-only. All visuals are sourced from
 * Dribbble and credit belongs to the original creators on dribbble.com.
 * Replace these with your own work before shipping.
 */

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
  href: string;
};

const PROJECTS: Project[] = [
  {
    id: "restaurant-app",
    icon: Sparkles,
    iconLabel: "restaurant app",
    title:
      "A restaurant website that makes browsing the menu and ordering feel effortless.",
    description:
      "I designed a clean, appetizing interface where guests can explore dishes, discover the menu, and place an order in just a few taps.",
    meta: "UI/UX Designer, 2026",
    imageRatio: 752 / 497,
    image:
      d1.src,
    imageAlt: "Restaurant app interface mockup",
    href: "#",
  },
  {
    id: "restaurant-mobile-app",
    icon: Compass,
    iconLabel: "restaurant mobile app",
    title: "A mobile-first experience for ordering and booking a table.",
    description:
      "A thumb-friendly mobile app designed for hungry users on the go, with quick navigation, clear dish cards, and a simple checkout flow.",
    meta: "UI/UX Designer, 2026",
    imageRatio: 1024 / 768,
    image:
        d2.src,
    imageAlt: "Restaurant mobile app screens mockup",
    href: "#",
  },
  {
    id: "bank-online",
    icon: LineChart,
    iconLabel: "bank online",
    title: "Online banking that feels clear, calm, and trustworthy.",
    description:
      "A dashboard concept that turns accounts, transfers, and transactions into a simple, readable experience without the usual financial clutter.",
    meta: "UI/UX Designer, 2026",
    imageRatio: 1024 / 768,
    image:
      d3.src,
    imageAlt: "Online banking dashboard mockup",
    href: "#",
  },
  {
    id: "healthcare-app",
    icon: Wand2,
    iconLabel: "healthcare app",
    title:
      "A multi-role platform for booking medical appointments in a few clicks.",
    description:
      "I built a full-stack booking platform where patients, doctors, and admins each get their own tailored experience, from scheduling to managing appointments.",
    meta: "Full-Stack Developer & Designer, 2026",
    imageRatio: 1024 / 768,
    image:
      s1.src,
    imageAlt: "Healthcare appointment booking platform mockup",
    href: "https://clack-ynsn.onrender.com/",
  },
  {
    id: "btp-app",
    icon: Layers,
    iconLabel: "btp app",
    title:
      "A web app that helps construction professionals create and manage quotes.",
    description:
      "Built for the construction sector, it simplifies quote creation and follow-up so professionals spend less time on paperwork and more time on site.",
    meta: "Full-Stack Developer, 2026",
    imageRatio: 1024 / 768,
    image:
      s2.src,
    imageAlt: "Construction quote management app mockup",
    href: "https://oro-frontend.onrender.com/",
  },
  {
    id: "hotel-online",
    icon: Bot,
    iconLabel: "hotel online",
    title: "An online hotel experience, from browsing rooms to booking a stay.",
    description:
      "A responsive hotel website that lets guests explore rooms, check availability, and reserve their stay through a smooth, simple flow.",
    meta: "Front-End Developer, 2026",
    imageRatio: 1024 / 768,
    image:
      s3.src,
    imageAlt: "Online hotel booking website mockup",
    href: "https://github.com/yvannDev/online_hotel_front.git",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              My projects
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              From playful experiments to thoughtful systems, a look at the
              work I&rsquo;m proud to have shipped.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  const isExternal = project.href.startsWith("http");
  const linkProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <Link
        href={project.href}
        aria-label={project.iconLabel}
        className="focus-ring block rounded-3xl"
        {...linkProps}
      >
        <article className="project-card flex cursor-pointer flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5">
          <header className="flex items-center gap-2.5 px-1 pt-2">
            <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
              <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
            </span>
            <span className="text-sm font-medium tracking-tight text-foreground">
              {project.iconLabel}
            </span>
          </header>

          <div
            className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
            style={{ aspectRatio: project.imageRatio }}
          >
            <div className="project-card__image-inner">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
                className="object-cover"
                priority={index < 2}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2.5 px-1 pb-1">
            <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
              {project.title}
            </h3>
            <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
              {project.description}
            </p>
          </div>

          <p className="px-1 pb-2 text-[12px] tracking-tight text-foreground/50">
            {project.meta}
          </p>
        </article>
      </Link>
    </FadeIn>
  );
}