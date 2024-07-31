import React, { useState } from 'react';
import Board from './components/Board';
import Info from './components/Info';
import './App.css';

const App = () => {
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  return (
    <>
      <Board
        history={history}
        currentMove={currentMove}
        handlePlay={handlePlay}
      />
      <Info
        history={history}
        currentMove={currentMove}
        jumpTo={jumpTo}
        setHistory={setHistory}
      />
    </>
  );
};

export default App;

/*
 *
 * When someone wins, highlight the three squares that caused the win (and when no one wins, display a message about the result being a draw).
 * Display the location for each move in the format (row, col) in the move history li
 *
 * */
