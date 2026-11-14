import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import type { ReactNode } from "react";

import "@fontsource-variable/fraunces/wght.css";
import "@fontsource-variable/fraunces/wght-italic.css";
import "@fontsource-variable/outfit";

import { site } from "@shared/config";
import { CookieBanner } from "@widgets/cookie-banner";

import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta");

  return {
    metadataBase: new URL(site.url),
    title: t("title"),
    description: t("description"),
    applicationName: site.name,
    alternates: { canonical: "/" },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: site.url,
      siteName: site.name,
      locale: "ru_RU",
      type: "website",
    },
    icons: { icon: "/favicon.svg" },
  };
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body id="top">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
