import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ posts }) => {
  return (
    <div className="posts-container">
        <div className="post-box">
          <Link to="/post1">
            <img src="http://via.placeholder.com/640x360" alt="Post Image" />
            <p>preview text</p>
          </Link>
        </div>
    </div>
  );
};

export default Posts;