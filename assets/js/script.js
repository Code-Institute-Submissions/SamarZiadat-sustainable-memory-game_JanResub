/**
 * Tree data from: https://forestryandland.gov.scot/learn/trees
 * 
 * A list of trees to use in the game.
 * 
*/ 

const treeDatabase = [{
  name: 'Ash',
  description: 'Ash trees are tall, domed trees can reach up to 40 metres in height. The leaves are arranged in pairs whilst the single-winged seeds grow in bunches. The bark starts smooth and greenish-grey before turning grey and fissured with age.',
  imgLink: "https://forestryandland.gov.scot/images/learn/treespecies/ash-botanical.jpg",
},
{
  name: 'Ash',
  description: 'Ash trees are tall, domed trees can reach up to 40 metres in height. The leaves are arranged in pairs whilst the single-winged seeds grow in bunches. The bark starts smooth and greenish-grey before turning grey and fissured with age.',
  imgLink: "https://forestryandland.gov.scot/images/learn/treespecies/ash-botanical.jpg",
},
{
  name: 'Beech',
  description: 'This is a Beech tree. Mature trees of this species have a dense canopy made up of many branches. Its husks split to release two triangular seeds which can be eaten or roasted to make a type of coffee. The bark is smooth, grey and delicate – making it a popular tree for lovers to carve their initials into.',
  imgLink: "https://forestryandland.gov.scot/images/learn/treespecies/beech-botanical.jpg",
},
{
  name: 'Beech',
  description: 'This is a Beech tree. Mature trees of this species have a dense canopy made up of many branches. Its husks split to release two triangular seeds which can be eaten or roasted to make a type of coffee. The bark is smooth, grey and delicate – making it a popular tree for lovers to carve their initials into.',
  imgLink: "https://forestryandland.gov.scot/images/learn/treespecies/beech-botanical.jpg",
},
{
  name: 'Corsican pine',
  description: 'The Corsican pine is a slender, conical tree that can reach up to 27 metres tall with horizontal branches. Its needles are long, grouped in pairs and have a distinctive twist. Its fissured, dark greyish-brown bark breaks off easily.',
  imgLink: "https://forestryandland.gov.scot/images/learn/treespecies/corsican-pine-botanical.jpg",
},
{
  name: 'Corsican pine',
  description: 'The Corsican pine is a slender, conical tree that can reach up to 27 metres tall with horizontal branches. Its needles are long, grouped in pairs and have a distinctive twist. Its fissured, dark greyish-brown bark breaks off easily.',
  imgLink: "https://forestryandland.gov.scot/images/learn/treespecies/corsican-pine-botanical.jpg",
},
{
  name: 'Douglas fir',
  description: 'The Douglas fir can grow to be very tall, reaching up to 60 metres in Britain. It has soft needles with two grey bands underneath and oval shaped cones that hang downwards. Its bark is reddish-brown, fissured and corky.',
  imgLink: "https://forestryandland.gov.scot/images/learn/treespecies/douglas-fir-botanical.jpg",
},
{
  name: 'Douglas fir',
  description: 'The Douglas fir can grow to be very tall, reaching up to 60 metres in Britain. It has soft needles with two grey bands underneath and oval shaped cones that hang downwards. Its bark is reddish-brown, fissured and corky.',
  imgLink: "https://forestryandland.gov.scot/images/learn/treespecies/douglas-fir-botanical.jpg",
},
{
  name: 'Hazel',
  description: 'The Hazel tree usually resembles a shrub, but can reach seven metres if left uncut. In October ripe nuts enclosed in leafy bracts appear, whilst in late winter, male flowers form ‘lambs-tail’ catkins. The bark is smooth, shiny brown with conspicuous yellow lenticels and scaly patches.',
  imgLink: "https://forestryandland.gov.scot/images/learn/treespecies/hazel-botanical.jpg",
},
{
  name: 'Hazel',
  description: 'The Hazel tree usually resembles a shrub, but can reach seven metres if left uncut. In October ripe nuts enclosed in leafy bracts appear, whilst in late winter, male flowers form ‘lambs-tail’ catkins. The bark is smooth, shiny brown with conspicuous yellow lenticels and scaly patches.',
  imgLink: "https://forestryandland.gov.scot/images/learn/treespecies/hazel-botanical.jpg",
},
{
  name: 'Hybrid larch',
  description: 'The Hybrid larch can grow to 40 metres in height. It grows deciduous needles in rosettes on short shoots, and reddish purple flowers which form cylindrical cones with rounded scales. Its grey-brown bark is fissured into regular plates.',
  imgLink: "https://forestryandland.gov.scot/images/learn/treespecies/hybrid-larch-botanical.jpg",
},
{
  name: 'Hybrid larch',
  description: 'The Hybrid larch can grow to 40 metres in height. It grows deciduous needles in rosettes on short shoots, and reddish purple flowers which form cylindrical cones with rounded scales. Its grey-brown bark is fissured into regular plates.',
  imgLink: "https://forestryandland.gov.scot/images/learn/treespecies/hybrid-larch-botanical.jpg",
},
];

// Tutorial (by Ania Kubów) used: https://www.youtube.com/watch?v=tjyDOHzKN0w

// Shuffle cards (this code is from the Ania Kubów tutorial credited above)
treeDatabase.sort(() => 0.5 - Math.random());

// Game settings
const grid = document.querySelector('#grid'); // the grid element in the index file is the gameboard where cards will lay
const resultDisplay = document.querySelector('#result'); // pick out span element with id 'result' from HTML

// Variables to keep track of game state
let cardsChosen = []; // array to hold the names of the tree on chosen cards
let cardsChosenId = []; // empty array to push card ID for cardsChosen
let cardsWon = [];

/**
 * Game board 
 * 1. Loop over treeDatabase
 * 2. For each card, create an image element called 'card'
 * 3. For each card, set a src attribute with value linking to card-back image
 * 4. Give each card a data ID to loop (0 to last card in array)
 * 5. When cards are clicked, they flip over 
 * 6. All these cards are placed in HTML div called grid as grid's children
*/

function createBoard() {
for (let i = 0; i < treeDatabase.length; i++) {
  let card = document.createElement('img');
  card.setAttribute('src', 'assets/images/card-back.jpg');
  card.setAttribute('data-id', i);
  card.setAttribute('alt', 'playing card');
  card.addEventListener('click', flipCard);
  grid.appendChild(card);
}
}

// Set up the game to start playing
function setupGame() {
createBoard();
cardsChosen = [];
cardsChosenId = [];
cardsWon = [];
}

/** Check for match
 * 1. Pick out all the images created in function createBoard and call them cards
 * 2. Pull first value in array and assign it to const optionOneId
 * 3. Pull second value in array and assign it to const optionTwoId
 * 4. Check that first card chosen equals second card chosen
 * They should be matched by tree name and not card data-id
 * Matched cards will be pushed to cardsWon array to be stored
 * Clear cardsChosen and cardsChosenId so we're ready to start flipping again
 * 5. If cards don't match wait 500 milliseconds and then flip cards back over to be played again
 * 6. Clear cardsChosen and cardsChosenId so we're ready to start flipping again
 * 7. If amount cardsWon deeply equals (the amount cards in our database/2), we know we have won - alert user
*/

function checkForMatch() {
let cards = document.querySelectorAll('img');
const optionOneId = cardsChosenId[0];
const optionTwoId = cardsChosenId[1];
if (cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId) {
  cardsWon.push(cardsChosen);
  cardsChosen = [];
  cardsChosenId = [];
  let info = document.querySelector('#info');
  info.innerHTML = treeDatabase[optionOneId].description;
} else {
  setTimeout(() => {
      cards[optionOneId].setAttribute('src', 'assets/images/card-back.jpg');
      cards[optionTwoId].setAttribute('src', 'assets/images/card-back.jpg');
      cardsChosen = [];
      cardsChosenId = [];
    },
    500
  );
}
resultDisplay.textContent = cardsWon.length;
if (cardsWon.length === treeDatabase.length / 2) {
  resultDisplay.textContent = 'You won! 6';
}
}

/** Flip chosen card
 * 1. If function is to prevent user from flipping open a third card if two are already flipped open
 * 2. Get data-id attribute that was produced in the createBoard function
 * 3. Push the cards from the treeDatabase based on their card ID 
 * Once this card is located we will get its name
 * 4. Push card ID into separate array called cardsChosenId
 * 5. Add an image to card selected, to flip it based on its card ID
 * 6. If cards chosen is now 2 cards, the two cards will be checked if they are a match
*/

function flipCard() {
if (cardsChosen.length >= 2) {
  return;
}
let cardId = this.getAttribute('data-id');
cardsChosen.push(treeDatabase[cardId].name);
cardsChosenId.push(cardId);
this.setAttribute('src', treeDatabase[cardId].imgLink);
if (cardsChosen.length === 2) {
  checkForMatch();
}
}

/** Restart game 
 * 
 * reload code from W3 Schools: https://www.w3schools.com/jsref/met_loc_reload.asp
 * 
 */

document.getElementById('restart-game').addEventListener('click', function() {
location.reload();
});

window.onload = setupGame();