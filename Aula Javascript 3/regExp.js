/**
 * 
 */
onload = inicia;

function inicia(){
	document.getElementById("teste").addEventListener("keyup", verifica);
}

function verifica(){
	var resultado = document.getElementById("resultado");
	var campo = document.getElementById("teste").value;
	var re = /\d{0,3}\.\d{0,3}\.\d{0,3}\.\d{0,3}/;
	if(re.test(campo)){
		resultado.innerHTML = "OK";
	}
	else{
		resultado.innerHTML = "NOK";
	}
	
}
