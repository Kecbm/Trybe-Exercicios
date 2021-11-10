let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livroFavorito: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livroFavorito[0].titulo);

  leitor.livroFavorito.push = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
  }
 
  console.log(leitor.nome + " tem " + leitor.livroFavorito.length + " livros favoritos");