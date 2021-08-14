import React, {useState} from 'react';

import Cover from "../../components/cover/cover.component"

import "./settings-page.styles.scss"


const SettingsPage = () => {
    const [gameMode, setGameMode] = useState("SIMPLE");
    const [playerName, setPlayerName] = useState(null);
    const [numberOfTurns, setNumberOfTurns] = useState(null);

    const changeGameMode = () => {
        if(gameMode === "SIMPLE"){
            setGameMode("CUSTOM");
        }else{
            setGameMode("SIMPLE");
        }
    }

    
    return(
        <div className="settings-page">
            <Cover>React Battleship</Cover>
            <div>
                <h3>General Settings</h3>
                <div>
                    <span>GAME MODE</span>
                    <br/>
                    <span onClick={changeGameMode}>{gameMode}</span>
                </div>
            </div>
        </div>
    )
}

export default SettingsPage;