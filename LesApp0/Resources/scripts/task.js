// script (головний сцентарій виконання)

// реалізація через звичайну функцію
let input_a = Number(prompt(MessageInput(1, "суми"), Random(0, 100)));
// реалізація через стрілочну функцію (лямда-вираз)
let input_b = Number(prompt(messageInput(2, "суми"), Random(0, 100)));

// перевірка на коректність вхідних даних
if (isNaN(input_a) || isNaN(input_b)) {
    alert("Помилка введених даних!");
}
else{
    alert(`Сумма введених значень ${input_a} і ${input_b} дорівнює: ${delSum(input_a, input_b)}`);
}
