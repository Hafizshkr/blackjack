// object 
let player = {
    name: "Ben",
    chips: 300
}
let cards = []
let hasBlackjack = false
let isAlive = false
let message = ""
// document.getElementById("id we set in html") this is how we link js and html
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

//.textcontent how to appear text that we set their id in the website.
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard () {
    let randomNumer = Math.floor(Math.random()* 13)+1
    if (randomNumer > 10) {
        return 10
    }
    else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }

}

 function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
 }

function renderGame() {
    cardEl.textContent = "Cards: " 
    for (i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " +  sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "you've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of this game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()

    }
    
} 


