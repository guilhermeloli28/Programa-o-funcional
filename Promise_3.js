const testandoErro = (valor, chanceErro) => {
    return new Promise((resolve, reject) => {
        try {
            if(Math.random() < chanceErro) {
                reject('Aconteceu um erro')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject('error aqui')
        }
        
    })
} 

testandoErro('testando', 0.9)
    .then(value => console.log(value))
    .catch(err => console.log('erro', err))