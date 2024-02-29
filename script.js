const cards = document.querySelectorAll('.card');

let firstCard = null;
let secondCard = null;
const cardsArr = []

cards.forEach(card => {
    card.addEventListener('click', (e) => {
        
        card.classList.remove('before');
        const itemID = card.dataset.itemId
        console.log(itemID);

        if (cardsArr.length === 0) {
             firstCard = e.target;
            const parentCard = e.target.parentElement;
            cardsArr.push("a")
            firstClick(parentCard)

            return

           
        }
        else if (cardsArr.length === 1) {
            secondCard = e.target;
            const parentCard2 = e.target.parentElement;
            cardsArr.push("b")
            secondClick(parentCard2)

            
            return
            
            
            
        }

        if (cardsArr.length === 2) {
            checkMatch(firstCard, secondCard)
            cardsArr.pop()
            cardsArr.pop()
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


function checkMatch(firstClick, secondClick) {
    console.log(firstClick);
    console.log(secondClick);

    
}