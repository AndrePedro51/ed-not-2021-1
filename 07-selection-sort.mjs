/*
SELECTION SORT
É uma otimização do bubble sort.
Diminui drasticamente a quantidade de trocas feitas.

Isola um dos valores e procura pelo menor valor entre  os restantes,
promovendo a troca caso o primeiro valor seja maior que o segundo.

*/

function selectionSort(vetor){
    function encontrarMenor(inicio){
        let menor = inicio
        for(let j = inicio + 1; j < vetor.length; j++){
            if(vetor[j]<vetor[menor]) menor = j
        }
        return menor
    }
    for(let i = 0; i <= vetor.length - 2; i++){
        let menor = encontrarMenor(i + 1)
        if(vetor[menor] < vetor[i]) {
            [vetor[menor], vetor[i]] = [vetor[i], vetor[menor]]
        }
    }
}

let nums = [2,5,4,2,1,5,4,7,8,4,6,0,1]
selectionSort(nums)

console.log(nums)