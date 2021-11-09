let n = 5;
let asteristico = "*";
let espaco = "<br>";

for (let indice = (n - 1); indice <= n; indice = indice - 1){
    console.log(asteristico.repeat(n - espaco*indice));
}