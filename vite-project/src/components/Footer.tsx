import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Andrew Angus Portfolio</p>
      <ul>
        <a href="https://github.com/aangus98">Github</a>
      </ul>
      <ul>  
        <a href="https://www.linkedin.com/in/andrew-angus-3404551a5/">Linkedin</a>
      </ul>
      <ul>
        <a href="https://www.goodreads.com/user/show/174972405-andrew-angus">Goodreads</a>
      </ul>
    </footer>
  );
};

export default Footer;
