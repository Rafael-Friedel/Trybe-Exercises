const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addTurno = (par1, par2, par3) =>  par1[par2] = par3;
  

  const listKeys = (obj) => Object.keys(obj)
  
  const listvalues = (obj) => Object.values(obj)

  const allLessons = {}

  Object.assign(allLessons,{lesson1,lesson2,lesson3})
  console.log(allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
// // Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
// // Copiar
// console.log(getValueByNumber(lesson1, 0));
// // Output: 'Matématica'
// // Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
// // Copiar
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// // Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false