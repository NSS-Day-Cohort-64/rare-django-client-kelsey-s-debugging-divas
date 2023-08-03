import React, { useState } from 'react';
import { createTag } from '../../managers/TagManager';

export const TagForm = ({ handleCreateTag }) => {
  const [tagLabel, setTagLabel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTag = {
      label: tagLabel
    };

    handleCreateTag(newTag); // Call the function to handle category creation
    setTagLabel(''); // Clear the input field
  };

  return (
    <div className="form">
      <h2 className="form-title">Create Tag</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tagLabel">Name:</label>
        <input
          type="text"
          id="tagLabel"
          value={tagLabel}
          onChange={(e) => setTagLabel(e.target.value)}
          required
        />
        <br />
        <button type="submit">Create Tag</button>
      </form>
    </div>
  );
};
