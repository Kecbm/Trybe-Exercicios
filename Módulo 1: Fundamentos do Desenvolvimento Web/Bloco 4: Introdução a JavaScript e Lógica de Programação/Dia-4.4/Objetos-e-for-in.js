let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log("Bem-vinda, " + info.personagem)

  info["recorrente"] = "sim";
  console.log(info);

  for (let key in info){
      console.log(key);
  }

  for (let key in info){
    console.log(info[key]);
}

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell',
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
  };

  for (let key in info){
      
    console.log(info[key] + " e " + info2[key]);
      
    if(info.recorrente === "sim" && info2.recorrente === "sim"){
        console.log("Ambos recorrentes");
    }
}