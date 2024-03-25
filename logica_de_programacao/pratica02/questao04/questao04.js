let mensagem = '';

let numero_escolhido = prompt("Escolha um valor para contagem progressiva de 0 até o número escolhido:");

while (numero_escolhido <= 0){
    numero_escolhido = prompt('Escolha um número maior que 0!\nTente novamente:');

}

for (let i = 0; i <= numero_escolhido; i++){
    mensagem += i + '\t';

}

alert(mensagem);
console.log(mensagem);