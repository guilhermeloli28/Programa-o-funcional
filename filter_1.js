var animals = [
    { id: 1, nome: 'dog', vacinado: true },
    { id: 2, nome: 'cat', vacinado: false},
    { id: 3, nome: 'pig', vacinado: true}
];

Array.prototype.meuFilter = function(fn) {
    const novoArray = []

    for(let i = 0; i < this.length; i++) {
        const result = fn(this[i])
        result ? novoArray.push(this[i]) : false 
    }

    return novoArray;
}

const mapNewAnimals = item => ({
    ...item,
    docil: false
}) 

const getVacinado = item => item.vacinado

const getNewArray = () => animals.meuFilter(getVacinado)
                                .map(mapNewAnimals)

console.log(getNewArray())