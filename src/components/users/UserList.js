import { useState, useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { getAllUsers } from "../../managers/UserManager"
import "./users.css";

export const UserList = () => {
    // State to store users
    const [users, setUsers] = useState([]);

    // Fetch users when the component mounts
    useEffect(() => {
        getAllUsers()
            .then((userData) => setUsers(userData))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="page-container">
            <h1 className="page-header">User Management</h1>
            <div className="user-container">
                <div className="left-side">
                    <ul className="list">
                        {users.map((user) => (
                            <li key={user.id} className="list-items">
                                <div className="list-name">Username: {user.username}</div>
                                <div className="list-name">First Name: {user.first_name}</div>
                                <div className="list-name">Last Name: {user.last_name}</div>
                                <div className="list-name">Email: {user.email}</div>
                                <div className="edit-and-delete">
                                    <button className="edit-button">
                                        <Link to={`/users/${user.id}/edit`}>Edit</Link>
                                    </button>{" "}
                                    <button className="delete-button">Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="right-side">{/* Additional content here */}</div>
            </div>
        </div>
    );
};