import * as React from 'react';
import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import Header from "../Header";
import {addRecipe, Recipe as RecipeDt} from './../../model/recipe-model/index';
import {getAllCategories} from "../../model/category-model";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import classNames from "classnames";
import { faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons'
import './style.css';

export type SuccessMgs = {
    status: string;
    msg: string;
}

const AddRecipe = () => {
    // const [newRecipe, setNewRecipe] = useState([]);
    const [recipe, setRecipe] = useState<Partial<RecipeDt>>({
        category: '',
        description: '',
        duration: '',
        ingredients: [''],
        title: ''
    });
    const [categories, setCategories] = useState([]);
    const [successMsg, setSuccessMsg] = useState<SuccessMgs | undefined>();

    useEffect(() => {
        getAllCategories().then(setCategories);

    }, []);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) => {
        // e.preventDefault();
        // console.log("TARGET", e, e.target)
        // console.log("TYPE ", typeof e.target)

        const {name, value} = e.target;
        // console.log("VALUE", value, "Name ", name)

        if (name === 'ingredients') {
            setRecipe({...recipe, [name]: value.split(',')});
        } else {
            setRecipe({...recipe, [name]: value});
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log("SUBMIT EVENT FORM DETAILS", recipe)

        try {
            const newRecipe = await addRecipe(recipe as RecipeDt)
            console.log("NEW RECIPE", newRecipe)
            setRecipe({
                category: '',
                description: '',
                duration: '',
                ingredients: [''],
                title: ''
            });
            setSuccessMsg({status: 'SUCCESS', msg: 'Danke für das Rezept.'})
        } catch (e) {
            console.log(e);
            setSuccessMsg({status: 'ERROR', msg: 'Da ist was schief gegangen.'})
        }
    };

    return (
        <div className="App">
            <div className="add-recipes-page">
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
                        <input type='text' name='ingredients' value={recipe.ingredients}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                        />
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
                        <input type='submit' value='Submit' />
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

export default AddRecipe;



