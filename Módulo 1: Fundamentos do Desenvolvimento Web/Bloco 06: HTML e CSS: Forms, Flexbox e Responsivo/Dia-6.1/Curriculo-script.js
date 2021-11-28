const estado = document.getElementById("estado");
estado.addEventListener("click", opcoesEstado);
const opcaoDeEstado = document.createElement("option");

const todosOsEstados = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];

function opcoesEstado() {
    
    for (let indice = 0; indice < todosOsEstados.length; indice = indice + 1){
    opcaoDeEstado.innerText = todosOsEstados[indice];
    estado.appendChild(opcaoDeEstado);
    }
}