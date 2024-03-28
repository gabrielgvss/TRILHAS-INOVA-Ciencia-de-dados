/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10: ';*/

function gerarNumeroSecreto(numero_minimo, numero_maximo) {
    return parseInt(Math.random() * numero_maximo + numero_minimo);

}

function mudarTextoElemento(elemento_html, texto){
    let elemento = document.querySelector(elemento_html);
    elemento.innerHTML = texto;

}

function verificarChute(tentativa){
    let chute = document.querySelector('input');

    chute = parseInt(chute.value);

    if (chute == numero_secreto){
        if (tentativa == 1){
            mudarTextoElemento('p', `UAU! Você conseguiu acertar de primeira!!!!!${chute} era o número secreto.`);
    
        }else{
            mudarTextoElemento('p', `Parabéns, você acertou na ${tentativa}! ${chute} era o número secreto.`);
    
        }
        document.getElementById('btn_chute').disabled = true;
        document.getElementById('reiniciar').disabled = false;

    }else{
        alert(chute < numero_secreto ? `Ainda não acertou :(, O número secreto é maior que ${chute}`:`Ainda não acertou :(, O número secreto é menor que ${chute}`);
        tentativa++;

    }

}

function reiniciar(){
    location.reload(true);

}

let numero_secreto = gerarNumeroSecreto(1,10);
let tentativa = 1;
console.log(numero_secreto);

mudarTextoElemento('h1', "Jogo do número secreto");
mudarTextoElemento('p', "Escolha um número de 1 a 10:");

/*let tentativa = 1;

let numero_secreto = gerarNumeroSecreto(1,10);
console.log("Número secreto da rodada: "+numero_secreto);

chute = parseInt(document.querySelector('input').value);

if (verificarChute() != true){
    alert(chute < numero_secreto ? `Ainda não acertou :(, O número secreto é menor que ${chute}`:`Ainda não acertou :(, O número secreto é maior que ${chute}`)

}else{
    if (tentativa == 1){
        mudarTextoElemento('h1', `UAU! Você conseguiu acertar de primeira!!!!!${chute} era o número secreto.`);

    }else{
        mudarTextoElemento('h1', `Parabéns, você acertou na ${tentativa}! ${chute} era o número secreto.`);

    }
}
*/


