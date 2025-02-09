let amigosInseridos = [];
let lista = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function adicionarAmigo() {
    let nome = document.querySelector('input').value; 

    if(nome == ''){
        alert("Introduza um nome, o espaço não pode ficar vazio");
        return;
    } 
    
    else if(amigosInseridos.includes(nome)) {
        alert("Este nome já foi introduzido, digite outro!");
        let input = document.querySelector('input');
        input.value = "";
        return;
    } 
    
    else{
        amigosInseridos.push(nome);
        atualizarLista();
        limparCampo();
        let input = document.querySelector('input');
        input.focus(); //o cursor volta para o campo
    }

}

function limparCampo() {
    let nome = document.querySelector('input');
    nome.value = '';
}

function atualizarLista() {
    lista.innerHTML="";

    amigosInseridos.forEach(amigo => {
        let item = document.createElement('li'); // Cria um novo item da lista <li>
        item.textContent = amigo; // Define o nome do amigo como texto do item
        lista.appendChild(item); // Adiciona o item na lista
    });
}


function sortearAmigo() {
    if(amigosInseridos.length < 2) {
        alert("Adicione ao menos 2 nomes, para que podemos fazer o sorteio.");
        return;
    }

    lista.innerHTML = '';

    let amigoSorteado = amigosInseridos[Math.floor(Math.random() * amigosInseridos.length)];
    resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`
}

function limparLista() {
    amigosInseridos = [];
    atualizarLista();
    resultado.innerHTML = '';
}
