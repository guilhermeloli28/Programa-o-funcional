// 3 - execute console.log
function fn2() {
    setTimeout(() => console.log('fn2'), 2000);

    console.log('funfou')
}

// 2 - call fn2
// 4 - back and execute console.log in stack 
function fn1() {
    fn2()

    console.log('fn1')
}

// 1 - call fn1
// 5 - finish main
function main() {
    fn1()
}

main()

//6 - execute the timeout with the shortest time 

setTimeout(() => console.log('fora'), 3000);