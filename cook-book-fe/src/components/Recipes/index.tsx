import * as React from 'react';
import {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import {getRecipe, getRecipes, Recipe as RecipeDT} from "../../model/recipe-model";
import './style.css';
import RecipesLoader from "./loader";

const Recipes = () => {
    const [recipes, setRecipes] = useState<RecipeDT[]>([]);
    const [message, setMessage] = useState<string | undefined>();
    let {search} = useLocation();

    const renderLoaderPlaceholder = () => {
        const fields: JSX.Element[] = [];
        for (let i = 1; i <= 30; i++) {
            fields.push(<RecipesLoader key={i} />);
        }
        console.log("FIELDs", fields)
        return fields.map(field => field);

        // return [...Array(numberOfPlaceholders)].map((placeholder, index) => (<RecipesLoader key={index}/>))
    };

    useEffect(() => {
        const query = new URLSearchParams(search);
        const paramString: string | null = query.get('search');
        setMessage(undefined);

        getRecipes(paramString).then(res => {
            if (res.length === 0) {
                setMessage(`Die Suche zu "${paramString}" hat leider nichts ergeben. Stöbere doch in unseren anderen Rezepten nach etwas passendem.`);
                getRecipes().then(setRecipes)
            }
            setRecipes(res)

        });
    }, [search]);

    return (
        <div className="App">
            <div className="recipes-page">
                <h2>Recipes</h2>
                {recipes.length > 0 ?
                    <div className="recipes-container">
                        <>
                            {message &&
                            <p className="recipes-message">{message}</p>}
                            {recipes.map((recipe: RecipeDT) =>
                                <>
                                    <Link to={`/recipe-details/${recipe.id}`}>
                                        <div className="recipe" key={recipe.id}>
                                            <span className="recipe-title">{recipe.title}</span>
                                            <span>{recipe.duration}</span>
                                        </div>
                                    </Link>
                                </>
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
