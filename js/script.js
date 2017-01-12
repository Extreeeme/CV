var compteur = 1;

document.addEventListener('keyup',  function(){
  if( document.getElementById('page2') && event.keyCode==40 && (compteur==1|| compteur==3)){
    document.getElementById('page2').id = "page2-cacher";
    compteur++;
  }
  else if( document.getElementById('page2-cacher') && event.keyCode==38){
    document.getElementById('page2-cacher').id = "page2";
    compteur--;
  }
   else if( document.getElementById('page3') && event.keyCode==40 &&(compteur==2|| compteur==4)) {
      document.getElementById('page3').id = "page3-cacher";
      compteur++;
  }
   else if( document.getElementById('page3-cacher') && event.keyCode==38 ){
    document.getElementById('page3-cacher').id = "page3";
    compteur--;
  }
 
});
