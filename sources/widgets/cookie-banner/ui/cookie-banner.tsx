"use client";

import { useEffect, useState } from "react";

import { operator } from "@shared/config";

const STORAGE_KEY = "quizelive.cookieConsent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(window.localStorage.getItem(STORAGE_KEY) !== "accepted");
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite">
      <p>
        Мы используем необходимые cookie, чтобы сайт работал. Подробности в{" "}
        <a href={operator.cookiesUrl}>пояснении про cookie</a> и{" "}
        <a href={operator.privacyUrl}>политике конфиденциальности</a>.
      </p>
      <button
        className="button button-signal"
        type="button"
        onClick={() => {
          try {
            window.localStorage.setItem(STORAGE_KEY, "accepted");
          } catch {
            // ignore
          }
          setVisible(false);
        }}
      >
        Принять
      </button>
    </div>
  );
}
