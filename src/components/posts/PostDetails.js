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
      <img src={post.image_url} className="article-picture" />
      <div className="post__content">{post.content}</div> <br></br>
      <div className="post__publicationDate">published: {post.publication_date}</div>
      <div className="post__author">author: {post.author?.first_name} {post.author?.last_name}</div>
    </section>
  )
}

export default PostDetails


