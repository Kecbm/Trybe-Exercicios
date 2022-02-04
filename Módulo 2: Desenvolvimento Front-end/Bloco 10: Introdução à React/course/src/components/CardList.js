import React from 'react';
import Card from './Card';
import contents from '../data';

// 12 CONTENTS.MAP: Passa por todos os objetos do array data e retorna as informações de cada um

class CardList extends React.Component {
  render() {

    return(
      <section>
        {contents.map((item) => (
          <Card key={item.id} module={item} />
        ))}
      </section>
    )
  }
}

export default CardList;