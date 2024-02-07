<h1 align="center">Word Scramble</h1>

[View the live project here.](https://ceciliasg.github.io/pp2_wordScramble/)

A game for those wanting to test their word skills.

When the page loads a word is already cued up for the players first guess. The player has two attempts for each word, after the second attempt the solution is revealed, and the new button changes colour to prompt them to get a new word.

They player provides their answer in the input field and clicks check answer to see if they got it right. If they want to move on to a new word they just click the NewWord button.

Each game consists of 20 words.

<h2 align="center"><img src"></h2>

## User Experience (UX)

- ### User stories

- #### First Time Visitor Goals

        1. As a First Time Visitor, I want to easily understand what the game is about and how to play.
        2. As a First Time Visitor, I like playing word games and testing my word skills.

- #### Returning Visitor Goals

        1. As a Returning Visitor, I like playing word games and testing my word skills.
        2. As a Returning Visitor, 
        3. As a Returning Visitor, 

- #### Frequent User Goals

        1. As a Frequent User, I want to check to see if there are new words to try my skills at.
        2. As a Frequent User, 
        3. As a Frequent User, 

- ### Design

- The design is simple and clean making it easy for the user to quickly understand how to play, where to input their answer and how to check it is correct.

- #### Colour Scheme

  - The three main colours used are: light-blue, dark blue and orange.

- #### Typography

- The Sen font is the main and only font used throughout the game, with Sans Serif as the fallback font in case for any reason the font isn't being imported correctly. Sen works well for this game. It's clean and easily readable.

- #### Imagery

  - The background image and custom logo has been added to give the site more of a game feeling.

- ### Wireframes

  - Home Page Wireframe - [View](documentation/Wireframe.png)

  - Pseudo code - [View](documentation/Pseudo code.png)

## Features

- Responsive on all device sizes.

- Interactive elements: buttons and  an input field for player input.

## Technologies Used

### Languages Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [Javascript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Sen' font into the index.html file which is used throughout the project.
2. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to CodeAnywhere and Push to GitHub.
3. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
4. [Photoshop:](https://www.adobe.com/ie/products/photoshop.html)
    - Photoshop was used to create the logo, resizing images and editing photos for the website.
5. [Cloudconvert:](https://cloudconvert.com)
    - Cloud convert was used to convert images to webp.

## Testing

I manually tested the site/game throughout the development of this project by testing the functions and using chrome developer tools to test for responsiveness, positioning etc. I also used the dev tools to help identify issues and problems in my Javascript - and mainly used console.logs to find and resolve the issues

The W3C Markup Validator, W3C CSS Validator and JS Hint Services were used to validate the page and the game functions.

- [W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fceciliasg.github.io%2Fpp2_wordScramble%2F)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fceciliasg.github.io%2Fpp2_wordScramble%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)
- [JS Hint Validator](https://jshint.com/)
- [Lighthouse] First test: (documentation/First Lighthouse_report#2.png), (documentation/First Lighthouse_report#1.png)
  
### Testing User Stories from User Experience (UX) Section

- #### First Time Visitor Goals

    1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about the organisation.

        1. Upon entering the site, users are automatically greeted with a clean and easily readable navigation bar to go to the page of their choice. Underneath there is a Hero Image with Text and a "Learn More" Call to action button.
        2. The main points are made immediately with the hero image
        3. The user has two options, click the call to action buttons or scroll down, both of which will lead to the same place, to learn more about the organisation.

    2. As a First Time Visitor, I want to be able to easily be able to navigate throughout the site to find content.

        1. The site has been designed to be fluid and never to entrap the user. At the top of each page there is a clean navigation bar, each link describes what the page they will end up at clearly.
        2. At the bottom of the first 3 pages there is a redirection call to action to ensure the user always has somewhere to go and doesn't feel trapped as they get to the bottom of the page.
        3. On the Contact Us Page, after a form response is submitted, the page refreshes and the user is brought to the top of the page where the navigation bar is.

    3. As a First Time Visitor, I want to look for testimonials to understand what their users think of them and see if they are trusted. I also want to locate their social media links to see their following on social media to determine how trusted and known they are.
        1. Once the new visitor has read the About Us and What We Do text, they will notice the Why We are Loved So Much section.
        2. The user can also scroll to the bottom of any page on the site to locate social media links in the footer.
        3. At the bottom of the Contact Us page, the user is told underneath the form, that alternatively they can contact the organisation on social media which highlights the links to them.

- #### Returning Visitor Goals

    1. As a Returning Visitor, I want to find the new programming challenges or hackathons.

        1. These are clearly shown in the banner message.
        2. They will be directed to a page with another hero image and call to action.

    2. As a Returning Visitor, I want to find the best way to get in contact with the organisation with any questions I may have.

        1. The navigation bar clearly highlights the "Contact Us" Page.
        2. Here they can fill out the form on the page or are told that alternatively they can message the organisation on social media.
        3. The footer contains links to the organisations Facebook, Twitter and Instagram page as well as the organization's email.
        4. Whichever link they click, it will be open up in a new tab to ensure the user can easily get back to the website.
        5. The email button is set up to automatically open up your email app and autofill there email address in the "To" section.

    3. As a Returning Visitor, I want to find the Facebook Group link so that I can join and interact with others in the community.
        1. The Facebook Page can be found at the footer of every page and will open a new tab for the user and more information can be found on the Facebook page.
        2. Alternatively, the user can scroll to the bottom of the Home page to find the Facebook Group redirect card and can easily join by clicking the "Join Now!" button which like any external link, will open in a new tab to ensure they can get back to the website easily.
        3. If the user is on the "Our Favourites" page they will also be greeted with a call to action button to invite the user to the Facebook group. The user is incentivized as they are told there is a weekly favourite product posted in the group.

- #### Frequent User Goals

    1. As a Frequent User, I want to check to see if there are any newly added challenges or hackathons.

        1. The user would already be comfortable with the website layout and can easily click the banner message.

    2. As a Frequent User, I want to check to see if there are any new blog posts.

        1. The user would already be comfortable with the website layout and can easily click the blog link

    3. As a Frequent User, I want to sign up to the Newsletter so that I am emailed any major updates and/or changes to the website or organisation.
        1. At the bottom of every page their is a footer which content is consistent throughout all pages.
        2. To the right hand side of the footer the user can see "Subscribe to our Newsletter" and are prompted to Enter their email address.
        3. There is a "Submit" button to the right hand side of the input field which is located close to the field and can easily be distinguished.

### Further Testing

- The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
- The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX.
- A large amount of testing was done to ensure that all pages were linking correctly.
- Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.
- <https://coolors.co/>

### Known Bugs

- On some mobile devices the Hero Image pushes the size of screen out more than any of the other content on the page.
  - A white gap can be seen to the right of the footer and navigation bar as a result.
- On Microsoft Edge and Internet Explorer Browsers, all links in Navbar are pushed upwards when hovering over them.

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

- This post on stackoverflow, as well as going back over the course material helped me get started with the leaderboard: [<https://stackoverflow.com/questions/47918195/creating-a-basic-html-javascript-leaderboard>]
- The Love Maths walkthrough was used to guide me in building the word scramble game.
- My mentor helped me figure out the problem with splice when generating random words from the array. The code I had written wasn't doing what I wanted. He also suggested setting the main colours in css so as to make the code easier to maintain.

### Code

- I used this walkthrough to get an understanding of how to build the game: [https://www.youtube.com/watch?v=2wJKJRa9ncI] But I've created a simpler game.
- I also used this, to get me started: [https://www.geeksforgeeks.org/word-scramble-game-using-javascript/]
- Generating a random word: [https://stackoverflow.com/questions/48271510/how-do-i-get-a-random-word-of-a-certain-length-from-an-array]
- Scrambling a word: [<https://stackoverflow.com/questions/73417426/what-did-i-do-wrong-in-this-javascript-code>]
- Fisher Yates shuffle was used to shuffle the letters in the words: [<https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle>]
- Setting colours in css: [https://stackoverflow.com/questions/9436123/javascript-changing-a-class-style/65471649#65471649](https://stackoverflow.com)
- Disabling and enabling a buttons; [<https://stackoverflow.com/questions/13831601/disabling-and-enabling-a-html-input-button/13831737#13831737>] (<https://stackoverflow.com>)
- Changing button colour with Javascript: [https://stackoverflow.com/questions/50997993/how-to-change-html-button-color-with-javascript]
- Using a copy of an array in javascript/spread operator: [https://www.geeksforgeeks.org/copy-array-items-into-another-array-in-javascript/#approaches-1-using-the-spread-operator-]
- Hiding buttons with Javascript: [https://stackoverflow.com/questions/18068773/is-it-possible-to-show-hide-a-button-on-a-webpage-when-a-users-javascript-is-tu]
- This war Card game helped me understand how to import new word array from a seperate js-file:
[<https://github.com/WebDevSimplified/War-Card-Game/blob/main/script.js>]

### Content

- The background image came from: [https://www.freepik.com/free-photo/top-view-alphabet-letters-with-copy-space-education-day_21745455.htm#page=3&query=letters%20scramble&position=25&from_view=search&track=ais&uuid=515a01ec-32ab-4c23-9bd6-e4992ad9ee0c] and was than adapted using photoshop.

- The words and hints arrays were generated with the help of AI.

- The logo was created by my husband.

### Media

-

### Acknowledgements

- My Mentor for continuous helpful feedback.

- Tutor support at Code Institute for their support.
