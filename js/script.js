

document.addEventListener('keyup',  function(){
  if( document.getElementById('page2-cacher') && document.getElementById('page3-cacher') && event.keyCode==39){          //Flèche de droite
    document.getElementById('page2-cacher').id = "page2";
    document.getElementById('divTransparente').id = 'divTransparente-cacher';
    document.getElementById('competences-cacher').id = 'competences';
    document.getElementById('logoAnimation1-gris').id = 'logoAnimation1-bleu';
    document.getElementById('logoAnimation2-gris').id = 'logoAnimation2-bleu';
    document.getElementById('logoAnimation3-gris').id = 'logoAnimation3-bleu';
  }
  else if( document.getElementById('page2') && document.getElementById('page3-cacher') && event.keyCode==37){            //Flèche de gauche
    document.getElementById('page2').id = "page2-cacher";
    document.getElementById('divTransparente-cacher').id = 'divTransparente';
    document.getElementById('competences').id = 'competences-cacher';
    document.getElementById('logoAnimation1-bleu').id = 'logoAnimation1-gris';
    document.getElementById('logoAnimation2-bleu').id = 'logoAnimation2-gris';
    document.getElementById('logoAnimation3-bleu').id = 'logoAnimation3-gris';
  }
  else if(document.getElementById('page2') && document.getElementById('page3-cacher') && event.keyCode==39){
    document.getElementById('page3-cacher').id = "page3";
    document.getElementById('page2').id = "page2-cacher";
    document.getElementById('competences').id = 'competences-cacher';
    document.getElementById('titre-parcours-cacher').id = 'titre-parcours';
    document.getElementById('logoAnimation1-bleu').id = 'logoAnimation1-rouge';
    document.getElementById('logoAnimation2-bleu').id = 'logoAnimation2-rouge';
    document.getElementById('logoAnimation3-bleu').id = 'logoAnimation3-rouge';
  }
  else if(document.getElementById('page2-cacher') && document.getElementById('page3') && event.keyCode==37){
    document.getElementById('page3').id = "page3-cacher";
    document.getElementById('page2-cacher').id = "page2";
    document.getElementById('competences-cacher').id = 'competences';
    document.getElementById('titre-parcours').id = 'titre-parcours-cacher';
    document.getElementById('logoAnimation1-rouge').id = 'logoAnimation1-bleu';
    document.getElementById('logoAnimation2-rouge').id = 'logoAnimation2-bleu';
    document.getElementById('logoAnimation3-rouge').id = 'logoAnimation3-bleu';
  }
});

