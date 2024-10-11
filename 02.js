/*
Descrição: Crie uma função classificarNota(nota) que recebe uma nota de um aluno e
retorna uma mensagem classificando a nota como "Aprovado", "Recuperação" ou
"Reprovado". As notas maiores ou iguais a 70 são aprovadas, as notas entre 50 e 69
estão em recuperação, e notas abaixo de 50 são reprovadas.
• Entrada: nota = 65
• Saída Esperada: "Recuperação"
*/

function classNota(nota) {
    if(nota >= 70) {
        console.log("Aprovado");
    } else if(nota <= 69 && nota >= 50 ){
        console.log("Recuperação");
    } else {
        console.log("Reprovado");
    }
}

classNota(49)