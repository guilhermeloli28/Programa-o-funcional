const esperarPor = (tempo = 2000) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Vish')
        }, tempo)
    })
}

async function executar() {
    const result = await esperarPor(1500)
    console.log(result)

    const result1 = await esperarPor(1500)
    console.log(result1)

    const result2 = await esperarPor(1500)
    console.log(result2)
}


executar()