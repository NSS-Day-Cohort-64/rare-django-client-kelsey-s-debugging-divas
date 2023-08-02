import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUserPosts } from '../../managers/PostManager'

export function UserPosts({ token }) {
  const [userPosts, setUserPosts] = useState([])

  useEffect(
    () => {
      getUserPosts(token).then((userPostsData) => setUserPosts(userPostsData))
    },
    [token]
  )

  return (
    <div className="container">
      <h1 className="posts-title">All Posts</h1>

      <article className="post">
        {userPosts.map(
          (postObject) => {

            return <div className="post">

              <div className="title"><Link to={`/posts/${postObject.id}`} key={postObject.id}>{postObject.title}</Link></div>
              <section className="post-data" >
                <div>{postObject.author.first_name}{postObject.author.last_name}</div>
                <div>{postObject.category.label}</div>
              </section>
            </div>
          }

        )
        }
      </article >
    </div >
  )
}
