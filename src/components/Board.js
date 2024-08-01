import Square from './Square';

export default function Board({ history, currentMove, handlePlay }) {
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return {
          winner: squares[a],
          highlight: [a, b, c],
        };
      }
    }
    return {
      winner: null,
      highlight: [],
    };
  }
  function handleClick(i) {
    if (winner || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();

    nextSquares[i] = currentMove % 2 === 0 ? 'X' : 'O';
    handlePlay(nextSquares, i);
  }

  const rows = ['rowOne', 'rowTwo', 'rowThree'];
  const squares = history[currentMove];
  const { winner, highlight } = calculateWinner(squares);

  let status;

  if (winner) {
    status = 'Winner: ' + winner;
  } else if (!winner && history.length === 10) {
    status = "It's a draw";
  } else {
    status = 'Next player: ' + (currentMove % 2 === 0 ? 'X' : 'O');
  }

  return (
    <div className="game">
      <div className="game-board">
        <div className="status">{status}</div>
        {rows.map((row, rowIndex) => {
          return (
            <div key={rowIndex} id={row}>
              {squares.map((square, squareIndex) => {
                if (
                  squareIndex >= rowIndex * 3 &&
                  squareIndex <= rowIndex * 3 + 2
                ) {
                  return (
                    <Square
                      key={squareIndex}
                      value={squares[squareIndex]}
                      highlight={highlight.includes(squareIndex) ? true : false}
                      onClick={() => handleClick(squareIndex)}
                    />
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
