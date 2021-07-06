/*
let countInputValue = Number(prompt("Введіть кількість чисел, які ви хочете ввести", 1));

// InputValues(countInputValue);

// функція введення значень з реверсним відображенням на основі рекурсії
// countValues - кількість вхідних значень
function InputValues(countInputValue) {
    let temp = Number(prompt("Введіть будь яке число", countInputValue));

    if (--countInputValue > 0) {
        InputValues(countInputValue);
    }

    if ((temp != "") && !isNaN(Number(temp)) && (temp != null)) {
        console.log(temp);
    }
    else{
        console.log("Помилка введених даних!");
    }
}
*/

let start = prompt("Введіть початкове  число від якого  почати рекурсію", 1);

// перевірка парвильності вхідного значення

if ((start != "") && !isNaN(Number(start)) && (start != null)) {
    // за умови якщо число раціональне
    number = Math.round(Number(start));

    // вивід рекурсії
    ShowRecursion2(number);
}
else {
    console.log("Помилка введених даних!");
}

// функція виведення всіх чисел від введеного користувачем (якщо користувач ввів додатнє число)
// start - стартове число
function ShowRecursion(start) {
    console.log(start);

    if (start > 1) {
        ShowRecursion(start - 1);
    }
}

// функція виведення всіх чисел від введеного користувачем (якщо користувач ввів будь яке число)
// start - стартове число
function ShowRecursion2(start) {
    console.log(start);

    if (start - 1 < start && start > 1) {
        ShowRecursion2(start - 1);
    }
    else if (start + 1 > start && start < 1) {
        ShowRecursion2(start + 1);
    }
}

