let amigos = [];
reiniciar();

function adicionar(){
    let amigo_adicionado = document.getElementById('nome-amigo').value;
    let lista_amigos = document.getElementById('lista-amigos');

    if (amigo_adicionado.trim() !== "" && !verificar_repeticao(amigo_adicionado)) {
        let amigo = {
            'pessoa': amigo_adicionado,
            'amigo_secreto': ''
        }
        amigos.push(amigo);

        if (lista_amigos.textContent == ""){
            lista_amigos.innerText = amigo_adicionado;

        }else{
            lista_amigos.innerText += `, ${amigo_adicionado}`;
        }
        

    }else{
        alert("Digite um valor válido/ não repetido para o nome do amigo!");

    }

    console.log(amigos);
}

function sortear() {
    var amigosParaSorteio = amigos.slice(); // Faz uma cópia da lista de amigos

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];

        // Remove o amigo atual da lista de amigos disponíveis para sorteio
        let amigosDisponiveis = amigosParaSorteio.filter(function(amigoParaSorteio) {
            return amigoParaSorteio.pessoa !== amigo.pessoa;
        });

        // Verifica se ainda há amigos disponíveis para sorteio
        if (amigosDisponiveis.length > 0) {
            // Sorteia um índice aleatório da lista de amigos disponíveis
            let indiceSorteado = sortearIndiceAleatorio(amigosDisponiveis);

            // Define o amigo secreto para a pessoa atual
            amigo.amigo_secreto = amigosDisponiveis[indiceSorteado].pessoa;

            // Remove o amigo sorteado da lista de amigos disponíveis
            amigosParaSorteio.splice(amigosParaSorteio.indexOf(amigosDisponiveis[indiceSorteado]), 1);
        } else {
            console.log("Não há mais amigos disponíveis para sorteio.");
            break; // Se não houver mais amigos disponíveis, interrompe o sorteio
        }
    }

    console.log(amigos);
}

function sortearIndiceAleatorio(array) {
    return Math.floor(Math.random() * array.length);
}




function verificar_repeticao(nome_amigo) {
    for (var amigo of amigos) {
        if (amigo.pessoa == nome_amigo) {
            return true; 
        }
    }
    return false; 
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = "";
    document.getElementById('nome-amigo').value = "";
}
