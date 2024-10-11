/*
Descrição: Você está desenvolvendo um sistema de checkout para uma loja. Crie uma
função calcularDesconto(preco, tipoCliente) que recebe o preço de um produto e o
tipo de cliente ("regular" ou "membro") e retorna o preço final após aplicar um
desconto. Clientes regulares não recebem desconto, enquanto membros recebem
10% de desconto.
• Entrada: preco = 100, tipoCliente = "membro"
• Saída Esperada: 90
*/


function calcDesc(preco, tipoCliente) {
    if (tipoCliente === "membro") {
        console.log(preco * 0.9);
    } else {
        console.log(preco);
    }
}

calcDesc(100, "membro")