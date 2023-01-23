import { useState } from 'react'
import Square from './Square'
import { winningPatterns } from '../data/WinningPatterns'
import { Button } from 'react-bootstrap'


const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);
    const winner = CalcWinner(squares);
    let status;
    
    /* ===== Render squares on the board ===== */
    const renderSquare = (ind: number) => {
        return (
            <Square value={squares[ind]} onClick={() => handleAdd(ind)} />
        )
    }

    /* ===== Get Winner ===== */
    function CalcWinner(squares: number[]) {
        for (let i = 0; i < winningPatterns.length; i++) {
            const [a, b, c] = winningPatterns[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }
        return null;
    }

    if (winner) {
        status = `We have a Winner: ${winner}`
    } else {
        status = (isX ? 'X' : 'O') + "'s " + 'Turn'
    }

    /* ===== Place X or O ===== */
    const handleAdd = (ind: number) => {
        if (CalcWinner(squares) || squares[ind]) {
            return;
        }
        squares[ind] = isX ? 'X' : 'O';
        setSquares(squares);
        setIsX(!isX);
    }

    /* ===== Game restart ===== */
    const handleRestart = () => {
        setSquares(Array(9).fill(null));
        setIsX(true);
    }

    return (
        <div className='
        d-flex
        flex-column
        align-items-center
        justify-content-center
        w-100
        h-75
        '>
            <h3>Have fun!</h3>
            <div>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <h3>{status}</h3>
            <Button 
            variant='warning'
            onClick={handleRestart}
            >Restart Game</Button>
        </div>
    )
}

export default Board
