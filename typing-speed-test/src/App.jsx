import { useState } from "react";
import Navbar from "./components/Navbar";
import TypingTest from "./components/TypingTest";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <TypingTest />
    </div>
  );
}
