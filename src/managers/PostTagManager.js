export const getPostTagByPostId = (postId) => {
  return fetch(`http://localhost:8088/postTags?post_id=${postId}`)
    .then(response => response.json())
};