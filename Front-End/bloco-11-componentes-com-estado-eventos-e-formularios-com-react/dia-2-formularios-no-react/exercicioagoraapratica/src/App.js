import React from 'react';
import DadosPessoais from './DadosPessoais';
import './App.css';
import DadosUltimoEmprego from './DadosUltimoEmprego';

function App() {
  return (
    <div className="App">
     <form> 
       <h1>Preencha seus Dados</h1>
       <DadosPessoais />
       <DadosUltimoEmprego />
     </form>
    </div>
  );
}

export default App;
