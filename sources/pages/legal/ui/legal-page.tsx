import Link from "next/link";
import type { ReactNode } from "react";

import { operator, site } from "@shared/config";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="legal-page">
      <p className="brand-mark">
        <Link href="/">{site.name}</Link>
      </p>
      <h1>{title}</h1>
      <p className="legal-meta">
        Черновик для вычитки. Оператор: {operator.legalName}, ИНН {operator.inn}, адрес {operator.address}, почта{" "}
        <a href={`mailto:${operator.email}`}>{operator.email}</a>.
      </p>
      <div className="legal-body">{children}</div>
      <p className="legal-links">
        <Link href={operator.privacyUrl}>Политика</Link>
        <Link href={operator.termsUrl}>Соглашение</Link>
        <Link href={operator.cookiesUrl}>Cookie</Link>
        <span className="age-mark">{operator.ageMark}</span>
      </p>
    </main>
  );
}
