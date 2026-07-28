import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CodeWindowProps {
  fileName: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

/**
 * Editor-chrome mockup used as the "hero visual" instead of a stock
 * illustration — reinforces that CodeHurdle's product IS the coding surface.
 */
export function CodeWindow({ fileName, children, footer, className }: CodeWindowProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border-default bg-code-bg shadow-[0_1px_0_0_rgba(0,0,0,0.02)]",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-border-subtle px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-border-default" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-default" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-default" />
        </div>
        <span className="font-mono text-xs text-tertiary">{fileName}</span>
        <div className="w-[52px]" aria-hidden />
      </div>

      <div className="overflow-x-auto px-5 py-5">
        <pre className="font-mono text-[13px] leading-[1.7] text-secondary">
          <code>{children}</code>
        </pre>
      </div>

      {footer && (
        <div className="border-t border-border-subtle px-4 py-3">{footer}</div>
      )}
    </div>
  );
}

interface CodeLineProps {
  lineNumber: number;
  children: ReactNode;
  highlighted?: boolean;
}

/** A single numbered line inside a CodeWindow, with optional accent highlight. */
export function CodeLine({ lineNumber, children, highlighted }: CodeLineProps) {
  return (
    <div
      className={cn(
        "-mx-5 flex px-5",
        highlighted && "border-l-2 border-accent bg-accent/5"
      )}
    >
      <span className="mr-4 w-4 select-none text-right text-tertiary">{lineNumber}</span>
      <span className="flex-1 whitespace-pre">{children}</span>
    </div>
  );
}

/** Syntax-token helpers for hand-styled code lines (no runtime highlighter needed). */
export const tok = {
  keyword: (t: string) => <span className="text-accent">{t}</span>,
  string: (t: string) => <span className="text-primary">{t}</span>,
  comment: (t: string) => <span className="text-tertiary">{t}</span>,
  fn: (t: string) => <span className="text-primary">{t}</span>,
};
