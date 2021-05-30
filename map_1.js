const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 650.50},
    {nome: 'Caderno', qtde: 4, preco: 27.99},
    {nome: 'Lapis', qtde: 3, preco: 3.99},
    {nome: 'Tesoura', qtde: 1, preco: 19.99},
]

const getNome = item => item.nome
const nomes = carrinho.map(getNome)
console.log(nomes)

const getTotal = item => item.qtde * item.preco
const total = carrinho.map(getTotal)
console.log(total)

const list = carrinho.map(({ nome, preco, qtde }) => ({
    nome,
    total: qtde * preco
}))

console.log(list)