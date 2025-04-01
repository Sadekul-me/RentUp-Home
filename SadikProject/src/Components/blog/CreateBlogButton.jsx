import React from "react";
import { Link } from "react-router-dom";

const CreateBlogButton = () => {
  return (
    <Link to="/add-new-blog">
      <button className="create-btn">
        Create New Blog
      </button>
    </Link>
  );
};

export default CreateBlogButton;
