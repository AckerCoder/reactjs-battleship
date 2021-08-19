import React, {useState, useEffect} from 'react';
import "./score-table.styles.scss"
import { getScores } from '../../utils/firebase.utils';
import CellPosition from '../../components/cell-position/cell-position.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { Link } from 'react-router-dom';

const ScoreTable = () => {
    const [scores, setScores] = useState(null);
    
    useEffect(() => {
            (async()=>{
                const initialScores = await getScores(); 
                setScores(initialScores);
            })()
    }, []);

    return(
        <div className="score-table">
            <h1 className="title">Score Table</h1>
            <div className="table">
                {
                    scores?scores.map((score,i) => <CellPosition playerName={score.playerName} position={i+1} score={score.score} key={i}/> ):null
                }
            </div>
            <Link to="/">
                <CustomButton main>MAIN MENU</CustomButton>
            </Link>
        </div>
    )
}

export default ScoreTable;