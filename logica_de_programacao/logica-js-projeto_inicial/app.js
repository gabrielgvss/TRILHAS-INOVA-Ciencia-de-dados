function definir_dificuldade(dificuldade){
    switch (dificuldade) {
        case '1':
            return 50;
            break;
        
        case '2':
            return 100;
            break;

        case '3':
            return 250;
        
        case '4':
            return 1000;
    
        default:
            break;
    }
}

alert('Bem vindo ao jogo do número secreto!');
//funcao alert() -> cria caixa de diálogo para o usuário
let dificuldade = prompt(`Escolha a dificuldade desejada:\n1 - Fácil (1-50)\n2 - Médio (1-100)\n3 - Difícil (1-250)\n4 - Extremo (1 - 1000)\n`);

while (dificuldade < 0 || dificuldade > 4){
    dificuldade = prompt('Valor inválido!\nEscolha a dificuldade desejada:\n1 - Fácil (1-50)\n2 - Médio (1-100)\n3 - Difícil (1-250)\n4 - Extremo (1 - 1000)\n');
}

let valor_final_intervalo = definir_dificuldade(dificuldade);

let numero_secreto = Math.floor(Math.random() * valor_final_intervalo) + 1; //criação de um número secreto de 0 a 50 (incluindo 50) para cada inicialização do jogo
console.log(`Número secreto da rodada: ${numero_secreto}`); //possibilidade de visualizar o número secreto no console para testes

let tentativa = 1;

let numero_escolhido = prompt(`Escolha um número de 0 a ${valor_final_intervalo} (incluindo ${valor_final_intervalo}):`); //Input de valor escolhido para tentar adivinhar o jogo
while (numero_escolhido != numero_secreto) {/// Executar input de valor até que o usuário acerte o número
    if (numero_escolhido < 1 || numero_escolhido > valor_final_intervalo){//Tratamento para casos de valor fora do intervalo pré-definido
        alert(`Somente números de 0 a ${valor_final_intervalo} (incluindo ${valor_final_intervalo})!`);

    }else {
        if (numero_escolhido > numero_secreto){//Dicas para adivinhar número
            alert(`Ainda não acertou 🥲, o número secreto é menor que ${numero_escolhido}`);
    
        }else{
            alert(`Ainda não acertou 🥲, o número secreto é maior que ${numero_escolhido}`);
    
        }
    }
    tentativa++; // Aumenta a quantidade de tentativas
    console.log(`Tentativa: ${tentativa}`);
    numero_escolhido = prompt('Tente novamente:');

}
    
if (tentativa > 1){
    alert(`Parabéns, você acertou na ${tentativa}ª tentativa🥳! O número ${numero_escolhido} era o número secreto!`);

}else{
    alert(`UAU! Você acertou na ${tentativa}ª tentativa🥳🥳🥳!!! O número ${numero_escolhido} era o número secreto!`);

}



    

