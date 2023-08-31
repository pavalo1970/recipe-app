import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

// Sidebar component definition
export default function Sidebar({ links, close }) {
  const location = useLocation();

  return (
    <div className="sidebar" onClick={close}>
      {/* Map through the provided links and create sidebar links */}  
      {links.map((link) => (
        <Link
          to={link.path}
          className={
            location.pathname === link.path
              ? "sidebar-link active"
              : "sidebar-link"
          }
          key={link.name}
        >
        {/* Display the FontAwesome icon */}
          <FontAwesomeIcon icon={link.icon} />
          {link.name}
        </Link>
      ))}
    </div>
  );
}






