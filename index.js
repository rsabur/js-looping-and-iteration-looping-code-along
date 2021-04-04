// Code your solutions in this file
function writeCards(names, occasion) {
    let thankYouCards = []
    for (let i = 0; i<names.length; i++){
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    }
    return thankYouCards;
}

function countDown(number) {
    let countDown = number;
        while (countDown >= 0) {
        console.log(countDown--);
    }
}