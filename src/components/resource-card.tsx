import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ImageIcon,
  MessageSquareText,
  Sparkles,
  Video,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Resource } from "@/lib/content/repository";
import type { Locale } from "@/lib/content/schema";

const libraryPath = {
  skill: "skills",
  llm_prompt: "llm-prompts",
  visual_prompt: "visual-prompts",
} as const;

const typeLabel = {
  ms: {
    skill: "Kemahiran AI",
    llm_prompt: "Prompt LLM",
    visual_prompt: "Prompt Visual",
  },
  en: {
    skill: "AI Skill",
    llm_prompt: "LLM Prompt",
    visual_prompt: "Visual Prompt",
  },
} as const;

const audienceLabel = {
  ms: {
    teachers_educators: "Guru & Pendidik",
    education_officers_jpn: "Pegawai Pendidikan & JPN",
    public_sector: "Sektor Awam",
    sme_entrepreneurs: "SME & Usahawan",
    professionals: "Profesional",
    students: "Pelajar",
  },
  en: {
    teachers_educators: "Teachers & Educators",
    education_officers_jpn: "Education Officers & JPN",
    public_sector: "Public Sector",
    sme_entrepreneurs: "SMEs & Entrepreneurs",
    professionals: "Professionals",
    students: "Students",
  },
} as const;

export function ResourceCard({
  resource,
  locale,
}: {
  resource: Resource;
  locale: Locale;
}) {
  const { data } = resource;
  const visual = data.type === "visual_prompt" ? data.visual_prompt : null;
  const icon =
    data.type === "skill" ? (
      <Sparkles aria-hidden="true" className="size-4" />
    ) : data.type === "llm_prompt" ? (
      <MessageSquareText aria-hidden="true" className="size-4" />
    ) : visual?.media_type === "video" ? (
      <Video aria-hidden="true" className="size-4" />
    ) : (
      <ImageIcon aria-hidden="true" className="size-4" />
    );
  return (
    <Link
      href={`/${locale}/${libraryPath[data.type]}/${data.slug[locale]}`}
      className="group block focus-visible:outline-none"
    >
      <Card className="h-full overflow-hidden transition duration-200 group-hover:-translate-y-1 group-hover:border-primary/45 group-hover:shadow-[0_18px_45px_rgba(20,44,55,0.1)] group-focus-visible:ring-3 group-focus-visible:ring-ring/40">
        {visual ? (
          <div className="relative aspect-[16/9] overflow-hidden border-b bg-secondary">
            <Image
              src={visual.preview.src}
              alt={visual.preview.alt[locale]}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-300 group-hover:scale-[1.025]"
            />
            <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-md bg-foreground/88 px-2.5 py-1 text-xs font-bold text-background backdrop-blur">
              {visual.media_type === "image" ? "Imej" : "Video"}
            </span>
          </div>
        ) : (
          <div
            className={`h-1.5 ${data.type === "skill" ? "bg-primary" : "bg-prompt"}`}
            aria-hidden="true"
          />
        )}
        <CardHeader className="flex h-full flex-col">
          <div className="flex flex-wrap items-center gap-2">
            <Badge
              className={`gap-1.5 ${data.type === "llm_prompt" ? "bg-prompt text-accent-foreground" : data.type === "visual_prompt" ? "bg-visual text-white" : ""}`}
            >
              {icon}
              {typeLabel[locale][data.type]}
            </Badge>
          </div>
          <CardTitle className="text-[1.12rem] leading-snug">
            {data.title[locale]}
          </CardTitle>
          <CardDescription className="line-clamp-3 text-[0.925rem]">
            {data.summary[locale]}
          </CardDescription>
          <div className="mt-auto flex items-end justify-between gap-4 border-t pt-4 text-xs text-muted-foreground">
            <div>
              <p className="font-bold text-foreground">
                {audienceLabel[locale][
                  data
                    .audiences[0] as keyof (typeof audienceLabel)[typeof locale]
                ] ?? data.audiences[0]}
              </p>
              <p className="mt-1">
                {locale === "ms" ? "Disemak" : "Reviewed"}{" "}
                {data.review.last_reviewed ?? "—"}
              </p>
            </div>
            <ArrowUpRight
              aria-hidden="true"
              className="size-5 shrink-0 text-primary transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
