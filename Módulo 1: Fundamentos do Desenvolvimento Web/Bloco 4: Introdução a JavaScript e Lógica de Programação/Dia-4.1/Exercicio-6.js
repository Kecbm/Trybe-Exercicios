let name = "RAINHA";

if (name.toLowerCase() === "rei"){
    console.log("horizontal, vertical e diagonal");
} else if (name.toLowerCase() === "rainha"){
    console.log("horizontal, vertical e diagonal");
} else if (name.toLowerCase() === "bispo"){
    console.log("diagonal");
} else if (name.toLowerCase() === "cavalo"){
    console.log("em forma de L");
} else if (name.toLowerCase() === "torre"){
    console.log("vertical e horizontal");
} else if (name.toLowerCase() === "peao"){
    console.log("casa para frente e captura peças na diagonal");
} else {
    console.log("peça invalida, tente novamente");
}