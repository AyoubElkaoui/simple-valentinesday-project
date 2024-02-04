import { useState } from "react";
import "./App.css";

const phrases = [
  "Nee",
  "Pookie op de groene knop drukken",
  "Prinsesje verkeerde",
  "Zeg wollah je wilt niet mijn valentijn zijn",
  "Baby stop nou is",
  "Hallo druk op die andere knop",
  "-_-",
  "Weer verkeerde knop",
  "Je wilt wel mijn valentijn zijn",
  "nu ben ik sad :(",
  "schat op de groene knop",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 10 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            className="gif"
            alt="beer die kust"
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGo4ODR5dzY2NHl4b2h0b21vdmFwa3FybnU0N3IwbTZ2Zml2MnJpdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/j0vs5H7Kcz3Pm9LRDa/giphy.gif"
          />
          <div className="text"> JAAAAAA!!!!! </div>
        </>
      ) : (
        <>
          <img
            className="gif"
            alt="beer die kust"
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExam1ncjM4ZDExbWR6ZGx3bjkxZWliaTN5OHpxbWg4d2xpdmkyYzBvZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gMZwfxiCMoDgWvym8Y/giphy.gif"
          />

          <div className="title"> Wil je mijn valentijn zijn? </div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Ja duhh
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
