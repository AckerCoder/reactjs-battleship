import React from 'react';
import Cell from "../cell/cell.component";
import ColumnTags from "../column-tags/column-tags.component";
import { isShipDestroyed } from '../../utils/game-engine.utils';


import pinRed from "../../assets/pins/red.png";
import pinWhite from "../../assets/pins/white.png";
import pinGreen from "../../assets/pins/green.png";
import "./board.styles.scss"
import RowTags from '../row-tags/row-tags.component';

const Board = ({board, updateBoard, onMinusTurn, onMinusTenPoints}) => {
    const onClickCell = (x,y) => {
        let boardUpdated = board;
        if(boardUpdated[x][y].shipName === null && boardUpdated[x][y].status === "normal"){
            boardUpdated[x][y].status = "boomWater";
            updateBoard([...boardUpdated]);
            onMinusTenPoints();
            onMinusTurn();
            return;
        }
        if(boardUpdated[x][y].shipName !== null && boardUpdated[x][y].status === "normal"){
            let shipName = boardUpdated[x][y].shipName;
            boardUpdated[x][y].status = "boomShip"
            if(isShipDestroyed(shipName, boardUpdated)){
                for(let i = 0; i < 10; i++){
                    for(let j = 0; j < 10; j++){
                        if(boardUpdated[i][j].shipName === shipName){
                            boardUpdated[i][j].status = "shipDestroyed"
                        }
                    }
                }
                updateBoard([...boardUpdated]);
                onMinusTurn();
            }else{
                updateBoard([...boardUpdated]);
                onMinusTurn();
            }
            return;
        }
    }

    return(
        <div>
            <ColumnTags/>
            <div className="row-direction">
                <RowTags/>
                <div className="board">
                    {
                        board?board.map(
                            (arrow, i) => (
                                arrow.map( (cell, j) => {
                                    let finalKey = i.toString() + j.toString();
                                    let imgSrc = null;
                                    if(board[i][j].status === "boomShip"){imgSrc = pinRed;}
                                    if(board[i][j].status === "boomWater"){imgSrc = pinWhite;}
                                    if(board[i][j].status === "shipDestroyed"){imgSrc = pinGreen;}
                                    return <Cell imgSrc={imgSrc} key={finalKey} clicker={()=>onClickCell(i,j)}>{board[i][j]}</Cell>
                                }
                            ))
                        ):null
                    }
                </div>
            </div>
        </div>
    )
}

export default Board;