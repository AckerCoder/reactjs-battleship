import React from 'react';
import "./you-lost.styles.scss"
import CustomButton from '../../components/custom-button/custom-button.component';
import { Link } from 'react-router-dom';

const YouLost = () => {
    return(
        <div className="score-table">
            <h1 className="title">You Lost :(</h1>
            <Link to="/">
                <CustomButton main>Main Menu</CustomButton>
            </Link>
        </div>
    )
}

export default YouLost;