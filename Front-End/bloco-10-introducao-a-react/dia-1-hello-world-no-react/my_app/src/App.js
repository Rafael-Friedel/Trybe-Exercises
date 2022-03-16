import React from "react";
import "./App.css";


const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const array = ['Acordar cedo', 'Fazer higiêne pessoal', 'Tomar café', 'Ligar computador e iniciar os estudos', 'Parar para almoço']

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ol>
          {array.map((ind) => Task(ind) )}
        </ol>
      </div>
    );
  }
}

export default App;
