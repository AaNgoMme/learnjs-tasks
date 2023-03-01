function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) { 
        result *= x;
    }
    return alert(result);
}
let x = +prompt("Введите первое число");
let n = +prompt("Введите второе число");
if (n > 0) {
    pow(x, n);
} else {
    alert("Нельзя возвести в степень");
}