export const getAllPosts = () => {
  return fetch("http://localhost:8000/posts")
    .then(response => response.json())
};

export const getSinglePost = (postId) => {
  return fetch(`http://localhost:8000/posts/${postId}`)
    .then(response => response.json())
}

export const createPost = (newPost) => {
  return fetch("http://localhost:8000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(newPost),
  })

};
export const getUserPosts = (userId) => {
  return fetch(`http://localhost:8000/posts?user_id=${userId}`)
    .then(response => response.json())
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
