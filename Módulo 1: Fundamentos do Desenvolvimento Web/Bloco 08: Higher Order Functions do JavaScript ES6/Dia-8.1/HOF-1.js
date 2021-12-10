const bomDia = () => 'Acordando!';

const cafe = () => 'Bora tomar café!';

const noite = () => 'Partiu dormir!';

const atividades = (func) => console.log(func());

atividades(bomDia);
atividades(cafe);
atividades(noite);