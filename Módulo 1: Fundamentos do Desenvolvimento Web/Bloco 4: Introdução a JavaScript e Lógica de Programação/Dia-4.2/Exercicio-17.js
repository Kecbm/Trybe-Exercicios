let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let lista = [];

for (let indice = 1; indice < numbers.length; indice = indice + 1){
    for (let second = 0; second < indice; second = second +1){
        lista.push(numbers[indice] * numbers [second]);
        console.log(lista);
    }
}