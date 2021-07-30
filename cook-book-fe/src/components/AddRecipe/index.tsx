import * as React from 'react';
import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import Header from "../Header";
import {addRecipe, Recipe as RecipeDt} from './../../model/recipe-model/index';
import './style.css';
import {getAllCategories} from "../../model/category-model";

const AddRecipe = () => {
    // const [newRecipe, setNewRecipe] = useState([]);
    const [recipe, setRecipe] = useState<Partial<RecipeDt>>({
        category: '',
        description: '',
        duration: '',
        ingredients: [''],
        title: ''
    });
    const [categories, setCategories] = useState([])
    const [successMsg, setSuccessMsg] = useState({});

    useEffect(() => {
        getAllCategories().then(setCategories);

    }, []);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) => {
        // e.preventDefault();
        console.log("TARGET", e, e.target)
        console.log("TYPE ", typeof e.target)

        const {name, value} = e.target;
        console.log("VALUE", value, "Name ", name)

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
                            // onChange={(e: ChangeEvent<HTMLInputElement>) => setRecipe({
                            //     ...recipe,
                            //     title: e.currentTarget.value
                            // })}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                        />
                        <label>Duration:</label>
                        <input type='text' name='duration' value={recipe.duration}
                            // onChange={(e: ChangeEvent) => setRecipe({
                            //     ...recipe,
                            //     duration: e.target instanceof HTMLInputElement ? e.target.value : recipe.duration
                            // })}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                        />
                        <label>Ingredients:</label>
                        <input type='text' name='ingredients' value={recipe.ingredients}
                            // onChange={(e: any) => setRecipe({
                            //     ...recipe,
                            //     ingredients: e.target instanceof HTMLInputElement ? e.target.value.split(',') : recipe.ingredients
                            // })}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                        />
                        <label>Description:</label>
                        <textarea name='description' value={recipe.description}
                            // onChange={(e: any) => setRecipe({
                            //     ...recipe,
                            //     description: e.target instanceof HTMLTextAreaElement ? e.target.value : recipe.description
                            // })}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleInputChange(e)}
                        />
                        <label>Category:</label>
                        {categories.length > 0 &&
                        <select name='category' value={recipe.category}
                            //   onChange={(e: any) => setRecipe({
                            //     ...recipe,
                            //     category: e.target instanceof HTMLSelectElement ? e.target.value : recipe.category
                            // })}
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
            </div>
        </div>
    );
}

export default AddRecipe;



