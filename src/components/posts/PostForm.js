import React, { useState } from 'react';
import { createPost } from '../../managers/PostManager';

export const PostForm = ({ onPostCreated, categories, tags }) => {
    const [postTitle, setPostTitle] = useState('');
    const [postImageURL, setPostImageURL] = useState('');
    const [postContent, setPostContent] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            title: postTitle,
            image_url: postImageURL,
            content: postContent,
            category_id: selectedCategory,
            tags: selectedTags,
            // user_id: Add user ID here if applicable
        };

        createPost(newPost)
            .then((response) => {
                if (response.ok) {
                    // Clear form fields after successful post creation
                    setPostTitle('');
                    setPostImageURL('');
                    setPostContent('');
                    setSelectedCategory('');
                    setSelectedTags([]);

                    // Notify parent component about the new post
                    onPostCreated();
                } else {
                    throw new Error('Failed to create post. Please try again later.');
                }
            })
            .catch((error) => {
                // Handle error (e.g., display error message to the user)
                console.error(error);
            });
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
