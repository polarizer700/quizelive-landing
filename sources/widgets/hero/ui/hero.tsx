import { getTranslations } from "next-intl/server";

import { site } from "@shared/config";
import { ButtonLink } from "@shared/ui";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="kicker">{t("kicker")}</p>
        <h1>{t("title")}</h1>
        <p className="lede">{t("text")}</p>
        <div className="actions">
          <ButtonLink href={site.playUrl} tone="signal">
            {t("play")}
          </ButtonLink>
          <ButtonLink href={site.adminUrl} tone="quiet">
            {t("login")}
          </ButtonLink>
        </div>
      </div>
      <div className="stage" aria-hidden="true">
        <div className="stage-top">
          <span className="stage-live">{t("stageLive")}</span>
          <span>{t("stageRoom")}</span>
        </div>
        <p className="stage-question">{t("stageQuestion")}</p>
        <div className="stage-options">
          <span className="stage-option stage-option-correct">{t("stageOptionA")}</span>
          <span className="stage-option">{t("stageOptionB")}</span>
          <span className="stage-option">{t("stageOptionC")}</span>
        </div>
        <div className="phones">
          <span className="phone-mark phone-mark-signal" />
          <span className="phone-mark phone-mark-paper" />
          <span className="phone-mark" />
          <p>{t("stagePlayers")}</p>
        </div>
      </div>
    </section>
  );
}
