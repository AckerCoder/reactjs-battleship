import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import SettingsPage from "./pages/settings-page/settings-page.component";

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
