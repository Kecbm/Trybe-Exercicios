
//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let player1 = "tesoura";
let player2 = "papel";

if (player1 === "pedra" && player2 === "pedra"){
    console.log("Empate");
} else if (player1 === "pedra" && player2 === "papel"){
    console.log("Player 2 ganhou");
} else if (player1 === "pedra" && player2 === "tesoura"){
    console.log("Player 1 ganhou");
}

else if (player1 === "papel" && player2 === "pedra"){
    console.log("Player 1 ganhou");
} else if (player1 === "papel" && player2 === "papel"){
    console.log("Empate");
} else if (player1 === "papel" && player2 === "tesoura"){
    console.log("Player 2 ganhou");
}

else if (player1 === "tesoura" && player2 === "pedra"){
    console.log("Player 2 ganhou");
} else if (player1 === "tesoura" && player2 === "papel"){
    console.log("Player 1 ganhou");
} else if (player1 === "tesoura" && player2 === "tesoura"){
    console.log("Empate");
}

else if (player1 === "pedra" && player2 === "pedra"){
    console.log("Empate");
} else if (player1 === "papel" && player2 === "pedra"){
    console.log("Player 1 ganhou");
} else if (player1 === "tesoura" && player2 === "pedra"){
    console.log("Player 2 ganhou");
}

else if (player1 === "pedra" && player2 === "papel"){
    console.log("Player 2 ganhou");
} else if (player1 === "papel" && player2 === "papel"){
    console.log("Empate");
} else if (player1 === "tesoura" && player2 === "papel"){
    console.log("Player 1 ganhou");
}

else if (player1 === "pedra" && player2 === "tesoura"){
    console.log("Player 1 ganhou");
} else if (player1 === "papel" && player2 === "tesoura"){
    console.log("Player 2 ganhou");
} else if (player1 === "tesoura" && player2 === "tesoura"){
    console.log("Empate");
}