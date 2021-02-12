let frutas = ["maça", 'laranja', 'pera', 'uva', 'goiaba', 'banana']

console.log(frutas)
//retirar o ultimo vetor
let ultimaFruta = frutas.pop()

console.log(frutas)
console.log(ultimaFruta)

//Remoção do primeiro elemento do vetor
let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

//remção de um elemento especifico
let terceiraFrtua = frutas.splice(2,1)

console.log(frutas)
console.log(terceiraFrtua)