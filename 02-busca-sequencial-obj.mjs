function buscaSequencial(vetor, valor, fnComp){
    for(let i = 0; i < vetor.length; i++){
        //Terceirizando a comparação
        if(fnComp(vetor[i], valor)) return i //Retorna a posição onde o valor foi encontrado
    }
    return -1//Valor de busca não encontrado
}

/*function comparaNome(objNome, valor){
    return objNome.first_name === valor
}*/

const comparaNome = (objNome, valor) => objNome.first_name === valor

import { objNomes } from './includes/vetor-obj-nomes.mjs'

console.log(buscaSequencial(objNomes, 'FAUSTO', comparaNome))