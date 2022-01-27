
<a></a>

# **Quiz-a-lanche**
## Overview

This is a *science quiz* game, which is very **easy to use**. I does not have too many buttons which makes it easy to use nor even an novice.

It currently has 15 questions to answer . Questions are related to different fields of science. 

The oroginal look was planned according to the following wireframes.

<img src="docs/wireframe.png">

**GitHub repository** can be found by clicking <a href="https://github.com/kazcare/quizalanche" target="_blank" rel="noopener">**here**.</a> and the deployed **live link** for the website can be found by clicking <a href="https://kazcare.github.io/quizalanche/index.html" target="_blank" rel="noopener">**here**.</a>    

Following is the actual look after deployment.
<img src="docs/responsive-main.png">

<a></a>

## Table of contents 
* [Quiz-a-lanche](#quiz-a-lanche)
    * [User Goals](#user-goals)
    * [User Stories](#user-stories)
    * [Design Choices](#design-choices)
        * [Fonts](#fonts)
        * [Icons](#icons)
        * [Colors](#colors)
* [Features](#features)
    * [Current Features](#current-features)
        * [Quiz Container](#quiz-container)
    * [Future Heatures](#future-features)
* [Technologies Used](#technologies-used)
    * [Languages](#languages)
    * [Tools](#tools)
* [Testing](#testing)
    * [Physical Testing](#physical-testing)
    * [Validator Testing](#validator-testing)
    * [Fixed Bugs](#fixed-bugs)
* [Deployment](#deployment)
* [Credits](#credits)
    * [Content](#content)
    * [Media](#media)

<a></a>
## User Goals

* Website Application should be easy to navigate on all different screen formats such as desktop, tablets and mobile phones.
* It should be visually pleasing.
* It should have useful informative challenging questions.
* Easy to follow, self explainatory application.

[Back to Top](#table-of-contents)

<a></a>
## User Stories

* I want to play a game which is visually appealing.
* I would like to play easy to access quiz game.
* It should not have too many unnecessary buttons.
* It should be giving user feedback about their knowledge.
* I would like to see some interesting, informative and challenging questions in the quiz game.
* It should look professionally designed.

[Back to Top](#table-of-contents)

<a></a>
## Design Choices
<a></a>
### Fonts
(To be added)
I have used Google fonts to find the desired font styles for this project and have decided to use font **'Italianno' and 'Raleway'**. These are the kind of fonts I wanted to add to this particular project.

* I used Italianno font style for the heading. Italianno give it a funky touch. 

* For the rest body area I used Raleway font. It makes the app very easy to read.

<a></a>
### Icons

I have used one icon for the window title, which I googled and downloaded and then got it converted as icon file from the **[Favicon website](https://favicon.io/ "Favicon website")**.

<a></a>
### Colors

I picked **light blue** rgba(255, 255, 255, 0.7) for the main quiz container.
I used a colour similar to **dark gray** *rgba(13, 13, 26, 0.6)* for the heading and question container and container has a white shadow aroud the container. 
Option containers and the Next Question button has **light gray** rgba(255, 255, 255, 0.5) background color and **black** text color.

[Back to Top](#table-of-contents)
<a></a>
## Features
### **Current Features**
#### **Quiz Container**
 
 * Heading is including in the actual Quiz container.

 * It has a funky looking heading with 'Italianno' font.

 * There is background image, which complements the quiz app.
 
 * Color palette I used is green and blue with mild opacity to make it look more apealing.

 * Quiz container is always stays in the middle of the screen for all the screen sizes.

 * Quiz containers holds a Question Container, 4 Option Containers  (radio buttons as there is only one possible answer to each question) and a Next Question Button.

 * Question container has a darker background color with light text color.

 * While Option Containers and Next Question Button have lighter background color with dark text color. These Option Containers and Next Question Button have Hover feature added to them, so they temporarily change their background color to the same color as Question Container when the mouse pointer hovers over them.

 * All responsiveness on the Quiz Container is controlled by Next Question Button.

 * Quiz game loads with the first question on the screeen.

 * If the Next Question Button clicked without making any selection, it pops an alert saying "Please, select an option!"

 * When an option is selected and Next Qestion Button is pressed, the selcted option is checked against the correct answer provided in "question.js" and Quiz container disappears and a message box appears with either green or red background colour, showing whether user has picked the correct answer or not. Plus it has a Continue button at the bottom right corner to continue to the rest of the quiz.

 <img src="docs/correct.png">
 <img src="docs/incorrect.png">

 * And next question loads and selected option radio button unchecks again and user can make selction for the next question.

 * This process repeats until the last avaiable question displays. As soon as the last question pops on screen the Next Question Button changes it's text to **Finish**.

 * After making the selection for the last question user clicks the Finish button and the Quiz container disappears and result container appears with the achieved score versus maximum achievable score.

 <img src="docs/responsive-result.png">

 * If the user wants to play quiz again the page can be refreshed to start the quiz again.

### **Future Features**

 * In the future it will have different catagories of quiz to attract more users

 * It will have randomly generated questions

[Back to Top](#table-of-contents)

<a></a>
## Technologies Used
### Languages

I used only HTML5, CSS3 and JavaScript languages throughout the project.
I used media query to make the website responsive to different screen sizes.
I added an icon which displays on the browser window beside the title, it look like this

<img src="docs/icon.png">

<a></a>
### Tools

I used Gitpod IDE to code my website. 

* Following procedures are to be followed to get to the Gitpod IDE.

    1. Firstly you need to login to your GitHub account.

    2. Create a new repository by clicking green "New" button on the right hand side.

    3. Once the repository is created, click the repository to open it.

    4. Once it is opened, click the green "Gitpod" button on the right hand side to create a Gitpod workspace. It takes some time to create it.
        
* Note: Once the Gitpod workspace is created for certain repository, do not click the green Gitpod button again, as it will create another workspace for the same repository. Everytime after the Gitpod workspace is created, access it by clicking <a href="https://gitpod.io/workspaces" target="_blank" rel="noopener">gitpod.io/workspaces</a>.

    5. In the Gitpod IDE there are three main sections: 
        - On the left hand side there is an explorer that shows the list of the files and folders in the project. 
        - The right hand side is divided into two portions vertically. 
        - Bigger portion on the top is for write codes and the bottom is to write commands for the Gitpod IDE.

    6. Every change made to the any file and folder in the project has to be sent to GitHub, otherwise the deployed project will not show those changes.

    7. To send the changes to GitHub following three steps to be followed:
        - First, changes are to be added by giving command 'git add filename' or use 'git add .' for adding all the changes to more than one item in the project. 
        - Once these changes are added, a commit command to be entered by giving command 'git commit -m "message regarding changes made since last commit" '. 
        - After the commit command 'git push' command is to be entered to push all the chages to the deployed project.

[Back to Top](#table-of-contents)

<a></a>
## **Testing**

<a></a>
### Physical Testing

* Testing was carried out on Google Chrome, Microsoft Edge and Mozilla Firefox for following devices:

    - Google Nexus 10

    - iPhone 13 Pro

    - iPad

    - iPad Pro

    - OnePlus 9

    - Huawei Mate 20 Pro

    - Samsung Galaxy Fold

    - Samsung Galaxy S20

    - Samsung Galaxy S21

    - Samsung Galaxy Tab S4

### **Testing Features**

* Following features were tested for all of the above screen sizes

    - Quiz Container and Result Container stay in the middle of the all screen sizes horizontally and vertically.

    - Quiz Container and the Option containers cover same amount of space horizomtally.

    - Quiz container disappears as user clicks Next Question button after selectin an answer and a message box appears. 
    
    - The message box shows up with either green or red background colour depending the selected answer.
    
    - The message box has a Continue button at the bottom right corner to continue to the rest of the quiz.

    - Next Question button stays at the right hand bottom corner of the Quiz container and changes it's text content to Finish as the last question displays on the screen.

    - As user clicks the Finish button the Quiz container disappears again and shows up the Result container with the achieved score.

<img src="docs/testing-chrome.png">
<img src="docs/testing-edge.png">
<img src="docs/testing-firefox.png">

[Back to Top](#table-of-contents)

<a></a>
### Validator Testing

* No errors were detected by W3C validator for all html files.

* No issues were indicated by W3C CSS (Jigsaw) validator for css file.

* No error was found by Jshint.

* I confirmed that colours and fonts are readable.

* I used the lighthouse option in the Google Chrome Dev Tools to verify the website integrity. Following is the screenshot of the report. 
    
<img src="docs/lighthouse-report.png">

[Back to Top](#table-of-contents)

<a></a>
## Fixed Bugs

* Originally the Quiz container was changing the backgoud colour to either green or red to show the user if the selected answer was correct ot not. But it was not changing it back to original state before the next question appears on the screen. 

* To solve it I created an new container to show the message showing whether the selected answer is correct or not with a Continue button to go back to Quiz. Plus this container shows up either with green or red background color, depending on the selected answer. This container replaces the Quiz Container after user clicks Next Question Button.

[Back to Top](#table-of-contents)

<a></a>
## Deployment

I deployed my website through <a href="https://github.com/" target="_blank" rel="noopener">GitHub.com</a>.

1. I started by logging in to my own account and clicked on "your repositories" link in the "my account" menu. 

2. I clicked my project repository, it opened another page with all my files I created for the project. 

3. On top of the screen just above the list of file there was a menu. 

4. Next, I clicked the setting option on the right hand of the menu, which brought me to the setting page. 

5. I scrolled down untill I found GitHub Pages option. 

6. Then I clicked "check it out here" link under it to open Github Pages full menu page and it said that my site was published at the web address.

[Back to Top](#table-of-contents)

<a></a>  
## Credits

I would like to inform you all that this project (Quizalanche) is built for **educational purpose** only and I have rendered the following items and information from different resources. I would like to thank all of these resources for helping me completing my project.

<a></a>
### Content

All questions were takem from **"radiotimes.com"**

<a></a>
### Media

* Image used as background is downloaded from **"istockphoto.com"**

* Icon image I used for the browser window, was downloaded from google and converted into icon file using "favicon.com".

[Back to Top](#table-of-contents)
