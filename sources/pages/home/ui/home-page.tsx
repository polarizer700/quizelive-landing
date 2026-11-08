import { ClosingCta } from "@widgets/closing-cta";
import { FormatNote } from "@widgets/format-note";
import { Hero } from "@widgets/hero";
import { HowItWorks } from "@widgets/how-it-works";
import { SiteFooter } from "@widgets/site-footer";
import { SiteHeader } from "@widgets/site-header";

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <HowItWorks />
        <FormatNote />
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}
