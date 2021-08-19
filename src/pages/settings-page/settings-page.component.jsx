import React, {useState} from 'react';

import { Link } from 'react-router-dom';
import Cover from "../../components/cover/cover.component"
import CustomButton from '../../components/custom-button/custom-button.component';
import CustomInput from '../../components/custom-input/custom-input.component';
import TurnsController from '../../components/turns-controller/turns-controller.component';
import "./settings-page.styles.scss"

const SettingsPage = () => {
    const [gameMode, setGameMode] = useState("CUSTOM");
    const [playerName, setPlayerName] = useState("RAMDOM PLAYER");
    const [gameDifficulty, setGameDifficulty] = useState("MEDIUM");
    const [numberOfTurns, setNumberOfTurns] = useState(100);

    const changeGameMode = () => {
        if(gameMode === "SIMPLE"){
            setGameMode("CUSTOM");
        }else{
            setGameDifficulty("EASY");
            setNumberOfTurns(-1);
            setGameMode("SIMPLE");
        }
    }

    const changePlayerName = (e) => {
        setPlayerName(e.target.value);
    }
    
    const changeGameDifficulty = () => {
        switch(gameDifficulty){
            case "EASY":
                setGameDifficulty("MEDIUM");
                setNumberOfTurns(100);
                break;
            case "MEDIUM":
                setGameDifficulty("HARD");
                setNumberOfTurns(50);
                break;
            case "HARD":
                setGameDifficulty("EASY");
                setNumberOfTurns(-1);
                break;
            default:
                break;
        }
    }

    return(
        <div className="settings-page">
            <Cover>React Battleship</Cover>
            <div className="settings-panel">
                <div className="general-settings">
                    <h3 className="title">GENERAL SETTINGS</h3>
                    <CustomButton onClick={changeGameMode} label="GAME MODE" setting>{gameMode}</CustomButton>
                    <CustomInput label="PLAYER NAME" type="text" onChange={changePlayerName}></CustomInput>
                    {
                        gameMode === "SIMPLE"?<CustomButton onClick={changeGameDifficulty} label="GAME MODE" setting>{gameDifficulty}</CustomButton>:null
                    }
                </div>
                <div className="number-of-turns">
                    <h3 className="title">NUMBER OF TURNS</h3>
                    <div className="controller">
                        <TurnsController gameMode={gameMode} numberOfTurns={numberOfTurns} setNumberOfTurns={setNumberOfTurns}/>
                    </div>
                </div>
            </div>
            <Link to={`game/${numberOfTurns}/${playerName}`}>
                <CustomButton main>LET'S BATTLE</CustomButton>        
            </Link>
        </div>
    )
}

export default SettingsPage;