let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for (let indice = 0; indice < numbers.length; indice = indice + 1){
    soma = soma + numbers[indice];
    let media = soma/numbers.length;
    console.log(media);
}

if (soma > 20){
    console.log("valor maior que 20");
} else if (soma <= 20){
    console.log("valor menor que 20");
}