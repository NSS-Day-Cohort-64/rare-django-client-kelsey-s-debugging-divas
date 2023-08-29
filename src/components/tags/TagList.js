import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllTags } from "../../managers/TagManager";
import "./tags.css";

export const TagList = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getAllTags().then((tagData) => setTags(tagData));
  }, []);

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
                  <button className="delete-button">Delete</button>
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
