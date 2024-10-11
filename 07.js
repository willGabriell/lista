/*
Descrição: Crie uma função gerarTabuada(numero) que gera e imprime a tabuada de
multiplicação do número fornecido. Utilize um laço for para gerar a tabuada de 1 a 10.
Entrada: numero = 3
• Saída Esperada: 3 x 1 = 3, 3 x 2 = 6, …, 3 x 10 = 30
*/
function gerarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

gerarTabuada(3); 