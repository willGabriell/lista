/*
Descrição: Crie uma função verificarIdade(idade) que determina se uma pessoa é
menor de idade (menor que 18 anos), maior de idade (entre 18 e 64 anos) ou idoso (65
anos ou mais).
• Entrada: idade = 20
• Saída Esperada: "Maior de idade"
*/

function verificarIdade(idade) {
    if (idade >= 65) {
        console.log("idoso");
        
    } else if (idade >= 18 && idade <= 64) {
        console.log("maior de idade");
        
    } else if(idade < 18) {
        console.log("menor de idade");
    }
}

verificarIdade(20)