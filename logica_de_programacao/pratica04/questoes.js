/*
1. Criar uma função que exibe "Olá, mundo!" no console.

2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

4. Criar uma função que recebe três números como parâmetros e retorna a média deles.

5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
*/

//1)
function exibirOlaMundo(){
    console.log(`Olá, mundo!`);

}
exibirOlaMundo()

//2) 
function saudacao(nome){
    console.log(`Olá, ${nome}!`);

}
saudacao("Gabriel");

//3) 
function dobraNumero(numero){
    return numero * 2;

}
console.log("O dobro de 2 é: "+dobraNumero(2));

//4)
function calcularMedia(num1, num2, num3){
    return (num1 + num2 + num3)/3;

}
console.log("A média entre 10, 9 e 8 é igual a: "+calcularMedia(10,9,8));

//5)
function retornaMaiorNumero(num1, num2){
    if (num1 > num2){
        return num1;

    }else if (num1 < num2){
        return num2;

    }else{
        console.log("Os números são iguais!");

    }
}
console.log("O maior número entre 4 e 10 é o "+retornaMaiorNumero(4,10));

//6)
function autoMultiplicar(numero){
    return numero * numero;

}
console.log("O número 2 elevado ao quadrado é igual a "+autoMultiplicar(2));

