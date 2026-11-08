import { getRequestConfig } from "next-intl/server";

import ru from "../messages/ru.json";

export default getRequestConfig(() => ({
  locale: "ru",
  messages: ru,
}));
