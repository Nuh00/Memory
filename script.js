const cards = document.querySelectorAll('.card');

let firstCard = null;
let secondCard = null;
let parentCard = null;
let parentCard2 = null;
const cardsArr = []

cards.forEach(card => {
    card.addEventListener('click', (e) => {
        
        card.classList.remove('before');
        const itemID = card.dataset.itemId

        if (cardsArr.length === 0) {
            firstCard = e.target;
            parentCard = e.target.closest('.card'); // assign to parentCard, not const parentCard
            cardsArr.push("a");
            
        }
        else if (cardsArr.length === 1) {
            secondCard = e.target;
            parentCard2 = e.target.closest('.card'); // assign to parentCard2, not const parentCard2
            cardsArr.push("b");
            checkMatch(parentCard, parentCard2);
            cardsArr.pop();
            cardsArr.pop();
        }
        

    });
});










function firstClick(parentCard) {
    console.log(parentCard);
    return parentCard;
}

function secondClick(parentCard2) {
    console.log(parentCard2);
    return parentCard2;
}


function checkMatch(x,y) {
    console.log(x,y);
    
    
}