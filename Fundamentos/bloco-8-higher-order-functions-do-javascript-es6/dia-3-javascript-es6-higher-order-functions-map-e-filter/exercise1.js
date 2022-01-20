const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// Adicione o código do exercício aqui:

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// Dica: Use a função map

// const expectedResult = [
//     'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
//     'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
//     'Fundação - Ficção Científica - Isaac Asimov',
//     'Duna - Ficção Científica - Frank Herbert',
//     'A Coisa - Terror - Stephen King',
//     'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
//   ];

const formatedBookNames = (book) => book.map((object) => `${object.name} - ${object.genre} - ${object.author.name}`)

//   console.log(formatedBookNames(books))

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
// Dica: use as funções map , sort
// Copiar

// const expectedResult = [
//   {
//     age: 31,
//     author: 'Isaac Asimov',
//   },
//   {
//     age: 38,
//     author: 'H. P. Lovecraft',
//   },
//   {
//     age: 39,
//     author: 'Stephen King',
//   },
//   {
//     age: 43,
//     author: 'George R. R. Martin',
//   },
//   {
//     age: 45,
//     author: 'Frank Herbert',
//   },
//   {
//     age: 62,
//     author: 'J. R. R. Tolkien',
//   },
// ];

const nameAndAge = (book) => {
   return book.map((object) => (
       {
            author: object.author.name,
            age: object.releaseYear - object.author.birthYear,
        })
    )
    .sort((obj1, obj2) => obj1.age - obj2.age);
};

// console.log(nameAndAge(books))

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// Dica: use a função filter ;

const fantasyOrScienceFiction = (book) => book.filter((obj) => obj.genre === 'Fantasia' || obj.genre === 'Ficção Científica')

// console.log(fantasyOrScienceFiction(books));

// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// Dica: use as funções filter e sort

const oldBooksOrdered = (book) => book.filter((obj) => (obj.releaseYear < 1961)).sort((obj1,obj2) => obj1.releaseYear - obj2.releaseYear)

// console.log(oldBooksOrdered(books));

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.



const fantasyOrScienceFictionAuthors = (func, arr) => func(arr).map((obj) => obj.author.name).sort() //MINHA RESPOSTA

// function fantasyOrScienceFictionAuthors() {
//     const wantedGenres = ['Fantasia', 'Ficção Científica'];
//     return books
//       .filter((book) => wantedGenres.includes(book.genre))
//       .map((book) => book.author.name).sort();
//   } GABARITO TRYBE

console.log(fantasyOrScienceFictionAuthors(fantasyOrScienceFiction,books));