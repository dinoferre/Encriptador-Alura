function encriptar(){

    let texto = document.getElementById("input-texto").value.toLowerCase();

    let textoCifrado = texto.replace(/e/igm,"enter");
    textoCifrado = textoCifrado.replace(/o/igm,"ober");
    textoCifrado = textoCifrado.replace(/i/igm,"imes");
    textoCifrado = textoCifrado.replace(/a/igm,"ai");
    textoCifrado = textoCifrado.replace(/u/igm,"ufat");

    document.querySelector(".imgDerecha").style.display = "none";
    document.querySelector(".texto").style.display = "none";
    document.querySelector(".textoDerecho").innerHTML = textoCifrado;
    document.querySelector("#copiar").style.display = "show";
    document.querySelector("#copiar").style.display = "inherit";
}

function desencriptar(){

    let texto = document.getElementById("input-texto").value.toLowerCase();

    let textoCifrado = texto.replace(/enter/igm,"e");
    textoCifrado = textoCifrado.replace(/ober/igm,"o");
    textoCifrado = textoCifrado.replace(/imes/igm,"i");
    textoCifrado = textoCifrado.replace(/ai/igm,"a");
    textoCifrado = textoCifrado.replace(/ufat/igm,"u");

    document.querySelector(".imgDerecha").style.display = "none";
    document.querySelector(".texto").style.display = "none";
    document.querySelector(".textoDerecho").innerHTML = textoCifrado;
    document.querySelector("#copiar").style.display = "show";
    document.querySelector("#copiar").style.display = "inherit";
}

function copiar(){
    let contenido = document.querySelector(".textoDerecho");
    contenido.select();
    document.execCommand("copy");
    alert("Copiado!")
}

document.querySelector(".bi-instagram").addEventListener("click", function (e) {
    window.open("https://www.instagram.com/dino.ferre/", "_blank");
  });
  
  document.querySelector(".bi-github").addEventListener("click", function (e) {
    window.open("https://github.com/dinoferre", "_blank");
  });
  
  document.querySelector(".bi-linkedin").addEventListener("click", function (e) {
    window.open("https://www.linkedin.com/in/dinoferre/", "_blank");
  });