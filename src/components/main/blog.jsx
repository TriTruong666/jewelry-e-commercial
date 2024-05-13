import React from "react";
import "../../styles/main/blog.css";
import CardBlog from "../card/blogCard";
import blogs from "../card/blog";
import mainblog from "../../assets/mainblog.jpg";
import PrimaryButton from "../button/primaryBtn";
const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <strong>STRONG WORDS</strong>
        <h2>BLOG</h2>
      </div>
      <div className="blog">
        <div className="inner-blog">
          <div className="main-blog">
            <img src={mainblog} alt="" />
            <strong>STYLES AND TRENDS</strong>
            <h3>Inspiring stylizations with the use of jewelry</h3>
            <p>
              Discover unusual styles that will delight your eyes and inspire
              you to experiment with jewelry as a perfect accessory
            </p>
          </div>
          <div className="other-blog">
            {blogs.map((blog, index) => (
              <CardBlog
                key={index + 1}
                src={blog.src}
                type={blog.type}
                title={blog.title}
                content={blog.content}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="blog-btn">
        <PrimaryButton path="/blog" content="Read our blogs" />
      </div>
    </div>
  );
};
export default Blog;
