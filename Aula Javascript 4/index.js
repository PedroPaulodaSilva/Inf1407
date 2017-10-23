/**
 * 
 */

onload = inicia;

function inicia(){
	document.getElementById('idAdicionarEmail').addEventListener('click', adicionaEmail);
	
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
	
	var base = document.getElementById("idEMail");
	var objLataDoLixo = evento.target;
	var objDivPai = objLataDoLixo.parentNode;
	base.removeChild(objDivPai);
	
	//document.getElementById("idEmail").removeChild(evento.target.parentNode);
}
