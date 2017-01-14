

document.addEventListener('keyup',  function(){
  if( document.getElementById('page2-cacher') && event.keyCode==40){
    document.getElementById('page2-cacher').id = "page2";
    document.getElementById('divTransparente').id = 'divTransparente-cacher';

  }
  else if( document.getElementById('page2') && event.keyCode==38){
    document.getElementById('page2').id = "page2-cacher";
    document.getElementById('divTransparente-cacher').id = 'divTransparente';

  }

 
});
