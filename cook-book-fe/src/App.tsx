import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Category from "./components/Catgeory";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import AddRecipe2 from "./components/AddRecipe2";
import RecipeDetails from "./components/RecipeDetails";

// import AddRecipe from "./components/AddRecipe";

function App() {
    return (
        <div className="site-wrapper">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/categories"><Category /></Route>
                    <Route exact path="/recipes"><Recipes /></Route>
                    <Route exact path="/recipes/add"><AddRecipe2 /></Route>
                    <Route exact path="/recipe-details/:id"><RecipeDetails /></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
