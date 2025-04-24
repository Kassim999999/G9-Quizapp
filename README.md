G9 Quiz App 

This project is deployed and functioning in the URL: https://g9-quizapp.vercel.app/

A fast, fun, and dynamic quiz application built with React and powered by Open Trivia Database API.
Test your knowledge track your score, and retry as much as you want!

+ Features
  
* Fetches real-time quiz questions from Open Trivia DB.

* Immediate feedback by tracking correct answers.

 *Navigate freely between questions (Next/Previous).

* Option to retry the entire quiz.

* Highlights the selected answers.

* Clean and simple UI for an intuitive experience.

 Tech Stack
 
React 18+
Fetch API
HTML/CSS 

 Installation
Clone the Repository:

bash
Copy
Edit
git clone: https://github.com/Kassim999999/G9-Quizapp
Navigate to the Project Directory:

bash
Copy
Edit
cd g9-quiz-app
Install Dependencies:

bash
Copy
Edit
npm install
Run the Application:

bash
Copy
Edit
npm start/ npm run dev
Open http://localhost:3000 or http://localhost:5173/ to view it in your browser!

 How to Use
Start Quiz:
As soon as the app loads, it automatically fetches 5 new questions from Open Trivia DB.

Answer Questions:

Click on one of the answer options to select your answer.

You’ll automatically move to the next question.

The app tracks your score in the background.

Navigate:

Use the "Previous" and "Next" buttons to move between questions.

Selected answers are highlighted.

View Score:

After answering all questions, your final score is displayed.

Click "Retry" to start over!

+Project Structure
/src
  ├── components/
  │    ├── Quiz.jsx         // Handles main quiz logic
  │    └── AnswerSection.jsx // Displays and manages answer choices
  ├── App.jsx                // Root component
  ├── index.js               // Entry point


Acknowledgements
Thanks to Open Trivia Database for providing free quiz content!
and to the developers NYIKA ROONEY,	Koech Oliver,	Munene Christopher and Mbogo Samuel.
 
