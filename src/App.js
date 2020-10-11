import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Homepage from './components/Homepage/Homepage'
import SearchByName from "./components/SearchByName/SearchByName";
import SearchByMainIngredient from "./components/SearchByMainIngredient/SearchByMainIngredient";
import SearchByCategory from './components/SearchByCategory/SearchByCategory';
import SearchByArea from './components/SearchByArea/SearchByArea';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
            <ul>
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="/search-by-name">Search by Name</Link>
              </li>
              <li>
                <Link to="/search-by-main-ingredient">Search by Main Ingredient</Link>
              </li>
              <li>
                <Link to="/search-by-category">Search by Category</Link>
              </li>
              <li>
                <Link to="/search-by-area">Search by Area</Link>
              </li>
            </ul>
          </nav>

        <Switch>
          <Route path="/search-by-name">
            <SearchByName />
          </Route>
          <Route path="/search-by-main-ingredient">
            <SearchByMainIngredient />
          </Route>
          <Route path="/search-by-category">
            <SearchByCategory />
          </Route>
          <Route path="/search-by-area">
            <SearchByArea />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
