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
The color scheme is vibrant and engaging, with a purple background and contrasting button colors to indicate correct and incorrect answers.

#### Typography
The site uses the 'Courier New' font for a consistent and readable experience.

#### Imagery
The logo image enhances the visual appeal and reinforces the quiz theme.

## Features

### Existing Features
- **Start Quiz Button**: Allows users to start the quiz and initiate the timer.
- **Next Question Button**: Allows users to move to the next question.
- **Questions and Answers**: Presents a series of questions with multiple-choice answers.
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
1. Clone the repository: `git clone <repository-url>`
2. Open `index.html` in your web browser.

### Live Deployment
This project can be hosted on GitHub Pages or any other static site hosting service.

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




IMG link
