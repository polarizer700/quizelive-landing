import { getTranslations } from "next-intl/server";

import { site } from "@shared/config";

export async function SiteFooter() {
  const brand = await getTranslations("brand");
  const footer = await getTranslations("footer");

  return (
    <footer className="site-footer">
      <p className="brand-mark">{brand("mark")}</p>
      <p>{footer("note")}</p>
      <p className="footer-url">{site.url.replace("https://", "")}</p>
    </footer>
  );
}
