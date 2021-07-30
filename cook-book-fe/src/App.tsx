import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Category from "./components/Catgeory";
import Header from "./components/Header";
import Recipe from "./components/Recipe";
import AddRecipe2 from "./components/AddRecipe2";

function App() {
    return (
        <div className="site-wrapper">
            <Router>
                <Switch>
                    <Route exact path="/"><Header /></Route>
                    <Route exact path="/categories"><Category /></Route>
                    <Route exact path="/recipes"><Recipe /></Route>
                    <Route exact path="/recipes/add"><AddRecipe2 /></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
