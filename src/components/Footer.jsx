import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer(props) {
  return (
    <footer>
      <p>This portfolio is for representation purposes only.</p>
      <p>You can stalk me here:</p>
      <div className="sm-links">
        <a href="https://twitter.com/snacksandcode" target="_blank" rel="noreferrer" className="link"><FaTwitter /></a>
        <a href="https://github.com/codewithmero" target="_blank" rel="noreferrer" className="link"><FaGithub className="link" /></a>
        <a href="https://www.linkedin.com/in/yatendra-singh-85873824b/" target="_blank" rel="noreferrer" className="link"><FaLinkedin className="link" /></a>
      </div>
    </footer>
  );
}

export default Footer;