/*
Descrição: Crie uma função imprimirPares(limite) que imprime todos os números
pares de 0 até limite. Utilize um laço for para iterar e imprimir apenas os números
pares.
• Entrada: limite = 10
• Saída Esperada: 0, 2, 4, 6, 8, 10
*/

function imprimirPares(limite) {
    for (let i = 0; i <= limite; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

imprimirPares(10); 