let mensagem = ''; // Inicializa uma string vazia para acumular os números

let numero_escolhido = prompt('Digite o número inicial para contagem regressiva deste até 0: ');

while (numero_escolhido <= 0){
    alert('Digite um número maior que 0!')
    numero_escolhido = prompt('Digite o número inicial para contagem regressiva deste até 0: ');

}

for (let i = numero_escolhido; i >=0 ; i--) {
    mensagem += i + '\t'; // Concatena o número atual com uma quebra de linha
}

alert(mensagem); // Exibe a mensagem acumulada em um único alert
console.log(mensagem);

