let contador = 0;
let nota = "";
let media = 0;

while (contador < 3){
    nota = prompt(`Digite a ${contador+1}ª nota:`);
    console.log("Nota: "+nota);

    while ((nota == "") || (nota < 0) || (nota > 10)){
        nota = prompt(`Valor de nota inválido! Insira somente valores de 0 - 10 (incluindo 10)`);

    }

    media += (nota/3);
    console.log("Media: "+media);

    contador++;


}
alert(`Média final do(a) aluno(a): ${media.toFixed(2)}`); //Arredondando