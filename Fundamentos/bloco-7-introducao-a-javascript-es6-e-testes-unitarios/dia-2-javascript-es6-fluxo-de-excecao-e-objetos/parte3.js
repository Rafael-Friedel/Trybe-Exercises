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
  

  const somaEstudantes = (lessons) => {
     let sum = 0;
    const keys = Object.keys(lessons)
    for (let i in keys){
      const atual = keys[i]
      sum += lessons[atual].numeroEstudantes
    }
    return sum
  }

  const valorChave = (obj,posição) => Object.values(obj)[posição]

const verificaPar = (obj,key, value) =>{
const arr = Object.entries(obj);
let retorno = false;
for (let index in arr) {
  if (arr[index][0] === key && arr[index][1] === value) retorno = true;
}
return retorno;
}

console.log(verificaPar(lesson1, 'materia','Matemática'))
