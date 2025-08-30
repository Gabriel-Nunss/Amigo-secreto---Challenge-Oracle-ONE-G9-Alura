let amigos = [];
let amigosDisponiveis = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    
    if (nomeAmigo == '') {
        alert('Por favor, insira um nome.');
        return;
    }
    amigos.push(nomeAmigo);
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        let itemLista = document.createElement('li');
        itemLista.textContent = amigos[i];
        lista.appendChild(itemLista);
    }
    
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    let resultadoElemento = document.getElementById('resultado');
    let botaoSorteio = document.querySelector('.button-draw');
    
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para fazer o sorteio!');
        return;
    }
    
    if (amigosDisponiveis.length === 0) {
        amigosDisponiveis = [...amigos];
    }
    
    if (amigosDisponiveis.length === 1) {
        const nomeSorteado = amigosDisponiveis[0];
        resultadoElemento.innerHTML = `<p class="nome-sorteado">O último amigo a ser sorteado foi: **${nomeSorteado}**</p>`;
        botaoSorteio.textContent = 'Fim do Sorteio';
        botaoSorteio.disabled = true;       
        amigosDisponiveis = []; 
        return;
    }
    
    const indiceSorteado = Math.floor(Math.random() * amigosDisponiveis.length);
    const nomeSorteado = amigosDisponiveis[indiceSorteado];
    resultadoElemento.innerHTML = `<p class="nome-sorteado">Seu amigo secreto é: **${nomeSorteado}**</p>`;
    amigosDisponiveis.splice(indiceSorteado, 1);
    botaoSorteio.textContent = 'Sortear novamente!';
}

function reiniciar() {
    amigos = [];
    amigosDisponiveis = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    const botaoSorteio = document.querySelector('.button-draw');
    botaoSorteio.innerHTML = `<img src="assets/play_circle_outline.png" alt="Ícone para sortear">Sortear amigo`
    botaoSorteio.disabled = false;
}