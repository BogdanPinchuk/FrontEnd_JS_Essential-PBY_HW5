let values = [10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23],
    oddValues = [],
    evenValues = [],
    oddValuesPosition = 0,
    evenValuesPosition = 0;


// old
/*
for (let value of values) {
    if (value % 2 == 0) {
        evenValues[evenValuesPosition] = value;
        evenValuesPosition++;
    }
    else {
        oddValues[oddValuesPosition] = value;
        oddValuesPosition++;
    }
}
*/

// new (виконаємо 2 різними способами)
oddValues = values.filter(i => i % 2 != 0);
values.forEach(i => {
    if (i % 2 == 0) {
        evenValues.push(i);
    }
});


console.log("Нечетные значения");
for (let oddVal of oddValues) {
    console.log(oddVal);
}

console.log("Четные значения");
for (let evenVal of evenValues) {
    console.log(evenVal);
}

