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
      birthYear: 1921, //1920
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

//   1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// Dica: use a função find 

const authorBornIn1947 = (book) => book.find((object) => object.author.birthYear === 1947).author.name

// console.log(authorBornIn1947(books));

function smallerName(book) {
  let nameBook;

  book.forEach((object) => {
    if (!nameBook || nameBook.length > object.name.length) {
      nameBook = object.name
    }
  })
  return nameBook;
}

// console.log(smallerName(books));


// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

const getNamedBook = (book) => book.find((object) => object.name.length === 26);


// console.log(getNamedBook(books));

const booksOrderedByReleaseYearDesc = (book) => book.sort((object1, object2) => object2.releaseYear - object1.releaseYear);

// console.log(booksOrderedByReleaseYearDesc(books));

const everyoneWasBornOnSecXX = (book) => book.every((object) => object.author.birthYear > 1900 && object.author.birthYear < 2001);

// console.log(everyoneWasBornOnSecXX(books));


const someBookWasReleaseOnThe80s = (book) => book.some((object) => object.releaseYear > 1979 && object.releaseYear < 1990);

// console.log(someBookWasReleaseOnThe80s(books));

// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

// const authorUnique = (book) => book.every((object1, object2) => object1.author.birthYear === object2.author.birthYear

const authorUnique = (book) => {
  return book.every((object1) =>
    //book.some((object2)
    !book.some((object2) =>
      (object2.author.birthYear === object1.author.birthYear)
      && (object2.author.name !== object1.author.name)));
}



console.log(authorUnique(books));