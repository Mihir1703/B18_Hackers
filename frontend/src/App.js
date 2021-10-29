import './App.css';
import imglink from './img/img-login.svg'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Signin from './Components/Welcome'
import Signup from './Components/SignUp'
import Frontpage from './Components/Frontpage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/real'>
            <Frontpage />
          </Route>
          <Route exact path="/">
            <Signin imgLink={imglink} />
          </Route>
          <Route exact path="/signup">
            <Signup imgLink={imglink}/>
          </Route>
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
