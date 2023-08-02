export const getPosts = () => {
  return fetch("http://localhost:8088/posts")
    .then(res => res.json())
}

export const getSinglePost = (postId) => {
  return fetch(`http://localhost:8088/posts/${postId}`)
    .then(res => res.json())
}

export const createPost = (newPost) => {
  return fetch("http://localhost:8088/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to create post.");
      }
    });
};
