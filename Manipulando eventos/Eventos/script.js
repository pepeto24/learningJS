window.addEventListener("load", start); //start trata-se da referencia da function. indica que quando a pagina carregar, executa a func start

function start(){
    console.log("Events");
    console.log("Page full loaded");

    
    var nameInput = document.querySelector("#nameInput");
    nameInput.addEventListener("keyup", countName);
    
}

function countName(event){


    var count = event.target.value;

    var span = document.querySelector("#nameLength");
    span.textContent = count.length;

}

