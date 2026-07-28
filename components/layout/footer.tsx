import Link from "next/link";
import { Logo } from "@/components/icons/logo";
import { NAV_LINKS, SOCIAL_LINKS, SITE_CONFIG } from "@/lib/constants";

const FOOTER_COLUMNS = [
  {
    heading: "Product",
    links: NAV_LINKS,
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "#blog" },
      { label: "Editorials", href: "#editorials" },
      { label: "Roadmaps", href: "#product" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface">
      <div className="container flex flex-col gap-12 py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 flex flex-col gap-4 sm:col-span-1">
            <Logo />
            <p className="max-w-[220px] text-sm leading-relaxed text-secondary">
              Pattern-based DSA practice and mock interviews for ambitious engineers.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-border-default text-tertiary transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading} className="flex flex-col gap-3">
              <span className="font-mono text-xs font-medium uppercase tracking-wider text-tertiary">
                {column.heading}
              </span>
              {column.links.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className="text-sm text-secondary transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-border-subtle pt-8 sm:flex-row sm:items-center">
          <span className="text-xs text-tertiary">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <Link href="#privacy" className="text-xs text-tertiary transition-colors hover:text-primary">
              Privacy policy
            </Link>
            <Link href="#terms" className="text-xs text-tertiary transition-colors hover:text-primary">
              Terms of service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
