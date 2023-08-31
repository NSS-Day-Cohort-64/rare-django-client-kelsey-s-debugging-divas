import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories, deleteCategory } from "../../managers/CategoryManager";
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

    const handleDeleteCategory = (categoryId) => {
        const shouldDelete = window.confirm("Are you sure you want to delete this category?");

        if (shouldDelete) {
            deleteCategory(categoryId).then(() => {
                // Filter out the deleted category and update the state
                const updatedCategories = categories.filter((category) => category.id !== categoryId);
                setCategories(updatedCategories);
            });
        }
    };


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
                                    <button
                                        className="delete-button"
                                        onClick={() => handleDeleteCategory(category.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="right-side">
                    <button className="create-button"><Link to={`/categories/create`}>Create New Category</Link></button>
                </div>
            </div>
        </div>
    );
};
