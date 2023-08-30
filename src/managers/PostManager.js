export const getAllPosts = () => {
  return fetch("http://localhost:8000/posts", {
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    }
  })
    .then(response => response.json())
};

export const getSinglePost = (id) => {
  return fetch(`http://localhost:8000/posts/${id}`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    }
  })
    .then(response => response.json())
}

export const createPost = (newPost) => {
  return fetch("http://localhost:8000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    },
    body: JSON.stringify(newPost),
  })

};

export const getUserPosts = (token) => {
  return fetch(`http://localhost:8000/posts?token=${token}`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    }
  })
    .then(response => response.json());
}


export const editPost = (postId, post) => {
  return fetch(`http://localhost:8000/posts/${postId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post),
  })
};

export const deletePost = (postId) => {
  return fetch(`http://localhost:8000/posts/${postId}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    }
  })
}
