let initCountArray = function () {
    for (let i = 0; i < names.length; i++) {
        const productName = names[i];
        let counttoBuy = +prompt("Укажите количество для " + productName);

        if (isNaN(counttoBuy))
            counttoBuy = 0;

        count.push(counttoBuy);
    }
}

let calculateSum = function () {
    let totalSum = 0;
    for (let i = 0; i < names.length; i++) {
        const productName = names[i];
        const productPrice = prices[i];
        const boughtCount = count[i];

        let price = productPrice * boughtCount;
        totalSum += price;
        console.log(`Куплено ${productName} на сумму ${price}`);
    }
    console.log("Всего продуктов куплено на " + totalSum);
}
