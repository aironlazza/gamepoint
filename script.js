var menuToggle = document.getElementById("menu-toggle");
var menuLista = document.getElementById("menu-lista");


menuToggle.addEventListener("click", function() {
    menuLista.style.display = (menuLista.style.display === "block") ? "none" : "block";
  }
);
function buscarJogos() {
  let input = document.getElementById('search-index').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('coluna');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="block";                 
      }
  }
}

