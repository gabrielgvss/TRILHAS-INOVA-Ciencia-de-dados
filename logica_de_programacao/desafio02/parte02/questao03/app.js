let numero_aleatorio = geraNumAletorio();
console.log(numero_aleatorio);

for (let tentativa = 1; tentativa <= 3; tentativa++) {
    let chute = getChute();

    if (chute === numero_aleatorio) {
        alert(`VOCÊ ACERTOU! ${chute} ERA O NÚMERO SECRETO!\nNúmero de tentativas: ${tentativa}`);
        break;
    } else {
        alert(`Ainda não acertou! Você ainda tem ${3-tentativa} tentativa(s)`);
    }
}

if (tentativa === 0) {
    alert(`Fim das tentativas, infelizmente você perdeu!\nO número secreto era ${numero_aleatorio}`);
}

function geraNumAletorio() {
    return Math.floor(Math.random() * (30 - 20 + 1)) + 20;
}

function getChute() {
    let chute = parseInt(prompt("Digite um número entre 20 e 30 para tentar adivinhar qual o número secreto: "));

    while (chute < 20 || chute > 30 || isNaN(chute)) {
        alert("SOMENTE NÚMEROS DE 20 A 30! Tente novamente");
        chute = parseInt(prompt("Digite um número entre 20 e 30 para tentar adivinhar qual o número secreto: "));
    }

    console.log(chute);
    return chute;
}
