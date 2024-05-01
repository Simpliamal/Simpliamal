import React, { useState, useEffect } from "react";
import "./Blog.css";
import Footer from "../Footer";
import {Link} from "react-router-dom";

const Blog = () => {
  return (
    <div className="home-page">
      <header>
        <div className="header-bg">
          <div className="logo">
            <b style={{ color: "#004aad" }}>Simpli</b>&nbsp;
            <b style={{ color: "#333132" }}>amal's</b>
          </div>
          <br />
          <div className="cursive">
            <h1>Blog</h1>
          </div>
        </div>
      </header>

      <main>
        <div className="sidebar-container">
        <div className="sidebar">
          <p>
            Learn about the exciting concepts that we at Simpli amal apply to
            develop business strategies for you!
          </p>
          <p>Blog posts coming soon...</p>
        </div></div>

        <div className="posts-container">
              <div className="post-box">
                <img src="http://via.placeholder.com/640x360"/>
                <h3>title</h3>
                <p>content</p>
                <Link to="/post1">Read More</Link>
              </div>
        </div>
        <div className="coming-soon">Coming soon!</div>

      </main>
      <div className="white-line"></div>
      <Footer />
    </div>
  );
};

export default Blog;
