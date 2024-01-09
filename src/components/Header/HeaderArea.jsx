// Importing necessary modules and styles
import React from 'react';
import './HeaderArea.css';

// Define the Header functional component
const Header = () => {
  return (
    // Main container for the header section
    <div className="Header">
      
      {/* Information section for Payments */}
      <div className="info">
        <span>Payments</span>
        
        {/* Details section within Info, including an image and text */}
        <div className="infoDetails">
          <img src="/Help.png" alt="help" /> {/* Image for help icon */}
          <span>How it works</span>          {/* Text describing how it works */}
        </div>
      </div>

      {/* Search bar section */}
      <div className="Search">
        <img src="/search.png" alt="searchicon" /> {/* Search icon */}
        <span>Search features, tutorials, etc.</span> {/* Placeholder text for search */}
      </div>

      {/* Header icons section */}
      <div className="headerIcons">
        
        {/* Circular icon container */}
        <div className="headerIconsImage1">
          <img src="/002.png" alt="" /> {/* Image inside circular background */}
        </div>
        
        {/* Another icon */}
        <img src="/001.png" alt="" /> {/* Second icon */}
      </div>
    </div>
  );
};

// Export the Header component for use in other parts of the application
export default Header;
