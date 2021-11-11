function somatorio (n){
    let soma = 0;
    
    for (let indice = 0; indice <= n; indice = indice + 1){
        soma = soma + indice;
    }

    return console.log(soma);
}

somatorio(5);