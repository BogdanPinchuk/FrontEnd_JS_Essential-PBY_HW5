// створюємо масив випадкових значень в діапазоні
let min = 0,
    max = 9;
// кількість даних в масиві
let count = 19;

let array = GetRandomArray(min, max, count);

// Вимодимо дані
console.log('Вхідні дані:');
console.log(array);

// аналіз даних
let dublicates = FindDublicates(array);

// перірка
if (dublicates != null) {
    console.log(`Дубльовані значення: ${dublicates}`);
}
else {
    console.log(`Дубльованих значень не знайдено!`);
}


// випадкове ціле значення в заданому діапазні
// min - мінімальне значення
// max - максимальне значення (включно)
function RandomInt(min, max) {
    // додано на випадок, якщо юзер введе невірно значення
    return Math.floor(Math.random() * Math.abs(max - min + 1)) + Math.min(min, max);
}

// вертає масив випадкових значень
// min - мінімальне значення
// max - максимальне значення (включно)
// count - кількість випадкових значень
function GetRandomArray(min, max, count) {
    let array = new Array();
    for (let i = 0; i < count; i++) {
        array[i] = RandomInt(min, max);
    }

    return array;
}


// пошук дублікатів
function FindDublicates(array) {
    // лічильник однакових елементів і їх індекси
    let dublicates = new Array();

    // пошук однакових елементів
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] == array[j]) {
                // перевірка наявності таких значень в масиві
                if (!dublicates.includes(array[i])) {
                    dublicates.push(array[i]);
                }                
            }
        }
    }

    return (dublicates.length > 0) ? dublicates : null;
}