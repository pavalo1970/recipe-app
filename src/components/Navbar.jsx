import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

// Navbar component
export default function Navbar() {
  // State to manage sidebar visibility
  const [showSidebar, setShowSidebar] = useState(false);
  // Get current location using the useLocation hook from react-router-dom
  const location = useLocation();
  // Array of links for the navbar
  const links = [
    {
      name: "Home",
      path: "/src/pages/RecipeListPage",
      icon: faHome,
    },
    {
      name: "Recipes",
      path: "/src/pages/RecipePage",
      icon: faList,
    },
    {
      name: "Settings",
      path: "/src/pages/Settings",
      icon: faCog,
    },
  ];


  // Function to close the sidebar
  function closeSidebar() {
    setShowSidebar(false);
  }


  return (
    <>
      <div className="navbar container">
        <Link to="/" className="logo">
          F<span>oo</span>dieFiesta
        </Link>
      {/* Display navigation links */}
        <div className="nav-links">
          {links.map((link) => (
            <Link
              className={location.pathname === link.path ? "active" : ""}
              to={link.path}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
      {/* Sidebar button */}  
        <div
          onClick={() => setShowSidebar(true)}
          className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    {/* Render the Sidebar component when showSidebar is true */}  
      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </>
  );
}


