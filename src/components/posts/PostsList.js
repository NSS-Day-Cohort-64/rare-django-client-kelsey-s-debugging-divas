import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { getAllPosts } from "../../managers/PostManager";
import { PostForm } from "./PostForm";

export const PostList = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllPosts().then((postsData) => setPosts(postsData));
  }, []);

  return (
    <div className="container">
      <h1 className="posts-title">All Posts</h1>

      <article className="post">
        {posts.map((postObject) => {
          return (
            <div className="post" key={postObject.id}>
              <div className="title">
                <Link to={`/posts/${postObject.id}`}>{postObject.title}</Link>
              </div>
              <section className="post-data">
                <div>{postObject.author.first_name} {postObject.author.last_name}</div>
                <div>{postObject.category.label}</div>
              </section>
            </div>
          );
        })}
      </article>

      <Link to="/posts/create" className="add-post-button">Add Post +</Link>

    </div>
  );
};
