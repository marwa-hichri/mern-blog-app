import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="wrapperf">
        <div className="col">
          <h2>About Personal Blog</h2>
          <p>
            A blog is an online writing genre characterized by episodic entries
            that may be thematically related, related by being a particular
            person’s thoughts, or be sequential in time like a diary or log. In
            fact, the word blog is short for weblog — a log of events maintained
            on a website. A blog application is a software program that provides
            an online environment and features for a blogger.
          </p>
        </div>
        <div className="col">
          <h2>Contacts</h2>
          <span>Phone: +123 456 789</span>
          <span>YouTube: Hichri Marwa</span>
          <span>GitHub: Hichri Marwa</span>
        </div>
        <div className="classes.col">
          <h2>Location</h2>
          <span>Continent: Europe</span>
          <span>Country: tunis</span>
          <span>Current Location: zaghouan</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
