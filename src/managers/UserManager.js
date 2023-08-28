export const getAllUsers = () => {
    return fetch(`http://localhost:8000/users`)
    .then( res => res.json())
  }
