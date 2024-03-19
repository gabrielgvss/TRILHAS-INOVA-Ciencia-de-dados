alert('Bem vindo ao jogo do número secreto!');
//funcao alert() -> cria caixa de diálogo para o usuário

let numero_secreto = Math.floor(Math.random() * 50) + 1; //criação de um número secreto de 0 a 50 (incluindo 50) para cada inicialização do jogo
console.log(`Número secreto da rodada: ${numero_secreto}`); //possibilidade de visualizar o número secreto no console para testes


let numero_escolhido = prompt('Escolha um número de 0 a 50 (incluindo 50):'); //Input de valor escolhido para tentar adivinhar o jogo



while (numero_escolhido != numero_secreto) {/// Executar input de valor até que o usuário acerte o número
    if (numero_escolhido < 1 || numero_escolhido > 50){//Tratamento para casos de valor fora do intervalo pré-definido
        alert('Somente números de 0 a 50 (incluindo 50)!');

    }else {
        if (numero_escolhido > numero_secreto){//Dicas para adivinhar número
            alert(`Ainda não acertou 🥲, o número secreto é menor que ${numero_escolhido}`);
    
        }else{
            alert(`Ainda não acertou 🥲, o número secreto é maior que ${numero_escolhido}`);
    
        }
    }
    numero_escolhido = prompt('Tente novamente:');

}
    

alert(`Parabéns, você acertou🥳! O número ${numero_escolhido} era o número secreto!`);

    

