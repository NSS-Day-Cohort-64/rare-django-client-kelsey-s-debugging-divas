import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editPost, getSinglePost } from '../../managers/PostManager'
import { getCategories } from '../../managers/CategoryManager'
import { getAllTags } from '../../managers/TagManager'



export function EditPostDetails() {

  const { postId } = useParams()

  const [categories, setCategories] = useState([])
  const [tags, setTags] = useState([])
  const [post, setPost] = useState({
    user_id: 0,
    category_id: 0,
    title: "",
    image_url: "",
    content: ""
  })

  const navigate = useNavigate()


  useEffect(() => {
    getSinglePost(postId)
      .then((data) => {
        setPost(data);
      });
  }, [postId]);

  useEffect(() => {
    getCategories()
      .then((categoryList) => {
        setCategories(categoryList);
      });
  }, []);

  useEffect(() => {
    getAllTags()
      .then((tagList) => {
        setTags(tagList);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault()
    editPost(postId, post)
      .then(() => {
        navigate(`/posts/${post.id}`)
      })
  };


  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
          type="text"
          id="postTitle"
          value={post.title}
          onChange={(e) => {
            const copy = { ...post };
            copy.title = e.target.value;
            setPost(copy)
          }}
          required
        />
        <br />
        <label htmlFor="postImageURL">Image URL:</label>
        <input
          type="text"
          id="postImageURL"
          value={post.image_url}
          onChange={(e) => {
            const copy = { ...post };
            copy.image_url = e.target.value;
            setPost(copy)
          }}
          required
        />
        <br />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          value={post.content}
          onChange={(e) => {
            const copy = { ...post };
            copy.content = e.target.value;
            setPost(copy)
          }}
          required
        />
        <br />
        <label htmlFor="categorySelect">Category:</label>
        <select
          id="categorySelect"
          value={post.category_id}
          onChange={(e) => {
            const copy = { ...post };
            copy.category_id = e.target.value;
            setPost(copy)
          }}
          required
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.label}
            </option>
          ))}
        </select>
        <br />
        <button type="submit">Edit Post</button>
      </form>
    </div>
  );
}

{/* <br />
        <label>Tags:</label>
{
  tags.map((tag) => (
    <label key={tag.id}>
      <input
        type="checkbox"
        value={post.tag.id}
        checked={selectedTags.includes(tag.id)}
        onChange={(e) =>
          e.target.checked
            ? setSelectedTags([...selectedTags, tag.id])
            : setSelectedTags(selectedTags.filter((id) => id !== tag.id))
        }
      />
      {tag.label}
    </label>
  ))
} */}