import React from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../managers/CategoryManager";
import { CategoryForm } from "./CategoryForm";
import "./categories.css"

export const Category = () => {
    // State to store categories
    const [categories, setCategories] = React.useState([]);

    // Fetch categories when the component mounts
    React.useEffect(() => {
        getCategories()
            .then((data) => setCategories(data))
            .catch((error) => console.error(error));
    }, [categories]); // Add 'categories' to the dependency array

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
                    {/* Display the CategoryForm component */}
                    <CategoryForm />
                </div>
            </div>
        </div>
    );
};