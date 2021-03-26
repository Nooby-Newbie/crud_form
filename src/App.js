import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './auth/login';
import Signup from './auth/signup';
import Product from './product/product'

function App() { 
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route> 
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/product">
            <Product/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
