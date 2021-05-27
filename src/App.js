import TopBar from "./components/topbar/TopBar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
    
      <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/register">{user ? <Homepage /> :<Register />}</Route>
            <Route path="/login">{user ? <Homepage /> :<Login />}</Route>
            <Route path="/write">{user ? <Write /> :<Register />}</Route>
            <Route path="/write">{user ? <Settings /> :<Register />}</Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/post/:Id">
              <Single />
            </Route>
      </Switch>
    </Router>
  );
}

export default App;
