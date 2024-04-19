const taxa_juros = (0.6022/100)
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
    let rendimento = capital_aplicado * (Math.pow((1 + taxa_juros), tempo)) - capital_aplicado;

    alert(
        `A quantia de
        R$${capital_aplicado} aplicada em ${tempo} meses, rendeu R$${rendimento}
        a juros de ${taxa_juros*100}% ao mês`
    );
}


 