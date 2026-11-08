import { getTranslations } from "next-intl/server";

import { site } from "@shared/config";
import { ButtonLink } from "@shared/ui";

export async function ClosingCta() {
  const t = await getTranslations("cta");

  return (
    <section className="cta">
      <h2>{t("title")}</h2>
      <p>{t("text")}</p>
      <div className="actions">
        <ButtonLink href={site.playUrl} tone="signal">
          {t("play")}
        </ButtonLink>
        <ButtonLink href={site.adminUrl} tone="light">
          {t("login")}
        </ButtonLink>
      </div>
    </section>
  );
}
