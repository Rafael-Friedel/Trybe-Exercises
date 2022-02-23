import React from 'react';

class DadosUltimoEmprego extends React.Component{
  
  
  render(){
    return(
      <fieldset><legend>Dados Último emprego:</legend>
       
       <textarea placeholder='Resumo do currículo' maxLength='1000' required></textarea> 
       
       
       <textarea placeholder='Cargo' maxLength='40' required></textarea>
       {/*  Quando o mouse passar por cima deste campo (evento onMouseEnter ), exibir um alerta dizendo 'Preencha com cuidado esta informação.'. Exiba essa mensagem apenas uma vez.*/}
       
       <textarea placeholder='Descrição do Cargo' maxLength='500' required></textarea>
       {/* Crie um botão que, ao ser clicado, monta uma <div> com o consolidado dos dados que foram inseridos no formulário. Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.  */}
       </fieldset>
    )
  }
}

export default DadosUltimoEmprego;
