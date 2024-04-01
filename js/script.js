document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("ageVerification");
    var contentContainer = document.getElementById("contentContainer");

    // Показываем модальное окно при загрузке страницы
    modal.style.display = "block";
    contentContainer.classList.add("blur-background"); // Добавляем размытие заднего фона

    // При нажатии на кнопку "Мне 18 лет и старше", скрываем модальное окно
    var confirmButton = document.getElementById("confirmButton");
    confirmButton.addEventListener("click", function () {
        modal.style.display = "none";
        contentContainer.classList.remove("blur-background"); // Убираем размытие заднего фона
    });
});