const objArray = require('./data');
const regioes = objArray.regions;
const estados = objArray.states;
const cidades = objArray.cities;

const filtraCidade = (sigla) => cidades.filter((cidade) => cidade.region === sigla);

const qualEstado = (sigla) => estados.find((estado) =>estado.short === sigla ).name;

const mapCities = () => {

  const retorno = {};
  regioes.forEach((regiao) => {
      if (filtraCidade(regiao.short).length > 0) {
    retorno[regiao.short] = {
        city: filtraCidade(regiao.short),
        state: 'ainda nao sei'
    };
      }
  });
  console.log(retorno);
}

mapCities();


// console.log(qualEstado('AM'));

// {
//     N: [
//       { city: 'Manaus', state: 'Amazonas' },
//       { city: 'Belém', state: 'Pará' },
//       { city: 'Porto Nacional', state: 'Tocantins' }
//     ],
//     SE: [
//       { city: 'Lavras', state: 'Minas Gerais' },
//       { city: 'Presidente Prudente', state: 'São Paulo' }
//     ],
//     NE: [
//       { city: 'Feira de Santana', state: 'Bahia' },
//       { city: 'Touros', state: 'Rio Grande do Norte' },
//       { city: 'Jericoacoara', state: 'Ceará' }
//     ],
//     S: [ { city: 'Cascavel', state: 'Paraná' } ],
//   }