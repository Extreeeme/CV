

document.addEventListener('keyup',  function(){
  if( document.getElementById('page2-cacher') && event.keyCode==39){
    document.getElementById('page2-cacher').id = "page2";
    document.getElementById('divTransparente').id = 'divTransparente-cacher';
    document.getElementById('competences-cacher').id = 'competences';
  }
  else if( document.getElementById('page2') && event.keyCode==37){
    document.getElementById('page2').id = "page2-cacher";
    document.getElementById('divTransparente-cacher').id = 'divTransparente';
    document.getElementById('competences').id = 'competences-cacher';
  }
});
