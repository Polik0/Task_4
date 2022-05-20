const username = prompt("Введьть ім'я користувача");
const password = prompt("Введіть пароль");

const adminUsername = "ADMIN";
const adminPassword = "PASSWORD";

if (username == adminUsername && password == adminPassword) {
  alert("Вітаємо, Адмін!");
} else {
  alert("Неправильні дані для входу");
}
