import React from "react";
import "./App.css";
import Pages from "./Components/pages/pages.jsx";
import AddNewBlog from "./Components/blog/AddNewBlog.jsx";
import BlogDetails from "./Components/blog/BlogDetails.jsx"; // Import BlogDetails Component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // React Router v6

function App() {
  return (
    <Router>
      <div>
        {/* Create Blog Button */}
        {/* You can add a button here to navigate to add-new-blog */}

        {/* Pages Component */}
        <Routes>
          <Route path="*" element={<Pages />} />
          <Route path="/add-new-blog" element={<AddNewBlog />} />
          <Route path="/blog/:id" element={<BlogDetails />} /> {/* Add BlogDetails Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
