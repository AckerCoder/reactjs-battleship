import React from 'react';
import "./turns-counter.styles.scss"

const TurnsCounter = ({numberOfTurns}) => {
    return(
        <div className="turns-counter">
            <h2>TURNS LEFT</h2>
            <span>{numberOfTurns}</span>
        </div>
    )
}

export default TurnsCounter;