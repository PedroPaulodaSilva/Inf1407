/**
 * 
 */
onload = inicia;

function inicia(){
	document.getElementById("botao").addEventListener("click", separa);
}

function separa(){
	var email = document.getElementById("email").value;
	//var re = /(.+)@(.+)/; pra receber qualquer letra + @ + qualquer letra
	//var re = /(([a-z]+)@)([a-z]+)/; receber email que contenha apenas letras, no numbers allowed
	var re = /^([a-z\-0-9]+)@(([a-z\-0-9]+)(\.[a-z\-0-9]+)+)/;
	var resultado = re.exec(email);
	console.log("0: " + resultado[0]);
	console.log("1: " + resultado[1]);
	console.log("2: " + resultado[2]);
	
	document.getElementById('usuario').innerHTML = resultado[1];
	document.getElementById('dominio').innerHTML = resultado[2];
}
