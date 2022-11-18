# Welcome to my Music Quiz project

 This project is my first one using JavaScript with HTML and CSS combined. The site have 6 questions with score count and visual feedback if answer is correct or wrong. The site also logs username and push it into an array that displays in the beginning and at the final page.

The sites goal is to be a fun and easy accesable quiz. And for me to learn more about JavaScript, HTML and CSS.

## The site on different screen sizes:
![displayes the sites on different screen sizes](assets/image/responsive.png)

## features 

### Navigation
- The navigation is located below the quiz form
- The Button with an Home takes the user back to home page via Javascript function
- The button saying next takes you to the next quesiton made by javascript

![picture displaying the navigation](assets/image/navigation.png)


### Title And Score 
- The score count is made through javaScript function. It adds one score everytime the user gets the right answer.
- The score is also displayed at the final page but there it is also set in an context of the users name

![picture displaying the title and score header](assets/image/headerAndScore.png)

### Login form and submit/start quiz button 
- The log in form is made by a input text type and a button type of submit
- The form is JavaScript interactive so that the usersname logs and is then pushed into and array with usernames
- The username gives the game an added seriousness so that you feel as if you played the game non anonymous

![picture displaying the login form and start button](assets/image/startPage.png)


## The Game 

### The quiz is built through javascript and its the javascript that changes the answers and the questions.
- The quiz is correcting the answers through an array that located inside the Javascript. 
- if the user clicks the correct answer button an alert will be display telling the user that they did correct, if the user is wrong they will also be notices by an alert

![picture displaying the inside of the game](assets/image/insideQuiz.png)

## Final Page 

### The final page is displayed when the user have answered all the questions
- The final page displayes the users score out of the possible amount of scores that is achievable 
- The final page also conatins a picture that makes the final page seem more as a final page

![picture displaying the final page at the end of the quiz](assets/image/finalPage.png)

## Colors

![the colors i used for this site](assets/image/colors.png)

## testing of site and bugs

### This site has been tested and verified via:
- CSS
    - The jigsaw CSS validator 
- HTML
    - The W3 HTML validator
- JavaScript validated through Jshint Validator
    - The metrics delivered from the Jshint:
        - There are 8 functions in this file.
        - Function with the largest signature take 1 arguments, while the median is 0.
        - Largest function has 11 statements in it, while the median is 5.
        - The most complex function has a cyclomatic complexity value of 3 while the median is 1.
- Lighthouse accessibility
    - Result from test displayed in picture below

![The lighthouse accessibility validatin](assets/image/lighthouse.png)

### Manually Tested
The site has been manually tested by me during the building of the site and also the final version

### bugs 
- Bug that makes the color changing of the buttons not disapear 
- score not working correctly
- sends user away from site when submiting username
- validation problem for signup

### solved bug / not solved bug
- Problem with color display when correct/wrong answer is fixed
- Fixed username problem by changing the the method and action of the form in html
- Bug solved with the displaying of score
- validation for signup fixed

## Deployment 
The site was deployd through Github pages 
- [Link to the site ](https://albinhall.github.io/MusicQuiz/)

### steps taken for deployment
- In GitHub repositorys I navigeted to the setting section
- In GitHub settings I navigated to the pages section
- Via Pages I uploaded the file via the Master Branch and then waited for the site to be deployed

## Credits

### Media credits
- The pictures displayed in the readme.md file was taken by me
- The picture on the final page is from unsplash
    - [link to the site](https://unsplash.com/@simon_noh?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
    - credit: Simon Noh
- [The fonts is from Google fonts](https://fonts.google.com/)
- [The icons is from font awesome](https://fontawesome.com/)

### Credits to code
- Inspiration on how to start of the code was taken from Ahmed
    - [Link to the repository](https://github.com/Ahmad528/quizApp/tree/main/quizwuiz)
- Got help from code institute tutor with a more straight forward es6 code in the returnOriginalColor function
- Also got general guidance from my asigned mentor Jubril Akolade

![The returnOriginalColor function](assets/image/tutorHelp.png)

## Future Project Updates Ideas
- Make the questions randomized 
- Make a list of genres that can be selected by the user
- Highscore board
- Timer for the questions