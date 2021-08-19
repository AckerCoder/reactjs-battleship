import React from 'react';
import CustomButton from '../../components/custom-button/custom-button.component';
import { Link, useHistory } from 'react-router-dom';

import "./you-lost.styles.scss"

const YouLost = () => {
    const history = useHistory();
    return(
        <div className="score-table">
            <h1 className="title">You Lost :(</h1>
            <Link to="/">
                <CustomButton main>MAIN MENU</CustomButton>
            </Link>
            <CustomButton main onClick={history.goBack}>PLAY AGAIN</CustomButton>        
        </div>
    )
}

export default YouLost;