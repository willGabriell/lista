/*
Descrição: Crie uma função calcularFatorial(numero) que calcula o fatorial de um
número fornecido. O fatorial é o produto de todos os números inteiros positivos até o
número fornecido. Utilize um laço for para calcular o fatorial.
• Entrada: numero = 5
• Saída Esperada: 120 (5! = 5 × 4 × 3 × 2 × 1)
*/

function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = numero; i > 0; i--) {
        fatorial *= i;
    }
    console.log(fatorial);
}

calcularFatorial(5); 