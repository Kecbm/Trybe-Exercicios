function maiorValor (array){
    let maior;

    for(let indice = 0; indice < array.length; indice = indice + 1){
        if(array[indice] > array[indice + 1]){
    return console.log(indice);
        }
    }
}

maiorValor([2, 3, 6, 7, 10, 1]);