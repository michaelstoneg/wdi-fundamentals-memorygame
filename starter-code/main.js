var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

//if (cardTwo === cardFour) {
	//window.alert ("You found a match");
//}
//else if (cardOne === cardThree) {
	//window.alert ("You found a match");
//}
//else {
//	window.alert ("Sorry, try again");
//}
var board = document.getElementById('game-board');

// function that will create your board
function createBoard() {
  // loop through your cards array to create card elements for your board
  for (var i=0; i<4; i++) {

    // create a div element which will be used as a card
    var cards = document.createElement('div');

    // add a class to the card element which will help link styling
    cards.className = 'card';

    // append the card to the board
   board.appendChild(cards);
  }

}