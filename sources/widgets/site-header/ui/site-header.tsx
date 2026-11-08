import { getTranslations } from "next-intl/server";

import { site } from "@shared/config";
import { ButtonLink } from "@shared/ui";

export async function SiteHeader() {
  const brand = await getTranslations("brand");
  const header = await getTranslations("header");

  return (
    <header className="site-header">
      <a className="brand" href="#top">
        <span className="brand-mark">{brand("mark")}</span>
        <span className="brand-name">{brand("name")}</span>
      </a>
      <nav className="site-nav" aria-label={header("how")}>
        <a className="nav-link" href="#how">
          {header("how")}
        </a>
        <a className="nav-link" href={site.adminUrl}>
          {header("login")}
        </a>
        <ButtonLink href={site.playUrl} tone="signal">
          {header("play")}
        </ButtonLink>
      </nav>
    </header>
  );
}
