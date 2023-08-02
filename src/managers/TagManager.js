export const getAllTags = () => {
  return fetch("http://localhost:8088/tags")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to fetch tags.");
      }
    });
};