import React from 'react';

// 14 THIS.PROPS: é um objeto que contém todos os parêmetros que foram passados para o componente

// 14 MODULE: objeto recebido do App via props; contém todas as informações do array de objetos no data

//  25, 26, 28, 29: Acessa as chaves do objeto module

// 16 e 23: isLarge: propriedade dos objetos no data, quando o objeto tem isLarge = true, significa que sua imagem é maior; A função verifica se o objeto possui true nessa propriedade; Se sim, é aplicado uma estilização de CSS diferente dos demais cards

class Card extends React.Component {
  render() {

    const { module }= this.props;

    function isThisLarge() {
      if(module.isLarge) {
        return 'large';
      }
    }

    return (
      <article className={isThisLarge()}>
        <img
          src={module.imageUrl}
          alt={module.name}
        />
        <h3>{module.name}</h3>
        <h2>{module.title}</h2>
      </article>);
  }
}

export default Card