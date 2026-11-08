const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL ?? "https://admin.quizlive.ru";
const playUrl = process.env.NEXT_PUBLIC_PLAY_URL ?? "https://play.quizlive.ru";

export const site = {
  name: "QuizeLive",
  url: "https://quizlive.ru",
  adminUrl,
  playUrl,
} as const;
