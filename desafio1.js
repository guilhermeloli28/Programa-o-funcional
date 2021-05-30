function soma(num1) {
    return function(num2) {
        return function(num3) {
            return num1 + num2 + num3
        }
    }
}

console.log(soma(2)(2)(2))

//-----------------

function calcula(x) {
    return function(y) {
        return function(callback) {
            return callback(x, y);
        }
    }
}
function somar(x, y) {
    return x + y
}

console.log(calcula(2)(8)(somar))