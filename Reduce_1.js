const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 650.50},
    {nome: 'Caderno', qtde: 4, preco: 27.99},
    {nome: 'Lapis', qtde: 3, preco: 3.99},
    {nome: 'Tesoura', qtde: 1, preco: 19.99},
]

const getTotal = item => item.qtde * item.preco

const somar = (acc, el) => acc + el

const totalGeral = carrinho 
    .map(getTotal)
    .reduce(somar, 1000)

console.log(totalGeral)
