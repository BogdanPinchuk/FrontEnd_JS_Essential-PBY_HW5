let countInputValue = Number(prompt("Введіть кількість чисел, які ви хочете ввести", 1));

InputValues(countInputValue);

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
