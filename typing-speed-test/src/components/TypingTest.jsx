import { useEffect, useState } from "react";
import ResultsModal from "./ResultsModal";

/* WORD BANKS */
const WORDS = {
  easy: [
    "time","fast","code","learn","type","skill","focus","work","speed","practice"
  ],
  medium: [
    "developer","productivity","keyboard","accuracy","application",
    "consistent","improve","efficient","technology","performance"
  ],
  hard: [
    "optimization","discipline","cognitive","complexity","implementation",
    "architecture","asynchronous","dedication","efficiency","scalability"
  ]
};

const PUNCTUATION = [".", ".", ".", "!", "?"];

/* PARAGRAPH GENERATOR */
function generateParagraph(difficulty, wordCount) {
  const bank = WORDS[difficulty];
  let words = [];

  for (let i = 0; i < wordCount; i++) {
    let word = bank[Math.floor(Math.random() * bank.length)];

    if (i === 0 || words[i - 1]?.endsWith(".")) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    }

    if (Math.random() < 0.15) {
      word += PUNCTUATION[Math.floor(Math.random() * PUNCTUATION.length)];
    }

    words.push(word);
  }

  if (!words[words.length - 1].match(/[.!?]$/)) {
    words[words.length - 1] += ".";
  }

  return words.join(" ");
}

export default function TypingTest() {
  const [difficulty, setDifficulty] = useState("medium");
  const [duration, setDuration] = useState(60);
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(duration);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    resetTest();
    // eslint-disable-next-line
  }, [difficulty, duration]);

  useEffect(() => {
    if (!running || timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timer);
          setFinished(true);
          setRunning(false);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [running, timeLeft]);

  const resetTest = () => {
    setText(generateParagraph(difficulty, duration === 120 ? 70 : 45));
    setInput("");
    setTimeLeft(duration);
    setRunning(false);
    setFinished(false);
  };

  const handleChange = (e) => {
    if (!running) setRunning(true);
    if (timeLeft === 0) return;
    setInput(e.target.value);
  };

  const getStats = () => {
    const minutes = (duration - timeLeft) / 60 || 1 / 60;
    let correct = 0;

    text.split("").forEach((char, i) => {
      if (input[i] === char) correct++;
    });

    const accuracy = input.length
      ? Math.round((correct / input.length) * 100)
      : 0;

    return {
      wpm: Math.round((correct / 5) / minutes),
      accuracy,
      errors: input.length - correct
    };
  };

  const stats = getStats();

  return (
    <main className="page">
      <section className="card">

        {/* BIG LIVE TIMER */}
        <div className="live-timer">
          ⏱ Time Left: <strong>{timeLeft}s</strong>
        </div>

        {/* CONTROLS */}
        <div className="controls">
          <select value={duration} onChange={(e) => setDuration(+e.target.value)}>
            <option value="30">30s</option>
            <option value="60">60s</option>
            <option value="120">120s</option>
          </select>

          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {/* PROGRESS BAR */}
        <div className="progress">
          <div style={{ width: `${(timeLeft / duration) * 100}%` }} />
        </div>

        {/* TEXT */}
        <div className="text-box">
          {text.split("").map((char, i) => {
            let cls = "";
            if (i === input.length) cls = "active";
            else if (i < input.length)
              cls = input[i] === char ? "correct" : "incorrect";

            return <span key={i} className={cls}>{char}</span>;
          })}
        </div>

        {/* INPUT */}
        <textarea
          placeholder="Start typing here..."
          value={input}
          onChange={handleChange}
          disabled={timeLeft === 0}
        />

        {/* STATS */}
        <div className="stats">
          <div>
            <strong>WPM</strong>
            <span>{stats.wpm}</span>
          </div>
          <div>
            <strong>Accuracy</strong>
            <span>{stats.accuracy}%</span>
          </div>
          <div>
            <strong>Errors</strong>
            <span>{stats.errors}</span>
          </div>
        </div>

        {/* ACCURACY BAR */}
        <div className="accuracy-bar">
          <div style={{ width: `${stats.accuracy}%` }} />
        </div>

        <button className="restart" onClick={resetTest}>
          Restart Test
        </button>

        {/* KEYBOARD HINT */}
        <div className="hint">
          Press <b>Enter</b> to restart • <b>Esc</b> to reset
        </div>

      </section>

      {finished && <ResultsModal stats={stats} />}
    </main>
  );
}
