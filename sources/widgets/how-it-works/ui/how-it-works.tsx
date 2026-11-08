import { getTranslations } from "next-intl/server";

export async function HowItWorks() {
  const t = await getTranslations("steps");
  const steps = [
    { index: "01", title: t("hostTitle"), text: t("hostText") },
    { index: "02", title: t("playersTitle"), text: t("playersText") },
    { index: "03", title: t("orderTitle"), text: t("orderText") },
  ];

  return (
    <section className="section" id="how">
      <div className="section-heading">
        <h2>{t("title")}</h2>
        <p>{t("lead")}</p>
      </div>
      <ol className="steps">
        {steps.map((step) => (
          <li key={step.index}>
            <span>{step.index}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
