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