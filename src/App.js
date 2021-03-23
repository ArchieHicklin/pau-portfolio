import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Nav from "./Components/Nav";
import HomeGrid from "./Components/HomeGrid";
import PersonPage from "./Components/PersonPage";
import Biography from "./Pages/Biography";
import HumanOne from "./Pages/HumanOne";
import HumanTwo from "./Pages/HumanTwo";
import HumanThree from "./Pages/HumanThree";
import HumanFour from "./Pages/HumanFour";
import HumanFive from "./Pages/HumanFive";
import HumanSix from "./Pages/HumanSix";
import HumanSeven from "./Pages/HumanSeven";
import HumanEight from "./Pages/HumanEight";
import HumanNine from "./Pages/HumanNine";
import HumanTen from "./Pages/HumanTen";
import HumanEleven from "./Pages/HumanEleven";
import HumanTwelve from "./Pages/HumanTwelve";
import HumanThirteen from "./Pages/HumanThirteen";
import HumanFourteen from "./Pages/HumanFourteen";
import HumanFifteen from "./Pages/HumanFifteen";
import HumanSixteen from "./Pages/HumanSixteen";
import HumanSeventeen from "./Pages/HumanSeventeen";
import HumanEighteen from "./Pages/HumanEighteen";
import HumanNineteen from "./Pages/HumanNineteen";
import HumanTwenty from "./Pages/HumanTwenty";
import HumanTwentyOne from "./Pages/HumanTwentyOne";
import HumanTwentyTwo from "./Pages/HumanTwentyTwo";
import HumanTwentyThree from "./Pages/HumanTwentyThree";
import HumanTwentyFour from "./Pages/HumanTwentyFour";
import HumanTwentyFive from "./Pages/HumanTwentyFive";
import HumanTwentySix from "./Pages/HumanTwentySix";
import HumanTwentySeven from "./Pages/HumanTwentySeven";
import HumanTwentyEight from "./Pages/HumanTwentyEight";
import HumanTwentyNine from "./Pages/HumanTwentyNine";
import HumanThirty from "./Pages/HumanThirty";
import HumanThirtyOne from "./Pages/HumanThirtyOne";
import HumanThirtyTwo from "./Pages/HumanThirtyTwo";
import HumanThirtyThree from "./Pages/HumanThirtyThree";
import HumanThirtyFour from "./Pages/HumanThirtyFour";
import Nobody from "./Pages/Nobody";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={HomeGrid} exact />
          <Route path="/biography" component={Biography} exact />
          <Route path="/human-one" component={HumanOne} exact />
          <Route path="/human-two" component={HumanTwo} exact />
          <Route path="/human-three" component={HumanThree} exact />
          <Route path="/human-four" component={HumanFour} exact />
          <Route path="/human-five" component={HumanFive} exact />
          <Route path="/human-six" component={HumanSix} exact />
          <Route path="/human-seven" component={HumanSeven} exact />
          <Route path="/human-eight" component={HumanEight} exact />
          <Route path="/human-nine" component={HumanNine} exact />
          <Route path="/human-ten" component={HumanTen} exact />
          <Route path="/human-eleven" component={HumanEleven} exact />
          <Route path="/human-twelve" component={HumanTwelve} exact />
          <Route path="/human-thirteen" component={HumanThirteen} exact />
          <Route path="/human-fourteen" component={HumanFourteen} exact />
          <Route path="/human-fifteen" component={HumanFifteen} exact />
          <Route path="/human-sixteen" component={HumanSixteen} exact />
          <Route path="/human-seventeen" component={HumanSeventeen} exact />
          <Route path="/human-eighteen" component={HumanEighteen} exact />
          <Route path="/human-nineteen" component={HumanNineteen} exact />
          <Route path="/human-twenty" component={HumanTwenty} exact />
          <Route path="/human-twentyone" component={HumanTwentyOne} exact />
          <Route path="/human-twentytwo" component={HumanTwentyTwo} exact />
          <Route path="/human-twentythree" component={HumanTwentyThree} exact />
          <Route path="/human-twentyfour" component={HumanTwentyFour} exact />
          <Route path="/human-twentyfive" component={HumanTwentyFive} exact />
          <Route path="/human-twentysix" component={HumanTwentySix} exact />
          <Route path="/human-twentyseven" component={HumanTwentySeven} exact />
          <Route path="/human-twentyeight" component={HumanTwentyEight} exact />
          <Route path="/human-twentynine" component={HumanTwentyNine} exact />
          <Route path="/human-thirty" component={HumanThirty} exact />
          <Route path="/human-thirtyone" component={HumanThirtyOne} exact />
          <Route path="/human-thirtytwo" component={HumanThirtyTwo} exact />
          <Route path="/human-thirtythree" component={HumanThirtyThree} exact />
          <Route path="/human-thirtyfour" component={HumanThirtyFour} exact />
          <Route path="/nobody" component={Nobody} exact />
          <Route path="/person/:personId" component={PersonPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
