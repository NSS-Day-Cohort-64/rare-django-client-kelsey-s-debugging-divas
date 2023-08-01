import React from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../managers/CategoryManager";
import { CategoryForm } from "./CategoryForm";

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
        <div>
            <h2>Category Management</h2>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        {category.label}{" "}
                        <Link to={`/categories/${category.id}/edit`}>Edit</Link>{" "}
                        <button>Delete</button>
                    </li>
                ))}
            </ul>

            {/* Display the CategoryForm component */}
            <CategoryForm />
        </div>
    );
};