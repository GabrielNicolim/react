import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let Square = (props) => {
  return (
    <button
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

const ResetButton = (props) => {
  return (
    <button className="btn" onClick={props.onClick}>Reset</button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }

    this.resetBoard = this.resetBoard.bind(this);
  }

  handleClick(i) {
    const squares = this.state.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  resetBoard() {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
    });
  }
  
  renderSquare(i) {
    return <Square 
      value={this.state.squares[i]} 
      onClick={() => {
        this.handleClick(i)
      }}
    />;
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    const draw = isDraw(this.state.squares);
    let status;

    if (winner) {
      status = 'Winner: ' + winner;
    } else if (draw) {
      status = 'Draw';
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <>
        <div className="status">
          {status}
        </div>

        <div className="board">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>

        {(calculateWinner(this.state.squares) || isDraw(this.state.squares)) && <ResetButton onClick={this.resetBoard} />}
      </>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="container">
          <Board />
      </div>
    );
  }
}

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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function isDraw(squares) {
  let draw = true;
  squares.forEach(element => {
    if(element == null) {
      draw = false;
    } 
  })

  return draw;
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);