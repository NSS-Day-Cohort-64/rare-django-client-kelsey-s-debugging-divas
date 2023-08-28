export const getPostTagByPostId = (postId) => {
  return fetch(`http://localhost:8000/postTags?post_id=${postId}`)
    .then(response => response.json())
};
