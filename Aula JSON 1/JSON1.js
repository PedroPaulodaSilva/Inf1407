/**
 * 
 */
onload = function(){
	var voo = {
			"aircraft": "A320",
			"pilot":{
				"firstName": "John",
				"lastName": "Adams"
			},
			"passenger":["George Washington","Thomas Jefferson"]
	}
	
	console.log("Voo: " + voo.aircraft);
	console.log("Piloto: " + voo.pilot);
	console.log("Passageiros: " + voo.passenger);
}
