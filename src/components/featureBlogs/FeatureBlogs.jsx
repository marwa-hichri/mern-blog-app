import React from "react";
import "./featureBlog.css";
import mountainImg1 from "../../assets/mountain1.jpg";
import mountainImg2 from "../../assets/mountain2.jpg";
import mountainImg3 from "../../assets/mountain3.jpg";
import { MdOutlinePreview } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";

const FeatureBlogs = () => {
  return (
    <div className="containera">
      <div className="wrappera">
        <h3>Featured Blogs</h3>
        <div className="blogs">
          <div className="left">
            <div className="mainBlog">
              <img src={mountainImg1} alt="" />
              <div className="mainBlogData">
                <div className="categoryAndMetadata">
                  <span className="category">Nature</span>
                  <div className="metadata">
                    <MdOutlinePreview /> 123 views
                  </div>
                  <div className="metadata">
                    <AiFillLike /> 100 likes
                  </div>
                </div>
                <h4>Blog 1 title</h4>
                <p className="blogDesc">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                  voluptates repellat itaque ut sunt minus velit expedita, eum
                  perspiciatis illum saepe dicta repellendus provident, esse
                  enim deleniti quidem inventore accusamus!
                </p>
                <div className="authorAndCreatedAt">
                  <span>Author: </span>
                  <span>Villy </span>
                  <span>Create: </span>
                  <span>27-05-2023</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="secondaryBlog">
              <img src={mountainImg2} alt="" />
              <div className="secondaryBlogData">
                <h4>Blog 2 title</h4>
                <p className="desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Odit, hic inventore? Atque?
                </p>
                <div className="authorAndCreatedAt">
                  <span>
                    <span>Author:</span> Villy
                  </span>
                  <span>
                    <span>Created:</span> 27-05-2023
                  </span>
                </div>
              </div>
            </div>
            <div className="secondaryBlog">
              <img src={mountainImg3} alt="" />
              <div className="secondaryBlogData">
                <h4>Blog 3 title</h4>
                <p className="desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Odit, hic inventore? Atque?
                </p>
                <div className="authorAndCreatedAt">
                  <span>
                    <span>Author:</span> Villy
                  </span>
                  <span>
                    <span>Created:</span> 27-05-2023
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBlogs;
