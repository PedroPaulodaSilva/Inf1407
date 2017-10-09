/**
 * 
 */

onload = inicia()


function inicia(){
	console.log("inicia()");
	
	var obj = document.getElementById("idParagrafo");
	obj.addEventListener("mouseover", mudaCor); // sem () para não executar a função
}

function mudaCor(){
	//codigo que muda a cor do paragrafo
	var obj = document.getElementById("idParagrafo");
	obj.style.color = "yellow";
	obj.style.backgroundColor = "green";
}
