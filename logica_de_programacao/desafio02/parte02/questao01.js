function operacao(num1, num2){
    let soma = num1 + num2;
    let subtracao = num1 - num2;
    let resto = num1 % num2;
    let exponenciacao = Math.pow(num1, num2);

    console.log(`${soma} + ${subtracao} + ${resto} + ${exponenciacao}`)

    console.log(soma + subtracao + resto + exponenciacao);
    
}

operacao(2,2);
operacao(3,1);
operacao(9,2);

