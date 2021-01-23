function cuentaVocales(event){
    event.preventDefault();

    let text = document.querySelector("#phrase2").value;

    const vocales = {a: 0, e: 0, i: 0, o:0, u:0};

    for(let i=0; i<text.length; ++i) {
        
        if(vocales[text[i]] !== undefined){
            ++vocales[text[i]];
        }
    }

    document.querySelector("#responseConteo").innerHTML = JSON.stringify(vocales, null, 2);
}

function main3() {
    let button = document.querySelector("#conteoBTN");    
    button.addEventListener("click", cuentaVocales, false);
}

document.onload = main3();