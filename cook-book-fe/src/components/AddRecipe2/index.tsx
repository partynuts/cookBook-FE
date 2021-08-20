import * as React from 'react';
import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import Header from "../Header";
import {useLocation} from "react-router-dom";
import {addRecipe, getRecipes, Recipe as RecipeDt} from './../../model/recipe-model/index';
import './style.css';
import {getAllCategories} from "../../model/category-model";
import classNames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faExclamation} from "@fortawesome/free-solid-svg-icons";
import {SuccessMgs} from "../AddRecipe";

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
    const [successMsg, setSuccessMsg] = useState<SuccessMgs | undefined>();

    useEffect(() => {
        getAllCategories().then(setCategories);

    }, []);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>, i?: number) => {
        const {name, value} = e.target;

        if (name === 'ingredients') {
            setRecipe({...recipe, [name]: ingredients});
        } else {
            setRecipe({...recipe, [name]: value});
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            await addRecipe(recipe as RecipeDt)
            setSuccessMsg({status: 'SUCCESS', msg: 'Danke für das Rezept.'})
        } catch (e) {
            console.log(e);
            setSuccessMsg({status: 'ERROR', msg: 'Da ist was schief gegangen.'})
        }
    };

    return (
        <div className="App">
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
                                        const filteredIngredients = ingredients.filter((ing, index) => {
                                            return ingredient !== ing;
                                        });
                                        console.log("INGREDIENTS FILTERED", filteredIngredients)
                                        setIngredients(filteredIngredients);
                                        setRecipe({...recipe, ingredients: filteredIngredients});
                                    }}>-
                                    </button>
                                </div>
                            )
                        })}
                        <div className='ingredient-wrapper'>
                            <button type='button' className='ingredient-btn-add' onClick={() => setIngredients([...ingredients, ''])}>
                                Add ingredient
                            </button>
                        </div>

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
                        <button className='submit-btn' type='submit' value='Submit'>Rezept speichern</button>
                    </form>
                </div>
                {successMsg &&
                <div
                  className={classNames('success-message-wrapper', `success-message-${successMsg?.status.toLowerCase()}`)}>
                  <div className={`message-${successMsg?.status.toLowerCase()}`}>
                      {successMsg?.status === "SUCCESS" ?
                          <FontAwesomeIcon icon={faCheck} color='green' /> :
                          <FontAwesomeIcon icon={faExclamation} color='red'/>
                      }
                  </div>
                  <div> {successMsg.msg} </div>
                </div>
                }
            </div>
        </div>
    );
}

export default AddRecipe2;



