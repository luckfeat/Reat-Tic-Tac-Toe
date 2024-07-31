import React, { useState } from 'react';
import Board from './components/Board';
import './App.css';

const App = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
};

export default App;

/*
 *
 * For the current move only, show “You are at move #…” instead of a button.
 * Rewrite Board to use two loops to make the squares instead of hardcoding them.
 * Add a toggle button that lets you sort the moves in either ascending or descending order.
 * When someone wins, highlight the three squares that caused the win (and when no one wins, display a message about the result being a draw).
 * Display the location for each move in the format (row, col) in the move history li
 *
 * */
