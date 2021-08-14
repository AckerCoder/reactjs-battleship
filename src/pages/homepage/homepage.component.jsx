import React from 'react';
import { Link} from "react-router-dom";

import Cover from "../../components/cover/cover.component"
import CustomButton from "../../components/custom-button/custom-button.component";

import "./homepage.styles.scss";

const HomePage = () => {
    return(
        <div className="homepage">
            <Cover>React Battleship</Cover>
            <Link to="/settings-page">
                <CustomButton>PLAY</CustomButton>
            </Link>
            <CustomButton>ALL STARS</CustomButton>
        </div>
    )
}

export default HomePage;