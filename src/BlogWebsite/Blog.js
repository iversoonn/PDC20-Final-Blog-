import { useState } from 'react';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '', image: '' });

  // Handle input change for new post
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  // Handle form submission to add new post
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new post to the posts array
    setPosts((prevPosts) => [...prevPosts, newPost]);
    // Clear the form
    setNewPost({ title: '', content: '', image: '' });
  };

  return (
    <div className="blog">
      <h2 className="mb-4">Blog Posts</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Content</label>
          <textarea
            className="form-control"
            id="content"
            name="content"
            value={newPost.content}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL (optional)</label>
          <input
            type="url"
            className="form-control"
            id="image"
            name="image"
            value={newPost.image}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Post</button>
      </form>
      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.content}</p>
              {post.image && <img src={post.image} alt={post.title} className="img-fluid mb-2" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
