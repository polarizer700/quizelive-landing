import type { Metadata } from "next";

import { LegalPage } from "@pages/legal";

export const metadata: Metadata = {
  title: "Cookie — QuizeLive",
  description: "Какие cookie использует QuizeLive.",
};

export default function CookiesPage() {
  return (
    <LegalPage title="Пояснение про cookie">
      <p>
        Cookie — небольшие данные в браузере. На QuizeLive они нужны, чтобы держать сессию студии и запомнить согласие на
        cookie. Сторонние счётчики не подключаются без отдельного согласия.
      </p>
      <h2>Какие cookie есть сейчас</h2>
      <ul>
        <li>
          <strong>quizelive_refresh</strong> — HttpOnly cookie обновления сессии студии, путь <code>/api/v1/auth</code>;
        </li>
        <li>
          <strong>quizelive.cookieConsent</strong> — локальная отметка, что вы нажали «Принять» на баннере.
        </li>
      </ul>
      <h2>Как управлять</h2>
      <p>
        Вы можете очистить cookie в настройках браузера. Без cookie сессии студия не сможет оставаться вошедшей между
        обновлениями страницы.
      </p>
    </LegalPage>
  );
}