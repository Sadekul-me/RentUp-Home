import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";  // Link Import
import "./BlogList.css";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [image, setImage] = useState('');

  useEffect(() => {
    axios
      .get("http://localhost:3000/blogs")
      .then((response) => setBlogs(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleEdit = (blog) => {
    setSelectedBlog(blog);
    setShowForm(true);
  };

  const handleDelete = (blogId) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      axios
        .delete(`http://localhost:3000/blogs/${blogId}`)
        .then(() => {
          alert("Blog deleted!");
          setBlogs(blogs.filter((blog) => blog.id !== blogId));
        })
        .catch((error) => console.log(error));
    }
  };

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSave = () => {
    axios.put(`http://localhost:3000/blogs/${selectedBlog.id}`, { 
        ...selectedBlog, 
        image: image || selectedBlog.image 
      })
      .then((response) => {
        setBlogs(blogs.map((blog) => (blog.id === selectedBlog.id ? response.data : blog)));
        setShowForm(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="blog-list-container">
      <div className="content grid3 mtop">
        {blogs.map((blog) => (
          <div className="box shadow" key={blog.id}>
            <div className="img">
              <img src={blog.image} alt={blog.title} />
              <div className="blog-buttons">
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleEdit(blog)}
                  startIcon={<Edit />}
                  sx={{ border: "none", marginRight: "10px" }}
                />
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleDelete(blog.id)}
                  startIcon={<Delete />}
                  sx={{ border: "none" }}
                />
              </div>
            </div>
            <div className="text">
              <div className="category flex">
                <span
                  style={{
                    background: blog.type === "For Sale" ? "#25b5791a" : "#ff98001a",
                    color: blog.type === "For Sale" ? "#25b579" : "#ff9800",
                  }}
                >
                  {blog.type}
                </span>
                <i className="fa fa-heart"></i>
              </div>
              <h4>{blog.title}</h4>
              <p>
                <i className="fa fa-location-dot"></i> {blog.location}
              </p>
            </div>
            <div className="button flex">
              <div>
                <button className="btn2">${blog.price}</button>{" "}
                <label>/sqft</label>
              </div>
              <span>{blog.type}</span>
            </div>

            {/* View Details Button */}
            <Link to={`/blog/${blog.id}`}>
              <Button variant="contained" color="primary">View Details</Button>
            </Link>
          </div>
        ))}
      </div>

      {showForm && selectedBlog && (
        <div className="edit-form">
          <h2>Edit Blog</h2>
          <input
            type="text"
            value={selectedBlog.title}
            onChange={(e) =>
              setSelectedBlog({ ...selectedBlog, title: e.target.value })
            }
          />
          <input
            type="text"
            value={selectedBlog.location}
            onChange={(e) =>
              setSelectedBlog({ ...selectedBlog, location: e.target.value })
            }
          />
          <input
            type="text"
            value={selectedBlog.type}
            onChange={(e) =>
              setSelectedBlog({ ...selectedBlog, type: e.target.value })
            }
            placeholder="Enter type (e.g., For Sale, Rent, etc.)"
          />
          <input
            type="number"
            value={selectedBlog.price}
            onChange={(e) =>
              setSelectedBlog({ ...selectedBlog, price: e.target.value })
            }
            placeholder="Enter price"
          />
          <input
            type="file"
            onChange={handleImageChange}
            className="image-input"
          />
          <img
            src={image || selectedBlog.image}
            alt="Selected"
            className="image-preview"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setShowForm(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default BlogList;
