import React, { useState } from 'react';

const Info = ({ history, currentMove, jumpTo, setHistory }) => {
  const [isDescending, setIsDescending] = useState(false);

  const toggleOrder = () => {
    setIsDescending(!isDescending);
  };

  const sortedHistory = isDescending ? history.slice().reverse() : history;

  console.log(sortedHistory);

  return (
    <div className="game-info">
      <ul style={{ listStyle: 'none' }}>
        {sortedHistory.map((squares, index) => {
          const move = isDescending ? history.length - 1 - index : index;

          const description =
            move > 0 ? 'Go to move #' + move : 'Go to game start';

          return (
            <li key={move}>
              {move === currentMove ? (
                <p>You are at move #{move}</p>
              ) : (
                <div>
                  {move}.
                  <button onClick={() => jumpTo(move)}> {description}</button>
                </div>
              )}
            </li>
          );
        })}
      </ul>
      <button onClick={toggleOrder}>Reverse</button>
    </div>
  );
};

export default Info;
