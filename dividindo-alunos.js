const alunos = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "André",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];

const alunosA = alunos.slice(0, alunos.length / 2); //não inclui o alunos[10]
const alunosB = alunos.slice(alunos.length / 2, 20); //não inclui o alunos[20]

console.log(alunos.length);
console.log(alunosA);
console.log(alunosB);
