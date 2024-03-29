<h1 align="center">Word Scramble</h1>

[View the live project here.](https://ceciliasg.github.io/pp2_wordScramble/)

A GAKE FOR THOSE WANTING TO TEST THEIR WORD SKILLS.

When the page loads a word is already cued up for the players first guess. The player has two attempts for each word, after the second attempt the solution is revealed, and the new button changes colour to prompt them to get a new word.

They player provides their answer in the input field and clicks check answer to see if they got it right. If they want to move on to a new word they just click the NewWord button.

Each game consists of 20 words.

<h2 align="center"><img src="documentation/showcase.png"></h2>

## User Experience (UX)

- ### User stories

- #### First Time Visitor Goals

        1. As a First Time Visitor, I want to easily understand what the game is about and how to play.
        2. As a First Time Visitor, I like playing word games and testing my word skills.

- #### Returning Visitor Goals

        1. As a Returning Visitor, I like playing word games and testing my word skills.
        2. As a Returning Visitor, I want to check to see if there are new words to try my skills at. So new words should be added regurlarly.

- ### Design

- The design is simple and clean making it easy for the user to quickly understand how to play, where to input their answer and how to check if it is correct.

- #### Colour Scheme

  - The three main colours used are: light-blue, dark blue and orange.

- #### Typography

- The Sen font is the main, and only font used throughout the game, with Sans Serif as the fallback font in case for any reason the font isn't being imported correctly. Sen works well for this game. It's clean and easily readable.

- #### Imagery

  - The background image and custom logo has been added to give the site more of a game feeling.

- ### Wireframes

  - Home Page Wireframe - [View](documentation/Wireframe.png)

  - Pseudo code - [View](documentation/pseudo_code.png)

## Features

- Responsive on all device sizes.
- Interactive elements: buttons and  an input field for player input.
- Page: <h2 align="center"><img src="documentation/page.png"></h2>
- Buttons: <h2 align="center"><img src="documentation/checkanswerandnewword_buttons.png"></h2>
- NewWord button: <h2 align="center"><img src="documentation/newword_button.png"></h2>
- Play-again button: <h2 align="center"><img src="documentation/play_again_button.png"></h2>
- Mobile: <h2 align="center"><img src="documentation/mobile.png"></h2>
- Welcome alert: <h2 align="center"><img src="documentation/welcome_to_the_game.png"></h2>
- Incorrect alert: <h2 align="center"><img src="documentation/that_is_incorrect.png"></h2>
- Revealing the clue: <h2 align="center"><img src="documentation/revealing_the_clue.png"></h2>
- Button colour change to prompts player to get new word after two attempts: <h2 align="center"><img src="documentation/prompting_new__word.png"></h2>
- End of the game, revealing the button to play-again: <h2 align="center"><img src="documentation/game_end.png"></h2>

## Technologies Used

### Languages Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [Javascript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Sen' font into the index.html file which is used throughout the project.
2. [Git](https://git-scm.com/)
    - Git was used for version control by utilising the Gitpod terminal to commit to CodeAnywhere and Push to GitHub.
3. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
4. [Photoshop:](https://www.adobe.com/ie/products/photoshop.html)
    - Photoshop was used to resise the images for the website.
5. [InDesing:](https://www.adobe.com/se/products/indesign.html)
 - InDesing was used to create the logo.
6. [Cloudconvert:](https://cloudconvert.com)
    - Cloud convert was used to convert images to webp.

## Testing

I manually tested the site/game throughout the development of this project by testing the functions and using chrome developer tools to test for responsiveness, positioning etc. I also used the dev tools to help identify issues and problems in my Javascript - and used console.logs to find and resolve the issues.

Result of manual testing:
| Feature | Description | Testing | Result |
| ----------- | ----------- | ----------- | ----------- |
| Button  | check-answer| Button was clicked twice for an incorrect input and once for a correct input.  | The correct alerts are displayed and the clue is displayed (correct clue is displayed) after the first incorrect attempt, and the answer is revealed after the second incorrect attempt - when the newword button also changes colour to prompt the player to get a new word. This also happens when a correct answer is given. |
| Button | new-word |was clicked  | A new word generates when button is cklicked |
| Button | play-again | was clicked | The game ends when the maximum number of words played for a game has been reached. The game is reset and begins again when the play-again button is clicked. |
| Input-field | player-answer |A word was provided and the check answer button clicked.| The word is checked against the original word and an alert is returned telling the player if their input was correct or incorrect. It works as it should and checks against the correct word, and returns the correct alerts. |

The W3C Markup Validator, W3C CSS Validator and JS Hint Services were used to validate the page and the game functions.

- [W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fceciliasg.github.io%2Fpp2_wordScramble%2F)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fceciliasg.github.io%2Fpp2_wordScramble%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)
- [JS Hint Validator](https://jshint.com/) - [View](documentation/first_test_jshint.png) - [View](documentation/second_jshint_test.png)
- **Lighthouse**

First test: <h2 align="center"><img src="documentation/first_lighthouse_report_1.png"></h2>, <h2 align="center"><img src="documentation/first_lighthouse_report_2.png"></h2>
Colours was then tested on Coolors and changes were made to increase contrast.

Second test: 

Desktop:<h2 align="center"><img src="documentation/lighthouse_desktop.png"></h2> Mobile:<h2 align="center"><img src="documentation/lighthouse_mobile.png"></h2>

  
### Further Testing

- The Website was tested on Google Chrome, Firefox and Safari browsers.
- The website was viewed on a variety of devices such as Desktop, Laptop and iPhone10.
- A large amount of manual testing was done to ensure that all buttons and functions are working and linking correctly.
- [Coolors](https://coolors.co) was used to check the contrast of colours.

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

- The Love Maths walkthrough was used to guide me in building the word scramble game, as well as the course material.
- My mentor helped me figure out the problem with splice when generating random words from the array. The code I had written wasn't doing what I wanted. He also suggested setting the main colours in css so as to make the code easier to maintain.

### Code

- I used this walkthrough to get an understanding of how to build a word scramble game: [https://www.youtube.com/watch?v=2wJKJRa9ncI]
- I also used this, to get me started: [https://www.geeksforgeeks.org/word-scramble-game-using-javascript/]
- Generating a random word: [https://stackoverflow.com/questions/48271510/how-do-i-get-a-random-word-of-a-certain-length-from-an-array](https://stackoverflow.com)
- Scrambling a word: [<https://stackoverflow.com/questions/73417426/what-did-i-do-wrong-in-this-javascript-code>](https://stackoverflow.com)
- Fisher Yates shuffle was used to shuffle the letters in the words: [<https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle>]
- Setting colours in css: [https://stackoverflow.com/questions/9436123/javascript-changing-a-class-style/65471649#65471649](https://stackoverflow.com)
- Disabling and enabling buttons; [<https://stackoverflow.com/questions/13831601/disabling-and-enabling-a-html-input-button/13831737#13831737>] (<https://stackoverflow.com>) and here: [https://www.altcademy.com/blog/how-to-disable-a-button-in-javascript/](https://www.altcademy.com/)
- Changing button colour with Javascript: [https://stackoverflow.com/questions/50997993/how-to-change-html-button-color-with-javascript]
- Using a copy of an array in javascript/spread operator: [https://www.geeksforgeeks.org/copy-array-items-into-another-array-in-javascript/#approaches-1-using-the-spread-operator-](https://stackoverflow.com)
- Hiding and showing buttons with Javascript: [https://www.shecodes.io/athena/28677-how-to-hide-an-element-until-page-loads](www.shecodes.io)
- This war Card game helped me understand how to import new word array from a seperate js-file:
[<https://github.com/WebDevSimplified/War-Card-Game/blob/main/script.js>]
Importing multiple arrays: [https://stackoverflow.com/questions/48909652/how-to-import-multiple-things-in-javascript](https://stackoverflow.com)
- Returning an object: [<https://stackoverflow.com/questions/2917175/return-multiple-values-in-javascript/2917186#2917186>](https://stackoverflow.com)
- EventListeners: [https://www.w3schools.com/js/js_htmldom_eventlistener.asp](www.w3schools.com)
- Object literal shorthand: [<https://stackoverflow.com/questions/38819621/object-literal-property-value-shorthand>](https://stackoverflow.com)

### Content

- The background image came from: [https://www.freepik.com/free-photo/top-view-alphabet-letters-with-copy-space-education-day_21745455.htm#page=3&query=letters%20scramble&position=25&from_view=search&track=ais&uuid=515a01ec-32ab-4c23-9bd6-e4992ad9ee0c] and was than adapted using photoshop.

- The words and hints arrays were generated with the help of AI.

- The logo was created by my husband.

### Acknowledgements

- My Mentor for continuous helpful feedback.

- Tutor support at Code Institute for their support and help.
