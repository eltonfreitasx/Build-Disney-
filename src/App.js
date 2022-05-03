import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact ><Login /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
