import React from 'react';
import 'assets/css/App.css';
import CategoryList from 'components/CategoryList';
import CategoryCharts from 'components/CategoryCharts';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="row">
          <div className="col-3">
            <nav>
              <ul className="nav flex-column nav-pills">
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/">List</NavLink >
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/charts/">Charts</NavLink >
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
