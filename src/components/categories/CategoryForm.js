import React, { useState } from 'react';

export const CategoryForm = ({ handleCreateCategory }) => {
    const [categoryLabel, setCategoryLabel] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newCategory = {
            label: categoryLabel,
        };

        handleCreateCategory(newCategory); // Call the function to handle category creation
        setCategoryLabel(''); // Clear the input field
    };

    return (
        <div className='form'>
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