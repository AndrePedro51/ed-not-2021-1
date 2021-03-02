function buscaSequencial(vetor, fnComp){
    for(let i = 0; i < vetor.length; i++){
        //Terceirizando a comparação
        if(fnComp(vetor[i])) return i //Retorna a posição onde o valor foi encontrado
    }
    return -1//Valor de busca não encontrado
}

/*function comparaNome(objNome, valor){
    return objNome.first_name === valor
}*/

//const comparaNome = (objNome, valor) => objNome.first_name === valor

import { objNomes } from './includes/vetor-obj-nomes.mjs'




console.log(buscaSequencial(objNomes, obj => obj.first_name === 'FAUSTO'))
console.log(buscaSequencial(objNomes, obj => obj.group_name === 'MARIA'))

//Primeiro nome da lista que tem mais de 1000 pessoas registradas
let pos = buscaSequencial(objNomes, obj => obj.frequency_total > 1000)

console.log(objNomes[pos])

//Primeiro nome da lista masculino com mais de 10000 registrados
pos = buscaSequencial(objNomes, obj => obj.frequency_total > 10000 && obj.classification === 'F')
console.log(objNomes[pos])