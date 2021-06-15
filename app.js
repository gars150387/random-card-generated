function number() {
    return Math.floor(Math.random() * 12 + 1);
}
document.getElementById("demo").innerHTML = number();

function suit() {
    return Math.floor(Math.random() * 4 + 1);
    switch (suit){
        case 1:
            return document.getElementById("heart").innerHTML = 'amarillo'; 
            break;
        case 2:
            return document.getElementById("diamond").innerHTML = 'verde'; 
            break;
        case 3:
            return document.getElementById("black-heart").innerHTML = 'azul'; 
            break;
        case 4:
            return document.getElementById("clover").innerHTML = 'gris'; 
            break;
    }
}
suit();
// function myFunction() {
//     alert("Page is loaded");
// }