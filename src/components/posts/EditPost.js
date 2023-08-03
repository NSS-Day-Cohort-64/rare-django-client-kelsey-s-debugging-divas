import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { editPost, getSinglePost } from '../../managers/PostManager'
import { getCategories } from '../../managers/CategoryManager'


export function EditPostDetails({ onSave }) {

  const { postId } = useParams()

  const [categories, setCategories] = useState({})
  const [post, setPost] = useState({
    user_id: 0,
    category_id: 0,
    title: "",
    publication_date: "",
    image_url: "",
    content: "",
    approved: 0
  })

  useEffect(() => {
    getSinglePost(postId)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  useEffect(() => {
    getCategories()
      .then((categoryList) => {
        setCategories(categoryList);
      });
  }, []);


  //this is totally a work in progress..
  const handleSaveButtonClick = (event) => {
    event.preventDefault();
    editPost(postId, post)
      .then((response) => response.json())
      .then((updatedPost) => {
        onSave(updatedPost);
        setPost(updatedPost)
        window.alert("Your Post Has Been Successfully Updated");
      })
      .catch((error) => {
        // Handle any errors that occurred during the update process
        console.error("Error updating post:", error.message);
      });
  };


  return (
    ""
  )
}