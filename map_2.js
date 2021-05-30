var animals = [
    { id: 1, nome: 'dog' },
    { id: 2, nome: 'cat'},
    { id: 3, nome: 'pig'}
];

Array.prototype.meuMap = function(fn) {
    const novoArray = []

    for(let i = 0; i < this.length; i++) {
        const result = fn(this[i])
        novoArray.push(result)
    }

    return novoArray;
}

console.log(animals.map(item => item.nome))