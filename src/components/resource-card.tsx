import Link from "next/link";
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

export function ResourceCard({
  resource,
  locale,
}: {
  resource: Resource;
  locale: Locale;
}) {
  const { data } = resource;
  return (
    <Link
      href={`/${locale}/${libraryPath[data.type]}/${data.slug[locale]}`}
      className="group block focus-visible:outline-none"
    >
      <Card className="h-full transition group-hover:-translate-y-0.5 group-hover:border-primary/45 group-focus-visible:ring-3 group-focus-visible:ring-ring/40">
        <CardHeader>
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{typeLabel[locale][data.type]}</Badge>
            {data.type === "visual_prompt" ? (
              <Badge variant="secondary">
                {data.visual_prompt.media_type === "image" ? "Image" : "Video"}
              </Badge>
            ) : null}
          </div>
          <CardTitle>{data.title[locale]}</CardTitle>
          <CardDescription>{data.summary[locale]}</CardDescription>
          <p className="text-xs text-muted-foreground">
            {locale === "ms" ? "Disemak" : "Reviewed"}:{" "}
            {data.review.last_reviewed ?? "—"}
          </p>
        </CardHeader>
      </Card>
    </Link>
  );
}
