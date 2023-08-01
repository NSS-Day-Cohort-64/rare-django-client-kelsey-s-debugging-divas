import { useState, useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { getPosts } from "../../managers/PostManager"


export const PostList = () => {

  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  useEffect(
    () => {
      getPosts().then((postsData) => setPosts(postsData))
    },
    []
  )

  return (
    <div className="container">
      <h1 className="posts-title">All Posts</h1>

      <article className="post">
        {posts.map(
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
