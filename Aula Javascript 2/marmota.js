/**
 * 
 */
onload = troca;

function troca(){
	setInterval(marmota,1500);
}

function marmota(){
	
	var aux = Math.floor((Math.random() * 3) + 1);
	 
	if(aux == 1){
		document.getElementById("buraco1").src = "images/marmotinha.jpg";
		setTimeout(tira,1500,1);
	}
	if(aux == 2){
		document.getElementById("buraco2").src = "images/marmotinha.jpg";
		setTimeout(tira,1500,2);
	}
	if(aux == 3){
		document.getElementById("buraco3").src = "images/marmotinha.jpg";
		setTimeout(tira,1500,3);
	}
	
}

function tira(num){
	if(num == 1){
		document.getElementById("buraco1").src = "images/buraco-negro.png";
	}
	if(num == 2){
		document.getElementById("buraco2").src = "images/buraco-negro.png";
	}
	if(num == 3){
		document.getElementById("buraco1").src = "images/buraco-negro.png";
	}
}

function plau(ok){
	var fonte = document.getElementById("buraco1").src;
	var fonte2 = document.getElementById("buraco2").src;
	var fonte3 = document.getElementById("buraco3").src;
	
	if(ok == 1 && fonte.indexOf("marmotinha") != -1){
		document.getElementById("buraco1").src = "images/marmotinhachora.jpg";
	}
	if(ok == 2 && fonte2.indexOf("marmotinha") != -1){
		document.getElementById("buraco2").src = "images/marmotinhachora.jpg";
	}
	if(ok == 3 && fonte3.indexOf("marmotinha") != -1){
		document.getElementById("buraco3").src = "images/marmotinhachora.jpg";
	}
		
}
