import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import "./turns-controller.styles.scss"

const TurnsController = ({gameMode, numberOfTurns, setNumberOfTurns}) => {
    return(
        <div className="turns-controller">
            {
                gameMode === "CUSTOM"?
                    <CustomButton id="b-1" setting onClick={()=>{let newNumberOfTurns = numberOfTurns + 1; setNumberOfTurns(newNumberOfTurns)}}>
                        <FontAwesomeIcon icon ={faAngleUp}/>
                    </CustomButton>
                :null
            }
            <span className="counter">{numberOfTurns > 0?numberOfTurns: <>&infin;</>}</span>
            {
                gameMode === "CUSTOM"?
                    <CustomButton id="b-2" setting onClick={()=>{let newNumberOfTurns = numberOfTurns - 1; setNumberOfTurns(newNumberOfTurns)}}>
                        <FontAwesomeIcon icon ={faAngleDown}/>
                    </CustomButton>
                :null
            }
        </div>
    )
}

export default TurnsController;