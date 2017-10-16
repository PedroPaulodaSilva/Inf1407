/**
 * 
 */

onload = inicia;
/**
 * Inicializa os eventos e outros bichos..
 */
function inicia(){
	lista = document.getElementsByTagName("td");
	for(var i = 0; i < lista.length; i++){
		lista[i].addEventListener("mouseover", acende);
		lista[i].addEventListener("mouseout", apaga);
	}
}
/**
 * Acende o item do menu
 * @param evento
 */
function acende(evento){
	var obj = evento.target;
	obj.style.color = "#000000";	
}

/**
 * Apaga o item do menu
 * @param evento
 */
function apaga(evento){
	var obj = evento.target;
	obj.style.color = "#808080";
	
}
