import React from 'react';
import "./cell-position.styles.scss"

const CellPostion = ({playerName, score, position}) => {
    return(
        <div className="cell-position">
            <span className="data">{position}</span>
            <span className="data">{playerName}</span>
            <span className="data">{score}</span>
        </div>
    )
}

export default CellPostion;