let valorTotal;
limpar();

function limpar(){
    valorTotal = 0;
    document.getElementById('valor-total').textContent = 'R$ 0';
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('quantidade').value = 0;
}

function adicionar(){
    let produto_atual = gerarProduto();

    if (produto_atual[2] <= 0) {
        alert("A quantidade selecionada deve ser maior que zero.");

    }else{
        adicionarCarrinho(produto_atual);
        calcularTotal();
    }

}

function gerarProduto(){
    let produto_selecionado = document.getElementById('produto').value;
    let nome_produto = produto_selecionado.split('-')[0];
    let valor_produto = produto_selecionado.split('-')[1].split('R$')[1];
    let qtd_produto = document.getElementById('quantidade').value;

    let produto = [nome_produto, valor_produto, qtd_produto];

    return produto;

}


function calcularSubTotal(produto){
    let [nome, valor, quantidade] = produto;
    let subtotal = parseInt(valor * quantidade);

    valorTotal += subtotal;

    return subtotal;

}

function adicionarCarrinho(produto){
    let [nome, valor, quantidade] = produto;
    let subtotal = calcularSubTotal(produto);
    let produto_carrinho = `n${quantidade}x ${nome} R$${subtotal}`;

    let lista_carrinho = document.getElementById('lista-produtos');
    lista_carrinho.innerHTML += `<section class="carrinho__produtos" id="lista-produtos">
            <section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">R$${subtotal}</span>
            </section>
        </section>`

}

function calcularTotal(){
    let total_carrinho = document.getElementById('valor-total');
    total_carrinho.textContent = `R$${valorTotal}`;
    
}