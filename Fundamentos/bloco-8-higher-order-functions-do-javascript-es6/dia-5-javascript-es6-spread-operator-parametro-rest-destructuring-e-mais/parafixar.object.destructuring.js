// Para Fixar
// 1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise . Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator .
// Copiar

const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
};

const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};
// 2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals .
// Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"

const userJobinfo = {
    ...user,
    ...jobInfos,
};
// console.log(userJobinfo);

const {name:nome, age:idade,nationality:nacionalidade, profession:profissão, squad: equipe, squadInitials:iniciais} = userJobinfo

console.log(`Hi, my name is ${nome}, I'm ${idade} years old and I'm ${nacionalidade}. I work as a Software engineer and my squad is ${iniciais}-${equipe}`)
