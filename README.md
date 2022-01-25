
<a></a>

# **Quiz-a-lanche**
## Overview

This is a quiz game, which currently have 15 questions to answer and scores when users answer those questions.

<img src="docs/wireframe.png">

**GitHub repository** can be found by clicking <a href="https://github.com/kazcare/quizalanche" target="_blank" rel="noopener">**here**.</a> and the deployed **live link** for the website can be found by clicking <a href="https://kazcare.github.io/quizalanche/index.html" target="_blank" rel="noopener">**here**.</a>    

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
    * [Header and Navbar](#header-and-navbar)
    * [Hero Image](#hero-image)
    * [Landing Page](#landing-page)
    * [Recipe Page](#recipe-page)
    * [Footer](#footer)
    * [Feedback Page](#feedback-page)
    * [Thank You Page](#thank-you-page)
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
    * [Other Sources](#other-sources)

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
* I should be able to give user feedback about their knowledge.
* I would like to see some interesting, informative and challenging questions in the quiz game.
* It should look professionally designed.

[Back to Top](#table-of-contents)

<a></a>
## Design Choices
<a></a>
### Fonts
(To be added)
I have used Google fonts to find the desired font styles for this project and have decided to use font **'Lato' and 'Oswald'**. These two font styles complement each other very well.

* I used Oswald font style for the headings. Oswald makes the headings clear and nice to look at. 

* For the body content and recipes and forms, I used Lato font. It make the website very easy to read.

<a></a>
### Icons

I have used all the icons in the footer from the **[Font Awesome library](https://fontawesome.com/ "Font Awesome")**.

<a></a>
### Colors

I used a colour similar to **navy** *rgb(23, 16, 44)* for the all the texts and heading to give a uniformity throughout the website and used a similar to **light pistachio** *rgb(198, 213, 167)* colour for the background to give a good contrast between the text and the background, which makes it easy to read.

[Back to Top](#table-of-contents)
<a></a>
## Features
### **Header and Navbar**

* Website has a header element with logo on the left side of the website.

* There is a nav bar beside logo on the right hand side.

* Navigation bar links are increase in size when the particular navbar link is hovered. 

* The navigation link is underlined for the current active page.
    
* These properties and **looks of the header and navbar are consistant throughout the website**.

* The logo and nav bar link items have sticky position. These stay on the top of the screen, even when user is scrolling down.

* Nav bar hanging against the logo on the right hand side, but it chages its position for smaller screen it moves under the logo for screen sizes 950px and smaller (for tablets). It reduces its font size for screen sizes 600px and smaller (for smart phones/ tablets in portrait mode).

<img src="docs/nav-bar-hover.png">

[Back to Top](#table-of-contents)

<a></a>
### **Hero Image**

 * On home page there is a hero image, which is consistent throughout the website.

 * On the Hero image on the right hand side there is a text overlay block showing brief description about what is this website for. 

 * The cover text (text overlay) shift towards the left hand side for the smaller screens.

[Back to Top](#table-of-contents)

<a></a>
### **Landing Page**

 * Under the hero image it has some text including some facts about cheese and why people think it is amazing, what actually cheese is and what is the origin of cheese? 

 * It has a picture on the right hand side of the text, which covers 50% of the screen normally but it take up 100% of the width when screen size is reduced to 600 pixels or less.

<img src="docs/responsive-main.png">

[Back to Top](#table-of-contents)
<a></a>
### **Recipe Page**

There are currently 2 recipe pages available, Mac n Cheese and Cheesy Pizza. These recipe pages have same header and footer layout.

* On the recipe pages under the hero image there are two sections, Ingredients and Method.

* Igredients are listed as an unordered list.

* In the section with ingredients there is a picture as well, which  covers 50% of the screen width. 

* The picture sits besides the ingredient list.

* But this picture takes 100% width for the smaller screens and ingredients shifts under the picture.

* Under ingredients it has a method section showing how to cook the food step by step.

<img src="docs/recipe-page.png">

[Back to Top](#table-of-contents)

<a></a>
### **Footer**

* Footer contains social media icons which are linked to the corresponding external websites.

* These links open in a new tabs, so the user stays on our website.

* The footer section covers 100% of the screen width on all screen sizes.

* The links centerally alligned.

* **Aria label** attribute is used for all the external links to communicate the text to screen reader users. 

<img src="docs/footer-responsive.png">

[Back to Top](#table-of-contents)

<a></a>
### **Feedback Page**

Feedback page was designed to get user login and their feedback about the website, get the new ideas from the target audience. There are 4 fields in this form.

1. Email 
    - Takes user's email address and it is a required field. It validates the entry for the right email syntax and form will not be submitted without having it filled correctly.

2. Username
    - It takes user's unique ID picked by user and it is a required field and form cannot be submitted without entering a valid data.

3. Password
    - It can be filled with user's own choice of password. It is a required field as well and form will not be validated without it.

4. Feedback
    - Last item is a textarea, which is to be filled in with user's suggestions or opinion or anything they have to say regarding the website.
        
<img src="docs/feedback.png">

[Back to Top](#table-of-contents)
<a></a>
### **Thank You Page**

This page was created to thank users for taking their time to fill up the feedback form and to give them confirmation that their feedback has been validly entered.
The box height and width gains in size to accomodate the text on the smaller screens.

<img src="docs/thankyou.png">

[Back to Top](#table-of-contents)

<a></a>
## Technologies Used
### Languages

As I am doing HTML/CSS project, I used only HTML5 and CSS3 throughout the project.
I used media query to make the website responsive to different screen sizes.

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

    - Logo stayed on the top left hand side on  all the pages of the site. Font size reduced for 600px and smaller screen sizes.

    - Navbar sat on the right hand side of the logo on all pages. It moved under the logo for screen sizes 950px and smaller. Its font reduced for the screen sizes 600px and smaller.

    - Hero image stayed under the Header area covering 100% of the width on all pages.

    - Cover text stayed on the right hand side on top of the Hero Image but it moved to the left hand side for 950px and smaller screen sizes. It reduced its font for the screen size 600px and smaller.

    - Body area of the home page and the recipe pages covered 100% of the screen including the picture which shared 50% of the width of the top of the body area. Text took over the full width under the image as it was intended. The image took over 100% of the width for 600px and smaller screen sizes.

    - Footer stayed at the bottom of all the pages with social media link, which worked as they intended and opened in the new tab.

    - On the feedback form submit button, it didn't let it submit without entering all the required fields and checked for the valid syntax.

    - When all the required fields on the feedback form were validated, the submit button brought me to the "Thank you" page.

<img src="docs/testing-chrome.png">
<img src="docs/testing-edge.png">
<img src="docs/testing-firefox.png">

[Back to Top](#table-of-contents)

<a></a>
### Validator Testing

* No errors were detected by W3C validator for all html files.

* No issues were indicated by W3C CSS (Jigsaw) validator for css file.

* I confirmed that colours and fonts are readable.

* I used the lighthouse option in the Google Chrome Dev Tools to verify the website integrity. Following is the screenshot of the report. 
    
<img src="docs/lighthouse-report.png">

[Back to Top](#table-of-contents)

<a></a>
## Fixed Bugs

* I have a sticky header and navbar, situated side by side on the top of each page of the site. On the smaller screens, navbar moves under the logo, creating another row. For the mobile screens, navbar used to go under logo but the navbar items were stacked on top of each other and it was covering almost half of the screen. I fixed it by reducing the font of the navbar item, so these can fit on one row under the logo.

* The sticky header and navbar had another issue that when I was scrolling down, it was staying on the top of all the items except the hero image. I used z-index on the header area and hero image and gave the one for header area higher value than the one for the hero image to resolve the issue.

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

I would like to inform you all that this project (Cheesy Cheese) is built for **educational purpose** only and I have rendered the following items and information from different resources. I would like to thank all of these resources for helping me completing my project.

<a></a>
### Content

All recipes were copied from **"bbcgoodfood.com"**

<a></a>
### Media

* Image used as hero image is downloaded from **"pixels.com"**

* Rest of the images on the main page and recipe pages are downloaded from **"istockphoto.com"**

* All Social media icons were downloaded from **"Font Awesome"**

<a></a>
### Other Sources

* Idea for the feedback form was taken from **"CSS Sign Up Form Tutorial"** from the **"freecodecamp.org"** with some modification.

* Text overlay idea was taken from **"love running"** website.

[Back to Top](#table-of-contents)
