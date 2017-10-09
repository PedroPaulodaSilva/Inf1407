/**
 * 
 */

onload = inicia


function inicia(){
	console.log("inicia()");
	
	var obj = document.getElementById("idParagrafo");
	obj.addEventListener("mouseover", mudaCor); // sem () para não executar a função
	obj.addEventListener("mouseout", voltaCor);
}

function mudaCor(){
	//codigo que muda a cor do paragrafo
	var obj = document.getElementById("idParagrafo");
	obj.style.color = "yellow";
	obj.style.backgroundColor = "green";
	//obj.style["backgroundColor"] = "green";
	//obj.style["background-color"] = "green";
}

function voltaCor(){
	var obj = document.getElementById("idParagrafo");
	obj.style.color = "#000000";
	obj.style.backgroundColor = "#FFFFFF";
}
