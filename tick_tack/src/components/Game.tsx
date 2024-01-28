import Board from "./Board";

export default function Game() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="list-group">
            <h1>History</h1>
          <ol className="list-group-item"></ol>
        </div>
      </div>
    );
  }