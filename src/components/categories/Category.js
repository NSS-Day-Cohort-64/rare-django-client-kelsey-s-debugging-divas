import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../managers/CategoryManager";
import "./categories.css";

export const Category = () => {
    // State to store categories
    const [categories, setCategories] = useState([]);

    // Fetch categories when the component mounts
    useEffect(() => {
        getCategories()
            .then((data) => setCategories(data))
            .catch((error) => console.error(error));
    }, []);


    return (
        <div className="page-container">
            <h1 className="page-header">Categories</h1>
            <div className="category-container">
                <div className="left-side">
                    <ul className="list">
                        {categories.map((category) => (
                            <li key={category.id} className="list-items">
                                <div className="list-name">{category.label}{" "}</div>
                                <div className="edit-and-delete">
                                    <button className="edit-button"><Link to={`/categories/${category.id}/edit`}>Edit</Link></button>{" "}
                                    <button className="delete-button">Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button className="create-button"><Link to={`/categories/create`}>Create New Category</Link></button>
                </div>
                <div className="right-side">

                </div>
            </div>
        </div>
    );
};
