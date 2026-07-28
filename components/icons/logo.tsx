import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.svg"
      alt="CodeHurdle"
      className={cn("h-10 w-auto shrink-0 self-start object-contain", className)}
    />
  );
}