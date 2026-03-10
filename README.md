# 🚀 KeySprint – Interactive Typing Speed Test

KeySprint is a modern, interactive typing speed test web application built using React and Vite. The application helps users measure their typing speed, accuracy, and errors in real time while providing a clean, responsive, and visually engaging user interface suitable for academic evaluation and portfolio presentation.

---

## 📌 Project Summary

KeySprint allows users to practice and evaluate their typing skills through dynamically generated typing content. The app focuses on UI clarity, real-time feedback, and usability. It simlates real typing platforms by generating random paragraphs, tracking user input, and displaying performance metrics visually.

---

## 📝 Project Description

KeySprint is a React-based typing speed test application that dynamically generates random typing paragraphs to ensure a unique experience on every test. It calculates Words Per Minute (WPM), accuracy percentage, and error count in real time. The application includes visual indicators such as progress bars, performance badges, and a live timer, along with light/dark mode support and a responsive, modern UI.

---

## ✨ Features

- ⏱️ Live countdown timer  
- 📝 Dynamically generated random paragraphs (infinite combinations)  
- 📊 Real-time Words Per Minute (WPM) calculation  
- 🎯 Accuracy percentage tracking  
- ❌ Error count display  
- 🏅 Skill rating badge (Beginner, Intermediate, Advanced, Pro)  
- 📈 Visual accuracy progress bar  
- 🌙 Light / Dark mode toggle  
- 🎨 Clean, modern, and responsive UI  
- 🔁 Restart test functionality  
- ⌨️ Keyboard-friendly user experience  

---

## 🛠️ Technologies Used

- React (Functional Components)
- React Hooks (useState, useEffect)
- Vite (Development & Build Tool)
- HTML5
- CSS3 (No external UI libraries)

---

## 📂 Project Structure

typing-speed-test/
├── public/
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── TypingTest.jsx
│   │   └── ResultsModal.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md

---

## ⚙️ How the Application Works

1. A random paragraph is generated dynamically based on selected difficulty.
2. The timer starts automatically when the user begins typing.
3. Each typed character is compared with the displayed text.
4. Correct characters are highlighted in green and incorrect ones in red.
5. WPM, accuracy, and errors are calculated in real time.
6. When the timer reaches zero, the test stops and results are shown in a modal.

---

## 🧮 WPM Calculation Logic

WPM = (Correct Characters / 5) / Time in Minutes

This formula is commonly used by professional typing platforms.

---

## ▶️ How to Run the Project Locally

Step 1: Install Dependencies  
npm install

Step 2: Start the Development Server  
npm run dev

Step 3: Open in Browser  
http://localhost:5173

---

## 🎓 Academic Relevance

This project demonstrates:
- Strong understanding of React fundamentals
- Effective use of React hooks
- Real-time state management
- UI/UX design principles
- Clean component-based architecture

It is suitable for:
- College mini projects
- UI-based evaluations
- React learning and practice
- Frontend portfolio presentation

---

## 🔮 Future Enhancements

- Typing history and session tracking
- Live WPM performance graph
- Code typing mode for developers
- Custom text input mode
- User profiles and leaderboard system

---

## 👨‍💻 Author

Project Name: KeySprint  
Type: Frontend Web Application  
Built With: React + Vite

---

## ✅ Conclusion

KeySprint is a complete and polished typing speed test application that emphasizes usability, clean design, and real-time feedback. It effectively combines modern frontend development practices with an engaging user experience, making it ideal for academic submission and practical learning.
