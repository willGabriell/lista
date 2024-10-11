/*
Descrição: Crie uma função classificarTemperatura(temperatura) que classifica a
temperatura em "Frio", "Agradável" ou "Quente". Temperaturas abaixo de 15°C são
consideradas frias, entre 15°C e 25°C são agradáveis, e acima de 25°C são quentes
Entrada: temperatura = 22
Saída Esperada: "Agradável"
*/ 

function classificarTemperatura(temperatura) {
    let classificacao;

    if (temperatura < 15) {
        classificacao = "Frio";
    } else if (temperatura <= 25) {
        classificacao = "Agradável";
    } else {
        classificacao = "Quente";
    }
    console.log(classificacao)
}

classificarTemperatura(22);  
