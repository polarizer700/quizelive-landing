import { describe, expect, it } from "vitest";

import { site } from "./site";

describe("site", () => {
  it("keeps the public site on quizlive.ru", () => {
    expect(site.url).toBe("https://quizlive.ru");
    expect(site.name).toBe("QuizeLive");
  });

  it("points the studio and the room at https hosts", () => {
    expect(site.adminUrl.startsWith("https://")).toBe(true);
    expect(site.playUrl.startsWith("https://")).toBe(true);
  });
});
