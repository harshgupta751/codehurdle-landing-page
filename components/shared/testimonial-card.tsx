import Image from "next/image";
import { Linkedin, Youtube, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

const PLATFORM_ICON = {
  linkedin: Linkedin,
  youtube: Youtube,
  whatsapp: MessageCircle,
};

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const PlatformIcon = PLATFORM_ICON[testimonial.platform];

  return (
    <div
      className={cn(
        "flex h-full flex-col justify-between gap-6 rounded-lg border border-border-default bg-surface p-6",
        className
      )}
    >
      <div className="flex flex-col gap-4">
        {testimonial.resultTag && (
          <span className="inline-flex w-fit items-center rounded-md border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-xs font-medium text-accent">
            {testimonial.resultTag}
          </span>
        )}
        <p className="text-[15px] leading-relaxed text-secondary">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src={testimonial.avatarUrl}
            alt=""
            width={36}
            height={36}
            className="rounded-full border border-border-default"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-primary">{testimonial.name}</span>
            <span className="text-xs text-tertiary">
              {testimonial.role} · {testimonial.company}
            </span>
          </div>
        </div>
        <PlatformIcon className="h-4 w-4 shrink-0 text-tertiary" strokeWidth={1.75} />
      </div>
    </div>
  );
}
