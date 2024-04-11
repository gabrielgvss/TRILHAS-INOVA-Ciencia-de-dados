

function comprar(){
    let ingresso = escolher_ingresso();

    if (ingresso.quantidade <= 0){
        alert('Escolha uma quantidade maior que zero para o ingresso que deseja comprar!');

    }else{
        consultar_disponibilidade(ingresso);
    }

}

function escolher_ingresso(){
    let escolha = {
        'tipo_ingresso': document.getElementById('tipo-ingresso').value,
        'quantidade': parseInt(document.getElementById('qtd').value)
    }

    return escolha;
}

function consultar_disponibilidade(escolha_ingresso){
    let qtd_disponivel = document.getElementById(`qtd-${escolha_ingresso.tipo_ingresso}`);

    if (escolha_ingresso.quantidade > parseInt(qtd_disponivel.textContent)){
        alert('Quantidade indisponível para o tipo de ingresso selecionado!');

    }else if (escolha_ingresso.quantidade < parseInt(qtd_disponivel.textContent)){
        qtd_disponivel.textContent = parseInt(qtd_disponivel.textContent) - escolha_ingresso.quantidade;

    }else{
        qtd_disponivel.textContent = "0";

    }
}