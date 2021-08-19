import React, {useState, useEffect} from 'react';

import Board from "../../components/board/board.component"
import { useParams } from 'react-router';
import { generateEmptyBoard, setBoardUp } from '../../utils/game-engine.utils';
import "./game.styles.scss"
import BoardData from '../../components/board-data/board-data.component';
import Cover from "../../components/cover/cover.component" 
import { useHistory } from "react-router-dom";
import { addScore } from '../../utils/firebase.utils';

const Game = () => {
    const {numberOfTurns, playerName} = useParams();
    const [turnsLeft, setTurnsLeft] = useState(numberOfTurns)
    const [board, setBoard] = useState(null)
    const [points, setPoints] = useState(1000)
    const history = useHistory();
    
    const minusTenPoints = () => {
        const currentPoints = points - 10;
        setPoints(currentPoints); 
    }

    const minusOneTurn = () => {
        const turns = turnsLeft - 1;
        setTurnsLeft(turns);
        checkIfUserWins();
    }

    const checkIfUserWins = async() => {
        let numberOfShipsFragments = 20;
        let counterOfBoomShips = 0;
        board.map(
            arrow => arrow.map(
                space => space.status === "shipDestroyed" || space.status === "boomShip"? ++counterOfBoomShips : null 
            )
        )
        if(counterOfBoomShips === numberOfShipsFragments){history.push("/score-table"); await addScore(playerName, points);}
        if(turnsLeft === 0){history.push("/you-lost");}
    }

    useEffect(() => {
        let newBoard = generateEmptyBoard();
        setBoardUp(newBoard);
        setBoard(newBoard);        
    }, [])

    return(
        <div className="game">
            <Board board={board} updateBoard = {setBoard} onMinusTurn={minusOneTurn} onMinusTenPoints={minusTenPoints}/>
            <div className="data">
                <Cover>React Battleship</Cover>
                <BoardData data={playerName} label={"PLAYER NAME"}/>
                <BoardData data={turnsLeft} label={"TURNS LEFT"}/>
                <BoardData data={points} label={"POINTS"}/>
            </div>
        </div>
    )
}

export default Game;