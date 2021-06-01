import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import About from './pages/About';
import Home from './pages/Home';
import Users from './pages/Users';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header ">
        <Router>
          <div>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
