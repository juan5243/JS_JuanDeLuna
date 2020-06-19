document.write("<center>AJEDREZ</center>");
document.write("<br>");

function Tablero(M2){
	var cuerpo = document.getElementsByTagName("body")[0];
	var tabla = document.createElement("table");
	tabla.setAttribute("border","1");
	tabla.setAttribute("cellpadding","15");
	var dentro = document.createElement("tbody");
	for(var i = 1;i <= M2;i++){
		var Dis = i % 2;
		linea=document.createElement("tr");
		switch(Dis){
			case 0:
				for(var j = 1;j <= M2;j++){
					Dis2 = j % 2;
					var celda = document.createElement("td");
					switch(Dis2){
						case 0:
							celda.setAttribute("bgcolor","#FFFFFF");
							linea.appendChild(celda);
						break;
						default:
							celda.setAttribute("bgcolor","#000000");
							linea.appendChild(celda);
						break;
					}
				}
			break;
			default:
				for(var j = 1;j <= M2;j++){
					Dis2 = j % 2;
					var celda = document.createElement("td");
					switch(Dis2){
						case 0:
							celda.setAttribute("bgcolor","#000000");
							linea.appendChild(celda);
						break;
						default:
							celda.setAttribute("bgcolor","#FFFFFF");
							linea.appendChild(celda);
						break;
					}
				}
			break;
		}
		dentro.appendChild(linea);
	}
	tabla.appendChild(dentro);
	cuerpo.appendChild(tabla);
}
var numero = prompt("Introduzca el largo y ancho");
while(numero == null){
	numero = prompt("Introduzca el largo y ancho");
}
Tablero(numero);