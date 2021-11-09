//5. Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

const carol = 30;
const murilo = 25;
const baeta = 35;

if (carol < murilo && carol < baeta){
    console.log("Carol é a mais nova")
} else if (murilo < carol && murilo < baeta){
    console.log("Murilo é o mais novo")
} else if (baeta < murilo && baeta < carol){
    console.log("Baeta é o mais novo")
}