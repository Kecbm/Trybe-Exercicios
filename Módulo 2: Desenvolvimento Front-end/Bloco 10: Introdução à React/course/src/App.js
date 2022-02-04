import "./App.css";
import CardList from './components/CardList';
import Header from './components/Header';

// PROPS: são argumentos que você fornece a um componente (key=item.id)

//  19 MODULE: Acessa o array de objetos no data (contents)

// <CardList />: renderiza na tela tudo que acontece no componente CardList

function App() {

  return (
    <main>
      <div>
        <Header />
        <CardList />
      </div>
    </main>
  );
}

export default App;
