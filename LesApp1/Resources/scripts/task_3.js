// названия товаров
let names = [];
names[0] = "Бумага офисная А4, 80 г/м2, 500 л";
names[1] = "Биндеры для бумаги 51 мм";
names[2] = "Ручка шариковая синяя";

// цены на товар
let prices = [];
prices[0] = 280.25; // Бумага офисная А4, 80 г/м2, 500 л
prices[1] = 56;     // Биндеры для бумаги 51 мм
prices[2] = 12.50;  // Ручка шариковая синяя

// new
let count = Initialization(names)

// // old
// let count = [];
// for (let i = 0; i < names.length; i++) {
//     const productName = names[i];
//     let counttoBuy = +prompt("Укажите количество для " + productName);

//     if (isNaN(counttoBuy))
//         counttoBuy = 0;

//     count.push(counttoBuy);
// }

// new
let totalSum = CalcSum(names, prices, count);

// old
// let totalSum = 0;
// for (let i = 0; i < names.length; i++) {
//     const productName = names[i];
//     const productPrice = prices[i];
//     const boughtCount = count[i];

//     let price = productPrice * boughtCount;
//     totalSum += price;
//     console.log(`Куплено ${productName} на сумму ${price}`);
// }

console.log("Всего продуктов куплено на " + totalSum);


// ініціалізація масива
// names - назив продуктів
function Initialization(names) {
    let count = [];

    for (let i = 0; i < names.length; i++) {
        let counttoBuy = +prompt("Укажите количество для " + names[i]);

        if (isNaN(counttoBuy))
            counttoBuy = 0;

        count.push(counttoBuy);
    }

    return count;
}

// розрахунок  суми
// names - назви презметів
// prices - ціни
// count - кількість замовлених одиниць товару
function CalcSum(names, prices, count) {
    let totalSum = 0;

    for (let i = 0; i < names.length; i++) {
        totalSum += prices[i] * count[i];
        console.log(`Куплено ${names[i]} на сумму ${prices[i]}`);
    }

    return totalSum;
}
