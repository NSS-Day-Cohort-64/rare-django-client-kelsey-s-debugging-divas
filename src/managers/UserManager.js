export const getAllUsers = () => {
    return fetch("http://localhost:8088/users")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch users.");
            }
        });
};