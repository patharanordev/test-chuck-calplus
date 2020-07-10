class Calculator {
    constructor() {
        this.result = null;
    }

    plus(n1, n2) {

        const bInt1 = BigInt(n1);
        const bInt2 = BigInt(n2);
        console.log('Convert to big int#1 :', bInt1);
        console.log('Convert to big int#2 :', bInt2);

        this.result = bInt1 + bInt2;
        return this.result.toString();
        
    }
}

module.exports = new Calculator();