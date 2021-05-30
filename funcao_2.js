// pass function as parameter "callback"
function execute(callback) {
    if(typeof callback === 'function') {
        callback()
    } 
}

function showName() {
    console.log('funfou')
}

execute(showName);

// return function from another function

function potencia(base) {
    return function(exp) {
        console.log(Math.pow(base, exp))
    }
}

potencia(2)(8)
//const potenciaDe2 = potencia(2)
//potenciaDe2(8)

