export const createCategory = (newCategory) => {
    return fetch("http://localhost:8088/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newCategory),
    })
}

export const getCategories = () => {
    return fetch("http://localhost:8088/categories")
        .then(response => response.json())
};
