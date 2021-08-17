import React, { Children } from 'react';

import "./cell.styles.scss"
const Cell = ({clicker,children, imgSrc}) => {
    return(
        <div className="cell" onClick={clicker}>
            {
                imgSrc?
                <img src={imgSrc} alt="explosion" className="animation"/>
                :null
            }   
        </div>
    )
}

export default Cell;