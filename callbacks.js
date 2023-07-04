const nomes = ["Evaldo", "Mauro", "Camis"];

//1º forma de escrever a função: (passando uma função anônima)
/* nomes.forEach(function (nome) {
   console.log(nome);
}); */

//2º forma de escrever a função: (passando uma função arrow)
// nomes.forEach((nome) => console.log(nome));

function imprimeNome(nome) {
  console.log(nome);
}

nomes.forEach(imprimeNome);
