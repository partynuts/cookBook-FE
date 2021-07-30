import * as React from 'react';
import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import Header from "../Header";
import {useLocation} from "react-router-dom";
import {addRecipe, getRecipes, Recipe as RecipeDt} from './../../model/recipe-model/index';
import './style.css';
import {getAllCategories} from "../../model/category-model";

const AddRecipe2 = () => {
    const [ingredients, setIngredients] = useState(['']);
    const [recipe, setRecipe] = useState<Partial<RecipeDt>>({
        category: '',
        description: '',
        duration: '',
        ingredients,
        title: ''
    });
    const [categories, setCategories] = useState([])
    const [successMsg, setSuccessMsg] = useState({});

    useEffect(() => {
        getAllCategories().then(setCategories);

    }, []);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>, i?: number) => {
        // e.preventDefault();
        console.log("TARGET", e, e.target)
        console.log("TYPE ", typeof e.target)

        const {name, value} = e.target;
        console.log("VALUE", value, "Name ", name)

        if (name === 'ingredients') {
            setRecipe({...recipe, [name]: ingredients});
        } else {
            setRecipe({...recipe, [name]: value});
        }
        console.log("RECIPE", recipe)
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log("SUBMIT EVENT FORM DETAILS", recipe)

        try {
            const newRecipe = await addRecipe(recipe as RecipeDt)
            console.log("NEW RECIPE", newRecipe)
            setSuccessMsg({status: 'SUCCESS', msg: 'Danke für das Rezept.'})
        } catch (e) {
            console.log(e);
            setSuccessMsg({status: 'ERROR', msg: 'Da ist was schief gegangen.'})
        }
    };

    return (
        <div className="App">
            <Header />
            <div className="recipes-page">
                <h2>Add new recipe</h2>
                <div className="recipes-container">
                    <form className='form' onSubmit={(e: FormEvent) => handleSubmit(e)}>
                        <label>Title:</label>
                        <input type='text' name='title' value={recipe.title}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                        />
                        <label>Duration:</label>
                        <input type='text' name='duration' value={recipe.duration}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                        />
                        <label>Ingredients:</label>
                        {ingredients.map((ingredient, i) => {
                            return (
                                <div className='ingredient-wrapper'>
                                    <input type='text' name='ingredients' value={ingredient}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                            ingredients.splice(i, 1, e.target.value)
                                            setIngredients([...ingredients]);
                                            setRecipe({...recipe, ingredients})
                                        }}
                                    />
                                    <button className='ingredient-btn-remove' onClick={() => {
                                        const ingr = ingredients.filter((ing, index) => {
                                            return ingredient !== ing;
                                        });
                                        console.log("INGREDIENTS FILTERED", ingr)
                                        console.log("INGREDIENTS ALT", ingredients)
                                        console.log("RECIPE INGREDIENTS ALT", recipe.ingredients)
                                        setIngredients(ingr);
                                        console.log("INGREDIENTS NEU", ingredients)
                                        setRecipe({...recipe, ingredients});
                                        console.log("RECIPE NACH LÖschen", recipe.ingredients)
                                    }}>-
                                    </button>
                                </div>
                            )
                        })}
                        <div className='ingredient-wrapper'>
                            {/*<label>Add ingredient:</label>*/}
                            <button className='ingredient-btn-add' onClick={() => setIngredients([...ingredients, ''])}>
                                Add ingredient
                            </button>
                        </div>

                        {/*<input type='text' name='ingredients' value={recipe.ingredients}*/}
                        {/*    onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)}*/}
                        {/*/>*/}
                        <label>Description:</label>
                        <textarea name='description' value={recipe.description}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleInputChange(e)}
                        />
                        <label>Category:</label>
                        {categories.length > 0 &&
                        <select name='category' value={recipe.category}
                          onChange={(e: ChangeEvent<HTMLSelectElement>) => handleInputChange(e)}
                        >
                            {categories.map((category: any) =>
                                <option key={category.id} value={category.id}>{category.categorytitle}</option>
                            )
                            }
                        </select>
                        }
                        <input className='submit-btn' type='submit' value='Submit' />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddRecipe2;



