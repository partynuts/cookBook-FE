export type Recipe = {
    category: string | undefined;
    description: string;
    duration?: string;
    id?: string;
    ingredients: string[];
    title: string;
};


export async function getRecipes(query: any) {
    console.log("GETTING RECIPES")
    const recipes = await fetch(`http://localhost:5000/api/recipes?filter=${query}`)
        .then(res => {
            console.log("RES", res);
            return res.json()
        });
    console.log("RECIPES IN MODEL", recipes);
    return recipes;
}

export function addRecipe(recipeContent: Recipe) {
    console.log("ADDING RECIPE TO DB")
    return fetch('http://localhost:5000/api/recipes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipeContent)
    })
        .then(res => res.json())
}
