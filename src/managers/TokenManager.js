export const getUserByToken = (token) => {
  return fetch(`http://localhost:8000/tokens/${token}`, {
      headers: {
          "Authorization": `Token ${localStorage.getItem("auth_token")}`
      }
  })
  .then(res => res.json());
};
