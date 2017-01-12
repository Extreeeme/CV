document.addEventListener('DOMContentLoaded', function() {  //Fonction qui se charge dès que la page est chargée
  var aLiens = document.querySelectorAll('a[href*="#"]');   //Selectionne toutes les ancres de la page et les places dans une liste
  for(var i=0, len = aLiens.length; i<len; i++) {           //Boucle for qui va faire une itération par ancre
    aLiens[i].onclick = function () {                       //Quand l'ancre précisée est cliquée, cela lance une fonction
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) { //Pas Compris
        var target = this.getAttribute("href").slice(1);    //Transforme l'ancre en un tableau
        if (target.length) {                                //Si l'ancre existe
          scrollTo(document.getElementById(target).offsetTop, 1000);  //Déclenche la fonction scrollTo
          return false;
        }
      }
    };
  }
});

function scrollTo(element, duration) {
  var e = document.documentElement;
  if(e.scrollTop===0){
    var t = e.scrollTop;
    ++e.scrollTop;
    e = t+1===e.scrollTop--?e:document.body;
  }
  scrollToC(e, e.scrollTop, element, duration);
}

function scrollToC(element, from, to, duration) {
  if (duration < 0) return;
  if(typeof from === "object")from=from.offsetTop;
  if(typeof to   === "object")to=to.offsetTop;
  scrollToX(element, from, to, 0, 1/duration, 20, easeOutCuaic);
}

function scrollToX(element, x1, x2, t, v, step, operacion) {
  if (t < 0 || t > 1 || v <= 0) return;
  element.scrollTop = x1 - (x1-x2)*operacion(t);
  t += v * step;
  setTimeout(function() {
    scrollToX(element, x1, x2, t, v, step, operacion);
  }, step);
}

function easeOutCuaic(t){
  t--;
  return t*t*t+1;
}


window.onscroll = function(){
  /*
  if(window.pageYOffset+100 > page4.offsetTop){
    document.getElementById("page4NonHover").id ="page4Hover";
    document.getElementById("page1Hover").id    ="page1NonHover";
    document.getElementById("page2Hover").id    ="page2NonHover";
    document.getElementById("page3Hover").id    ="page3NonHover";
  }
  else */if(window.pageYOffset+300 > page3.offsetTop){
    document.getElementById("page3NonHover").id ="page3Hover";
    document.getElementById("page2NonHover").id ="page2Hover";
    document.getElementById("page1Hover").id    ="page1NonHover";
    document.getElementById("page2Hover").id    ="page2NonHover";
    document.getElementById("page4Hover").id    ="page4NonHover"; 
  }
  else if(window.pageYOffset+300 > page2.offsetTop){
    document.getElementById("page2NonHover").id ="page2Hover";
    document.getElementById("page1Hover").id    ="page1NonHover";
    document.getElementById("page3Hover").id    ="page3NonHover";
    document.getElementById("page4Hover").id    ="page4NonHover";
  }
  else{
    document.getElementById("page1NonHover").id ="page1Hover";
    document.getElementById("page2Hover").id    ="page2NonHover";
    document.getElementById("page3Hover").id    ="page3NonHover";
    document.getElementById("page4Hover").id    ="page4NonHover";
  }
}