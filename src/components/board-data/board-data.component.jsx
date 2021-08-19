import React from 'react';
import "./board-data.styles.scss"
const BoardData = ({data, label}) => {
    return(
        <div className="turns-counter">
            <h2>{label}</h2>
            {
                typeof data === "number"?<span className="count">{data < 0? <>&infin;</>: data}</span>:<span>{data}</span>
            }
        </div>
    )
}

export default BoardData;