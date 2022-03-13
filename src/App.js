import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>

          <Switch>

            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="*">

            </Route>

          </Switch>

        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
