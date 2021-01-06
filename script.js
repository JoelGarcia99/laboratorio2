
function showCurrentUrl() {
    // Obteniendo el cuadro de input en el que se mostrará la URL actual
    let searchBox = document.querySelector("#recurso");
    let ajaxStatus = "<b style=\"color: blue; font-size: 3em;\">No inicializado</b>";

    const statusDiv = document.querySelector("#estados");
    statusDiv.innerHTML = ajaxStatus;

    // Poniendo la url actual en la caja de input
    searchBox.value = window.location.href;
}

function processHTTPResponse(response) {
    
    let ajaxStatus = "<b style=\"color: blue; font-size: 3em;\">";

    switch(response.readyState){
        case 0: ajaxStatus += "No hay peticiones activas"; break;
        case 1: ajaxStatus += "Petición abierta"; break;
        case 2: ajaxStatus += "Conexión establecida"; break;
        case 3: ajaxStatus += "Cargando"; break;
        case 4: ajaxStatus += "Completada"; break;
    }

    let statusResp = ajaxStatus + "</b>";

    const contentDiv = document.querySelector("#contenidos");
    contentDiv.textContent = response.response;

    const statusDiv = document.querySelector("#estados");
    statusDiv.innerHTML = statusResp;

    const statusCodeDiv = document.querySelector("#codigo");
    const statusText = (response.statusText !== "")? response.statusText:"Sin texto";
    statusCodeDiv.innerHTML = "<b style=\"color: blue; font-size: 2em;\">Texto: " + statusText+"<br/>Código: "+response.status+"</b>";

    const headerDiv = document.querySelector("#cabeceras");
    headerDiv.textContent = response.getAllResponseHeaders();

}

function httpRequest(ajax) {
    ajax.open("GET", document.querySelector("#recurso").value);
    ajax.send();
}

function main(){

    // Creando el objeto de la petición
    const requestObj = new XMLHttpRequest();

    // La función processHTTPResponse hará la magia
    requestObj.onreadystatechange = function(){
        processHTTPResponse(this);
    }

    // Mostrando url por defecto
    showCurrentUrl();

    // Obteniendo el boton de "Mostrar contenidos" y agregándol el evento
    const actionButton = document.querySelector("#enviar");

    actionButton.addEventListener(
        "click", ()=>httpRequest(requestObj), true
    );

}

window.onload = main;