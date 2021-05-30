const esperarPor = (tempo = 2000) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Executando callback')
            resolve('Vish')
        }, tempo)
    })
}

esperarPor(3000)
    .then(result => console.log(result))