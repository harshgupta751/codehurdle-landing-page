import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <span className="inline-flex w-fit items-center rounded-full border border-border-default bg-surface px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-secondary">
        {eyebrow}
      </span>
      <h2 className={cn("text-h2 font-semibold text-balance text-primary", align === "center" && "max-w-2xl")}>
        {title}
      </h2>
      {description && (
        <p className={cn("max-w-xl text-base text-secondary leading-relaxed", align === "center" && "max-w-lg")}>
          {description}
        </p>
      )}
    </div>
  );
}
