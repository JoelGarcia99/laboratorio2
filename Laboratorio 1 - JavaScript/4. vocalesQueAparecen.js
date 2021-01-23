function DetectaVocales(event){
    event.preventDefault();

    let text = document.querySelector("#phrase").value;

    const vocales = {a: 0, e: 0, i: 0, o:0, u:0};

    for(let i=0; i<text.length; ++i) {
        
        if(vocales[text[i]] !== undefined){
            ++vocales[text[i]];
        }
    }

    let res = []
    Object.keys(vocales).forEach(function(key){if(vocales[key] > 0) res.push(key)});
    console.log(res);
    document.querySelector("#responseVocales").innerHTML = res;
}

function main4() {
    let button = document.querySelector("#vocalesBTN");    
    button.addEventListener("click", DetectaVocales, false);
}

document.onload = main4();