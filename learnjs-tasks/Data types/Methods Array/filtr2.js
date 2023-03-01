function filterRangeInPlace(arr, a, b) {
    return arr.filter(function(item, index) {
        if(a <= item && item <= b) {
        } else {
            arr.splice(index, 1);
        }
    });
}
