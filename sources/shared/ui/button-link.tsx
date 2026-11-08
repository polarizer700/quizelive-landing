import type { ReactNode } from "react";

export function ButtonLink({
  href,
  tone = "solid",
  children,
}: {
  href: string;
  tone?: "solid" | "signal" | "quiet" | "light";
  children: ReactNode;
}) {
  return (
    <a className={`button button-${tone}`} href={href}>
      {children}
    </a>
  );
}
