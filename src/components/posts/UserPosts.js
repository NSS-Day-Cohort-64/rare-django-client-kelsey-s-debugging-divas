import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deletePost, getUserPosts } from '../../managers/PostManager'
import "./posts.css";


export function UserPosts({ token }) {
  const [userPosts, setUserPosts] = useState([])

  useEffect(() => {
    getUserPosts(token).then((userPostsData) => setUserPosts(userPostsData));
  }, [token]);

  const handleDeletePost = (postId) => {
    const shouldDelete = window.confirm("Are you sure you want to delete this post?");

    if (shouldDelete) {
      deletePost(postId).then(() => {
        const updatedPosts = userPosts.filter((post) => post.id !== postId);
        setUserPosts(updatedPosts);
      });
    }
  };



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
              <div>{postObject.category.label}</div> <br></br>

              <div className='post-buttons'>
                <button className="delete-icon-button"><i className="fas fa-trash" onClick={() => handleDeletePost(postObject.id)}></i></button>
                <Link to={`/posts/${postObject.id}/edit`} className="edit-icon-button">
                  <i className="fas fa-cog"></i>
                </Link>
              </div>
            </section>
          </div>
        ))}
      </article>


    </div>
  );
};
