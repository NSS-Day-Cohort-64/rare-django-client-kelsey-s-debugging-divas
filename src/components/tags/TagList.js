import { useState, useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { getAllTags, createTag } from "../../managers/TagManager"
import { TagForm } from "./TagForm";
import "./tags.css"


export const TagList = () => {

  const [tags, setTags] = useState([])

  useEffect(
    () => {
      getAllTags().then((tagData) => setTags(tagData))
    },
    []
  )

  const handleCreateTag = (newTag) => {
    createTag(newTag)
      .then((response) => {
        console.log('API Response:', response);
        if (response && response.id) {
          // Add the new tag to the existing categories array
          const updatedTags = [...tags, response];
          // Sort the tags alphabetically by label before updating the state
          updatedTags.sort((a, b) => a.label.localeCompare(b.label));
          setTags(updatedTags);
        } else {
          throw new Error('Failed to create tag. Please try again later.');
        }
      })
      .catch((error) => console.error(error));
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
                  <button className="edit-button"><Link to={`/tags/${tag.id}/edit`}>Edit</Link></button>{" "}
                  <button className="delete-button">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="right-side">
          <TagForm handleCreateTag={handleCreateTag} />
        </div>
      </div>
    </div>
  );
}