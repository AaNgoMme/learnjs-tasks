function getMaxSubSum(arr) {
    let numArray = 0;
    let sum = 0;
    for (let key of arr) {
            numArray += key;
            sum = Math.max(sum, numArray);
            if (numArray < 0) {
                numArray = 0;
            }
        }
        return sum;
    }