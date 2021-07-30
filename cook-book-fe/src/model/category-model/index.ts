export async function getAllCategories() {
    return await fetch('http://localhost:5000/api/categories')
        .then(res => {
            console.log("RES", res);
            return res.json()
        });
}
