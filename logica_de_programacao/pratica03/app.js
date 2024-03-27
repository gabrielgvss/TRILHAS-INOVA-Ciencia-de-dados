/*
1. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

2. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

3. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

4. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

5. Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.

*/

//1)
let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

//2)
function clickBotaoConsole(){
    console.log("O botão foi clicado!");

}

//3)
function clickBotaoAlert(){
    alert('Eu amo JS');
}

//4)
function clickBotaoPrompt(){
    cidade_br = prompt("Digite o nome de uma cidade do Brasil");
    alert(`Estive em ${cidade_br} e lembrei de você!`);
    
}

//5)
function clickBotaoSoma(){
    let num1 = parseFloat(prompt("Digite um número: "));
    let num2 = parseFloat(prompt("Digite outro número: "));
    alert(`A soma destes dois números é igual a ${num1 + num2}`);

}
