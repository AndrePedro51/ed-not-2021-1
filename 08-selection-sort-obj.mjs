
function selectionSort(vetor, fnComp){
    function encontrarMenor(inicio){
        let menor = inicio
        for(let j = inicio + 1; j < vetor.length; j++){
            //if(vetor[j]<vetor[menor]) menor = j
            if(fnComp(vetor[menor], vetor[j])) menor = j
        }
        return menor
    }
    for(let i = 0; i <= vetor.length - 2; i++){
        let menor = encontrarMenor(i + 1)
        if(fnComp(vetor[i], vetor[menor])) {
            [vetor[menor], vetor[i]] = [vetor[i], vetor[menor]]
        }
    }
}

//Função de comparação retorna true caso o primeiro objeto seja maior que o segundo

import { candidatos } from './includes/candidatos-2018.mjs'

console.log('ANTES:', candidatos)
console.time('Ordenando candidatos...')
// Ordenando pelo nome de urna (NM_URNA_CANDIDATO)
selectionSort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)
console.timeEnd('Ordenando candidatos...')
//console.log('DEPOIS:', candidatos)
