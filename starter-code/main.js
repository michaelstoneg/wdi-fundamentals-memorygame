var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
/*
if (cardTwo === cardFour) {
	//window.alert ("You found a match");
}
else if (cardOne === cardThree) {
	window.alert ("You found a match");
}
else {
	window.alert ("Sorry, try again");
}
var boardElement = document.querySelector('#game-board');
*/
var boardElement = document.getElementById("game-board");
console.log(boardElement);
/*var footerElement = document.getElementById("footer");
function that will create your board
function createBoard() {
	var boardElement = document.createElement('div');
	boardElement.idName = "game-board";
	boardElement.className = "board";
	document.body.insertBefore(boardElement, footerElement);
}
for (var i=0; i<cards.length; i++) {
 when a card is clicked the function isTwoCards will be executed
    cardElement.addEventListener('click', isTwoCards)
}*/
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
  //}
  //for (var i = 0; i< cards.length; i++) {
    cardElements.setAttribute('data-card', cards[i]);
    cardElements.addEventListener('click', cardImages);
    console.log("cards away");
  }
}
createCards();
function cardImages() {
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = '<img src="images/king.png">';
    //this.style.background-image = '<img src="images/king.png">';
  }
	else {
		this.innerHTML = '<img src="images/queen.png">';
	}
}
cardImages();
//checks to see if there are cards in play
function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
  		//return cardsInPlay[0, 1];
    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];
  }
}
function isMatch(){
	if (cardsInPlay[0, 1] === cards[0, 1] || cardsInPlay[0, 1] === cards[2, 3]) {
		window.alert ("You found a match");
	} else {
		window.alert ("Sorry, try again");
	}
}