let salarioBruto = 3000.00;
let salarioBase;
let salarioLiquido;

const inss1 = (0.08*salarioBruto);
const inss2 = (0.09*salarioBruto);
const inss3 = (0.11*salarioBruto);
const inss4 = 570.88;
let inss;

const ir1 = (0.075*salarioBruto);
const ir2 = (0.15*salarioBruto);
const ir3 = (0.225*salarioBruto);
const ir4 = (0.275*salarioBruto) + 869.36;
let ir;

if (salarioBruto >= 1556.94){
    salarioBase = salarioBruto - inss1;
} else if (salarioBruto >= 1556.95 ||  salarioBruto <= 2594.92){
    salarioBase = salarioBruto - inss2;
} else if (salarioBruto >= 2594.93 ||  salarioBruto <= 5189.82){
    salarioBase = salarioBruto - inss3;
} else if (salarioBruto > 5189.82){
    salarioBase = salarioBruto - inss4;
} 

if (salarioBase <= 1903.98){
    salarioLiquido = salarioBase;
} else if (salarioBase >= 1903.99 ||  salarioBase <= 2826.65){
    salarioLiquido = salarioBase - ir1;
} else if (salarioBase >= 2826.66 ||  salarioBase <= 3751.05){
    salarioLiquido = salarioBase - ir2;
} else if (salarioBase >= 3751.06 ||  salarioBase <= 4664.68){
    salarioLiquido = salarioBase - ir3;
} else if (salarioBase > 4664.68){
    salarioLiquido = salarioBase - ir4;
} 

console.log("Seu salário liquido é de: R$" + salarioLiquido);