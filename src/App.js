import React, { useState } from "react";
import Score from "./components/scores";
import "./App.css";

function App() {
  const [init, startGame] = useState({ start: false, holes: 0 });
  const [score, getScore] = useState(0);
  // const [hole, currentHole] = useState(1);
  const [firstNine, nineArray] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  // const [secondNine, secnineAray] = useState([]);

  const handleScore = (e, hole) => {
    firstNine[hole] = e;
    var totalScore = 0;
    for (var i = 0; i < firstNine.length; i++) {
      totalScore = totalScore + firstNine[i];
    }
    // console.log(totalScore);
    getScore(totalScore);
  };

  const resetGame = () => {
    startGame({ start: false, holes: 0 });
    getScore(0);
    nineArray([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bingo Bango Bongo</h1>
      </header>

      {/* Container for the rules */}
      <section>
        <div className="rules-container">
          <p>Bingo: First on the green.</p>
          <p>Bango: Closest to the hole.</p>
          <p>Bongo: First in the hole.</p>
          <p>To save your score after each hole, click the checkmark.</p>
        </div>
      </section>

      {/* Container for the score */}
      <section>
        <div className="score-container">
          <div className={!init ? "score-circle hidden" : "score-circle"}>
            <span>{score}</span>
          </div>
        </div>
        <button className={!init.start ? "hidden" : ""} onClick={resetGame}>
          New Game
        </button>
      </section>
      {/* Container for the user */}
      <section className="game-container">
        <div className="user-container">
          <div className="line"></div>
          <div
            className="name"
            contentEditable="true"
            suppressContentEditableWarning={true}
          >
            Enter Name
          </div>
        </div>
        <h3 style={{ color: "white" }} className={init.start ? "hidden" : ""}>
          How many holes?
        </h3>
        <button
          onClick={() => startGame({ start: true, holes: 9 })}
          className={init.start ? "hidden" : ""}
        >
          9
        </button>
        <button
          onClick={() => startGame({ start: true, holes: 18 })}
          className={init.start ? "hidden" : ""}
        >
          18
        </button>
        {[...Array(init.holes)].map((v, i) => (
          <Score key={i} holes={i} getScore={handleScore} />
        ))}
      </section>
    </div>
  );
}

export default App;
