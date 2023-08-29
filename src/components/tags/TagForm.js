import React, { useState } from 'react';
import { createTag } from "../../managers/TagManager";
import { useNavigate } from 'react-router-dom';

export const TagForm = ({ token }) => {
  const [tagLabel, setTagLabel] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTag = {
      label: tagLabel
    };

    createTag(newTag, token).then((response) => {
      // Check if the response status is 201 (Created)
      if (response.status === 201) {
        setTagLabel('');
        // Navigate the user back to the tag list
        navigate('/tags');
      }
    });
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
