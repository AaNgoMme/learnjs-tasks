function unique(arr) {
    let uniqueArray = [];
    for (let item of arr) {
        if( !uniqueArray.includes(item) ) {
            uniqueArray.push(item);
        }
    } 
    return uniqueArray;
}