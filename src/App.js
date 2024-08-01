import React, { useState } from 'react';
import Board from './components/Board';
import Info from './components/Info';
import './App.css';

const App = () => {
  function handlePlay(nextSquares, i) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    const row = Math.floor(i / 3) + 1;
    const column = (i % 3) + 1;

    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setLocation([row, column]);
  }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [location, setLocation] = useState(null);

  return (
    <>
      <button
        onClick={() => {
          setHistory([Array(9).fill(null)]);
          setCurrentMove(0);
          setLocation(null);
        }}
      >
        Reset
      </button>
      <Board
        history={history}
        currentMove={currentMove}
        handlePlay={handlePlay}
      />
      <Info
        history={history}
        currentMove={currentMove}
        location={location}
        jumpTo={jumpTo}
      />
    </>
  );
};

export default App;
