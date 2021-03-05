let comps

function buscaBinaria(vetor, fnComp){
    comps = 0
    let ini = 0
    let fim = vetor.length -1
    let meio 
    while(fim >= ini){
        meio = Math.floor((fim+ini) / 2) // Aredondando para baixo
        switch(fnComp(vetor[meio])){
            case 0: //Achou
                comps++
                return meio
            case 1://Valor da busca é Maior
                comps +=2
                ini = meio + 1
                break
            default://Valor de busca é Menor
                comps += 2
                fim = meio -1

        }
        /*if(vetor[meio] === valorBusca) {
            comps++
            return meio //Achou

        }
        else if(valorBusca > vetor[meio]) {
            comps += 2
            ini = meio +1
        }
        else {
            comps += 2
            fim = meio -1
        }*/
    }
    return -1 //Não existe
}

//Função de comparação para a busca  binaria precisa retornar um de tres valores:
// Retorno  0: o valor de busca e o valor no objeto são iguais
// Retorno -1: o valor de busca é menor que o valor no objeto
// Retorno  1: o valor de busca é maior que o valor no objeto

const comparaNome = (obj, busca = 'FAUSTO') => {
    if(busca === obj.first_name) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}

import { objNomes } from './includes/vetor-obj-nomes.mjs'

console.time('Buscando ANDRE')
console.log(buscaBinaria(objNomes, (obj, busca = 'ANDRE') => {
    if(busca === obj.first_name) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}), {comps})
console.timeEnd('Buscando ANDRE')

console.time('Buscando KAREN')
console.log(buscaBinaria(objNomes, (obj, busca = 'KAREN') => {
    if(busca === obj.first_name) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}), {comps})
console.timeEnd('Buscando KAREN')
