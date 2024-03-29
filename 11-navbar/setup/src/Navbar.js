import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLink, setShowLink] = useState(true);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  // adjusting the height based on the number of links present
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLink) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLink]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={() => setShowLink(!showLink)}>
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          {/* here the links are related to our project and are handled by the 
        react router , so use react router to organize them */}
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* here the links are for social media and do not depnds on our project 
        hence fetch it form some API or keep it constant. */}
        <ul className="social-icons">
          <li>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
          </li>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
