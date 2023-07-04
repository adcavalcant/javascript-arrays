const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
    return acumulador + nota;
  }, 0); //0 = valor inicial do acumulador
  const media = somaDasNotas / notasDaSala.length;
  return media;
}

const print = console.log;
print(calculaMedia(salaJS));
print(calculaMedia(salaJava));
print(calculaMedia(salaPython));
