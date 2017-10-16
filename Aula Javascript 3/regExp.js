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
	//var re = /^\d{4,5}\-\d{4}$/; expressão para testar celulares com 8 ou 9 digitos
	//var re = /^9\d{4}\-\d{4}\$/; expressão para testar celular começando com 9
	if(re.test(campo)){
		resultado.innerHTML = "OK";
	}
	else{
		resultado.innerHTML = "NOK";
	}
	
}
