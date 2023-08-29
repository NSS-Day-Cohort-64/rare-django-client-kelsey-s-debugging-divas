export const createCategory = (newCategory) => {
    return fetch("http://localhost:8000/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(newCategory),
    })
}

export const getCategories = (token) => {
    return fetch("http://localhost:8000/categories", {
      headers: {
        "Authorization": `Token ${localStorage.getItem("auth_token")}`
      }
    }).then(response => response.json());
  };
  