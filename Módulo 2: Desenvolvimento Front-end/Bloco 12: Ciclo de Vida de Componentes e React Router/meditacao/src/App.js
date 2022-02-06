import React from 'react';
import './App.css';
import Timer from './components/Timer';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      showTimer: true,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({showTimer: !prevState.showTimer}));
  }

  render() {
    return (
      <div>
       <header>
         <span>🍃</span>
         <h1>Meditrybe</h1>
       </header>
       {(this.state.showTimer === true) && <Timer />}
       <button type="button" onClick={this.handleClick}>Esconder timer</button>
      </div>
    );
  }
}

export default App;
