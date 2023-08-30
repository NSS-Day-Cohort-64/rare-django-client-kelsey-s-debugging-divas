import React, { useState } from 'react';
import { createPost } from '../../managers/PostManager';
import { useNavigate } from 'react-router-dom';
import { getUserByToken } from '../../managers/TokenManager';

export const PostForm = ({ categories, tags, token }) => {
    const [postTitle, setPostTitle] = useState('');
    const [postImageURL, setPostImageURL] = useState('');
    const [postContent, setPostContent] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = await getUserByToken(token);

        if (user) {
            const newPost = {
                author: user.user,
                title: postTitle,
                image_url: postImageURL,
                content: postContent,
                category: selectedCategory,
                approved: true,
                publication_date: new Date().toISOString(),
                tags: selectedTags
            };

            createPost(newPost)
                .then((response) => response.json())
                .then((data) => {
                    if (data) {
                        navigate(`/posts/${data.id}`);
                    }
                });

        }
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
