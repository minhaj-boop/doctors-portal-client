import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <>
      <Router>

        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>

          <Route path="/">
            <Home></Home>
          </Route>

          <Route path="*">

          </Route>

        </Switch>

      </Router>
    </>
  );
}

export default App;
