const notas = [10, 6.5, 8, 7.5];

let somaNotas = 0;
let media = 0;
for (let n of notas) {
  somaNotas += n;
  media = soma / notas.length;
}

console.log(`Média = ${media}`);
