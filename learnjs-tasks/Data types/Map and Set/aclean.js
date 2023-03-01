let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let map = new Map();
    for(let key of arr) {
        let sort = key.toLowerCase().split("").sort().join("");
        map.set(sort, key);
    }
    return Array.from( map.values() );
}

alert( aclean(arr) )