# FILIPINO RECIPES API

<img src='./src/assets/LasangPinoy.JPG' style="display:block">
<br>

## Project Summary

### Project Context

LASANG PINOY API is a mobile responsive website for cooks or ordinary people who want to cook or share Filipino food recipes the website has a recipe search engine makes easier to find recipes for recipes that fits your budget and can simply search title or find recipes that match their needs. Being motivated from watching different foreign taste Filipino foods in Philippines the website could provide and teach the users to cook and taste Filipino delicacies in the comfort of their own home.

### Project Goals

The database goal is to provide the user an easy way to find and share their own recipes by putting ingredients and instruction that other people can access to for them to try also to promote Filipino delicacies.

the database can be accessed [here](https://github.com/engroliver/Assignment-2-oliver-recipes-api/).

### Justification for the project

To provide an convenient way to discover, find and monitor their callorie intakes while exploring filipino culture with their exotic food. At the comfort of their own home they do not need to go to philippines anymore to try and taste filipino delicacies.

 ## UIUX
 
  ### Identifying user stories
  1. User that wants to try different delicacies of other country<br>
  2. User that would love to share knowledge about cooking. <br> 
  
  ###  Acceptance criteria
  1. The web application allows user to share recipe. <br>
  2. The web application allows filtering of recipe to find their taste <br>
  3. The web application ensures that the updating and information of recipe will be shown clearly and friendly to access.
 
 ### Visual Insperation
At the start of the project, I had been searching Filipino food images to get my inspiration. I love having a modern clean simple color palette and layouts for the theme of the web application
 ### Colours
Looking at from my background mostly green was the color of herbs and spices used to cook the food, it is also soothing and clean looking. 

### Wireframes
[Here](/ui-ux-pdf/uiux.pdf) are the wireframe for the website. background are and styles are not yet finalized.



### FEATURES

* Add new recipe to the data by /recipes/add

* Get recipe by title

* Get all Recipes by course

* Get Recipes by cost

* update recipe by /recipes/:recipeID

* delete recipe

* Register account

* Login account

### Limitations & Bugs
1. tried to put form validation in addrecipe,login and signup before submitting form but failed to correct errors. 

### Features pending implementing
1. Could someday put add to favorite feature and display on profile tab
2. Include Jwt token feature in localStorage 

## Technologies Used
1. VueJs 
    - used to create  front end framework for the single page web app 

2. MongoDb Express 
    - used to store data for the API

3. [Bootstrap v5.1](https://getbootstrap.com/docs/5.1/getting-started/introduction/) 
    - Used to build and customize the web application by using style/templates and its components     

4. [pexels](https://www.pexels.com/) 
    - Used for background application of web page 

 5. Axios 
    - Used to extract data from mongoDB

 6. vue-router 
    - Used to create routes and pages for the web page   


 ## Testing
 
 | Test Case #  | Test Case Description  | Test steps | Expected Result       |
 | :------------|:---------------------- |:---------- |:--------------------- |
 |1 | To check if Signup for an account works | Fill-up form to signup | Redirected page to login page and checking new account on mongodb compass |
 |2 | To check if Login youre account works| input correct username and password correct and input false username and password| Redirected page to home page if username and password is correct and stayed on loginpage if invalid username and password |
 |3 | To check that filtering in search bar works | input title of recipe you want to search | cards only displays matching the criteria in filter.|
 |4 | to check if navlink-works |Clicking on Navlinks to redirect using vue router |Redirecting to page works when each Navlink is clicked. including log-out |
 |5 | to check if show detail works |1. Clicking on show button <br>2.Clicking X close button on recipe detail |1.User will be redericted to show Recipedetail<br>2.User will be redirected back to home page if close X button is clicked|
 |5 | Testing Adding new Recipe | 1. Fill up form in add recipe<br> 2. Leave some input blank | Redirected to Home page and a new recipe with uniqe Id will be shown on Mongodb compass|
 |6 | Testing if edit recipe works | 1. click on edit button <br> 2. you would see in the recipe form with included original data<br>3. edit the part were you want to edit | 1. User will be Redirected to Home page <br> 2. you would see in the homepage that under recipe detail that the recipe has been changed to whatever you inuput  | 
 |7 | Testing to Delete recipe | 1. Click on show button for the recipe to delete  <br> 2. under recipe details click delete button| 1. User is redirected to homepage and the selected recipe to delete will be deleted should disappear from both web page and mongodb. |

### CREDITS
1. https://panlasangpinoy.com

    - Recipe Source for the project

### GUIDANCE
 - shun and john benedict for being a great TAs

