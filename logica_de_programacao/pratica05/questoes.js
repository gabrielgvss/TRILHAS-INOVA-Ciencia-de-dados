/*
1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
*/

//1)
function calcularIMC(altura, peso){
    let imc = peso / (altura * altura);
    return imc;

}
console.log(calcularIMC(1.70, 65));

//2)
function calcularFatorial(numero){
    if (numero == 0){
        return 1;

    }else{
        let fatorial = 1;
        for (let i = 1; i <= numero; i++){
            fatorial *= i;

        }
        return fatorial;
    }
}
console.log(calcularFatorial(4));

//3)
function converteDolarReal(valor_dolar){
    return parseFloat(valor_dolar) * 4.8;

}
console.log(converteDolarReal(2.5))

//4)
function calculaPerimetroAreaRetangulo(comprimento, largura){
    let perimetro = 2 * (comprimento + largura);
    let area = comprimento * largura

    return [perimetro, area];
}
let [p, a] = calculaPerimetroAreaRetangulo(2,5);
console.log(`Perímetro: ${p}\nÁrea: ${a}`);

//5)
function calculaPerimetroAreaCirculo(raio){
    let pi = 3.14;
    let perimetro = 2 * pi * parseFloat(raio);
    let area = pi * (raio * raio);

    return [perimetro, area];
}
let [perimetro, area] = calculaPerimetroAreaCirculo(5);
console.log(`Perímetro: ${perimetro.toFixed(2)}\nÁrea: ${area.toFixed(2)}`);

//6)
function mostrarOperacoes(numero) {
    console.log(`Tabuada de Multiplicação (${numero}):`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }

    console.log(`\nOperações de Adição (${numero}):`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} + ${i} = ${numero + i}`);
    }

    console.log(`\nOperações de Subtração (${numero}):`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} - ${i} = ${numero - i}`);
    }

    console.log(`\nOperações de Divisão (${numero}):`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} / ${i} = ${numero / i}`);
    }
}
mostrarOperacoes(10);


