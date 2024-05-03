function operacao(num1, num2) {
    let somaExponenciacao = num1 ** num2; // Exponenciação
    let restoDivisao = num1 % num2; // Resto da divisão
    let subtracaoInvertida = num2 - num1; // Subtração do segundo pelo primeiro

    console.log(`Soma da exponenciação: ${somaExponenciacao}`);
    console.log(`Resto da divisão: ${restoDivisao}`);
    console.log(`Subtração do segundo pelo primeiro: ${subtracaoInvertida}`);
}

// Testando a função com diferentes valores
operacao(2, 2);
operacao(3, 1);
operacao(9, 2);

