"use client";

import { useState, useSyncExternalStore } from "react";

import { operator } from "@shared/config";

const STORAGE_KEY = "quizelive.cookieConsent";

function subscribe() {
  return () => {};
}

function readAccepted() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "accepted";
  } catch {
    return false;
  }
}

export function CookieBanner() {
  const accepted = useSyncExternalStore(subscribe, readAccepted, () => true);
  const [dismissed, setDismissed] = useState(false);

  if (accepted || dismissed) return null;

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
          setDismissed(true);
        }}
      >
        Принять
      </button>
    </div>
  );
}
