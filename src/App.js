import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Nav from "./Components/Nav";
import HomeGrid from "./Components/HomeGrid";
import PersonPage from "./Components/PersonPage";
import Biography from "./Pages/Biography";
import HumanOne from "./Pages/HumanOne";
import HumanTwo from "./Pages/HumanTwo";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={HomeGrid} exact />
          <Route path="/biography" component={Biography} exact />
          <Route path="/human-one" component={HumanOne} exact />
          <Route path="/human-two" component={HumanTwo} exact />
          <Route path="/person/:personId" component={PersonPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
