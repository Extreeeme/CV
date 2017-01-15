

document.addEventListener('keyup',  function(){
  if( document.getElementById('page2-cacher') && document.getElementById('page3-cacher') && event.keyCode==39){          //Flèche de droite
    document.getElementById('page2-cacher').id = "page2";
    document.getElementById('divTransparente').id = 'divTransparente-cacher';
    document.getElementById('competences-cacher').id = 'competences';
  }
  else if( document.getElementById('page2') && document.getElementById('page3-cacher') && event.keyCode==37){            //Flèche de gauche
    document.getElementById('page2').id = "page2-cacher";
    document.getElementById('divTransparente-cacher').id = 'divTransparente';
    document.getElementById('competences').id = 'competences-cacher';
  }
  else if(document.getElementById('page2') && document.getElementById('page3-cacher') && event.keyCode==39){
    document.getElementById('page3-cacher').id = "page3";
    document.getElementById('page2').id = "page2-cacher";
    document.getElementById('competences').id = 'competences-cacher';
  }
  else if(document.getElementById('page2-cacher') && document.getElementById('page3') && event.keyCode==37){
    document.getElementById('page3').id = "page3-cacher";
    document.getElementById('page2-cacher').id = "page2";
    document.getElementById('competences-cacher').id = 'competences';
  }
});
