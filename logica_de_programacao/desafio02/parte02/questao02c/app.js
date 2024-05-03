let taxa_juros = (0.6022/100)
let [valor_aplicado, tempo_aplicacao] = solicitar_dados();
calcularRendimento(valor_aplicado, tempo_aplicacao);

function solicitar_dados(){
    let valor_aplicado = parseFloat(prompt('Digite o valor aplicado: '));
    let tempo_aplicacao = parseInt(prompt('Digite a quantidade de meses em aplicação: '));
    
    while (isNaN(valor_aplicado) || isNaN(tempo_aplicacao) || valor_aplicado < 0 || tempo_aplicacao < 0){
        alert('Valor inválido inserido em um dos campos! Por favor tente novamente:');
        valor_aplicado = parseFloat(prompt('Digite o valor aplicado: '));
        tempo_aplicacao = parseInt(prompt('Digite a quantidade de meses em aplicação: '));

     }
    
    return [valor_aplicado, tempo_aplicacao];
}

function calcularRendimento(capital_aplicado, tempo){
    let rendimento;
    
    // Verifica se o valor aplicado está entre R$50.000,00 e R$100.000,00
    if (capital_aplicado > 50000 && capital_aplicado <= 100000) {
        // Verifica se o tempo de aplicação está entre 12 e 24 meses
        if (tempo > 12 && tempo <= 24) {
            taxa_juros = 0.05; // Taxa de juros de 5%
        } else {
            taxa_juros = 0.10; // Taxa de juros de 10%
        }
    }

    rendimento = capital_aplicado * (Math.pow((1 + taxa_juros), tempo)) - capital_aplicado;

    alert(
        `A quantia de R$${capital_aplicado} aplicada em ${tempo} meses, rendeu R$${rendimento} a juros de ${taxa_juros * 100}% ao mês`
    );
}
