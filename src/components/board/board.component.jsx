import React from 'react';
import Cell from "../cell/cell.component";
import "./board.styles.scss"

import pinRed from "../../assets/gifts/red.png";
import pinWhite from "../../assets/gifts/white.png";
import pinGreen from "../../assets/gifts/green.png";

const Board = ({board, updateBoard, isShipDestroyed, onMinusTurn}) => {
    const onClick = (x,y) => {
        let boardUpdated = board;
        switch(boardUpdated[x][y].shipName){
            case null:
                boardUpdated[x][y].status = "boomWater";
                updateBoard([...boardUpdated]);
                onMinusTurn();
                break;
            case "boomWater":
                break;
            case "boomShip":
                break;    
            default:
                onMinusTurn();
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
                    break;
                }else{
                    updateBoard([...boardUpdated]);
                    break;
                }
        }
    }

    return(
        <div>
            <div className="column-tags"><div className="column-tag">1</div> <div className="column-tag">2</div> <div className="column-tag">3</div> <div className="column-tag">4</div> <div className="column-tag">5</div> <div className="column-tag">6</div> <div className="column-tag">7</div> <div className="column-tag">8</div> <div className="column-tag">9</div> <div className="column-tag">10</div></div>
            <div className="row-direction">
                <div className="row-tags"><div className="row-tag">A</div> <div className="row-tag">B</div> <div className="row-tag">C</div> <div className="row-tag">D</div> <div className="row-tag">E</div> <div className="row-tag">F</div> <div className="row-tag">G</div> <div className="row-tag">H</div> <div className="row-tag">I</div> <div className="row-tag">J</div></div>
                <div className="board">
                    {
                        board?board.map(
                            (arrow, i) => (
                                arrow.map( (cell, j) => {
                                    let finalKey = i.toString() + j.toString();
                                    let imgSrc = null;
                                    if(board[i][j].status === "boomShip"){
                                        imgSrc = pinRed;
                                    }
                                    if(board[i][j].status === "boomWater"){
                                        imgSrc = pinWhite;
                                    }
                                    if(board[i][j].status === "shipDestroyed"){
                                        imgSrc = pinGreen;
                                    }
                                    return <Cell 
                                                imgSrc={imgSrc}
                                                key={finalKey} 
                                                clicker={()=>onClick(i,j)}>{board[i][j]}
                                    </Cell>
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