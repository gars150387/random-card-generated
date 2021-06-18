function number() {
    let numRandom = Math.floor(Math.random() * 13 + 1);
    if(numRandom > 10 && numRandom<12){
        return 'J';
    }else if(numRandom>11 && numRandom<13){
        return 'Q';
    }else if(numRandom>12){
        return 'K';
    }else{
        return numRandom;
    }
    }

document.getElementById("demo").innerHTML = number();

function suit() {
    let random = Math.floor(Math.random() * 4 + 1);
    switch (random){
        case 1:
            return '♦'
        case 2:
            return '♥'
        case 3:
            return '♠'
        case 4:
            return '♣'
    }
}
let suit1 = suit()
document.getElementById('suit').innerHTML=suit1;
document.getElementById('suit2').innerHTML=suit1;