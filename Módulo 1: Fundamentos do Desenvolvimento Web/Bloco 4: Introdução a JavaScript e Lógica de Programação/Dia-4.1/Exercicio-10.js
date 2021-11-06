let custo = 10;
let venda = 20;
const imposto = custo + (0,2*custo);


if (custo > 0 && venda > 0) {
    console.log("O lucro da venda de mil produtos é de " + 1000*(venda - imposto));
} else if (custo < 0 || venda < 0){
    console.log("Valor invalido");
}