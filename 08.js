/*
Descrição: Crie uma função somaNumeros(n) que calcula a soma de todos os
números inteiros de 1 até n. Utilize um laço while para somar os números.
• Entrada: n = 4
• Saída Esperada: 10 (1 + 2 + 3 + 4)
*/ 

function somaNumeros(n) {
    let soma = 0;
    let i = 1;
    while (i <= n) {
        soma += i;
        i++;
    }
    console.log(soma);
}

somaNumeros(4); 