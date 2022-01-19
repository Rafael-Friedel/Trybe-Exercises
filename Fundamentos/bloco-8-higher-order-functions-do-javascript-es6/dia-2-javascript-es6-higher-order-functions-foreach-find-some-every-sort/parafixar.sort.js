// Para fixar
// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .
// Copiar
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];



console.log(people.sort((idade1,idade2) => idade1.age - idade2.age));
// 2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente .

console.log(people.sort((idade1,idade2) => idade2.age - idade1.age));