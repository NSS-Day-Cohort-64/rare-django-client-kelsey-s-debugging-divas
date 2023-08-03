export const createTag = (newTag) => {
  return fetch("http://localhost:8088/tags", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTag),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to create tag.");
      }
    });
};

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