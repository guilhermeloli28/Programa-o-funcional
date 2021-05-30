const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(_, dados) {
    console.log(dados.toString())
}

fs.readFile(caminho, exibirConteudo)

const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())

