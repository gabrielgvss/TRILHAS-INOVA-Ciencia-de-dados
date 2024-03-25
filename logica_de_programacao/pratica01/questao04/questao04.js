let saldo_inicial = prompt("Digite seu saldo inicial (R$): ");
saldo_inicial = parseFloat(saldo_inicial);

let operacao_realizada = prompt("Qual a operação realizada? (Depósito / Transferência)");

if (operacao_realizada.toLowerCase() == "depósito" || operacao_realizada == "deposito"){
    let valor = prompt('Qual o valor do depósito realizado?');
    valor = parseFloat(valor);
    saldo_inicial +=valor;

}else{
    let valor = prompt('Qual o valor da transferência realizada?');
    valor = parseFloat(valor);
    saldo_inicial-=valor;

}

alert(`Seu novo saldo é de R$ ${saldo_inicial}`);