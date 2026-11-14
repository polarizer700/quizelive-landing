import { getTranslations } from "next-intl/server";
import Link from "next/link";

import { operator, site } from "@shared/config";

export async function SiteFooter() {
  const brand = await getTranslations("brand");
  const footer = await getTranslations("footer");

  return (
    <footer className="site-footer">
      <p className="brand-mark">{brand("mark")}</p>
      <p>{footer("note")}</p>
      <nav className="footer-legal" aria-label="Документы">
        <Link href={operator.privacyUrl}>{footer("privacy")}</Link>
        <Link href={operator.termsUrl}>{footer("terms")}</Link>
        <Link href={operator.cookiesUrl}>{footer("cookies")}</Link>
        <span className="age-mark">{operator.ageMark}</span>
      </nav>
      <p className="footer-url">{site.url.replace("https://", "")}</p>
    </footer>
  );
}
