//FUNCION PARA CAMBIAR ENTRE LAS COSAS DEL NAVBAR
function tikiTaka(invocoA){
  var v = document.getElementsByClassName('viendo');
  var invocado = document.getElementsByClassName(invocoA);
  for(i=0; i<v.length; i++){
    v[i].style.display = 'none'
    v[i].classList.remove('viendo');
    for(j=0; j<invocado.length; j++){
      invocado[i].style.display = 'block'
      invocado[i].classList.remove('escond');
      invocado[i].classList.add('viendo');
    }
    v[i].classList.add('escond');
  }
}
//////////////////////////////////////////////////////
//FUNCION PARA CREAR UN DIV CON EL TAG DADO EN EL INPUT 
//Y VERIFICA SI YA EXISTE, Y MANDA UN ALERT ES ESE CASO
function bimBam(){

  let valueEsc = document.getElementById("tag").value;
  var v = document.getElementsByClassName(valueEsc);
  for(i=0; i<v.length; i++){
    if(v[i].classList.contains(valueEsc)){
      window.alert(valueEsc + " ya existe");
      return;
    }
  }

  var element = document.createElement("div");
  var veamos = document.getElementById("body"); 
  document.body.insertBefore(element, veamos);

  element.classList.add(valueEsc);
  element.classList.add('escond');
}
//////////////////////////////////////////////////////