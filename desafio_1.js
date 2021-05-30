const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true},
    {nome: 'Impressora', qtde: 0, preco: 650.50, fragil: false},
    {nome: 'Caderno', qtde: 4, preco: 27.99, fragil: false},
    {nome: 'Lapis', qtde: 3, preco: 3.99, fragil: true},
    {nome: 'Tesoura', qtde: 1, preco: 19.99, fragil: true},
];

const getItensFrageis = item => item.fragil
const getTotal = ({qtde, preco}) => qtde * preco
const somar = (acc, el) => acc + el

const result = carrinho     
    .filter(getItensFrageis)
    .map(getTotal)
    .reduce(somar)

console.log(result)