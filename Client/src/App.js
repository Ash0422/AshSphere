import Home from "./pages/home/Home";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>

        </Route>
        <Route path="/login">
          <Login/>

        </Route>
        <Route path="/signup">
          <Signup/>

        </Route>
        <Route path="/profile/:username">
          <Profile/>

        </Route>
      </Switch>

    </Router>
    );
 
}

export default App;
