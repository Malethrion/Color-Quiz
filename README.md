# Color Quiz

Welcome to the Color Quiz, an interactive and fun (and most exciting!) quiz that tests your knowledge of colors and their combinations. This quiz includes eight questions (with one bonus question) and challenges you to achieve the highest score within a limited time. 

## User Experience (UX)

#### First-Time Visitor Goals
- As a First-Time Visitor, I want to understand the main purpose of the site and learn how the quiz works.
- As a First-Time Visitor, I want to be able to start the quiz easily.
- As a First-Time Visitor, I want to know my score after completing the quiz.

#### Returning Visitor Goals
- As a Returning Visitor, I want to improve my previous score.
- As a Returning Visitor, I want to be able to quickly restart the quiz and try again.

### Design

#### Color Scheme
The color scheme is vibrant and engaging, with a purple background(I like purple.) and contrasting button colors to indicate correct and incorrect answers.

#### Typography
The site uses the 'Courier New' font for a consistent and readable experience.

#### Imagery
The logo image enhances the visual appeal and reinforces the quiz theme.

## Features

### Existing Features
- **Start Quiz Button**: Allows users to start the quiz and initiate the timer.
- **Next Question Button**: Allows users to move to the next question.
- **Questions and Answers**: Presents a series of questions with multiple-choice answers. The code is written so you can almost add an infite number of questions without worrying about further coding except adding questions in  the code.
- **Timer**: Displays the remaining time for the quiz.
- **Score Display**: Shows the current score during the quiz.
- **Feedback on Answers**: Changes the background color to green or red based on whether the answer is correct or incorrect.
- **Final Score Display**: Shows the final score at the end of the quiz and provides an option to restart the quiz.

### Features Left to Implement
- **Add register user feature**: Add ability to register as a user to recieve for news and updates.
- **High Score Tracking**: Save and display the highest score achieved by the user.
- **Difficulty Levels**: Add different difficulty levels to make the quiz more challenging.

## Technologies Used

### Languages
- HTML
- CSS
- JavaScript

## Testing

## Validator Testing
- HTML
 - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmalethrion.github.io%2FColor-Quiz%2F)
- CSS
 - No errors were returned when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmalethrion.github.io%2FColor-Quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)
- JS
 - No essential errors were returned when passing through the official (https://jshint.com/)
 However I got 25 errors related to " ES6 (use 'esversion: 6') " as you can see bellow:
 ![error](https://raw.githubusercontent.com/Malethrion/Color-Quiz/main/assets/images/jshinterrors.png)
### Functionality Testing)
### Functionality Testing
- Verified that the start button initializes the quiz and timer.
- Ensured that selecting an answer updates the score and provides feedback.
- Checked that the next button advances to the next question.
- Confirmed that the final score is displayed correctly at the end of the quiz.

### Responsiveness Testing
The website was tested on various devices to ensure responsiveness:
- **Desktop**: Windows, Mac
- **Tablets**: iOS, Android
- **Mobile Devices**: iPhone, Android

### Compatibility Testing
Tested on multiple browsers:
- Chrome
- Firefox
- Safari
- Edge

### Bugs Found and Fixed
- **Issue**: Timer did not stop at zero.
  - **Solution**: Added a condition to clear the interval when the timer reaches zero.
- **Issue**: Incorrect answer selection did not provide feedback.
  - **Solution**: Updated the `selectAnswer` function to correctly set the status class.

## Deployment

### Local Deployment
To deploy this project locally:
1. Clone the Repository:

Open your terminal (command prompt or Git Bash).

Navigate to the directory where you want to clone the repository.

Run the following command to clone the repository:

git clone https://github.com/Malethrion/Color-Quiz.git

2. Navigate to the Project Directory:

Change your directory to the project folder by running:

cd Color-Quiz

3. Open the Project in Your Code Editor:

You can open the project in your preferred code editor (e.g., Visual Studio Code) by running:

code .

4. Open index.html in Your Web Browser:

You can directly open the index.html file in your web browser by double-clicking on the file in your file explorer.
Alternatively, you can right-click the index.html file and select "Open with" followed by your preferred web browser.



## Live Deployment

### Github Preparation
It is possible to copy or clone the repository for direct deployment, make sure the SCSS compiles correctly first.
Requirements:
- A free GitHub account.
### Github Instructions
- Log in to your GitHub account. navigate to https://github.com/Malethrion/Color-Quiz.git.
- You can set up your own repository and copy or clone it, or you fork the repository.
- git add, git commit and git push to a GitHub repository, if necessary.
- GitHub pages will update from the master branch by default.
- Go to the Settings page of the repository.
- Scroll down to the Github Pages section.
- Select the Master Branch for source.
- Confirm the selection.
- It should be available in a couple of minutes.

## Credits

### Content
- Quiz questions created by Jin Nordén.

### Media
- Logo image from:

https://www.freepik.com/free-photos-vectors/color-splash/3#uuid=b5e19183-3980-46e1-bde8-51afb8f5e160

### Acknowledgements
- Inspiration and guidance from "Build a Quiz App with JavaScript" by Web Dev Simplified:

https://www.youtube.com/watch?v=riDzcEQbX6k
https://www.youtube.com/@WebDevSimplified

- Also got some inspiration from Love Maths in the "Love Maths - Essential Project".

### Further info about commits
- I am well aware that I have several number of too long commits with far too long messaging. I have been having a tight schedule with work and had less time than preferable on this project. This caused me to put alot of consentrated time and effort into the project, resulting in me making commits more seldom. Writing long messages not to miss anything committed while also having big changes at a time. As you can see in my later commits this has changed completely and I have adjusted to properly. My humble apologies!

