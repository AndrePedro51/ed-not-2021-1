

let trocas, comps, pass

function quickSort(vetor, ini = 0, fim = vetor.length -1){
    if(fim > ini){
        pass++
        const pivot = fim
        let div = ini - 1
        // Loop for vai ate a penultima posição
        for (let i = ini; i < fim; i++){
            if(vetor[i] < vetor[pivot]){
                comps++
                div++
                if(i !== div) {
                    [ vetor[i], vetor[div] ] = [ vetor[div], vetor[i] ]
                    trocas++
                }
            }
        }
        div++
        //Colocamos o pivot no deu lugar definitivo
        if(vetor[pivot] < vetor[div]){
            [ vetor[pivot], vetor[div] ] = [ vetor[div], vetor[pivot] ]
            trocas++
        }
        comps++
        //Ordena o subvetor a esquerda do pivot
        quickSort(vetor, ini, div-1)

        //Ordenar o subvetor a direita do vetor
        quickSort(vetor, div + 1, fim)
    }
    
}

trocas = 0, comps = 0, pass = 0
let nums = [5,2,4,1,5,8,7,3,1,4,9]
quickSort(nums)
console.log(nums)
console.log({trocas, comps, pass})