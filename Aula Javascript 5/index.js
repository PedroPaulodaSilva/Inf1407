/**
 * 
 */

onload = inicia;

function inicia(){
	document.getElementById('idAdicionarEmail').addEventListener('click', adicionaEmail);
	var telefones = document.getElementsByName("email0");
	telefones[0].addEventListener('blur', confereTelefone);
	
	
	
	/** variável global - contador de emails criados */
	contadorEmail = 1;
	
}

function adicionaEmail(){
	console.log("Vou adicionar email");
	
	/* criando o div para armazenar o select, o input e a lata de lixo*/
	var objDiv = document.createElement("div");
	objDiv.setAttribute("id", "divEmail" + contadorEmail);
	
	/* criando o campo select */
	var objSelect = document.createElement("select");
	objSelect.setAttribute("name", "tipoEmail" + contadorEmail);
	var opcao = document.createElement("option");
	opcao.text = "Pessoal";
	objSelect.add(opcao);
	var opcao = document.createElement("option");
	opcao.text = "Comercial";
	objSelect.add(opcao);
	var opcao = document.createElement("option");
	opcao.text = "Personalizar";
	objSelect.add(opcao);	
	
	var objTexto = document.createTextNode(" ");
		
	/* criando o campo input */
	var objInput = document.createElement("input");
	objInput.setAttribute("type", "text");
	objInput.setAttribute("name", "email" + contadorEmail);
	objInput.addEventListener("blur", confereTelefone);
	
	/*criando a lata de lixo */
	var objImagem = document.createElement("img");
	objImagem.setAttribute("src", "latinha.jpg");
	objImagem.addEventListener("click", removeEmail);
	
	objDiv.appendChild(objSelect);
	objDiv.appendChild(objTexto);
	objDiv.appendChild(objInput);
	objDiv.appendChild(document.createTextNode(" "));
	objDiv.appendChild(objImagem);
	document.getElementById("idEmail").appendChild(objDiv);
	
	console.log("contadorEmail = " + contadorEmail);
	contadorEmail++;
	
	document.getElementById("idQtdEmail").setAttribute("value", contadorEmail);
}

/**
 * remove um email
 * @param evento
 */
function removeEmail(evento){
	console.log("vai remover um email " + evento.target.getAttribute("id"));
	
	var base = document.getElementById("idEmail");
	var objLataDoLixo = evento.target;
	var objDivPai = objLataDoLixo.parentNode;
	base.removeChild(objDivPai);
	
	//document.getElementById("idEmail").removeChild(evento.target.parentNode);
}

function confereTelefone(evento) {
	console.log("Checando essa merda que tu colocou..." + evento.target.getAttribute("name"));
	
	var campo = evento.target.value;
	console.log(campo);
	
	var re = /\(\d\d\) ?[\d]{4,5}-?[\d]{4}/;
	
	if(re.test(campo)){
		evento.target.style.borderStyle = "solid";
		evento.target.style.borderColor = "#000000";
	}
	else{
		evento.target.style.borderColor = "#FF0000";
	}
	
	
}
