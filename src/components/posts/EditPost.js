import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editPost, getSinglePost } from '../../managers/PostManager'
import { getCategories } from '../../managers/CategoryManager'




export const EditPostDetails = () => {
  const navigate = useNavigate()
  const { postId } = useParams();
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState()

  const [currentPost, setCurrentPost] = useState({})

  useEffect(() => {
    getSinglePost(postId)
      .then((data) => {
        setCurrentPost(data);
        setSelectedCategory(data.category.id)
      });
  }, [postId]);

  useEffect(() => {
    getCategories()
      .then((categoryList) => {
        setCategories(categoryList);
      });
  }, []);

  return (
    <form className="postForm">
      <h2 className="postForm__title">Edit Post</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            required autoFocus
            className="form-control"
            value={currentPost.title}
            onChange={(evt) => {
              setCurrentPost({ ...currentPost, title: (evt.target.value) })
            }
            }
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="image_url">Image URL: </label>
          <input
            type="text"
            name="image_url"
            required autoFocus
            className="form-control"
            value={currentPost.image_url}
            onChange={(evt) => {
              setCurrentPost({ ...currentPost, image_url: (evt.target.value) })
            }
            }
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="content">Content: </label>
          <input
            type="text"
            name="content"
            required autoFocus
            className="form-control"
            value={currentPost.content}
            onChange={(evt) => {
              setCurrentPost({ ...currentPost, content: (evt.target.value) })
            }
            }
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="category">Category: </label>
          <select
            name="category"
            required autoFocus
            className="form-control"
            value={selectedCategory}
            onChange={(evt) => {
              setSelectedCategory(parseInt(evt.target.value))
            }
            }
          >
            <option value="">Select Category</option>
            {categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </fieldset>


      <button type="submit"
        onClick={evt => {
          // Prevent form from being submitted
          evt.preventDefault()

          const post = {
            title: currentPost.title,
            image_url: currentPost.image_url,
            content: currentPost.content,
            category: selectedCategory,
          }

          // Send POST request to your API
          editPost(postId, post)
            .then(() => navigate("/posts"))
        }}
        className="btn btn-primary">save</button>
    </form>
  )
}
