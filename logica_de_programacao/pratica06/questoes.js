//1) Crie um programa que verifica se uma palavra ou frase é um palíndromo.

//2) Crie um programa com uma função que receba três números como argumentos e os retorne em ordem crescente. Exiba os números ordenados.

//1.
function verificaPalindromo(elemento){
    elemento = elemento.toString().toLowerCase();
    let meio = Math.floor(elemento.length/2);
    let substring1, substring2;

    if (elemento.length % 2 == 0){
        substring1 = elemento.substring(0, meio);
        substring2 = elemento.substring(meio, elemento.length);

    }else{
        substring1 = elemento.substring(0, meio);
        substring2 = elemento.substring(meio+1, elemento.length);

    }
    let caracteres_ss2 = substring2.split('');
    caracteres__ss2 = caracteres_ss2.reverse();
    substring2 = caracteres_ss2.join('');

    console.log(substring1 == substring2 ? `O elemento "${elemento}" é um palíndromo`:`O elemento ${elemento} não é um palíndromo`);

}

console.log(verificaPalindromo("otrecocerto"));
console.log(verificaPalindromo("anotaramadatadamaratona"));

//2.
function ordenarNumeros(a, b, c) {
    let temp;
    if (a > b) {
        temp = a;
        a = b;
        b = temp;
    }
    if (a > c) {
        temp = a;
        a = c;
        c = temp;
    }
    if (b > c) {
        temp = b;
        b = c;
        c = temp;
    }
    return [a, b, c];
}

// Exemplo de uso
let numeros = ordenarNumeros(3, 1, 2);
console.log(numeros); // Saída: [1, 2, 3]


