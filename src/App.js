import React from 'react';
import './App.css';
//import data from './data';
import CategoryList from './сomponents/CategoryList';
import CategoryCharts from './сomponents/CategoryCharts';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="row">
          <div className="col-3">
            <nav>
              <ul>
                <li>
                  <Link to="/">List</Link>
                </li>
                <li>
                  <Link to="/charts/">Charts</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-9">
            <Route path="/" exact component={CategoryList} />
            <Route path="/charts/" component={CategoryCharts} />
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
