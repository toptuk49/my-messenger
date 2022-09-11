import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Сообщения (подсказки)
import newer from "gulp-newer"; // Проверка обновления

// Экспортируем объект
export const plugins = {
    plumber: plumber,
    notify: notify,
    newer: newer
}