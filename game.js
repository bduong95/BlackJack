// Card values 1-9 equal their value

// Card value for 10, Jack, Queen and King = 10

// Card value for Ace = 1 OR 21 (Evaluate the situation in which it would apply)

// Condition to Win (Higher than dealer's value AND less than or equal to 21) (Dealer must stop drawing at a value fo 17))

let cardFlipSound = new Audio("sounds/card_flip.mp3");

document.addEventListener("click", function(event) {
    flipCard();
})

// Card flip sound effect
function flipCard() {
    cardFlipSound.playbackRate=2;
    cardFlipSound.play();
}