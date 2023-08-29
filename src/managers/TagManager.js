export const createTag = (newTag, token) => {
  return fetch("http://localhost:8000/tags", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    },
    body: JSON.stringify(newTag),
  });
};

export const getAllTags = (token) => {
  return fetch("http://localhost:8000/tags", {
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    }
  }).then(response => response.json());
};
