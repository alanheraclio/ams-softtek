function cambiar(identificador){
  if (identificador == 'ham-icon') {
// EVENTOS HAM-ICON
    document.getElementById("ham-icon").id="ham-iconafter";
    document.getElementsByClassName("ham-icon_line1")[0].className="ham-icon_line1after";
    document.getElementsByClassName("ham-icon_line2")[0].className="ham-icon_line2after";
    document.getElementsByClassName("ham-icon_line3")[0].className="ham-icon_line3after";
    document.getElementsByTagName('body')[0].classList.add('non_scroll');
// EVENTOS ELEMENTOS DESAPARECEN
    document.getElementById("main-sections-container").id="main-containerafter";
    document.getElementById("main-nav").id="main-navafter";
    document.getElementById("titulo-animacion").id="titulo-animacionafter";

    

  }
  else if (identificador == "ham-iconafter") {
// EVENTOS HAM-ICON
    document.getElementById("ham-iconafter").id="ham-icon";
    document.getElementsByClassName("ham-icon_line1after")[0].className="ham-icon_line1";
    document.getElementsByClassName("ham-icon_line2after")[0].className="ham-icon_line2";
    document.getElementsByClassName("ham-icon_line3after")[0].className="ham-icon_line3";
    document.getElementsByTagName('body')[0].classList.remove('non_scroll');
// EVENTOS ELEMENTOS APARECEN
    document.getElementById("main-containerafter").id="main-sections-container";
    document.getElementById("main-navafter").id="main-nav";
    document.getElementById("titulo-animacionafter").id="titulo-animacion";

  }

}

