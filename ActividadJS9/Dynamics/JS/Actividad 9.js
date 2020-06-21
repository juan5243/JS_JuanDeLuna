function Numero() {
  return Math.round(Math.random() * 99) + 1;
}
let correcto=true;
let números=[];
function Validar(){
  if (correcto=true) {
    let número=Numero();
    números.push(número);
    alert("Simón dice: "+número);
    for (var i = 0; i < números.length; i++) {
      respuesta = prompt("Dime el número "+(i+1));
      if (respuesta!=números[i]) {
        correcto=false;
        alert("Simón está triste, te has equivocado :c");
        return false;
      }
      }
      return true;
    }
  }
function Dice() {
  setTimeout(()=>{
  correcto = Validar();
  setTimeout(()=>{
    correcto = Validar();
    setTimeout(()=>{
      correcto = Validar();
      setTimeout(()=>{
        correcto = Validar();
        setTimeout(()=>{
          correcto = Validar();
        },2000)
      },2000)
    },2000)
  },2000)
  },3000)
}
Dice();
