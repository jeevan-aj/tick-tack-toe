import { useState } from "react";

interface Props {
  value: string;
  handleFunc: () => void;
}

function Square({ value, handleFunc }: Props) {
  return (
    <button
      className="square py-4  btn btn-secondary"
      onClick={handleFunc}
    >
      {value}
    </button>
  );
}

const Board = () => {
  let [curentValue, setCurentValue] = useState(Array(9).fill(null));
  let  nextValue = curentValue.slice();

  function handleClick(i: number) {
    nextValue[i] = "x"
    setCurentValue(nextValue);
    
    
    
    
  }

  return (
    <>
      <h1 className="title">Tick Tack Toe</h1>
      <div className="square_row">
        <Square value={curentValue[0]} handleFunc={()=> handleClick(0)} />
        <Square value={curentValue[1]} handleFunc={()=> handleClick(1)} />
        <Square value={curentValue[2]} handleFunc={()=> handleClick(2)} />
      </div>
      <div className="square_row">
        <Square value={curentValue[3]} handleFunc={()=> handleClick(3)} />
        <Square value={curentValue[4]} handleFunc={()=> handleClick(4)} />
        <Square value={curentValue[5]} handleFunc={()=> handleClick(5)} />
      </div>
      <div className="square_row">
        <Square value={curentValue[6]} handleFunc={()=> handleClick(6)} />
        <Square value={curentValue[7]} handleFunc={()=> handleClick(7)} />
        <Square value={curentValue[8]} handleFunc={()=> handleClick(8)} />
      </div>
    </>
  );
};

export default Board;
