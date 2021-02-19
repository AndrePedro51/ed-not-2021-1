//Objetos são estruras que permitem armazenar diversos valores em uma mesma variável
//permitindo acessa-los por meio de um nome

let vazio = {}

//Objeto com dados

let pessoa = {
    nome: 'Karen',
    sexo: 'F',
    dataNasc: '25-09-1998',
    ocupacao: 'contadora',
    gostos: ['dormir', 'maquiagem'],
    //Quando a proriedade ter espaços deve estar entre aspas
    'cidade de origem': 'Franca'
}
console.log(pessoa)

//Exibindo apenas o valor de uma propriedade 
console.log(pessoa.nome)
console.log(pessoa.gostos)
console.log(pessoa['cidade de origem'])
console.log(pessoa['gostos'])

let x = "sexo"
console.log(pessoa[x])
x = 'dataNasc'
console.log(pessoa[x])

//Criando nova propriedade para um objeto ja existente

pessoa.email = 'karen.ribeiro@gmail.com'
console.log(pessoa)

let objVazio = {}
objVazio.nome = 'André'
objVazio.idade = 22
objVazio['altura'] = '1.78'
console.log(objVazio)

//Deletando um parametro do objeto
delete objVazio.idade

console.log(objVazio)