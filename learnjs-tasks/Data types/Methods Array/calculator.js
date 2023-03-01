function Calculator() {
    this.methods = {
        "-": function (a, b) {
            return a - b;
        },
        "+": function(a, b) {
            return a + b;
        }
    }
    this.calculate = function (str) {
        let split = str.split(" ");
        let a = +split[0];
        let op = split[1];
        let b = +split[2];

        return this.methods[op](a, b);
    }
    this.addMethod = function(name, func) {
        this.methods[name] = func;
    }
}