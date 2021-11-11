function maiorNome(array){
    for (let indice = 0; indice < array.length; indice = indice + 1){
        if(array[indice].length > array[indice + 1].length){
            return console.log(array[indice]);
        }
    }
}

maiorNome (['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);