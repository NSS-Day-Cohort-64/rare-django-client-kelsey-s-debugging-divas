export const getTag = (tagId, token) => {
  return fetch(`http://localhost:8000/tags/${tagId}`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    }
  }).then(response => response.json());
};

export const getAllTags = (token) => {
  return fetch("http://localhost:8000/tags", {
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    }
  }).then(response => response.json());
};

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

export const deleteTag = (tagId, token) => {
  return fetch(`http://localhost:8000/tags/${tagId}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    }
  })
}

export const editTag = (tagId, tag, token) => {
  return fetch(`http://localhost:8000/tags/${tagId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    },
    body: JSON.stringify(tag),
  })
};
