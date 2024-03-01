const cards = document.querySelectorAll('.card');
const score = document.querySelector('.score span');
const attemps = document.querySelector('.attemps span');


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


function checkMatch(card1,card2) {
        
    
        if(card1.dataset.itemId === card2.dataset.itemId ) {
            score.textContent = parseInt(score.textContent) + 1;
            if(score.textContent === "3") {
                setTimeout(() => {
                    alert("You win!");
                }, 500);
            }
        }
        else {
           setTimeout(() => {
            card1.classList.add('before');
            card2.classList.add('before');
           }, 500);
            attemps.textContent = parseInt(attemps.textContent) + 1;
    }
    
    
    
}


