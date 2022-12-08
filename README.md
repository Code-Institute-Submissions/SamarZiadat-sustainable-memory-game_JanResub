# Scotland's Tree Species: An Educational Memory Game

[View the live project here] (https://samarziadat.github.io/sustainable-memory-game/)

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

-   ### [](https://github.com/SamarZiadat/charlotte-the-decorator#user-stories)User Stories
    
    -   #### [](https://github.com/SamarZiadat/charlotte-the-decorator#first-time-visitor-goals)First Time Visitor Goals
        
        a. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about the organisation.
        
        b. As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.
        
        c. As a First Time Visitor, I want to be able to read testimonials from past customers to determine their reputation and if they are trusted.
        
    -   #### [](https://github.com/SamarZiadat/charlotte-the-decorator#returning-visitor-goals)Returning Visitor Goals
        
        a. As a Returning Visitor, I want to be able to access and view the businesses' services quickly and easily.
        
        b. As a Returning Visitor, I want to be able to contact the business to request a service or ask questions.
        
    -   #### [](https://github.com/SamarZiadat/charlotte-the-decorator#frequent-user-goals)Frequent User Goals
        
        a. As a Frequent User, I want to be to view newly added examples of the businesses' portfolio of work.
        
        b. As a Frequent User, I want to be able to check new services the business offers.
        
        c. As a Frequent User, I want to be able to contact the business to request a service, ask questions, follow-up on existing communications, or leave feedback.
        
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
