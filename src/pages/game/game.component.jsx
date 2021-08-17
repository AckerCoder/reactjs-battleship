import React, {useState, useEffect} from 'react';


import Board from "../../components/board/board.component"
import { useParams } from 'react-router';
import { generateEmptyBoard, setBoardUp, isShipDestroyed } from '../../utils/game-engine.utils';
import "./game.styles.scss"
import TurnsCounter from '../../components/turns-counter/turns-counter.component';



const Game = () => {
    const {numberOfTurns, playerName} = useParams();
    const [turnsLeft, setTurnsLeft] = useState(numberOfTurns)
    const [board, setBoard] = useState(null)

    const minusOneTurn = () => {
        const turns = turnsLeft - 1;
        setTurnsLeft(turns);
    }
    useEffect(() => {
        let newBoard = generateEmptyBoard();
        setBoardUp(newBoard);
        setBoard(newBoard);        
    }, [])

    return(
        <div className="game">
            <Board board={board} updateBoard = {setBoard} isShipDestroyed={isShipDestroyed} onMinusTurn={minusOneTurn}/>
            <TurnsCounter numberOfTurns={turnsLeft}/>
        </div>
    )
}

export default Game;