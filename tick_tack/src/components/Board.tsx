import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [isNext, setIsNext] = useState(true);
  const [curentValue, setCurentValue] = useState(Array(9).fill(null));

  const winner = calculateWinner(curentValue);
  let state;

  if (winner) {
    state = "winner : " + winner;
  }else {
    state = "Next player : " + (isNext ? "x" : "o");
  }

  function handleClick(i: number) {
    const nextValue = curentValue.slice();
    if (curentValue[i] || calculateWinner(curentValue)) {
      return;
    } else {
      if (isNext) {
        nextValue[i] = "x";
      }
       else {
        nextValue[i] = "o";
      }
    }

    setCurentValue(nextValue);
    setIsNext(!isNext);

  }

  return (
    <>
      <h1 className="title">Tick Tack Toe</h1>
      <h3 className={winner ? "text-danger" : "text-success"}>{state}</h3>
      <div className="square_row">
        <Square value={curentValue[0]} handleFunc={() => handleClick(0)} />

        <Square value={curentValue[1]} handleFunc={() => handleClick(1)} />
        <Square value={curentValue[2]} handleFunc={() => handleClick(2)} />
      </div>
      <div className="square_row">
        <Square value={curentValue[3]} handleFunc={() => handleClick(3)} />
        <Square value={curentValue[4]} handleFunc={() => handleClick(4)} />
        <Square value={curentValue[5]} handleFunc={() => handleClick(5)} />
      </div>
      <div className="square_row">
        <Square value={curentValue[6]} handleFunc={() => handleClick(6)} />
        <Square value={curentValue[7]} handleFunc={() => handleClick(7)} />
        <Square value={curentValue[8]} handleFunc={() => handleClick(8)} />
      </div>
    </>
  );
};

function calculateWinner(curentValue:unknown[]) {
  const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [0, 1, 2],
    [2, 4, 6],
  ];

  for (const i of combinations) {
    const [a, b, c] = i;
    if (
      curentValue[a] &&
      curentValue[a] === curentValue[b] &&
      curentValue[a] === curentValue[c]
    ) {
      return curentValue[a];
    }
  }

  return null;
}


export default Board;
