/**
 * 
 */

onload = function(){
	document.getElementById('idBotao1').addEventListener('click', pedeNoticia1);
	document.getElementById('idBotao2').addEventListener('click', pedeNoticia2);
}

function pedeNoticia1(){
	var httpReq = createRequest();
	httpReq.open('GET', 'noticia1.xml', true);
	httpReq.onreadystatechange = function(){
		if(httpReq.readyState == 4){
			if(httpReq.status == 200){
				//OK
				var resposta = httpReq.responseXML;
				console.log('Resposta = ' + resposta);
			}
			else{
				//erro
				console.log('Deu erro');
			}
		}
		
	}
	httpReq.send(null);
}
