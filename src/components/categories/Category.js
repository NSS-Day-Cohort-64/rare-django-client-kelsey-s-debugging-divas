import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories, createCategory } from "../../managers/CategoryManager";
import { CategoryForm } from "./CategoryForm";
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

    const handleCreateCategory = (newCategory) => {
        createCategory(newCategory)
            .then(() => {
                const updatedCategories = [...categories, newCategory];
                // Sort the categories alphabetically by label before updating the state
                updatedCategories.sort((a, b) => a.label.localeCompare(b.label));
                setCategories(updatedCategories);
            })
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
                                    <button className="delete-button">Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="right-side">
                    <CategoryForm handleCreateCategory={handleCreateCategory} />
                </div>
            </div>
        </div>
    );
};