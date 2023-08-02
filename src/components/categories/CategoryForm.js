import React, { useState } from 'react';
import { createCategory } from '../../managers/CategoryManager';
import "./categories.css"

export const CategoryForm = () => {
    const [categoryLabel, setCategoryLabel] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newCategory = {
            label: categoryLabel
        };

        createCategory(newCategory)
            .then((response) => {
                if (response.ok) {
                    // Clear form fields after successful category creation
                    setCategoryLabel('');
                } else {
                    throw new Error('Failed to create category. Please try again later.');
                }
            })
    };

    return (
        <div className="form">
            <h2 className="form-title">Create Category</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="categoryLabel">Name:</label>
                <input
                    type="text"
                    id="categoryLabel"
                    value={categoryLabel}
                    onChange={(e) => setCategoryLabel(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Create Category</button>
            </form>
        </div>
    );
};
