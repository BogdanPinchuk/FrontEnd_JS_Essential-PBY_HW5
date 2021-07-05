let min = Number(prompt("Введіть мімімальне значення: ")),
    max = Number(prompt("Введіть максимальне значення: "));


// перевірка на коректність вхідних даних
if (isNaN(min) || isNaN(max)) {
    alert("Помилка введених даних!");
}
else {
    alert(`Випадкове значення в діапазоні (${Math.min(min, max)}, ${Math.max(min, max)}) є: ${Random(min, max).toFixed(3)}`);
}

// випадкове значення в заданому діапазні
// min - мінімальне значення
// max - максимальне значення
function Random(min, max) {
    // додано на випадок, якщо юзер введе невірно значення
    return Math.random() * Math.abs(max - min) + Math.min(min, max);
}

