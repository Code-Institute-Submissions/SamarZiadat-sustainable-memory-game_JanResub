/**
 * Tree data from: https://forestryandland.gov.scot/learn/trees
 *
 * A list of trees to use in the game.
 *
 */

const treeDatabase = [
  {
    name: "Ash",
    description:
      "Ash trees are tall, domed trees can reach up to 40 metres in height. The leaves are arranged in pairs whilst the single-winged seeds grow in bunches. The bark starts smooth and greenish-grey before turning grey and fissured with age.",
    imgLink:
      "https://forestryandland.gov.scot/images/learn/treespecies/ash-botanical.jpg",
  },
  {
    name: "Ash",
    description:
      "Ash trees are tall, domed trees can reach up to 40 metres in height. The leaves are arranged in pairs whilst the single-winged seeds grow in bunches. The bark starts smooth and greenish-grey before turning grey and fissured with age.",
    imgLink:
      "https://forestryandland.gov.scot/images/learn/treespecies/ash-botanical.jpg",
  },
  {
    name: "Beech",
    description:
      "This is a Beech tree. Mature trees of this species have a dense canopy made up of many branches. Its husks split to release two triangular seeds which can be eaten or roasted to make a type of coffee. The bark is smooth, grey and delicate – making it a popular tree for lovers to carve their initials into.",
    imgLink:
      "https://forestryandland.gov.scot/images/learn/treespecies/beech-botanical.jpg",
  },
  {
    name: "Beech",
    description:
      "This is a Beech tree. Mature trees of this species have a dense canopy made up of many branches. Its husks split to release two triangular seeds which can be eaten or roasted to make a type of coffee. The bark is smooth, grey and delicate – making it a popular tree for lovers to carve their initials into.",
    imgLink:
      "https://forestryandland.gov.scot/images/learn/treespecies/beech-botanical.jpg",
  },
  {
    name: "Corsican pine",
    description:
      "The Corsican pine is a slender, conical tree that can reach up to 27 metres tall with horizontal branches. Its needles are long, grouped in pairs and have a distinctive twist. Its fissured, dark greyish-brown bark breaks off easily.",
    imgLink:
      "https://forestryandland.gov.scot/images/learn/treespecies/corsican-pine-botanical.jpg",
  },
  {
    name: "Corsican pine",
    description:
      "The Corsican pine is a slender, conical tree that can reach up to 27 metres tall with horizontal branches. Its needles are long, grouped in pairs and have a distinctive twist. Its fissured, dark greyish-brown bark breaks off easily.",
    imgLink:
      "https://forestryandland.gov.scot/images/learn/treespecies/corsican-pine-botanical.jpg",
  },
  {
    name: "Douglas fir",
    description:
      "The Douglas fir can grow to be very tall, reaching up to 60 metres in Britain. It has soft needles with two grey bands underneath and oval shaped cones that hang downwards. Its bark is reddish-brown, fissured and corky.",
    imgLink:
      "https://forestryandland.gov.scot/images/learn/treespecies/douglas-fir-botanical.jpg",
  },
  {
    name: "Douglas fir",
    description:
      "The Douglas fir can grow to be very tall, reaching up to 60 metres in Britain. It has soft needles with two grey bands underneath and oval shaped cones that hang downwards. Its bark is reddish-brown, fissured and corky.",
    imgLink:
      "https://forestryandland.gov.scot/images/learn/treespecies/douglas-fir-botanical.jpg",
  },
  {
    name: "Hazel",
    description:
      "The Hazel tree usually resembles a shrub, but can reach seven metres if left uncut. In October ripe nuts enclosed in leafy bracts appear, whilst in late winter, male flowers form ‘lambs-tail’ catkins. The bark is smooth, shiny brown with conspicuous yellow lenticels and scaly patches.",
    imgLink:
      "https://forestryandland.gov.scot/images/learn/treespecies/hazel-botanical.jpg",
  },
  {
    name: "Hazel",
    description:
      "The Hazel tree usually resembles a shrub, but can reach seven metres if left uncut. In October ripe nuts enclosed in leafy bracts appear, whilst in late winter, male flowers form ‘lambs-tail’ catkins. The bark is smooth, shiny brown with conspicuous yellow lenticels and scaly patches.",
    imgLink:
      "https://forestryandland.gov.scot/images/learn/treespecies/hazel-botanical.jpg",
  },
  {
    name: "Hybrid larch",
    description:
      "The Hybrid larch can grow to 40 metres in height. It grows deciduous needles in rosettes on short shoots, and reddish purple flowers which form cylindrical cones with rounded scales. Its grey-brown bark is fissured into regular plates.",
    imgLink:
      "https://forestryandland.gov.scot/images/learn/treespecies/hybrid-larch-botanical.jpg",
  },
  {
    name: "Hybrid larch",
    description:
      "The Hybrid larch can grow to 40 metres in height. It grows deciduous needles in rosettes on short shoots, and reddish purple flowers which form cylindrical cones with rounded scales. Its grey-brown bark is fissured into regular plates.",
    imgLink:
      "https://forestryandland.gov.scot/images/learn/treespecies/hybrid-larch-botanical.jpg",
  },
];

// Tutorial (by Ania Kubów) used: https://www.youtube.com/watch?v=tjyDOHzKN0w

// Game settings
const grid = document.querySelector("#grid"); // the grid element in the index file is the gameboard where cards will lay
const resultDisplay = document.querySelector("#result"); // pick out span element with id 'result' from HTML
const time = 0;

// Variables for timer functionality
// These are just declared and only actually initialized in setupGame() or its offshoots
let timer;
let elapsed;

// Variables to keep track of game state
let cardsChosen;
let cardsChosenId;
let cardsWon;

// Variables to keep track of user data for pop-up
let endTime;

// Clicking replay button on game console calls setupGame function
document.getElementById("restart-game").addEventListener("click", setupGame);

// Light-mode toggle
function modeToggle() {
  var element = document.body;
  element.classList.toggle("light-mode");
}

/**
 * Ask User for Username
 * 1. Create an text type input element with a placeholder, a maximum nd maximuminput length
 * and an id
 * 2. Create a button element with a value of 'Submit' and an id
 * 3. Create a paragraph element with an id
 * 4. These three elements are placed in HTML div called username as username's children
 * 5. Event listener is set for submit button so that usernameEntered() is called
 * 6. Game play elements are hidden while the user fills in the form so they can't start
 * playing until they have finished filling in the form
 */

function usernameForm() {
  let usernameField = document.createElement("input");
  usernameField.setAttribute("type", "text");
  usernameField.setAttribute("placeholder", "Name");
  usernameField.setAttribute("id", "username-field");
  let usernameButton = document.createElement("button");
  usernameButton.setAttribute("type", "button");
  usernameButton.setAttribute("value", "submit");
  usernameButton.setAttribute("id", "username-button");
  usernameButton.innerText = "SUBMIT";
  let usernameMessage = document.createElement("p");
  usernameMessage.setAttribute("id", "username-paragraph");
  username.appendChild(usernameField);
  username.appendChild(usernameButton);
  username.appendChild(usernameMessage);
  usernameButton.addEventListener("click", handleFormSubmit);
  let consoleControls = document.getElementById("controls");
  consoleControls.style.visibility = "hidden";
  let aboutTreeTitle = document.getElementById("info-title");
  aboutTreeTitle.style.visibility = "hidden";
  let gameButtons = document.getElementById("game-buttons");
  gameButtons.style.visibility = "hidden";
}

/**
 * Start Game Button
 * 1. Create a button element with a value of 'Start Game' and an id
 * 2. The button is placed in a div called username-div as username-div's child
 * 3. When the button is clicked, the game is set up for play
 */
function displayPlayButton() {
  let playButton = document.createElement("button");
  playButton.setAttribute("type", "button");
  playButton.setAttribute("value", "Submit");
  playButton.innerText = "START GAME";
  playButton.setAttribute("id", "start-button");
  playButton.addEventListener("click", setupGame);
  username.appendChild(playButton);
}

/**
 * Validation for Name Field in Form
 * 1. When submit button is clicked, default is to refresh page, so prevent that 
 * 2. If the field value is empty on submission, throw alert
 * 2. If less than 2 characters on submission, throw alert
 * 3. If more than 15 characters on submission, throw alert
 * 4. Use regex to only allow letters, numbers, hyphens, underscores and full stops
 * If anything else is present on submission, throw alert
 * 5. If all validation passes, call usernameEntered()
 */

function handleFormSubmit(event) {
  event.preventDefault();

  let usernameFieldValue = document.getElementById("username-field").value;
  
  if (usernameFieldValue == "") {
    Swal.fire({
      title: "Error",
      text: "Please enter your name",
      icon: "error",
      iconColor: "#f97800",
      background: "#fefae0",
      color: "#d69c00",
      confirmButtonColor: "#006868",
      confirmButtonText: "Try again",
    });
    return false;
  }

  if (usernameFieldValue.length < 2) {
    Swal.fire({
      title: "Error",
      text: "Please enter 2 or more characters",
      icon: "error",
      iconColor: "#f97800",
      background: "#fefae0",
      color: "#d69c00",
      confirmButtonColor: "#006868",
      confirmButtonText: "Try again",
    });
    return false;
  }

  if (usernameFieldValue.length > 15) {
    Swal.fire({
      title: "Error",
      text: "Please enter no more than 15 characters",
      icon: "error",
      iconColor: "#f97800",
      background: "#fefae0",
      color: "#d69c00",
      confirmButtonColor: "#006868",
      confirmButtonText: "Try again",
    });
    return false;
  }

  let regex=new RegExp("^[0-9A-Za-z_.-]+$");
    if (!regex.test(usernameFieldValue)) {
      Swal.fire({
        title: "Error",
        text: "This form only accepts letters, numbers, hyphens, underscores and full stops",
        icon: "error",
        iconColor: "#f97800",
        background: "#fefae0",
        color: "#d69c00",
        confirmButtonColor: "#006868",
        confirmButtonText: "Try again",
      });
      return false;
    }
usernameEntered()
}

/**
 * Username Entered
 * 1. When the user enters and submits their username via usernameForm(),
 * the form disappears from view (using remove)
 * 2. The inputted text (their name) then appears in the userField paragraph
 * and the user is greated by name
 * 2. displayPlayButton() is called to create and display a play button.
 */
function usernameEntered() {
  let usernameField = document.getElementById("username-field");
  usernameField.remove();
  let usernameMessage = document.getElementById("username-paragraph");
  let usernameButton = document.getElementById("username-button");
  usernameButton.remove();
  let name = usernameField.value;
  usernameMessage.innerHTML = `Hi ${name}!`;
  displayPlayButton();
}

/**
 * Game board
 * 1. Loop over treeDatabase
 * 2. For each card, create an image element called 'card'
 * 3. For each card, set a src attribute with value linking to card-back image
 * 4. Give each card a data ID to loop (0 to last card in array)
 * 5. When cards are clicked, they flip over
 * 6. All these cards are placed in HTML div called grid as grid's children
 * 7. All the game controls tha were set to hidden in usernameForm() are
 * made visible again.
 * 8. The username div that holds the form is also hidden during game play
 */

function createBoard() {
  for (let i = 0; i < treeDatabase.length; i++) {
    let card = document.createElement("img");
    card.setAttribute("src", "assets/images/card-back.jpg");
    card.setAttribute("data-id", i);
    card.setAttribute("alt", "playing card");
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
    let consoleControls = document.getElementById("controls");
    consoleControls.style.visibility = "visible";
    let aboutTreeTitle = document.getElementById("info-title");
    aboutTreeTitle.style.visibility = "visible";
    let gameButtons = document.getElementById("game-buttons");
    gameButtons.style.visibility = "visible";
    let usernameDiv = document.getElementById("username");
    usernameDiv.style.visibility = "hidden";
  }
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
 * 7. If amount cardsWon deeply equals (the amount cards in our database/2),
 * we know we have won - alert user and stop timer
 */

function checkForMatch() {
  let cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  if (cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId) {
    cardsWon.push(cardsChosen);
    cardsChosen = [];
    cardsChosenId = [];
    let info = document.querySelector("#info");
    info.innerHTML = treeDatabase[optionOneId].description;
  } else {
    setTimeout(() => {
      cards[optionOneId].setAttribute("src", "assets/images/card-back.jpg");
      cards[optionTwoId].setAttribute("src", "assets/images/card-back.jpg");
      cardsChosen = [];
      cardsChosenId = [];
    }, 500);
  }
  resultDisplay.textContent = cardsWon.length;
  if (cardsWon.length === treeDatabase.length / 2) {
    resultDisplay.textContent = "You won! 6";
    stopTime();
    
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
  let cardId = this.getAttribute("data-id");
  cardsChosen.push(treeDatabase[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute("src", treeDatabase[cardId].imgLink);
  if (cardsChosen.length === 2) {
    checkForMatch();
  }
}

/** Timer functionality
 * 1. Timer starts when the setupGame() function is called and them timer ticks over every second
 * 2. Seconds and minutes passed display in the elements with ID seconds and minutes from the html file
 * 3. stopTime() function is called when user wins (the length of cards.won list is half the length
 * of the tree database), which stops the timer
 * 4. When the timer function runs, it calls tick() to increment the elapsed variable by 1.
 * Variable increments each time the timer fires (which is every second for as long as it runs)
 * This lets us know how many seconds it took until the user won the game
 */

function startTime() {
  let sec = 0;
  function pad(val) {
    return val > 9 ? val : "0" + val;
  }

  timer = setInterval(function () {
    document.getElementById("seconds").innerHTML = pad(++sec % 60);
    document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
  }, 1000);
}

function stopTime() {
  if (cardsWon.length === treeDatabase.length / 2) {
    clearInterval(timer);
  }
  endgameAlert();
}

function tick() {
  elapsed++;
}

function endgameAlert() {
  let usernameField = document.getElementById("username-field");
  let name = usernameField.value;
  alert(`Well done ${name}, you completed the game in ${elapsed} seconds!`);
  console.log("This works!");
}

// Reset game state and set up the game to start playing
function setupGame() {
  // Shuffle cards (this code is from the Ania Kubów tutorial credited above)
  treeDatabase.sort(() => 0.5 - Math.random());

  createBoard();
  startTime();

  cardsChosen = [];
  cardsChosenId = [];
  cardsWon = [];
  endTime = [];
  
  elapsed = 0
}

// When window loads usernameForm() is called
window.onload = usernameForm();

