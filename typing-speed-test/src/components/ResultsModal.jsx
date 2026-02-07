export default function ResultsModal({ stats }) {
  const level =
    stats.wpm < 30 ? "Beginner" :
    stats.wpm < 50 ? "Intermediate" :
    stats.wpm < 70 ? "Advanced" : "Pro";

  return (
    <div className="modal">
      <div className="modal-box">
        <h2>Test Completed 🎉</h2>

        <p>WPM: <strong>{stats.wpm}</strong></p>
        <p>Accuracy: <strong>{stats.accuracy}%</strong></p>
        <p>Errors: <strong>{stats.errors}</strong></p>

        <span className="badge">{level}</span>
      </div>
    </div>
  );
}
