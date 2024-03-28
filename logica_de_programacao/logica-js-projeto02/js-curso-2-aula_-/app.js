function gerarNumeroSecreto(numero_minimo, numero_maximo) {
    return parseInt(Math.random() * numero_maximo + numero_minimo);

}

function mudarTextoElemento(elemento_html, texto){
    let elemento = document.querySelector(elemento_html);
    elemento.innerHTML = texto;

}

function limparInput(){
    document.querySelector('input').value = "";
}

function verificarChute(){
    let chute = document.querySelector('input');

    chute = parseInt(chute.value);

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

    }else{
        let texto = (chute < numero_secreto ? `Ainda não acertou :(, O número secreto é maior que ${chute}`:`Ainda não acertou :(, O número secreto é menor que ${chute}`);
        mudarTextoElemento('p', texto);
        tentativa++;
        limparInput();

    }

}

function reiniciar(){
    location.reload(true);

}

let chute = parseInt(document.querySelector('input').value);
let numero_secreto = gerarNumeroSecreto(1,10);
let tentativa = 1;
console.log(numero_secreto);

mudarTextoElemento('h1', "Jogo do número secreto");
mudarTextoElemento('p', "Escolha um número de 1 a 10:");


