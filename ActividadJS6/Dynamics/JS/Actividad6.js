document.write("<center>Actividad 6</center>");
document.write("<br>");

var cuerpo = document.getElementsByTagName("body")[0];
var tabla = document.createElement("table");
tabla.setAttribute("border","2");
tabla.setAttribute("cellpadding","50");
tabla.setAttribute("style","border-style:dotted");
tabla.setAttribute("bgcolor","#B0B0B3");
var dentro = document.createElement("tbody");
var linea = document.createElement("tr");
var celda = document.createElement("td");
var hiper = document.createElement("a");
hiper.setAttribute("href","#");
var h1 = document.createElement("h1");
h1.innerText="Soy el mas grande...";
hiper.appendChild(h1);
celda.appendChild(hiper);


var h2 = document.createElement("h2");
h2.innerText="Curso Web 2020";
celda.appendChild(h2);
var hiper2 = document.createElement("a");
hiper2.setAttribute("href","#");
var h3 = document.createElement("h3");
h3.innerText="Mediano";


hiper2.appendChild(h3);
celda.appendChild(hiper2);


var h5 = document.createElement("h5");
h5.setAttribute("style","color:#EE0000;");
h5.innerText="Jelou";
celda.appendChild(h5);


var h4 = document.createElement("h4");
h4.innerText="Estoy medio chiquito :(";
celda.appendChild(h4);
linea.appendChild(celda);
dentro.appendChild(linea);
tabla.appendChild(dentro);
cuerpo.appendChild(tabla);
