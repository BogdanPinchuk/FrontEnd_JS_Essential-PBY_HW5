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

let count = [];

// лише звичайні функції вспливають іменовані-функції "делегати", стрілосні-функції "лямда", 
// анонімні функції не вспливають тому їх необхідно преенести вище їх об'явлення - перший варіант рішення
// але в такому випадку відбувається загромадження коду, код повинен бути чистим, споатку сценарій виконання
// а тоді об'явлення функцій, або ж винести функції в окремий файл і о'явити його раніше даного файлу

initCountArray();
calculateSum();
