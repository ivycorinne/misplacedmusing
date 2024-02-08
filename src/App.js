// App.js

import React, { useEffect } from 'react';
import './App.css';
import logo from './logo.png'; // Import the logo image
import headerImage from './header-image-small.png'; // Import the header image

function App() {
  useEffect(() => {
    // Add the script dynamically
    const script = document.createElement('script');
    script.src = 'https://substackapi.com/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Set up the CustomSubstackWidget object
    window.CustomSubstackWidget = {
      substackUrl: "misplacedmusing.substack.com",
      placeholder: "example@gmail.com",
      buttonText: "Subscribe",
      theme: "custom",
      colors: {
        primary: "#7E7A7A36",
        input: "#000000",
        email: "#FFFFFF",
        text: "#D54545",
      }
    };

    // Clean up
    return () => {
      document.body.removeChild(script);
      delete window.CustomSubstackWidget;
    };
  }, []);

  return (
    <div className="App">
      <header className="Header">
        <img src={headerImage} alt="Header" className="HeaderImage" />
      </header>
      <div className="Content">
        <div className="Logo">
          <img src={logo} alt="Logo" />
        </div>
        <div id="custom-substack-embed"></div>
        {/* Other content goes here */}
      </div>
    </div>
  );
}

export default App;
