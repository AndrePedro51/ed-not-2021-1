//Busca binaria requer um conjunto de dados Ordenados
//Atua dividindo o vetor sucessivamente em metades aproximadas ate que o valor de busca seja localizado
//ou que o ponteiro de fim fique antes do ponteiro de inicio. Essa ultima opção indica que o valor
//De busca nao existe no vetor

function buscaBinaria(vetor, valorBusca){
    let ini = 0
    let fim = vetor.length -1
    let meio 
    while(fim >= ini){
        meio = Math.floor((fim+ini) / 2) // Aredondando para baixo
        if(vetor[meio] === valorBusca) return meio //Achou
        else if(valorBusca > vetor[meio]) ini = meio +1
        else fim = meio -1
    }
    return -1 //Não existe
}
