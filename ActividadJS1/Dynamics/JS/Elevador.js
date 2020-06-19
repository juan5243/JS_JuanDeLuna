var a = prompt("¿Dónde está el elevador A?");
var b = prompt("¿Dónde está el elevador B?");
var c = prompt("¿Dónde te encuentras?");

function cercano(){

	var rel1 = Math.abs(c - a);
	var rel2 = Math.abs(c - b);

	if(rel1 < rel2){
		document.write("El elevador A se encuentra mas cerca");
	}
	if(rel1 == rel2){
		document.write("Los elevadores se encuentran en el mismo piso");
	}
	if(rel1 > rel2){
		document.write("El elevador B se encuentra mas cerca");
	}
}
cercano();
