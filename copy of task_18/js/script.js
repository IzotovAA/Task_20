"use strict";

// первоначальная установка индекса слайда для отображения
let slideIndex = 1;

// присвоение константам необходимых DOM элементов слайда
const slides = document.querySelectorAll(".projects-slider-list__element");
const nextButton = document.querySelectorAll(".projects-slider-arrow-right");
const previousButton = document.querySelectorAll(".projects-slider-arrow-left");

// до исправления (DRY — Don’t repeat yourself)
// const rostovAdmiral = document.querySelector(".projects-list__item1");
// const sochi = document.querySelector(".projects-list__item2");
// const rostovPatriotic = document.querySelector(".projects-list__item3");

// после исправления (DRY — Don’t repeat yourself)
const slideLinks = document.querySelectorAll(".projects-list__item");

const city = document.querySelectorAll(".projects-info-detail__item1");
const area = document.querySelectorAll(".projects-info-detail__item2");

// до исправления (DRY — Don’t repeat yourself)
// const dot1 = document.querySelectorAll(".projects-slider-dot1");
// const dot2 = document.querySelectorAll(".projects-slider-dot2");
// const dot3 = document.querySelectorAll(".projects-slider-dot3");

// после исправления (DRY — Don’t repeat yourself)
const slideDots = document.querySelectorAll(".projects-slider-dots__dot");

// присвоение константам необходимых DOM элементов бургер-меню
// удалени (YAGNI — You ain’t gonna need it)
// const burger = document.querySelector(".burger-menu");
// const popup = document.querySelector(".popup");

// тело документа
const body = document.body;

// клонирование элементов меню
// удалени (YAGNI — You ain’t gonna need it)
// const menu = document.querySelector(".header-menu").cloneNode(1);

// добавление прослушки на кнопку следующий слайд
nextButton.forEach((element) => {
    element.addEventListener("click", () => {
        nextSlide();
    });
});

// добавление прослушки на кнопку предыдущий слайд
previousButton.forEach((element) => {
    element.addEventListener("click", () => {
        previousSlide();
    });
});

// добавление прослушки на ссылки переключающие слайды
// до исправления (DRY — Don’t repeat yourself)
// rostovAdmiral.addEventListener("click", () => {
//     showSlide((slideIndex = 1));
// });

// sochi.addEventListener("click", () => {
//     showSlide((slideIndex = 2));
// });

// rostovPatriotic.addEventListener("click", () => {
//     showSlide((slideIndex = 3));
// });

// после исправления (DRY — Don’t repeat yourself)
for (let i = 0; i < slideLinks.length; i++) {
    slideLinks[i].addEventListener("click", () => {
        showSlide((slideIndex = i + 1));
    });
}
// ...

// добавление прослушки на точки переключающие слайды
// до исправления (DRY — Don’t repeat yourself)
// dot1.forEach((element) => {
//     element.addEventListener("click", () => {
//         showSlide((slideIndex = 1));
//     });
// });

// dot2.forEach((element) => {
//     element.addEventListener("click", () => {
//         showSlide((slideIndex = 2));
//     });
// });

// dot3.forEach((element) => {
//     element.addEventListener("click", () => {
//         showSlide((slideIndex = 3));
//     });
// });

// после исправления (DRY — Don’t repeat yourself)
for (let i = 0; i < slideDots.length; i++) {
    slideDots[i].addEventListener("click", () => {
        i >= 0 && i < 3
            ? showSlide((slideIndex = i + 1))
            : showSlide((slideIndex = i - 2));
    });
}
// ...

// прослушка загрузки всех элементов DOM
document.addEventListener("DOMContentLoaded", showSlide(slideIndex));

// переключает на следующий слайд
function nextSlide() {
    showSlide((slideIndex += 1));
}

// переключает на предыдущий слайд
function previousSlide() {
    showSlide((slideIndex -= 1));
}

// показывет заданный слайд
function showSlide(n) {
    // закольцовывание слайдов
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }
    // ...

    // сброс классов ссылок и точек слайда до изначальных
    // до исправления (DRY — Don’t repeat yourself)
    // rostovAdmiral.className = "projects-list__item1";
    // sochi.className = "projects-list__item2";
    // rostovPatriotic.className = "projects-list__item3";

    // после исправления (DRY — Don’t repeat yourself)
    slideLinks.forEach((element) => {
        element.className = "projects-list__item";
    });

    // до исправления (DRY — Don’t repeat yourself)
    // dot1.forEach((element) => {
    //     element.className = "projects-slider-dot1";
    // });
    // dot2.forEach((element) => {
    //     element.className = "projects-slider-dot2";
    // });
    // dot3.forEach((element) => {
    //     element.className = "projects-slider-dot3";
    // });

    // после исправления (DRY — Don’t repeat yourself)
    slideDots.forEach((element) => {
        element.className = "projects-slider-dots__dot";
    });
    // ...

    // гасим все слайды
    slides.forEach((element) => {
        element.style.display = "none";
    });

    // отображаем необходимый слайд
    slides[slideIndex - 1].style.display = "block";

    // в зависимости от отображённого слайда изменяем некоторое содержание
    // а так же стили ссылок и точек
    // до исправления (KISS — Keep it simple and straightforward)
    // if (slideIndex === 1) {
    //     city.forEach((element) => {
    //         element.textContent = "Rostov-on-Don LCD admiral";
    //     });

    //     area.forEach((element) => {
    //         element.textContent = "81 m2";
    //     });

    //     rostovAdmiral.className = "projects-list__item active";

    //     dot1.forEach((element) => {
    //         element.className = "projects-slider-dot1 active";
    //     });
    // } else if (slideIndex === 2) {
    //     city.forEach((element) => {
    //         element.textContent = "Sochi thieves";
    //     });

    //     area.forEach((element) => {
    //         element.textContent = "85 m2";
    //     });

    //     sochi.className = "projects-list__item2 active";

    //     dot2.forEach((element) => {
    //         element.className = "projects-slider-dot2 active";
    //     });
    // } else {
    //     city.forEach((element) => {
    //         element.textContent = "Rostov-on-Don patriotic";
    //     });

    //     area.forEach((element) => {
    //         element.textContent = "78 m2";
    //     });

    //     rostovPatriotic.className = "projects-list__item3 active";

    //     dot3.forEach((element) => {
    //         element.className = "projects-slider-dot3 active";
    //     });
    // }

    // после исправления (KISS — Keep it simple and straightforward)
    switch (slideIndex) {
        case 1:
            updateStatus(city, "textContent", "Rostov-on-Don LCD admiral");
            updateStatus(area, "textContent", "81 m2");
            slideLinks[0].className = "projects-list__item--active";
            changeMod(slideDots, "projects-slider-dots__dot--active", 0, 3);
            break;

        case 2:
            updateStatus(city, "textContent", "Sochi thieves");
            updateStatus(area, "textContent", "85 m2");
            slideLinks[1].className = "projects-list__item--active";
            changeMod(slideDots, "projects-slider-dots__dot--active", 1, 4);
            break;

        case 3:
            updateStatus(city, "textContent", "Rostov-on-Don patriotic");
            updateStatus(area, "textContent", "78 m2");
            slideLinks[2].className = "projects-list__item--active";
            changeMod(slideDots, "projects-slider-dots__dot--active", 2, 5);
            break;

        default:
            break;
    }
    // ...
}
// ...

// обновляет заданные поля DOM заданным содержанием
function updateStatus(array, target, info) {
    array.forEach((element) => {
        element[target] = info;
    });
}

// изменяет модификатор заданных объектов DOM
function changeMod(array, mod, pos1, pos2) {
    array[pos1].className = mod;
    array[pos2].className = mod;
}

// прослушка бургер-меню
// удалени (YAGNI — You ain’t gonna need it)
// burger.addEventListener("click", burgerHandler);

// отображает/скрывает popup окно
// удалени (YAGNI — You ain’t gonna need it)
// function burgerHandler() {
//     popup.classList.toggle("open"); // отображает popup окно
//     burger.classList.toggle("active"); // изменяет вид бургер-меню на крестик
//     body.classList.toggle("fixed"); // блокирует прокрутку документа
//     renderPopup();
// }
// ...

// отрисовывает popup окно
// удалени (YAGNI — You ain’t gonna need it)
// function renderPopup() {
//     popup.append(menu);
// }

// массив пунктов меню из popup окна
// удалени (YAGNI — You ain’t gonna need it)
// const links = Array.from(menu.children);

// прослушка пунктов меню popup окна
// удалени (YAGNI — You ain’t gonna need it)
// links.forEach((element) => {
//     element.addEventListener("click", closePopup);
// });

// скрывает popup окно
// удалени (YAGNI — You ain’t gonna need it)
// function closePopup() {
//     popup.classList.remove("open");
//     burger.classList.remove("active");
//     body.classList.remove("fixed");
// }
