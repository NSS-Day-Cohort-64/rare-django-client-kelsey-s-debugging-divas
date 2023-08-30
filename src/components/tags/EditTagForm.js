import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTag, editTag } from '../../managers/TagManager';

export const EditTagForm = () => {
  const { tagId } = useParams();
  const navigate = useNavigate();
  const [tag, setTag] = useState({ label: '' });

  useEffect(() => {
    getTag(tagId).then(tagData => {
      setTag(tagData);
    });
  }, [tagId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTag(tagId, tag).then(() => {
      // Navigate back to tag list after successful edit
      navigate('/tags');
    });
  };

  return (
    <div className="edit-tag-form">
      <h2>Edit Tag</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tagLabel">Name:</label>
        <input
          type="text"
          id="tagLabel"
          value={tag.label}
          onChange={(e) => setTag({ ...tag, label: e.target.value })}
          required
        />
        <br />
        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate('/tags')}>Cancel</button>
      </form>
    </div>
  );
};

;
