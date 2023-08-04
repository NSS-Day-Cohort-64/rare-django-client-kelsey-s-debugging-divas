import React, { useState } from 'react';
import { createPost } from '../../managers/PostManager';
import { useNavigate } from 'react-router-dom';

export const PostForm = ({ categories, tags, token }) => {
    const [postTitle, setPostTitle] = useState('');
    const [postImageURL, setPostImageURL] = useState('');
    const [postContent, setPostContent] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            user_id: token,
            title: postTitle,
            image_url: postImageURL,
            content: postContent,
            category_id: selectedCategory,
            tags: selectedTags
        };

        createPost(newPost)
            .then((response) => {
                if (response) {
                    navigate(`/posts/${response.id}`)
                }
            })
    };

    return (
        <div>
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                    required
                />
                <br />
                <label htmlFor="postImageURL">Image URL:</label>
                <input
                    type="text"
                    id="postImageURL"
                    value={postImageURL}
                    onChange={(e) => setPostImageURL(e.target.value)}
                    required
                />
                <br />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    required
                />
                <br />
                <label htmlFor="categorySelect">Category:</label>
                <select
                    id="categorySelect"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
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
                <label>Tags:</label>
                {tags.map((tag) => (
                    <label key={tag.id}>
                        <input
                            type="checkbox"
                            value={tag.id}
                            checked={selectedTags.includes(tag.id)}
                            onChange={(e) =>
                                e.target.checked
                                    ? setSelectedTags([...selectedTags, tag.id])
                                    : setSelectedTags(selectedTags.filter((id) => id !== tag.id))
                            }
                        />
                        {tag.label}
                    </label>
                ))}
                <br />
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
};
