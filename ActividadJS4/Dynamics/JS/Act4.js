let limite = prompt("Ingresa un número");
if (isNaN(limite)!=1 && limite!="" && limite>1    ) {
  let Primos = [];
  function primo(numero) {
    let check=0;
    for (var i = 0; i <= numero; i++) {
      if (numero % i == 0) {
        check++;
        if (check>2) {
          return false ;
        }
      }
    }
    return Primos.push(numero);
  }
  for (numero = 2; numero <= limite; numero++) {
    primo(numero);
  }
  let Divisores=Primos.filter((x)=> limite%x==0);
  console.log(Divisores);
  alert(Divisores)
}
else {
  alert("Número no valido o dato incorrecto")
}
