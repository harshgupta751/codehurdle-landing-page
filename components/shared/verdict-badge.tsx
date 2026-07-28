import { Check, X, Loader2, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Verdict } from "@/types";

interface VerdictBadgeProps {
  verdict: Verdict;
  className?: string;
}

const VERDICT_CONFIG: Record<
  Verdict,
  { label: string; icon: typeof Check; className: string }
> = {
  accepted: {
    label: "Accepted",
    icon: Check,
    className: "bg-accent/10 text-accent border-accent/30",
  },
  "wrong-answer": {
    label: "Wrong Answer",
    icon: X,
    className: "bg-danger/10 text-danger border-danger/30",
  },
  pending: {
    label: "Pending",
    icon: Clock,
    className: "bg-surface-raised text-tertiary border-border-default",
  },
  running: {
    label: "Running",
    icon: Loader2,
    className: "bg-surface-raised text-secondary border-border-default",
  },
};

/**
 * Judge-verdict style badge — CodeHurdle's recurring visual motif tying the
 * Hero, Features, and Mock Interview sections back to the act of submitting code.
 */
export function VerdictBadge({ verdict, className }: VerdictBadgeProps) {
  const config = VERDICT_CONFIG[verdict];
  const Icon = config.icon;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 font-mono text-xs font-medium",
        config.className,
        className
      )}
    >
      <Icon className={cn("h-3.5 w-3.5", verdict === "running" && "animate-spin")} />
      {config.label}
    </span>
  );
}
