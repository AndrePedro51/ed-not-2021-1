  
// Função que eleva um número ao quadrado
// Se precisar disso em uma situação real, use Math.pow() ou
// o operador **
function quadrado(n) {
    return n * n
}
console.log(quadrado(9))

// Características da função acima:
// 1) Apenas um parâmetro
// 2) Apenas uma linha de código, com return
// 3) CANDIDATA PERFEITA A VIRAR ARROW FUNCTION

// Transformando em arrow function
// a) Não precisa de parênteses envolvendo o parâmetro
// b) A palavra function é substituída pelo sinal =>, DEPOIS do parâmetro
// c) Não são necessárias as chaves nem a palavra return
const quadrado2 = n => n * n
console.log(quadrado2(9))

let potencia2 = (b, e) => b ** e
console.log(potencia2(2,2))

//Função sem parametros

function megasena(){
    //Esta função retorna um número aleatorio entre 1 e 60
    //Math.random() > retorna um número aleatório entre 0 e 1
    //Math.floor > arredonda para o menor inteiro 
    return Math.floor(Math.random() * 60 +1)

}
console.log(megasena(), megasena(), megasena(), megasena(), megasena(), megasena())

//Quando a função não tem argumentos, na arrow function é necessario deixar
//um par de parenteses vazios em marcar  seu lugar
const megasena2 = () => Math.floor(Math.random() * 60 + 1)
console.log(megasena2(), megasena2(), megasena2(), megasena2(), megasena2(), megasena2())

//Função com mais de uma linha de codigo no corpo
function somaVet(vet){
    let soma = 0
    for (let n of vet) soma += n
    return soma
}

console.log(somaVet([12, 42, -11, 20, 9, 16]))

//somaVet em arrow function

const somaVet2 = vet => {
    let soma = 0
    for (let n of vet) soma += n
    return soma
}
console.log(somaVet([12, 42, -11, 20, 9, 16]))