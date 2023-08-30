import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUserPosts } from '../../managers/PostManager'
import "./posts.css";

export function UserPosts({ token }) {
  const [userPosts, setUserPosts] = useState([])

  useEffect(() => {
    getUserPosts(token).then((userPostsData) => setUserPosts(userPostsData));
  }, [token]);
  


return (
  <div className="container">
    <h1 className="posts-title">My Posts</h1>

    <article>
      {userPosts.map((postObject) => (
        <div className="post" key={postObject.id}>
          <div className="title">
            <Link to={`/posts/${postObject.id}`}>{postObject.title}</Link>
          </div>
          <section>
            <div>
              {postObject.author.first_name} {postObject.author.last_name}
            </div>
            <div>{postObject.category.label}</div>
          </section>
        </div>
      ))}
    </article>

    
  </div>
);
};
