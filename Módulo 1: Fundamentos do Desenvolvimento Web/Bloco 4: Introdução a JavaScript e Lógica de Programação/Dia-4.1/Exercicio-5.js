const a = 0;
const b = 0;
const c = 0;

const soma = a + b + c;

if (soma == 180){
    console.log("true");
} else if (a <= 0 || b <= 0 || c <= 0){
    console.log("erro");
} else if (soma < 180){
    console.log("false");
}