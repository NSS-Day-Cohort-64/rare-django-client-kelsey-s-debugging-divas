import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSinglePost } from '../../managers/PostManager'

function PostDetails() {
  const [post, setPost] = useState({})
  const { postId } = useParams()

  useEffect(() => {
    getSinglePost(postId)
      .then(setPost)
  }, [postId])

  return (
    <section className="post">
      <h3 className="post__title">{post.title}</h3>
      <div className="post__author">{post.author?.first_name} {post.author?.last_name}</div>
      <div className="post__category">{post.category?.label}</div>
      <div className="post__publicationDate">{post.publication_date}</div>
      <br />
      <div className="post__content">{post.content}</div>
    </section>
  )
}

export default PostDetails
