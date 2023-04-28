import React from "react";
import Link from "next/link";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <Link href="/">
        <span className="footer__brand">Ecologic memories</span>
      </Link>
      {/* Add links here */}
      <div className="footer__media">
        <Link href="/">
          <a className="footer__link">
            <AiOutlineGithub></AiOutlineGithub>
          </a>
        </Link>
        <Link href="/">
          <a className="footer__link">
            <AiOutlineLinkedin></AiOutlineLinkedin>
          </a>
        </Link>
        <Link href="/">
          <a className="footer__link">
            <AiOutlineTwitter></AiOutlineTwitter>
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
