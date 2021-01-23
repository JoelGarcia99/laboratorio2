function muestraMayor(event) {
    event.preventDefault();

    let btnA = document.querySelector("#number1");
    let btnB = document.querySelector("#number2");

    // --------------------------------------------------
    let num1 = btnA.value;
    let num2 = btnB.value;

    let may = (num1 > num2)? num1:num2;
    // -------------------------------------------------- 

    let res = "El mayor es el "+may;
    document.querySelector("#responseMayor").innerHTML = res;
}

function main2() {
    let button = document.querySelector("#mayorBTN");
    button.addEventListener("click", muestraMayor, false);
}

document.onload = main2();