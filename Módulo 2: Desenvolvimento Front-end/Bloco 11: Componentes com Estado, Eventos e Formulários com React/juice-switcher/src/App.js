import React from 'react';
import './App.css';
import colors from './colorsData';
import copo from './copo.png'

//  1. Listar as cores ✔ 
//  2. Aparecer o quadradinho com a cor ✔ 
//  3. Fazer o input ✔
//  4. Armazenar as informações do input ✔
//  5. Atualizar essas informações ✔
//  6. Filtrar as cores ✔
//  7. Adicionar o copo e mudar de cor 

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      typedText: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evento) {
    this.setState({
      typedText: evento.target.value
    })
  }

  primeiraCorHex() {
    if(this.state.typedText === '') {
      return '#303030'
    }

    const primeiraCor = colors.find((cor) => {
      if(cor.name.includes(this.state.typedText)) {
        return true
      } 
    })

    if(!primeiraCor) {
      return '#303030'
    }

    return primeiraCor.hex
  }

  render() {
    return (
      <div>
        <h1>Qual é o suco? 🍹</h1>
        <input value={this.state.typedText} onChange={this.handleChange} type="text" placeHolder="Digite o nome da cor aqui" />
        <img src={copo} alt="Imagem do copo" whidth="200" style={{backgroundColor: this.primeiraCorHex()}} />
        <hr />

        <ul>
          {colors
          .filter((cor) => cor.name.includes(this.state.typedText))
          .map((cor) => (
          <li key={cor.hex}>
            <div className="color-display" style={{backgroundColor: cor.hex}} ></div>
            {cor.name}
          </li>
          ))}
        </ul>

    </div>
  );
  }
}

export default App;
