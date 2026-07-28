import { cn } from "@/lib/utils";

interface StatBlockProps {
  value: string;
  label: string;
  align?: "left" | "center";
  className?: string;
}

/** Static stat display (mono numeral over label) for pre-formatted values like "4.9/5". */
export function StatBlock({ value, label, align = "left", className }: StatBlockProps) {
  return (
    <div className={cn("flex flex-col gap-1", align === "center" && "items-center text-center", className)}>
      <span className="mono-nums font-mono text-2xl font-medium text-primary sm:text-3xl">{value}</span>
      <span className="text-xs text-tertiary">{label}</span>
    </div>
  );
}
