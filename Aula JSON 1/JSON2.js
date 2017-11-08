/**
 * 
 */

onload = function(){
	var httpReq = createRequest();
	httpReq.open("POST", "BuscaVoo", true);
	httpReq.onreadystatechange = function(){
		if(httpReq.readyState == 4){
			if(httpReq.status == 200){
				var resposta = httpReq.responseText;
				console.log("Resposta: " + resposta);
				var voo
			}
		}
	}
	httpReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	httpReq.send(null);
}
