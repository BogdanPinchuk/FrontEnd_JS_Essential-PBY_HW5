// перевірка
let input_a = Number(prompt(MessageInput(1, "мінімального значення"), 0)),
    input_b = Number(prompt(MessageInput(2, "мінімального значення"), 0));

// перевірка на коректність вхідних даних
if (isNaN(input_a) || isNaN(input_b)) {
    alert("Помилка введених даних!");
}
else {
    alert(`Мінімальне значення серед введених ${input_a} і ${input_b} є: ${Min(input_a, input_b)}`);
}

// функція знаходження мінімального значення
// a - 1-е значення 
// b - 2-е значення
function Min(a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert("Помилка введених даних!");
        // вихід
        return;
    }

    return (a <= b) ? a : b;
}

// функція повідомлення
// number - порядковий номер параметра, для якого треба розрахувати суму
// arithmetic - арифметична логічна операція
function MessageInput(number, arithmetic) {
    return `Введіть ${number}-й параметр для розрахунку ${arithmetic}:`;
}