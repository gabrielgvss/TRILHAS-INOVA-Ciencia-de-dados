let numeros_sorteados = []

function mudarTextoDiv(id, texto){
    let elemento = document.getElementById(id);
    let label_texto = elemento.querySelector('label');
    label_texto.textContent = texto;

}

function alterarStatusBotaoReiniciar(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

    }else{
        botao.classList.add('container__botao-desabilitado');
        botao.classList.remove('container__botao');
    }
}

function obter_numero_aleatorio(minimo, maximo){
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    
}

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let numero_minimo = parseInt(document.getElementById('de').value);
    let numero_maximo = parseInt(document.getElementById('ate').value);

    if (numero_maximo <= numero_minimo) {
        alert('O número mínimo deve ser menor que o número máximo!');
    } else {
        if (quantidade > (numero_maximo - numero_minimo + 1)) {
            alert('A quantidade não pode ser maior do que o intervalo entre os números escolhidos');
        } else {
            for (let i = 0; i < quantidade; i++) {
                let numero_gerado = obter_numero_aleatorio(numero_minimo, numero_maximo);

                while (numeros_sorteados.includes(numero_gerado)) {
                    numero_gerado = obter_numero_aleatorio(numero_minimo, numero_maximo);
                }

                numeros_sorteados.push(numero_gerado);
            }

            let texto = `Números sorteados: ${numeros_sorteados}`;
            mudarTextoDiv('resultado', texto);
            alterarStatusBotaoReiniciar();
            document.getElementById('btn-sortear').disabled = true;
        }
    }
}


function reiniciar(){
    document.getElementById('quantidade').value = "";
    document.getElementById('de').value = "";
    document.getElementById('ate').value = "";
    document.getElementById('btn-sortear').disabled = false;
    mudarTextoDiv('resultado', "Números sorteados: ");

    numeros_sorteados = []

    alterarStatusBotaoReiniciar();

}

