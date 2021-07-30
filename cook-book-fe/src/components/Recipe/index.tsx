import * as React from 'react';
import Header from "../Header";
import {useLocation} from "react-router-dom";
import {getRecipes} from "../../model/recipe-model";
import {useEffect, useState} from "react";
import Spinner from "../Spinner";
import {Recipe as RecipeDT} from "../../model/recipe-model";
import './style.css';

const Recipe = () => {
    const [recipes, setRecipes] = useState([]);
    const [newRecipe, setNewRecipe] = useState([]);
    console.log("RECIPES", recipes);
    let {search} = useLocation();

    useEffect(() => {
        console.log("SEARCH", search)
        const query = new URLSearchParams(search);
        console.log("QUERY", query)
        const paramField = query.get('search');
        console.log("PARAM FIELD", paramField)

        getRecipes(paramField).then(setRecipes);
    }, [search]);

    return (
        <div className="App">
            <Header />

            {recipes.length > 0 ?
                <div className="recipes-page">
                    <h2>Recipes</h2>
                    <div className="recipes-container">
                        {recipes && recipes.map((recipe: RecipeDT, index: number) =>
                            <div className="recipe" key={index}>
                                <span className="recipe-title">{recipe.title}</span>
                                <span>{recipe.duration}</span>
                            </div>
                        )}
                    </div>
                </div>
                :
                <Spinner />
            }
        </div>
    );
}

export default Recipe;
