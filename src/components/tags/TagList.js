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
      .then(() => {
        const updatedTags = [...tags, newTag];
        updatedTags.sort((a, b) => a.label.localeCompare(b.label));
        setTags(updatedTags);
      })
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