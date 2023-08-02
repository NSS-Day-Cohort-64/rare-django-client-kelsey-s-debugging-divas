export const getAllPosts = () => {
  return fetch("http://localhost:8088/posts")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to fetch post.");
      }
    });
};

export const getSinglePost = (postId) => {
  return fetch(`http://localhost:8088/posts/${postId}`)
    .then(res => res.json())
}

export const getUserPosts = (userId) => {
  return fetch(`http://localhost:8088/posts?user_id=${userId}`)
    .then(res => res.json())
}
