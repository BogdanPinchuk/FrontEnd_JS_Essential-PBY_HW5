// обв'явлення змінної
SetGlobalValue();

// спроба добратися до глобальної змінної
GetValue_1(global_value);
GetValue_2();

// також глобальною змінною вважають змінну, яка об'явленна в script
let global_value_2 = 20;
GetValue_3();

// Примітка.
// Функція - "метод" який може мати взідні аргументи і обов'язково має вихідні
// Процедура - "метод" який може мати взідні аргументи і немає вихідних аргументів
// Предікат - "метод" який може мати взідні аргументи і на виході обов'язково має логічне значення true/false

// процедура - спроба об'явити глобальну змінну
function SetGlobalValue() {
    global_value = 10;
}

// процедура - вивід змінної
// вхідне значення
function GetValue_1(value) {
    if (value != undefined) {
        console.log(`Гобальна змінна: ${value}`);
    } else {
        console.log(`Гобальна змінна недоступна.`);
    }
}

// процедура - вивід змінної
// вхідне значення
function GetValue_2() {
    if (global_value != undefined) {
        console.log(`Гобальна змінна: ${global_value}`);
    } else {
        console.log(`Гобальна змінна недоступна.`);
    }
}

// процедура - вивід змінної
// вхідне значення
function GetValue_3() {
    if (global_value_2 != undefined) {
        console.log(`Гобальна змінна: ${global_value_2}`);
    } else {
        console.log(`Гобальна змінна недоступна.`);
    }
}
