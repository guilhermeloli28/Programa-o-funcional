var animals = [
    { id: 1, nome: 'dog', vacinado: true },
    { id: 2, nome: 'cat', vacinado: false },
    { id: 3, nome: 'pig', vacinado: true}
];

Array.prototype.meuFilter = function(fn) {
    const novoArray = []
    
    for(let i = 0; i < this.length; i++) {
        if(fn(this[i])) {
            novoArray.push(this[i])
        }
    }

    return novoArray
}

const results = animals.meuFilter(item => !item.vacinado)

console.log(results)

