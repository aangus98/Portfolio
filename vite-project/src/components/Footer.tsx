import React from "react";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaGoodreads } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Andrew Angus Portfolio</p>
      <ul>
        <a href="https://github.com/aangus98"><FaGithub /></a>
      </ul>
      <ul>  
        <a href="https://www.linkedin.com/in/andrew-angus-3404551a5/"><TbBrandLinkedin /></a>
      </ul>
      <ul>
        <a href="https://www.goodreads.com/user/show/174972405-andrew-angus"><FaGoodreads /></a>
      </ul>
    </footer>
  );
};

export default Footer;
