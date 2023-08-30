export const getAllUsers = () => {
    return fetch(`http://localhost:8000/users`)
    .then( res => res.json())
  }


  // Fetch the user's details using the token
export const userResponse = (token) => { 
fetch('http://localhost:8000/users/me/', {
    method: 'GET',
    headers: {
        'Authorization': `Token ${token}`
    }
})
};