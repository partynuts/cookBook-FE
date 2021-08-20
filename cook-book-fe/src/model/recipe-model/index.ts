export type Recipe = {
    category: string | undefined;
    description: string;
    duration?: string;
    id: string;
    ingredients: string[];
    title: string;
};

export async function getRecipes(query?: string | null): Promise<Recipe[]> {
    const queryParam: any = query || '';
console.log("QUERY PARAM", queryParam)
    return await fetch(`http://localhost:5000/api/recipes?search=${queryParam}`)
        .then(res => {
            console.log("RES", res);
            return res.json()
        });
}

export function addRecipe(recipeContent: Recipe) {
    return fetch('http://localhost:5000/api/recipes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipeContent)
    })
        .then(res => res.json())
}

export async function getRecipe(id: string): Promise<Recipe> {
    return await fetch(`http://localhost:5000/api/recipes/${id}`)
        .then(res => {
            console.log("RES", res);
            return res.json()
        });
}
