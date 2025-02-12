console.log("Первое задание:")
//создаю переменные
let num_for_ex_1 = 25;
let str_for_ex_1 = 'str';
let bool_for_ex_1 = true;
let und_for_ex_1 = undefined;
let obj_for_ex_1 = null;
//вывожу тип данных переменных в консоль
console.log("Тип первой переменной - " + typeof num_for_ex_1);
console.log("Тип второй переменной - " + typeof str_for_ex_1);
console.log("Тип третьей переменной - " + typeof bool_for_ex_1);
console.log("Тип четвертой переменной - " + typeof und_for_ex_1);
console.log("Тип пятой переменной - " + typeof obj_for_ex_1);

console.log("")


console.log("Второе задание:")
//создаю переменные
n_1_for_ex_2 = Math.random()*100;
n_2_for_ex_2 = Math.random()*100;

console.log(n_1_for_ex_2)
console.log(n_2_for_ex_2)

//прописываю условия для вывода проверки условий
console.log(n_1_for_ex_2 === n_2_for_ex_2)
console.log(n_1_for_ex_2 < n_2_for_ex_2)
console.log(n_1_for_ex_2 < n_2_for_ex_2 || n_1_for_ex_2 === n_2_for_ex_2)
console.log(n_1_for_ex_2 > n_2_for_ex_2)

console.log("")


console.log("Третье задание:")
//Задаю переменные
let a = false;
let b = null;
let c = undefined;
//Вывожу переменные
if (a === null) {
    console.log("a is null")
} else if (a === false) {
    console.log("a is false")
} else if (a === undefined) {
    console.log("a is undefined")
} else {
    console.log("Я не понимаю значение a")
}

if (b === null) {
    console.log("b is null")
} else if (b === false) {
    console.log("b is false")
} else if (b === undefined) {
    console.log("b is undefined")
} else {
    console.log("Я не понимаю значение b")
}

if (c === null) {
    console.log("c is null")
} else if (c === false) {
    console.log("c is false")
} else if (c === undefined) {
    console.log("c is undefined")
} else {
    console.log("Я не понимаю значение c")
}

console.log("")


console.log("Четвертое задание:")

console.log("1" + 2 + 3) //выводится 123, тк первое занчение стринговое и "2" тоже принимает стринговое згначение, а после и "3"
console.log(1 + 2 + "3") //выводится 33, тк сперва складываются 1+2, а после это значение принимает стриногове занчение для сложение со стринговой "3"
console.log("1" - 2)  //выводится -1, тк строка преобразуется в число
console.log("1" +- 2) //выводится "1-2", тк унарный минус прибовляется к 2 и "-2" прибавляется к строке "1"
console.log("1" + "1" - "1") //выводится 10, тк снача 1 и 1 складываются как строки, после минус преобразуется строки в число
console.log("foo" +- "bar") //выводится fooNaN из-за ошибки конвертации bar в число
console.log(0 == "0") //выводится тру, так это нестрогое равенство
console.log(0.5 + 0.1 == 0.6) //выводится тру, тк 0.5+0.1 = 0.6
console.log(0.1 + 0.2 == 0.3) //выводится фолс, из-за ошибки в округлении
console.log(true + true + true == 3) //выводится тру, тк для сложения тру преобразуется в 1
console.log(true == 1) //выводится тру, тк нестрогое равенство и тру преобразуется в 1
console.log(true === 1) //выводится фолс, тк это строгое равенство и стравниваются еще и типы данных
console.log(1 < 2 < 3) //выводится тру, тк сравнение идет слева направо: 1<2, 1<3 (true --> 1)
console.log(3 > 2 > 1) //выводится фолс, тк тру преобразуется в 1 и "1 > 1" выдает ошибку
console.log(9007199254740991 + 1 == 9007199254740991 + 2) //выводится тру, тк 9007199254740991 это максимальное значение для точного представления в 64 битном формате
console.log(Math.sqrt(-1) == Math.sqrt(-1)) //выводится фолс, из-за отрицательного числа под корнем

console.log("")


console.log("Пятое задание:")
//создаю переменные
let str1 = "Кто ";
let str2 = "ты ";
let str3 = "такой?";
let concatenation = str1 + str2 + str3
//вывод
console.log(concatenation);

console.log("")


console.log("Шестое задание:");
//создаю переменные
let str = "20";
let a_for_ex_6 = 5;
//выводы и объяснение
console.log(str + a_for_ex_6); //к строке прибавляется чило, преобразованное в строку
console.log(str - a_for_ex_6); //"-" преобразует строку в число
console.log(str * "2"); //умножение преобразует строки в числа
console.log(str / 2); // деление так же преобразует строки в числа

console.log("")


console.log("Седьмое задание:");
//создаю переменные
let a_for_ex_7 = "12";
let b_for_ex_7 = "7.15";
//преобразую строки в числа и округляю значение b
let = a_2_for_ex_7 = Number(a_for_ex_7);
let = b_2_for_ex_7 = Math.round(Number(b_for_ex_7));
//вывожу остаток от деления
console.log(a_2_for_ex_7 % b_2_for_ex_7);

console.log("")


console.log("Восьмое задание:");
//создаю переменную X
let x_for_ex_8 = Math.round(Math.random()*99);
//Прописываю решение уравнения
let chislitel_for_ex_8 = Math.pow(x_for_ex_8, 2) - (7 * x_for_ex_8) + 10;  //числитель
let znamenatel_for_ex_8 = Math.pow(x_for_ex_8, 2) - (8 * x_for_ex_8) + 12;  //знаменатель
let y_for_ex_8 = chislitel_for_ex_8 / znamenatel_for_ex_8; //полная дробь
//вывод ответа
console.log(x_for_ex_8, y_for_ex_8);

console.log("")


console.log("Девятое задание:");
//пользователь вводит адрел электронной почты
const email_for_ex_9 = prompt('Введите адрес электронной почты:');
//условие проверки
if (email_for_ex_9 !== null) {
    if (email_for_ex_9.indexOf('@') === -1) {
        console.log('Ошибка: Адрес электронной почты должен содержать символ @!');
    } else {
        console.log("Адрес введен верно: " + email_for_ex_9)
    }
}

console.log("");


console.log("Управление потоком");
console.log("");

console.log("Первое задание:");
//объявляю переменную
let age_for_ex_1up = Math.round(Math.random()*99);
console.log("Возраст " + age_for_ex_1up);
//Прописываю условия
if (18 < age_for_ex_1up < 30) {
    console.log("Для молодежи");
} else if (1 < age_for_ex_1up < 17) {
    console.log("Для детей");
} else {
    console.log("Для всех");
}
console.log("");

console.log("Второе задание:");
//объявляю переменные
let a_for_ex_2up = Math.round(Math.random()*99);
let b_for_ex_2up = Math.round(Math.random()*99);
let max_for_ex_2up = 0;
//вывод значений
console.log("а = " + a_for_ex_2up);
console.log("b = " + b_for_ex_2up);
//условия для сравнения
if (a_for_ex_2up > b_for_ex_2up) {
    let max_for_ex_2up = a_for_ex_2up;
    console.log("Переменная max присвоила значение a " + max_for_ex_2up)
} else {
    let max_for_ex_2up = b_for_ex_2up;
    console.log("Переменная max присвоила значение b " + max_for_ex_2up);
}
console.log("");

console.log("Третье задание:");
//создаю переменную
let birds = Math.round(Math.random()*10);
//прописываю switch
switch (birds) {
    case 1:
        console.log("На ветке сидит " + birds + " ворона");
    case 2:
    case 3:
    case 4:
        console.log("На ветке сидит" + birds +  " вороны");
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log("На ветке сидит " + birds + " ворон");
}

console.log("");

console.log("Четвертое задание:");
//создаю переменную
let number = 0;
//цикл while
while (number <= 50) {
    if (number % 2 !== 0) {
        console.log(number);
    }
    number++;
}
//цикл for
for (let i = 0; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("");

console.log("Пятое задание:");
//создаю переменную
let sum = 0;
let i = 1; //счетчик
while (i <= 15) {
    if (i !== 5 && i !== 7) {
        sum += i;
    }
    i++;
}
console.log(sum); //вывод

console.log("");

console.log("Шестое задание:");
//создаю перемемнные
let a_for_ex_6up = Math.round(Math.random()*10); //то что буду возватить
let b_for_ex_6up = Math.round(Math.random()*10); //степень
//цикл while
let result_for_ex_6up = 1;
let counter_for_ex_6up = 0;  //счетчик степени

while (counter_for_ex_6up < b_for_ex_6up) {
    result_for_ex_6up *= a_for_ex_6up;
    counter_for_ex_6up++;
}

console.log("при возведении " + a_for_ex_6up + " в степень " + b_for_ex_6up + " получается " + result_for_ex_6up);

