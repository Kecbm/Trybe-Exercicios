let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numero1 = numbers[indice];
let numero2 = numbers[indice - 1];

for (var indice = 0; indice < numbers.length; indice = indice + 1){
    if (numero1 > numero2){
        console.log("O maior número é " + numero1)
    } else {
        console .log("O maior número é " + numero2);
    }
}