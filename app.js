function number() {
    return Math.floor(Math.random() * 12 + 1);
}
document.getElementById("demo").innerHTML = number();

function suit() {
    return Math.floor(Math.random() * 4 + 1);
        switch(suit){
        case 1:
            return 1;
        break;
        case 2:
            return 2;
            break;
        case 3:
            return 3;
            break;
        case 4:
            return 4;
            break;
}

}
document.getElementById("suit").innerHTML = suit();

// function myFunction() {
//     alert("Page is loaded");
// }