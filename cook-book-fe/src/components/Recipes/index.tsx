import * as React from 'react';
import {useEffect, useState} from 'react';
import Header from "../Header";
import {Link, useLocation} from "react-router-dom";
import {getRecipes, Recipe as RecipeDT} from "../../model/recipe-model";
import './style.css';
import RecipeDetailsLoader from "./loader";

const Recipes = () => {
    const [recipes, setRecipes] = useState<RecipeDT[]>([]);
    let {search} = useLocation();

    const renderLoaderPlaceholder = () => {
        console.log("RENDERING PLACEHOLDER")
        const fields: JSX.Element[] = [];
        for (let i = 1; i <= 30; i++) {
            fields.push(<RecipeDetailsLoader key={i} />);
        }
        console.log("FIELDs", fields)
        return fields.map(field => field);

        // return [...Array(numberOfPlaceholders)].map((placeholder, index) => (<RecipeDetailsLoader key={index}/>))
    };

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
            <div className="recipes-page">
                <h2>Recipes</h2>
                {recipes.length > 0 ?
                    <div className="recipes-container">
                        <>
                            {recipes.map((recipe: RecipeDT) =>
                                <Link to={`/recipe-details/${recipe.id}`}>
                                    <div className="recipe" key={recipe.id}>
                                        <span className="recipe-title">{recipe.title}</span>
                                        <span>{recipe.duration}</span>
                                    </div>
                                </Link>
                            )}
                        </>
                    </div>
                    :
                    <div className="placeholders-container">
                        {renderLoaderPlaceholder()}
                    </div>
                }
            </div>

        </div>
    );
};

export default Recipes;
