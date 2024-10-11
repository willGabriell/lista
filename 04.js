/*
Descrição: Você está implementando um sistema de cálculo de frete. Crie uma função
calcularFrete(peso) que recebe o peso de um pacote em kg e retorna o valor do frete.
Se o peso for até 5 kg, o frete é R$ 20. Se o peso estiver entre 5 kg e 20 kg, o frete é R$
50. Acima de 20 kg, o frete é R$ 100.
• Entrada: peso = 12
• Saída Esperada: 50
*/

function calcularFrete(peso) {
    let frete = 0

    if (peso <= 5) {
        frete = 20
        
    } else if (peso > 5 && peso <= 20) {
        frete = 50
        
    } else {
        frete = 100
        
    }
    console.log(frete);
    
}

calcularFrete(12)