import * as React from 'react';
import {useEffect, useState} from 'react';
import Header from "../Header";
import {useParams} from "react-router-dom";
import {getRecipe, Recipe} from "../../model/recipe-model";
import './style.css';

export type Match = {
    params?: string
}

const RecipeDetails = () => {
    const [recipe, setRecipe] = useState<undefined | Recipe>(undefined);
    // const match = useRouteMatch<Match | undefined>('/recipe-details/:id');
    let params = useParams<{ key: string }>();
    console.log("PARAMS", params, Object.values(params))
    const paramVal = Object.values(params)[0];
    useEffect(() => {
        console.log("NAME PARAMS",)
        getRecipe(paramVal).then(setRecipe);
    }, [paramVal]);

    return (
        <div className="recipe-details">
            <Header />
            <div className="recipe-modal__content">
                <div className="recipe-modal__header">
                    <h2>
                        {recipe?.title}
                    </h2>
                </div>
                <div className="recipe-modal__main">
                    <div className="recipe-element main-duration">
                        <label>Dauer: </label>
                        <div className="element duration">
                            {recipe?.duration}
                        </div>
                    </div>
                    <div className="recipe-element main-ingredients">
                        <label>Zutaten: </label>
                        <div className="element ingredients">
                            {recipe?.ingredients.map(ingredient => <li>{ingredient}</li>)}
                        </div>
                    </div>
                    <div className="recipe-element main-description">
                        <label>Und so geht's: </label>
                        <div className="element description">
                            {recipe?.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default RecipeDetails;
