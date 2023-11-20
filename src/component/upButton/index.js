import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function UpButton() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 800) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="upBtn-container">
      {showButton && (
        <button className="up-btn" onClick={scrollToTop}>
          <FaArrowUp className="up-icon" />
        </button>
      )}
    </div>
  );
}

export default UpButton;
