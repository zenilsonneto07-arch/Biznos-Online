

function Semitem(){
    alert("Item esgotado")
}

function Enviar() {
    document.body.style.backgroundColor="greenyellow";
    
}
function viraVermelho(){
    let a = document.getElementById("teste");
    a.style.backgroundColor = "red"
}

function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "greenyellow"
}

function Aczul (){
let a = document.getElementById("Acessorio");
    a.style.backgroundColor = "red"
}
function Acev (){
 let a = document.getElementById("Acessorio");
    a.style.backgroundColor = "greenyellow"
}

function doisclicks(){
  alert("Item esgotado")  
}

var hora = new Date().getHours();


if ( hora <12) {
    alert ("Bom dia")
}else if(hora <18){
    alert("Boa tarde")
}else{
    alert("Boa noite")
}


