export const createCategory = (newCategory) => {
    return fetch("http://localhost:8088/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategory),
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to create category.");
            }
        });
};

export const getCategories = () => {
    return fetch("http://localhost:8088/categories")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch categories.");
            }
        });
};
