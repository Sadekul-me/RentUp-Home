import React, { useState } from "react";
import axios from "axios";
import "./addNewBlog.css";

const AddNewBlog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState('');

  // Form input handlers
  const handleInputChange = (e, setter) => setter(e.target.value);
  const handleImageChange = (e) => setImage(e.target.files[0]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !location || !price || !type || !image) {
      alert("All fields are required");
      return;
    }

    const imageReader = new FileReader();
    imageReader.onloadend = () => {
      const formData = {
        title,
        description,
        location,
        price,
        type,
        image: imageReader.result,
      };

      axios
        .post("http://localhost:5000/blogs", formData)
        .then((response) => {
          alert("Blog added!");
          // Reset the form after successful submission
          setTitle('');
          setDescription('');
          setLocation('');
          setPrice('');
          setType('');
          setImage('');
        })
        .catch((error) => {
          console.log(error);
          alert("An error occurred. Please try again.");
        });
    };
    imageReader.readAsDataURL(image);
  };

  return (
    <div className="blog-form-container">
      <h1>Create New Blog</h1>
      <form onSubmit={handleSubmit} className="blog-form">
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => handleInputChange(e, setTitle)}
            placeholder="Enter blog title"
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => handleInputChange(e, setDescription)}
            placeholder="Enter blog description"
            required
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => handleInputChange(e, setLocation)}
            placeholder="Enter location"
            required
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => handleInputChange(e, setPrice)}
            placeholder="Enter price"
            required
          />
        </div>
        <div className="form-group">
          <label>Type:</label>
          <input
            type="text"
            value={type}
            onChange={(e) => handleInputChange(e, setType)}
            placeholder="Enter type"
            required
          />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input
            type="file"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default AddNewBlog;
