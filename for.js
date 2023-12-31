const numeros = [100, 200, 300, 400, 500, 600];

// Primeira expressão: é executada apenas uma vez.
// Segunda expressão: condição de execução.
// Terceira expressão: é executada sempre ao final do bloco.

// for Clássico
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

//for Funcional (recebe uma callback)
numeros.forEach((el) => console.log(el));
