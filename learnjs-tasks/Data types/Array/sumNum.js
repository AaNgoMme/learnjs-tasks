function sumInput() {
    let numArray = [];
    let num;

    while (true) {
        num = prompt("Введите число");
        if (num == "" || num == null || !isFinite(num)) {
            break;
        } else {
            numArray.push(+num)
        }
    }

    let sum = 0;

    for (let key of numArray) {
        sum += key
    }
    
    return sum  
}