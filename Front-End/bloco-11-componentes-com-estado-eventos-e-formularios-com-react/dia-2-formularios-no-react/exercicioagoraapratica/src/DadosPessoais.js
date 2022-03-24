import React from "react";

class DadosPessoais extends React.Component{
  render(){
    return (
      <fieldset><legend>Dados Pessoais:</legend>
       
       <label>
         Nome:
         <input type='text'></input> 
       </label>
       
       <label>
         Nome:
         <input type='text' maxLength='40'></input> 
       </label>
       
       <label>
         Email:
         <input type='text' maxLength='50'></input> 
       </label>
       
       <label> 
         CPF:
         <input type='text' maxLength='11'></input> 
       </label>
       
       <label> 
         {/*  remover qualquer caracter especial*/}
         Endereço:
         <input type='text' maxLength='200' required></input> 
       </label>
       
       <label> 
         {/*  Ao remover o foco desse campo (evento onBlur ), verificar se o nome da cidade começa com números. Caso comece, limpar o campo*/}
         Cidade:
         <input type='text' maxLength='28' required></input> 
       </label>
      
       <label> 
         {/* Estado - ComboBox Todos os estados do Brasil*/}
         Estado:
         <input type='text' required></input> 
       </label>
       
       <section> 
        <p>Tipo:</p>
        <label>
        Casa
        <input name='type' type='radio' value='casa' checked></input> 
        </label>

        <label>
        Apartamento
        <input type='radio' name='type' value='apartamento'></input> 
        </label>
       </section>
       </fieldset>
    )
  }
}

export default DadosPessoais;