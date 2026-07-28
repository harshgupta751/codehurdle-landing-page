import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect width="20" height="20" rx="5" className="fill-accent" />
        <path
          d="M7 6.5L4.5 10L7 13.5M13 6.5L15.5 10L13 13.5"
          stroke="hsl(var(--accent-foreground))"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-semibold tracking-tight text-primary">CodeHurdle</span>
    </div>
  );
}
