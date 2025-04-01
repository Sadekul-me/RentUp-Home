import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./BlogDetails.css"; // Importing the CSS for styling

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);

  // Fetch blog data based on ID
  useEffect(() => {
    axios
      .get(`http://localhost:5000/blogs/${id}`)
      .then((response) => setBlog(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  // Check if blog data is loaded
  if (!blog) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="blog-details-container">
      <div className="blog-details">
        <h1 className="blog-title">{blog.title}</h1>
        <p className="blog-location">
          <i className="fa fa-location-dot"></i> {blog.location}
        </p>
        <div className="blog-image">
          <img src={blog.image} alt={blog.title} />
        </div>
        <div className="blog-info">
          <div className="blog-type">
            <span
              className={blog.type === "For Sale" ? "sale-type" : "rent-type"}
            >
              {blog.type}
            </span>
          </div>
          <div className="blog-price">
            <p>
              <strong>Price:</strong> {blog.price} /sqft
            </p>
          </div>
        </div>
        <div className="blog-description">
          <h3>Description:</h3>
          <p>{blog.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
