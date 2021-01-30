class Math {
    sum(num1,num2) {
        return num1 + num2;
    };

    sumWithCallback(num1,num2,callback) {
        setTimeout(() => {
            callback(num1 + num2);
        }, 2500);
    };

    multiply(num1,num2) {
        return num1 * num2;
    };

    printSum(request, response, a, b) {
        response.load('index', a + b);
    };

    printStub(request, response, a, b) {
        console.log(response.load('index', a + b));
    }
}

module.exports = Math;