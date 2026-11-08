# QuizeLive Landing

Статический лендинг `quizlive.ru`: герой, ход игры и ссылки в студию и на экран.

## Запуск

```bash
yarn install
yarn dev
```

Сборка для сервера пишет готовые файлы в `out/`:

```bash
yarn build
```

Адреса кнопок задаются на сборке:

```
NEXT_PUBLIC_ADMIN_URL=https://admin.quizlive.ru
NEXT_PUBLIC_PLAY_URL=https://play.quizlive.ru
```

Тексты лежат в `messages/ru.json`.
