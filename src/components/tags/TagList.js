import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllTags, deleteTag } from "../../managers/TagManager";
import "./tags.css";

export const TagList = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getAllTags().then((tagData) => setTags(tagData));
  }, []);

  const handleDeleteTag = (tagId) => {
    const shouldDelete = window.confirm("Are you sure you want to delete this tag?");

    if (shouldDelete) {
      deleteTag(tagId).then(() => {
        // Filter out the deleted tag and update the state
        const updatedTags = tags.filter((tag) => tag.id !== tagId);
        setTags(updatedTags);
      });
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-header">Tags</h1>
      <div className="tag-container">
        <div className="left-side">
          <ul className="list">
            {tags.map((tag) => (
              <li key={tag.id} className="list-items">
                <div className="list-name">{tag.label}</div>
                <div className="edit-and-delete">
                  <button className="edit-button">
                    <Link to={`/tags/${tag.id}/edit`}>Edit</Link>
                  </button>{""}
                  <button className="delete-button">Delete
                  </button>{" "}
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteTag(tag.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button className="create-button">
            <Link to="/tags/create">Create New Tag</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
