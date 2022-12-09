# Scotland's Tree Species: An Educational Memory Game

View the live project [here](https://samarziadat.github.io/sustainable-memory-game/).

Scotland's Tree Species is a website that aims to educate and inform its visitors on the tree species that you can find in Scotland. The website will be targeted towards those with an interest in the natural environment, Scotland, and memory games. The website will function as a host to the memory game as well as further information on these tree species. The game itself will serve as a memory card game that teaches participants to recognise the tree species through repeated attempts to match images of the trees through memory. When a user makes a successful match, information about the tree such as its name and a description appear; this allows optional further learning for the user.  In addition, the website will be designed with climate change in mind by drawing from sustainable web design strategy. 

![Responsive Mockup](https://github.com/SamarZiadat/sustainable-memory-game/blob/master/documentation/supporting-images/responsive-mockup.png?raw=true)

## Table of Contents

-   [User Experience (UX)](#)
-   [Design](#)
-   [Features](#)
-   [Technologies Used](#)
-   [Testing](#)
-   [Deployment](#)
-   [Credits](#)

## User experience (UX)

  **User Stories**

-   **First Time Visitor Goals**
		i. As a First Time Visitor, I want to easily understand the main purpose of the site.

	ii. As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.

	iii. As a First Time Visitor, I want to be able to access the website easily from any device.

	iv. As a First Time Visitor, I want to be able to play the game on the website for the first time.

- **Returning Visitor Goals**

	i. As a Returning Visitor, I want to be able to play the game on the website multiple times in a row.

	ii. As a Returning Visitor, I want to start recognising different Scottish tree species.

-   **Frequent User Goals**

	i. As a Frequent User, I want to be able to learn more about the trees that I am now recognising.
    
## Design
This project is designed with sustainability in mind. The internet currently produces approximately 3.8% of global carbon emissions, which are rising in line with our hunger to consume more data. Communications tech will emit more carbon by 2025 than any country except China, India, and the U.S. This is not inevitable; if it is used wisely, web technology has the potential to bring huge benefits to society and the environment. 

Sustainable web design is an approach to designing web services that puts people and planet first. It delivers digital products and services that respect the principles of the [Sustainable Web Manifesto](https://www.sustainablewebmanifesto.com/): clean, efficient, open, honest, regenerative, and resilient. Using the strategies outlined on the [Sustainable Web Design](https://sustainablewebdesign.org/) website, I have made design considerations that keep both user experience *and* the wellbeing of our planet in mind: 
	
### Imagery
The only images used for this website are the favicon and the illustrations on the playing cards. The favicon is a tree,  which descriptive of the game, and it's a nice touch of detail that give the website a polished look. The images of the trees and the back of the card come from the [Scottish Government's Forestry and Land website](https://forestryandland.gov.scot/learn/trees) I used these images for the cards, because they were specially commissioned by an artist for educational purposes by the government - so they are aesthetically pleasing accurate drawings, that are stylistically consistent with each other, and are all trees you can find in Scotland. This was hard to find copyright-free, and is important to user experience.

In terms of sustainable design principles; image files make up the majority of file size on most web interfaces, and so using images efficiently is one of the best strategies to reduce page weight and energy use. It also helps improve web performance. I have ensured efficient use of imagery that all images have a justifiable purpose. Detail and colour contribute to image file size, so I have used simple illustrations with shallow depth of field and a reduced colour palettes (instead of photographs of trees for example).
	
### Colour scheme
The colour scheme I chose is inspired by a [70's colour palette from the color-hex website](https://www.color-hex.com/color-palette/73067). I chose this palette, because:

 - it went well with the images I used for the playing cards
 - the 70's nostalgia evokes 'flower power' imagery, which is suited to the subject of the game
 - it's a dark palette, which is a more sustainable option that light palettes (explained below)

The only changes I made to the palette was to swap out the green colour for a cream colour to increase readability/accessibility of some features.

![Colour palette ](https://github.com/SamarZiadat/sustainable-memory-game/blob/master/documentation/supporting-images/color-palette.png?raw=true)

#### Why are dark colour schemes a more sustainable option?

 - Many new devices using Organic Light-Emitting Diode (OLED) technology. A key difference of OLED screens is that instead of having a single backlight that is always on (modern LED screens), each pixel is itself a tiny LED lightbulb that lights up individually when it is needed. This delivers better picture quality, but it also means that dark colours use less electricity because less of the screen is illuminated. So, dark colours in web design is a way of reducing energy consumption of digital services. 

 - Power consumption is even more important for mobile devices than it is for computers, because power consumption directly impacts battery life. So, reducing screen energy by using dark colour schemes is not only good for the environment, but also provides a practical benefit to the end user by extending the battery life of their phone. 

 - In a study by Google, they found that while white pixels use the most energy, blue pixels use considerably more than red and green. So the colours chosen in this website design were considered not just for brand presentation, user experience and accessibility, but for the environment and for mobile battery life.
	
### Typography 
Custom font files can significantly increase the file size of web pages; increasing energy use and causing slow performance. As a result I have only used system fonts that are already on the users device: Arial, with Helvetica and sans-serif as backups. These fonts benefit the user in that it increases the website performance, and they are crisp and easy to read fonts which is appropriate for legibility and accessibility.

### Video and audio
No video, audio or animated images were used, as this usually constitutes the largest use of energy on websites. These features also wouldn't increase value for the users in the context of this project. Excessive motion can sometimes cause dizziness, nausea, and vertigo for people with vestibular disorders, so it's also an accessibility consideration to use video and animated images sparingly. 

### Responsive design
This website was designed to be responsive across an array of screen sizes, browsers, and devices. When the content and the platform it is displayed on are incongruous, users become frustrated, so this is a user experience consideration. Web design that is not responsive will also cause users to waste time and energy trying to accomplish tasks - including over-consuming power over simple tasks, so it's an environmental consideration too.

### Wireframes
![wireframes](https://github.com/SamarZiadat/sustainable-memory-game/blob/master/documentation/supporting-images/wireframes.png?raw=true)

## Features

### Existing Features

-   **F01 Website Introduction**
    
    -  This feature includes a header with the website title, as well as an about section that includes the objective of the game and the game instructions.
     
    - This feature is responsive, supporting legibility on all screens. On small screens it shrinks in width and increases in height.
    - The colours used draw from the colour scheme of the website for consistency. The title colour is an eye-catching orange which is used no where else on the website in order to grab the users attention.
    - Three different font sizes are used to demarcate the difference in content.

![Feature 1](https://github.com/SamarZiadat/sustainable-memory-game/blob/master/documentation/supporting-images/feature-1.png?raw=true)
    
-   **F02 Game console**
    -   The game console is teal coloured, which is the most eye-catching colour in the website colour scheme. To further grab the users attention it is the only teal feature on the website. The corners of the console are also rounded to give it a playful design.
    
    -  The game console holds other features: the game controls, the game board, and the information panel at the bottom.
    -   The game console is responsive, and so changes in size on different screen sizes (e.g. on mobile devices it becomes narrower and longer).
    
![Feature 2](https://github.com/SamarZiadat/sustainable-memory-game/blob/master/documentation/supporting-images/feature-2.png?raw=true)
 
-   **F03 Game controls**
    -   The game controls sit within the game console include a scoreboard and a replay button.
    
    - The scoreboard counts up the amount of matches the user has made as they are making them. Once they have finished the game, the scoreboard tells the user that they have won.
    - The replay button, once clicked, restarts the game so the user can play again or restart from the beginning. The button has rounded corners to match the console. When hovered over, the replay button has a box shadow effect - indicating to the user that it can be clicked. To reinforce that it can be clicked, the cursor becomes a pointer when hovering over the button.
    - The colours of the game controls draw from the colour scheme of the website for consistency. 
    -  The game controls are responsive, and so change in size on different screen sizes (e.g. on mobile devices they become smaller).  
   
   ![Feature 3 at beginning of gameplay](https://github.com/SamarZiadat/sustainable-memory-game/blob/master/documentation/supporting-images/feature-3-start.png?raw=true)
    ![Feature 3 during gameplay](https://github.com/SamarZiadat/sustainable-memory-game/blob/master/documentation/supporting-images/feature-3-play.png?raw=true)
    ![Feature 3 endgame](https://github.com/SamarZiadat/sustainable-memory-game/blob/master/documentation/supporting-images/feature-3-endgame.png?raw=true)
    
-   **F04 Game board**   
    -   The game board is directly under the game controls on the game console.
    
    -   It includes a grid of 12 playing cards (6 cards that each have a duplicate to match). When the game starts, the playing cards are facing with the back of the card facing up towards the user. When the cards are clicked, they flip over to display the tree illustration on the other side. Only two cards can be flipped over to be compared at once. If they are a match, they stay flipped over, if they are not a match they both flip back to their original state. This can be repeated until all cards are matched.
    -   The game board is also teal like the console, to attract and keep the attention of the user. 
    - To make the playing cards recognisable as playing cards to the user, the edges are rounded, they have a cream border and each one has an identical 'care back'. To encourage the user to engage with the cards, the cards also feature a box-shadow to suggest that they are 3D, and when hovered over the cursor becomes a pointer. The back of the cards (which face up when the game starts) include an illustration of brown tree bark. The same illustrator also designed the drawings of the trees which are on the other side of the cards. 
    -   This section is responsive. The game board itself is narrower and longer on mobile. With the use of flexbox, the cards also display differently on different screen sizes; on wider screens the cards display in 4 columns and on mobile they display is a narrower 3 columns.  
    
![Feature 4 during play](https://github.com/SamarZiadat/sustainable-memory-game/blob/master/documentation/supporting-images/feature-4.png?raw=true)
   
-   **F05 Information panel**
    
    -   On the bottom of the game console is an information panel. Before the game starts, this panel only displays text that says "The tree you just matched:". Once the first successful match is made, information about the tree matched appears. For every new match made, the previous information is wiped and new information about the latest tree matched appears. This information panel is designed to further teach the user about the trees they are beginning to recognise through matching/memorisation.
    
    -   The text about the trees is cream coloured to increase legibility and accessibility against the dark console background.

![Feature 5 at endgame](https://github.com/SamarZiadat/sustainable-memory-game/blob/master/documentation/supporting-images/feature-5.png?raw=true)
    
-   **F06 Footer**
    -   The footer is simple and paired back, featuring only one line of text. It lets the user know that environmental considerations were taken when creating this website, which will increase the confidence of the users in the website. It will also highlight to the users that a holistic approach has been taken to the development of the resulting website. 
 
 ![Feature 5](https://github.com/SamarZiadat/sustainable-memory-game/blob/master/documentation/supporting-images/feature-6.png?raw=true)

### Features which could be implemented in the future

-  More playing cards can be added to the stack so that there are more trees to learn from. 
- Social media links, a logo and contact details could be added to the website if marketing materials and channels were produced.
- A badge to prove the website's sustainability could also be added (e.g. [The website qualifies for this badge](https://www.websitecarbon.com/badge/))
- A green web host could be considered from [The Green Hosting Directory](https://www.thegreenwebfoundation.org/directory/) to. improve the positive environmental impact of the website.

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### [](https://github.com/SamarZiadat/charlotte-the-decorator#frameworks-libraries--programs-used)Frameworks, Libraries & Programs Used

1.  [Hover.css](https://ianlunn.github.io/Hover/): used on the navigation links in the header and Social Media link in the footer to add the underline while being hovered over.

2. [Git](https://git-scm.com/): used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

3.  [GitHub](https://github.com/):  used to store the projects code after being pushed from Git.
4.  [Balsamiq](https://balsamiq.com/):used to create the wireframes during the design process.
 5.  [Tech Sini](https://techsini.com/multi-mockup/):  used to generate the mockup of the final website on several apple devices.

## Testing

### Validator Testing

The W3C Markup Validator and CSS Validator Services, and JSHint,  were used to validate the project to ensure there were no syntax errors in the project.

-   [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)  

Results: ![CSS validation](https://github.com/SamarZiadat/sustainable-memory-game/blob/master/documentation/testing-results/css-validation.png?raw=true)
-   [W3C Markup Validation Service](https://validator.w3.org/)  

Results:
![HTML validation](https://github.com/SamarZiadat/sustainable-memory-game/blob/master/documentation/testing-results/html-validation.png?raw=true)
-  [JSHint](https://jshint.com/)

Results: ![JS validation ](https://github.com/SamarZiadat/sustainable-memory-game/blob/master/documentation/testing-results/js-validation.png?raw=true)
Please note that when running this test I set an option ([as suggested here](https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const) so the test wouldn't give a false alert for ECMAScript 6 specific syntax.

### Lighthouse Test

[Google's web.dev page quality test](https://web.dev/measure/)  was used to measure the website against performance, accessibility, SEO and best practice.

Results:
![Lighthouse test](https://github.com/SamarZiadat/sustainable-memory-game/blob/master/documentation/testing-results/lighthouse-test.png?raw=true)

### Sustainability Testing

 - The [Website Carbon Calculator](https://www.websitecarbon.com/) was
   used to estimate the website's carbon footprint.

Result:
   
   ![Carbon calculator result](https://github.com/SamarZiadat/sustainable-memory-game/blob/master/documentation/testing-results/carbon-result.png?raw=true)
   
 - Mightybytes [Ecogarder](https://www.websitecarbon.com/) was
   used to measure how green the website is:
   
   **Overall result:**
This result is relatively low, because 25% of the score is dedicated to how green your web host is, to which the website scored 0%. This holistic approach is fair, and [The Green Hosting Directory](https://www.thegreenwebfoundation.org/directory/) is suggested as a resource to explore this.

![Ecograder result](https://github.com/SamarZiadat/sustainable-memory-game/blob/master/documentation/testing-results/ecograder-1.png?raw=true)
Breakdown of results:
![enter image description here](https://github.com/SamarZiadat/sustainable-memory-game/blob/master/documentation/testing-results/ecograder-2.png?raw=true)
![enter image description here](https://github.com/SamarZiadat/sustainable-memory-game/blob/master/documentation/testing-results/ecograder-3.png?raw=true)
![enter image description here](https://github.com/SamarZiadat/sustainable-memory-game/blob/master/documentation/testing-results/ecograder-4.png?raw=true)

### Testing User Stories from User Experience (UX) Section

 **User Stories**

 -   **First Time Visitor Goals**
 
		i. As a First Time Visitor, I want to easily understand the main purpose of the site.
		
	 - a. Upon entering the site, users are automatically greeted with a clean and easily readable title and website introduction. Underneath there are game instructions and the game console follows.
	 
	 - b. When scrolling to the bottom of the website, which is purposely not very long, the user reaches the footer, which tells them that the website has been developed with the planet in mind. This tells them more about the website and aims to leave them feeling good about their experience. 
	 
	 ii. As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.
	 
	 - a. The user can scroll down to navigate the whole website, leading down to the footer (which is the final feature).
	 
	 iii. As a First Time Visitor, I want to be able to access the website easily from any device.
	 - a. The website is designed to be fully responsive on all devices and screen sizes. It is also compatible on a diversity of the most popular browsers.
	 
	 iv. As a First Time Visitor, I want to be able to play the game on the website for the first time.
	 	- a. Instructions are available at the top of the website and so are easily accessible. 
	 	
	 	- b. The game is simple to follow and is based on a popular model of game.
	 	
	 	- c. On every device, the game console is physically available on the website as you land on the page, so it doesn't require any navigation to find it. 

 - **Returning Visitor Goals**

	i. As a Returning Visitor, I want to be able to play the game on the website multiple times in a row.
	
	- a. Once you start playing, the scoreboard begins to tally up your successful 'matches'. Once you win, the game is over, and the scoreboard lets you know that you have won. Therefore, it's easily understood by users once the game starts, is in ongoing play, and when the game ends.

	- b. The 'replay' button is easily accessible at the top of the game console. Once clicked, it starts the game again.

	ii. As a Returning Visitor, I want to start recognising different Scottish tree species.

	- a. The game is designed as both an enjoyable experience but also as an educational tool that tests and improves your memory. Upon playing the game several times, users should begin to recognise the trees that they are matching together. This will lead the users to begin to recognise shapes, colours and features of each tree both in the game and outside in the world.
	
	- b. When two identical cards are successfully matched the scoreboard update - helping the user keep track of how many matches they've made. This is also a motivational tool to encourage them to keep playing until they have won.

 -   **Frequent User Goals**
 i. As a Frequent User, I want to be able to learn more about the trees that I am now recognising. 
		- a. When a 'match' is made between two cards, information about the tree that has been matched appears at the bottom of the console, including the tree's name, a description of it, and additional facts. As a returning visitor, they may begin to learn some of the names of the trees they are recognising and matching, as well learning additional information about it.

### Browser Compatibility

-   Testing has been carried out on the following browsers :
    -   Chrome Version 107.0.5304.87
    -   Edge Version 107.0.1418.24
    -   Firefox Version 94.0.1
    -   Safari on macOS (Safari Version 15.6)

## Deployment

### Adding and Committing files

To add files to the repository take the following steps

In the command line type - git add .  
git commit -m "This is being committed" git push

To add all new files or modified file use " ." - To add a single file use the pathway to the file eg .index.html or assets/css/style.css When committing make sure your comments are clear about what changes have been made. Pushing will send your work to the repository

### Deployment

The project was deployed with the following steps

-   Logged into git hub
-   Clicked the "Settings" button in the menu above the Repository.
-   Scroll down the Settings page to the "GitHub Pages" Section.
-   Under "Source", click the dropdown called "None" and then select "Master Branch".
-   The page will automatically refresh, and a link displaced. It may take some time for the link to show the website.
-   If the page will not load go down to "template" under the "source" and select a template.
-   Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

### Forking

Forking the GitHub Repository

By forking the GitHub Repository, you can make a copy of the original repository in your own GitHub account. This means we can view or make changes without making the changes affecting the original.

-   Log into GitHub and locate the GitHub Repository.
-   At the top of the Repository there is a "Fork" button about the "Settings" button on the menu.
-   You should now have a new copy of the original repository in your own GitHub account.

### Cloning

Making a Local Clone

-   Log into your GitHub then find the gitpod repository
-   Under the repository name there is a button that says "Clone or download". Click on this button.
-   If cloning with HTTPS "Clone with HTTPS", copy this link.
-   Open Gitbash
-   Change the current working directory to the location where you want the cloned directory to be.
-   Type git clone, and then paste the URL you copied earlier.
    
    ```
      $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
      Press - Enter- Your local clone will be created.
      $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
              > Cloning into `CI-Clone`...
              > remote: Counting objects: 10, done.
              > remote: Compressing objects: 100% (8/8), done.
              > remove: Total 10 (delta 1), reused 10 (delta 1)
              > Unpacking objects: 100% (10/10), done.
    
    
    ```
    

[Click Here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository)  for more info on cloning.

## Credits

### Content

- All content was written by the developer.

- Information about Scottish trees are borrowed from the Scottish Government's Forestry and Land website: https://forestryandland.gov.scot/learn/trees

### Code

-   A tutorial by Ania Kubów inspired my code: https://www.youtube.com/watch?v=tjyDOHzKN0w

-   Code on how to refresh a website with JS was based on this W3Schools tutorial: https://www.w3schools.com/jsref/met_loc_reload.asp
    
-   Code on how to use Element.innerHTML with JS was based on this Mozilla guide: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML

- This online formatter was used to beautify my code: https://beautifier.io/
    
### Media

-   This tree Favicon was used for the website: https://favicon.io/emoji-favicons/deciduous-tree
    
- Illustrations of Scottish trees are borrowed from the Scottish Government's Forestry and Land website: https://forestryandland.gov.scot/learn/trees
     

### Acknowledgments

Thank you to my mentor Brian Macharia who gave me very excellent advice and feedback on how to plan and execute this project and who provided me with lots of pointers and resources to help with design, coding and testing.


