import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Homepage from './components/Homepage/Homepage'
import SearchByName from "./components/SearchByName/SearchByName";
import SearchByFirstLetter from "./components/SearchByFirstLetter/SearchByFirstLetter";
// import SearchByCategory from './components/SearchByCategory/SearchByCategory';
// import SearchByArea from './components/SearchByArea/SearchByArea';
import RandomRecipe from './components/RandomRecipe/RandomRecipe';
import Favourites from './components/Favourites/Favourites';
import ContactForm from './components/ContactForm/ContactForm';

const App = () => {

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
                <Link to="/search-by-first-letter">Search by First Letter</Link>
              </li>
              {/*<li>
                <Link to="/search-by-category">Search by Category</Link>
              </li>
              <li>
                <Link to="/search-by-area">Search by Area</Link>
              </li> */}
              <li>
                <Link to="/recipe-of-the-day">Recipe of the Day</Link>
              </li>
              <li>
                <Link to="/favourire-recipes">Favourites</Link>
              </li>
              <li>
                <Link to="/contact-form">Contact us!</Link>
              </li>
            </ul>
          </nav>

        <Switch>
          <Route path="/search-by-name">
            <SearchByName />
          </Route>
          <Route path="/search-by-first-letter">
            <SearchByFirstLetter />
          </Route>
          {/* <Route path="/search-by-category">
            <SearchByCategory />
          </Route>
          <Route path="/search-by-area">
            <SearchByArea />
          </Route> */}
          <Route path="/recipe-of-the-day">
            <RandomRecipe />
          </Route>
          <Route path="/favourire-recipes">
            <Favourites />
          </Route>
          <Route path="/contact-form">
            <ContactForm />
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
