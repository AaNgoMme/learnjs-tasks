function unique(arr) {
    let set = new Set(arr);
    let arrayUnique =[];
    for (let key of set) {
        arrayUnique.push(key)
    }
    return arrayUnique;
    }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(values) );