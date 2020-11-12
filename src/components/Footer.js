import React from "react";
import "./css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="ui container">
        <div className="ui grid">
          <div className="row">
            <p className="center">Made by: Amabel Levint</p>
          </div>
          <div className="row">
            <a
              className="center"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/amabellevint/"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
