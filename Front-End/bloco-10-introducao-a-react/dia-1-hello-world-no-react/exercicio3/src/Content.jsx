import React from 'react';


const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <section> 
        {conteudos.map((cont) => (
          <section key={cont.conteudo}>
            <h4>{`O conteúdo é: ${cont.conteudo}`} </h4>
            <p>{`Bloco: ${cont.bloco}`}</p>
            <p>{`Status: ${cont.status}`}</p>

        </section>
        ))}
        
      </section>
    )
  }
}

export default Content;