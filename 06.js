/*
Descrição: Crie uma função contagemRegressiva(inicio) que imprime uma contagem
regressiva a partir de um número até 0. Utilize um laço for para iterar e imprimir cada
número.
Entrada: inicio = 5
Saída Esperada: 5, 4, 3, 2, 1, 0
*/

function contagemRegressiva(inicio) {
    for (let i = inicio; i >= 0; i--) {
        console.log(i);
    }
}

contagemRegressiva(5)