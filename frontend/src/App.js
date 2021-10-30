import './App.css';
import './style2.css'
import './style.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Signin from './Components/Welcome'
import Signin from './Components/SignUp'
import Frontpage from './Components/Frontpage';
import Front from './Components/Front';
import Weather from './Components/Weather';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/real'>
            <Weather />
          </Route>
          <Route exact path="/">
            <Signin />
          </Route>
          {/* <Route exact path="/signup">
            <Signup imgLink={imglink}/>
          </Route> */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
