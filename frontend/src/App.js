import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import Calculate from './Components/Calculate';
import RecieptPage from './Pages/RecieptPage';
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path="/reciept" component={RecieptPage}/>
          <Route path="/calc" component={Calculate}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
