import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Game from "./pages/game/game.component";
import HomePage from "./pages/homepage/homepage.component";
import ScoreTable from "./pages/score-table/score-table.component";
import SettingsPage from "./pages/settings-page/settings-page.component";
import YouLost from "./pages/you-lost/you-lost.component";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/settings-page">
            <SettingsPage />
          </Route>
          <Route path="/game/:numberOfTurns/:playerName">
            <Game />
          </Route>
          <Route path="/score-table">
            <ScoreTable />
          </Route>
          <Route path="/you-lost">
            <YouLost />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
