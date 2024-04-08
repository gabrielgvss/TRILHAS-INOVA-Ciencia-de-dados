/*No projeto Alugames, implemente uma confirmação de devolução.

No projeto Alugames, crie uma função para imprimir no console a informação sobre quantos jogos foram alugados.
*/

function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let imagem = jogo.querySelector('.dashboard__item__img');
    let botao = jogo.querySelector('.dashboard__item__button');
    let nome_jogo = jogo.querySelector('.dashboard__item__name').textContent;

    if (botao.textContent == "Alugar"){
        botao.textContent = "Devolver";
        botao.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');

    }else{
        botao.textContent = "Alugar";
        botao.classList.remove('dashboard__item__button--return');
        imagem.classList.remove('dashboard__item__img--rented');
        alert(`O jogo "${nome_jogo}" foi devolvido com sucesso`);

    }

}

function mostrarAlugados(){
    let alugados = [];
    let jogos = document.querySelectorAll('.dashboard__items__item');

    for (let i=0; i<jogos.length; i++){
        let botao = jogos[i].querySelector('.dashboard__item__button--return');
        if (botao){
            alugados.push(jogos[i].querySelector('.dashboard__item__name').textContent);

        }
    }

    console.log("Quantidade de jogos alugados: "+alugados.length);
    console.log("Jogos alugados: "+alugados);
    
}


