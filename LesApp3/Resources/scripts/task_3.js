var data = [1, 2, 3, 4, 5];
console.log(`Вхідні дані: ${data.join(', ')}`);

// old
/*
var result = data.map(function (value) {
    return value * value;
});

result.forEach(function (e) {
    console.log(e);
});
*/

// заміна на стрілочну функцію (лямда вираз)
var result = data.map(value => value ** 2);
result.forEach(e => console.log(e));
