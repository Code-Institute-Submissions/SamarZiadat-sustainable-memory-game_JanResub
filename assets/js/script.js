// Tree data from:
// https://forestryandland.gov.scot/learn/trees
// A list of trees to use in the game.
const treeDatabase = [{
  name: 'Ash',
  description: 'These tall, domed trees can reach up to 40 metres in height. The leaves are arranged in pairs whilst the single-winged seeds grow in bunches. The bark starts smooth and greenish-grey before turning grey and fissured with age.',
  type: 'Broadleaf',
  imgLink: "https://forestryandland.gov.scot/images/learn/treespecies/ash-botanical.jpg",
},
{
  name: 'Ash',
  description: 'These tall, domed trees can reach up to 40 metres in height. The leaves are arranged in pairs whilst the single-winged seeds grow in bunches. The bark starts smooth and greenish-grey before turning grey and fissured with age.',
  type: 'Broadleaf',
  imgLink: "https://forestryandland.gov.scot/images/learn/treespecies/ash-botanical.jpg",
},
{
  name: 'Beech',
  description: 'Mature beech treess have a dense canopy made up of many branches. Its husks split to release two triangular seeds which can be eaten or roasted to make a type of coffee. The bark is smooth, grey and delicate – making it a popular tree for lovers to carve their initials into.',
  type: 'Broadleaf',
  imgLink: "https://forestryandland.gov.scot/images/learn/treespecies/beech-botanical.jpg",
},
{
  name: 'Beech',
  description: 'Mature beech treess have a dense canopy made up of many branches. Its husks split to release two triangular seeds which can be eaten or roasted to make a type of coffee. The bark is smooth, grey and delicate – making it a popular tree for lovers to carve their initials into.',
  type: 'Broadleaf',
  imgLink: "https://forestryandland.gov.scot/images/learn/treespecies/beech-botanical.jpg",
},
{
  name: 'Corsican pine',
  description: 'This slender, conical tree can reach up to 27 metres tall with horizontal branches. Its needles are long, grouped in pairs and have a distinctive twist. Its fissured, dark greyish-brown bark breaks off easily.',
  type: 'Coniferous',
  imgLink: "https://forestryandland.gov.scot/images/learn/treespecies/corsican-pine-botanical.jpg",
},
{
  name: 'Corsican pine',
  description: 'This slender, conical tree can reach up to 27 metres tall with horizontal branches. Its needles are long, grouped in pairs and have a distinctive twist. Its fissured, dark greyish-brown bark breaks off easily.',
  type: 'Coniferous',
  imgLink: "https://forestryandland.gov.scot/images/learn/treespecies/corsican-pine-botanical.jpg",
},
{
  name: 'Douglas fir',
  description: 'The Douglas fir can grow to be very tall indeed, reaching up to 60 metres in Britain. It has soft needles with two grey bands underneath and oval shaped cones that hang downwards. Its bark is reddish-brown, fissured and corky.',
  type: 'Coniferous',
  imgLink: "https://forestryandland.gov.scot/images/learn/treespecies/douglas-fir-botanical.jpg",
},
{
  name: 'Douglas fir',
  description: 'The Douglas fir can grow to be very tall indeed, reaching up to 60 metres in Britain. It has soft needles with two grey bands underneath and oval shaped cones that hang downwards. Its bark is reddish-brown, fissured and corky.',
  type: 'Coniferous',
  imgLink: "https://forestryandland.gov.scot/images/learn/treespecies/douglas-fir-botanical.jpg",
},
{
  name: 'Hazel',
  description: 'This tree usually resembles a shrub, but can reach seven metres if left uncut. In October ripe nuts enclosed in leafy bracts appear, whilst in late winter, male flowers form ‘lambs-tail’ catkins. The bark is smooth, shiny brown with conspicuous yellow lenticels and scaly patches.',
  type: 'Broadleaf',
  imgLink: "https://forestryandland.gov.scot/images/learn/treespecies/hazel-botanical.jpg",
},
{
  name: 'Hazel',
  description: 'This tree usually resembles a shrub, but can reach seven metres if left uncut. In October ripe nuts enclosed in leafy bracts appear, whilst in late winter, male flowers form ‘lambs-tail’ catkins. The bark is smooth, shiny brown with conspicuous yellow lenticels and scaly patches.',
  type: 'Broadleaf',
  imgLink: "https://forestryandland.gov.scot/images/learn/treespecies/hazel-botanical.jpg",
},
{
  name: 'Hybrid larch',
  description: 'The hybrid larch can grow to 40 metres in height. It grows deciduous needles in rosettes on short shoots, and reddish purple flowers which form cylindrical cones with rounded scales. Its grey-brown bark is fissured into regular plates.',
  type: 'Coniferous',
  imgLink: "https://forestryandland.gov.scot/images/learn/treespecies/hybrid-larch-botanical.jpg",
},
{
  name: 'Hybrid larch',
  description: 'The hybrid larch can grow to 40 metres in height. It grows deciduous needles in rosettes on short shoots, and reddish purple flowers which form cylindrical cones with rounded scales. Its grey-brown bark is fissured into regular plates.',
  type: 'Coniferous',
  imgLink: "https://forestryandland.gov.scot/images/learn/treespecies/hybrid-larch-botanical.jpg",
},
];



// Game settings
const grid = document.querySelector('.grid'); // the grid element in the index file is the gameboard where cards will lay
const resultDisplay = document.querySelector('#result') // pick out span element with id 'result' from HTML

// Variables to keep track of game state
let cardsChosen = [] // empty array called cardsChosen
let cardsChosenId = [] // empty array to push card ID for cardsChosen
let cardsWon = []

// Game board 
function createBoard() {
  for (let i = 0; i < treeDatabase.length; i++) { // loop over treeDatabase
    let card = document.createElement('img') // for each card, create an image element called 'card'
    card.setAttribute('src', 'assets/images/card-back.jpg') // for each card, set a src attribute with a hyperlink value
    card.setAttribute('data-id', i) // give each card a data ID to loop (0 to last card in array)
    //card.addEventListener('click', flipcard) ---> event listener to invoke as yet undefined card flipcard function when card is clicked
    grid.appendChild(card) // all these cards are placed in HTML div called grid as grid's children
  }
}

// Set up the game to start playing
function setupGame() {
  createBoard();
  cardsChosen = [];
  cardsChosenId = []; 
  cardsWon = [];
}

// Check for matches
function checkForMatch() {
  let cards = document.querySelectorAll('img') // pick out all the images created in function createBoard and call them cards
  const optionOneId = cardsChosenId[0] // pulling first value in array and assign it to const optionOneId
  const optionTwoId = cardsChosenId[1] // pulling second value in array and assign it to const optionTwoId
  if (cardsChosen[0] === cardsChosen[1]) { // Check that first item in array equals second item in const
    alert('You found a match!') // if answer is true, alert will pop up
  cardsWon.push(cardsChosen) // push chosen cards to this array to be stored
} else {
  cards[optionOneId].setAttribute('src', 'assets/images/card-back.jpg') // if cards don't match, flip card back over to be played again
  cards(optionTwoId).setAttribute('src', 'assets/images/card-back.jpg') // if cards don't match, flip card back over to be played again
  alert('Sorry, try again!') // after cards are flipped back over, alert to say try again
}
cardsChosen = [] // so we're ready to start flipping again
cardsChosenId = [] // so we're ready to start flipping again
resultDisplay.textContent = cardsWon.length // pass through how many times we've stored something in our cardsWon array to generate a score (so, 1 point per match)
if (cardsWon.length === treeDatabase.length / 2) // if amount cardsWon deeply equals (the amount cards in our database/2), we know we have won
  resultDisplay.textContent = 'Congrats, you matched all the cards!' // alert the user that they have won via the browser
}

// Flip chosen card
function flipCard() {
let cardId = this.getAttribute('data-id') // get data-id attribute produced in createBoard function
cardsChosen.push(treeDatabase[cardId].name) // push the cards from the treeDatabse based on their card ID; once this card is located we will get its name
cardsChosenId.push(cardId) // push card ID into seperate array called cardsChosenID
this.setAttribute('src', cardArray[cardID].img) // add an image to card selected to flip based on its card ID
if (cards.Chosen.length === 2) { // if cards chosen is 2 cards
  setTimeout(checkforMatch, 500) // after 500 milliseconds the two cards will be checked if they are a match
}
}

window.onload = setupGame();