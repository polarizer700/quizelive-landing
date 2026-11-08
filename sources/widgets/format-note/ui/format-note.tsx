import { getTranslations } from "next-intl/server";

export async function FormatNote() {
  const t = await getTranslations("format");

  return (
    <section className="format">
      <h2>{t("title")}</h2>
      <p>{t("text")}</p>
    </section>
  );
}
