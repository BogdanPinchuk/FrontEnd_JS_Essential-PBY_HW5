// не вспливає
// функція рандомного цілого значення
// begin - мінімальне початкове значення
// end - максимальне кінцеве значення
let Random = (begin, end) =>
    begin + Math.floor(Math.random() * (end - begin));

// не вспливає
// також функцію можна замінити стрілочною функцією (в C# називається лямда-вираз)
// number - порядковий номер параметра, для якого треба розрахувати суму
// arithmetic - арифметична логічна операція
let messageInput = (number, arithmetic) =>
    `Введіть ${number}-й параметр для розрахунку ${arithmetic}:`;

// не вспливає
// іменована функція для розрахунку суми, (в C# називається делегат)
// a - 1-й параметр
// b - 2-й параметр
let delSum = function add(a, b) {
    // перевірка на коректність вхідних даних 
    // це дублоювання в даному випадку, а це реалізовано для можливсоті використання в інших сценаріях
    if (isNaN(a) || isNaN(b)) {
        alert("Помилка введених даних!");
        // вихід
        return;
    }

    return a + b;
}

// вспливає
// функція повідомлення
// number - порядковий номер параметра, для якого треба розрахувати суму
// arithmetic - арифметична логічна операція
function MessageInput(number, arithmetic) {
    return `Введіть ${number}-й параметр для розрахунку ${arithmetic}:`;
}
