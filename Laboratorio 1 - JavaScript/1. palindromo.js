function esPalindromo(event) {
    event.preventDefault();

    let texto = document.querySelector("#palindroma").value;

    if(!texto || texto === "") {
        alert("Ingrese algo");
        return;
    }

    // /-----------------------------------------------------------
    let newText = texto.replace(/ /g, "").toLowerCase();
    let inverseText = "";

    for(let i=newText.length-1; i>=0; --i){
        inverseText += newText[i];
    }
    // ------------------------------------------------------------
    
    let response = newText === inverseText? "Es palíndroma":"No es palíndroma :'(";
    let responseLbl = document.querySelector("#responsePalindroma")
    responseLbl.innerHTML = response;
}

function main() {
    let button = document.querySelector("#palindromaBTN");
    button.addEventListener("click", esPalindromo, false);
}

document.onload = main();