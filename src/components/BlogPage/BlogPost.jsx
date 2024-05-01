import React, { useState, useEffect } from 'react';
import Footer from '../Footer';

const BlogPost = () => {
  return (
    <div className="blog-post">
      <header>
        <div className="post-header">
          <h1>title</h1>
          <h5>Authored by: Anoop Siddharth</h5>

        </div>
      </header>
      <main>
        <div className="post-content"/>
        <p>content</p>
        <img src="http://via.placeholder.com/640x360" style={{width:'70%',}}></img>
      </main>
      <Footer/>
    </div>
  );
};

export default BlogPost;