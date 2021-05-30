const gerarNumerosEntre = (min, max) => {
    if(min > max) {
        [min, max] = [max, min]
    }

    return new Promise(resolve => {
        const result = parseInt(Math.random() * (max - min + 1)) + min
        resolve(result)
    })
} 

gerarNumerosEntre(10, 30)
    .then(num => console.log(num * 10))