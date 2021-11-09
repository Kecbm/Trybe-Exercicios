let n = 5;
let asteristico = "*";

for (let indice = (n - 1); indice <= n; indice = indice - 1){
    console.log(asteristico.repeat(n - indice));
}