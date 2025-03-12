//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []
let numAmigos=0;

function adicionarAmigo() {
    let nome = document.getElementById("amigo");
    nome = nome.value.trim(); // Remove espaços extras

   if (nome==''){
      alert("Preencha um nome válido!");
   }
   else {
    	//console.log(nome);
    	// Criar um novo elemento <li>
   	if (!(amigos.includes(nome))){
     	  	amigos.push(nome);
     	  	numAmigos++;
     	  	let novoAmigo = document.createElement("li");
     		novoAmigo.textContent = nome;
    		// Adicionar à lista
    		document.getElementById("listaAmigos").appendChild(novoAmigo);
   	}
	limparCampo();
    }
}

function sortearAmigo(){
    if (numAmigos != 0){
	let numeroEscolhido = parseInt(Math.random() * numAmigos);
	//console.log(numeroEscolhido);
	let mensagem = `Nome escolhido: ${amigos[numeroEscolhido]}`;
        alert(mensagem);
    }
}

function limparCampo() {
    let nome = document.querySelector('input');
    nome.value = '';
}

