import React, {useState, useEffect} from 'react';
import "./score-table.styles.scss"
import { getScores } from '../../utils/firebase.utils';
import CellPosition from '../../components/cell-position/cell-position.component';

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
            <div>
                {
                    scores?scores.map((score,i) => <CellPosition playerName={score.playerName} position={i+1} score={score.score} key={i}/> ):null
                }
            </div>
        </div>
    )
}

export default ScoreTable;