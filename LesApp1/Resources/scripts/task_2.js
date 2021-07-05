// перевірка
let inputArray = [];
// inputArray[0] = prompt(MessageInput(1, "середнього арифметичного значення"));
// inputArray[1] = prompt(MessageInput(2, "середнього арифметичного значення"));
// inputArray[2] = prompt(MessageInput(3, "середнього арифметичного значення"));
for (let i = 0; i < 3; i++) {
    inputArray[i] = prompt(MessageInput(i + 1, "середнього арифметичного значення"));
}


// розрахунок середнього арифметичного
let res = Avg(inputArray);

// звіт
if (!isNaN(res)) {
    alert(`Середнє арифметичне значення: ${res.toFixed(3)}`);
}

// функція розрахунку среднього арифметичного
function Avg(array) {
    let sum = 0;
    // лічильник правильно введених даних
    let counter = 0;

    // розрахунок суми
    for (const value of array) {
        // 1 - для пустого введення
        // 2 - якщо введено не число (абракадабра)
        // 3 - якщо натиснута відміна
        if ((value != "") && !isNaN(Number(value)) && (value != null)) {
            sum += Number(value);
            counter++;
        }
    }

    if (counter == 0) {
        alert("Помилка введених даних!");
        return;
    }

    return sum / counter;
}

// функція повідомлення
// number - порядковий номер параметра, для якого треба розрахувати суму
// arithmetic - арифметична логічна операція
function MessageInput(number, arithmetic) {
    return `Введіть ${number}-й параметр для розрахунку ${arithmetic}:`;
}
