import './App.css';
import './style2.css'
import './style.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Signin from './Components/SignIn'
import Weather from './Components/Weather';
import SignUp from './Components/SignUp';
import PriceTable from './Components/PriceTable';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Weather />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/crop-price">
            <PriceTable/>
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
