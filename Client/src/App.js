import Home from "./pages/home/Home";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Redirect } from "react-router-dom/cjs/react-router-dom";

function App() {

  const {user} = useContext(AuthContext)

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home/> : <Signup/>}

        </Route>
        <Route path="/login">
          {user ? <Redirect to ="/"/> : <Login/>}

        </Route>
        <Route path="/signup">
        {user ? <Redirect to ="/"/> : <Signup/>}

        </Route>
        <Route path="/profile/:username">
          <Profile/>

        </Route>
      </Switch>

    </Router>
    );
 
}

export default App;
