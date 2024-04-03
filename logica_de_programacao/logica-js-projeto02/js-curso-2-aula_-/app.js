function mudarTextoElemento(elemento_html, texto){
    let elemento = document.querySelector(elemento_html);
    elemento.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female');

}

function exibirMensagemInicial(){
    mudarTextoElemento('h1', 'Jogo do número secreto');
    mudarTextoElemento('p', 'Escolha um número de 1 a 10:');

}

function gerarNumeroSecreto(numero_minimo, numero_maximo) {
    let num_secreto;

    do {
        num_secreto = parseInt(Math.random() * numero_maximo + numero_minimo);

    } while (numeros_gerados.includes(num_secreto));

    numeros_gerados.push(num_secreto);
    console.log("Número secreto da rodada: "+num_secreto);

    return num_secreto;

}

function limparInput(){
    document.querySelector('input').value = "";
}

function verificarChute(){
    let chute = parseInt(document.querySelector('input').value);

    if (chute == numero_secreto){
        mudarTextoElemento('h1', "Acertou!");

        if (tentativa == 1){
            mudarTextoElemento('p', `UAU! Você conseguiu acertar de primeira!!!!!${chute} era o número secreto.`);
    
        }else{
            mudarTextoElemento('p', `Parabéns, você acertou na ${tentativa}ª tentativa! ${chute} era o número secreto.`);
    
        }
        document.getElementById('btn_chute').disabled = true;
        document.getElementById('reiniciar').disabled = false;
        document.querySelector('input').readOnly = true;

    }else if (isNaN(chute)){
        mudarTextoElemento('p', `Insira um valor para poder fazer o chute!`);

    }else{
        let texto = (chute < numero_secreto ? `Ainda não acertou :(, O número secreto é maior que ${chute}`:`Ainda não acertou :(, O número secreto é menor que ${chute}`);
        mudarTextoElemento('p', texto);
        tentativa++;
        limparInput();
    }

}

function reiniciar(){
    limparInput();
    tentativa = 1;
    numero_secreto = gerarNumeroSecreto(1,10);
    document.getElementById('btn_chute').disabled = false;
    document.getElementById('reiniciar').disabled = true;
    document.querySelector('input').readOnly = false;
    exibirMensagemInicial();
    mostrarNumerosGerados();

}

function mostrarNumerosGerados(){
    for (let i = 0; i<numeros_gerados.length; i++){
        console.log("Números gerados: "+ numeros_gerados[i] + "\t");

    }
}

exibirMensagemInicial();
let numeros_gerados = [];
let numero_secreto = gerarNumeroSecreto(1,10);
let tentativa = 1;





