let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let indice = 0; indice < numbers.length; indice = indice + 1){
    if (numbers[indice] %2 !== 0){
        console.log(numbers[indice] + " é impar");
    } else {
        console.log("Nenhum valor ímpar encontrado");
    }
}