let result = +prompt("Введите номер Вашего билета");

let b1 = result/100000;
let b2 = result/10000;
let b3 = result/1000;
let b4 = result/100;
let b5 = result/10;
let b6 = result/1;

let left, right;

left = b1 + b2 + b3;
right = b4 + b5 + b6;

if (left = right) {
    alert("Билет счастливый!");
}
else {
    alert("Повезёт в следующий раз");
}



