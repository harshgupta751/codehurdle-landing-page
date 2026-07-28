import { cn } from "@/lib/utils";
import type { Feature } from "@/types";

interface FeatureCardProps {
  feature: Feature;
  className?: string;
}

export function FeatureCard({ feature, className }: FeatureCardProps) {
  const { icon: Icon, title, description, stat, size = "md" } = feature;

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-lg border border-border-default bg-surface p-6 transition-colors duration-200 hover:border-accent/40 sm:p-7",
        size === "lg" && "gap-8",
        size === "md" && "gap-6",
        className
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border-default bg-surface-raised text-accent transition-colors duration-200 group-hover:border-accent/40">
          <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-h3 font-semibold text-primary">{title}</h3>
          <p className="text-sm leading-relaxed text-secondary">{description}</p>
        </div>
      </div>

      {stat && (
        <span className="font-mono text-xs font-medium text-tertiary">{stat}</span>
      )}
    </div>
  );
}
