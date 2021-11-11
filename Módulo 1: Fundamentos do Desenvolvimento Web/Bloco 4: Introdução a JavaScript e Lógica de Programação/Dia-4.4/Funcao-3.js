function menorValor (array){

    for(let indice = 0; indice < array.length; indice = indice + 1){
        if(array[indice] < array[indice + 1]){
    return console.log(indice);
        }
    }
}

menorValor([2, 4, 6, 7, 10, 0, -3]);