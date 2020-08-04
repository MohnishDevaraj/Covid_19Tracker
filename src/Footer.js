import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="li">
      <p>&copy; Copyrights 2020 Mohnish Devaraj - All Rights Reserved</p>
      <ul>
        <li>
          <a href="https://www.facebook.com/mohnish.devaraj" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/MohnishDevaraj" target="_blank">
            <i className="fa fa-twitter-square" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
            target="_blank"
          >
            <i className="fa fa-google-plus-square" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://www.github.com/MohnishDevaraj" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://in.linkedin.com/in/mohnish-devaraj-15b2921b0"
            target="_blank"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/mohnishdevaraj" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
