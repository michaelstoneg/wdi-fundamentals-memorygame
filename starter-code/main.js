var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
/*
var boardElement = document.querySelector('#game-board');
*/
var boardElement = document.getElementById("game-board");
console.log('stage is set');
/*var footerElement = document.getElementById("footer");
function that will create your board
function createBoard() {
	var boardElement = document.createElement('div');
	boardElement.idName = "game-board";
	boardElement.className = "board";
	document.body.insertBefore(boardElement, footerElement);
}
*/
function createCards() {
  // loop through your cards array to create card elements for your board
  //var i = 0;
  //while(i<4) {
    //stuff
    //i++;
  //}
  for (var i=0; i<cards.length; i++) {

    // create a div element which will be used as a card
    var cardElements = document.createElement('div');

    // add a class to the card element which will help link styling
    cardElements.className = "card";

    // append the card to the board
    boardElement.appendChild(cardElements);
    cardElements.setAttribute('data-card', cards[i]);
    cardElements.addEventListener('click', isTwoCards);
    console.log("cards away");
  }
}
createCards();
//checks to see if there are cards in play
function isTwoCards() {
  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = '<img src="images/king.png">';
  }
  else {
    this.innerHTML = '<img src="images/queen.png">';
  }
  cardsInPlay.push(this.getAttribute('data-card'));
  console.log(cardsInPlay);
  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
  		//return cardsInPlay[0, 1];
    // pass the cardsInPlay as an argument to isMatch function
    isMatch();

    // clear cards in play array for next try
    cardsInPlay = [];
    cardsReset();
  }

}
function isMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match");
	} else {
		alert("Sorry, try again");
	}
}
function cardsReset() {
  var cards = document.getElementsByClassName('card');
  for(var i=0;i<cards.length;i++) {
    cards[i].innerHTML = "";
  }
}
