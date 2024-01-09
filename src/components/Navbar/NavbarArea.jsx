// Import the React library to use its features.
import React from 'react';

// Import the CSS file for styling the Navbar component.
import './NavbarArea.css';

// Define an array of link objects containing name and icon for each link.
const links = [
  { name: 'Home', icon: '/01.png' },
  { name: 'Orders', icon: '/02.png' },
  { name: 'Products', icon: '/03.png' },
  { name: 'Delivery', icon: '/04.png' },
  { name: 'Marketing', icon: '/05.png' },
  { name: 'Analytics', icon: '/06.png' },
  { name: 'Payments', icon: '/07.png' },
  { name: 'Tools', icon: '/08.png' },
  { name: 'Discounts', icon: '/09.png' },
  { name: 'Audience', icon: '/10.png' },
  { name: 'Appearance', icon: '/11.png' },
  { name: 'Plugins', icon: '/12.png' },
];

// Define the Navbar functional component.
const Navbar = () => {
  return (
    // Navbar container div with a class name 'Navbar'.
    <div className="Navbar">
      {/* Wrapper div to contain the Navbar content with a class name 'Wrapper'. */}
      <div className="Wrapper">
        {/* Upper section containing the company icon and links. */}
        <div className="Upper">
          {/* Company icon and name section with class name 'Icon'. */}
          <div className="Icon">
            {/* Company icon with a class name 'Image1'. */}
            <img src="/2.png" alt="companyIcon" className="Image1" />
            {/* Company name section with class name 'companyName'. */}
            <div className="companyName">
              {/* Two spans for the company name and 'Visit Store'. */}
              <span>Nishyan</span>
              <span>Visit Store</span>
            </div>
            {/* Downward arrow icon with class name 'Image2'. */}
            <img src="/1.png" alt="down-mark" className="Image2" />
          </div>
          {/* Links section containing all the links with class name 'Links'. */}
          <div className="Links">
            {/* Map through the links array and render each link item. */}
            {links.map((link) => (
              // Each link item with a class name 'linkItem' and a unique key based on the icon.
              <div className="linkItem" key={link.icon}>
                {/* Link icon for each item. */}
                <img src={link.icon} alt="icon" />
                {/* Link name for each item. */}
                <span>{link.name}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom section containing wallet information. */}
        <div className="Bottom">
          {/* Wallet image section with class name 'walletImg'. */}
          <div className="walletImg">
            {/* Wallet icon. */}
            <img src="/wallet.png" alt="wallet" />
          </div>
          {/* Wallet information section with class name 'walletInfo'. */}
          <div className="walletInfo">
            {/* Text indicating available credits. */}
            <span>Available credits</span>
            {/* Display the available credits amount. */}
            <span>222.10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the Navbar component to use it in other parts of the application.
export default Navbar;
