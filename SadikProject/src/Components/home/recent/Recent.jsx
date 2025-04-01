import React from "react";
import Heading from "../../common/Heading"; // Heading component import
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./recent.css"; // CSS file import
import RecentCard from "./RecentCard"; // RecentCard component import
import CreateBlogButton from "../../blog/CreateBlogButton";

const Recent = () => {
  return (
    <>
      <section className="recent padding">
        <div className="createblog">
          <h2 className="createblog">Blog Post</h2>
          <CreateBlogButton />
          
        </div>
     

        <div className="container">
          {/* Heading Section */}
          <Heading
            title="Recent Property Listed"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />

          {/* Recent Cards Display */}
          <RecentCard />
        </div>
      </section>
    </>
  );
};

export default Recent;
