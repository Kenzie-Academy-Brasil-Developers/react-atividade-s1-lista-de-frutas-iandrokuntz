import './App.css';
import {useState} from "react"
import CardFruit from './Componentes/CardFruit';

function App() {

  const [fruits, setFruits] = useState([
    { name: "banana",     color: "yellow", price: 2 },
    { name: "cherry",     color: "red",    price: 3 },
    { name: "strawberry", color: "red",    price: 4 },
   ]);

   const nomesDasFrutas = fruits.map((nome) => {
    return nome.name
   })

  function filterRedFruits(){
    
    const frutasVermelhas = fruits.filter(nome => {
      return(nome.color === "red")

    })
    setFruits(frutasVermelhas);
  }

  const precoTotal = fruits.reduce((acc, value) => {
    return value.price + acc;
  }, 0);

  return (
    <div className="App">
      <header className="App-header">
        
        {fruits.map((fruit) => (
            <CardFruit fruit={fruit} />
        ))}

          <span>Preço Total = {precoTotal}</span>

          <ul>{nomesDasFrutas + ""}</ul>

          <button onClick={filterRedFruits}>Mostrar Frutas Vermelhas</button>
      </header>
    </div>
  );
}
        
export default App;
