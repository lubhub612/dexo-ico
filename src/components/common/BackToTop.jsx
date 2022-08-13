import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // SCROLL TO TOP FUNCTION WHEN CLICK ON THIS PAGE SCROLL TOP
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // TO FIND SCROLL Y POSITION
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  // THIS USEFFECT GIVE US POSITION OF SCROLL IN EVERY PIXELS WE SCROLL
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* // IF PAGE SCROLL VALUE GRATER THAN 500 THEN SHOW BACK TO TOP BUTTON */}
      {scrollPosition > 300 && (
        <div className="back-to-top " onClick={() => scrollToTop()}>
          <BackToTopIcon />
        </div>
      )}
    </>
  );
};

export default BackToTop;
export const BackToTopIcon = () => (
  <svg
    width="14"
    height="20"
    viewBox="0 0 320 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_501_1357)">
      <path
        d="M310.6 182.6C298.09 195.11 277.84 195.09 265.35 182.6L192 109.3V480C192 497.69 177.69 512 160 512C142.31 512 128 497.69 128 480V109.3L54.63 182.6C42.13 195.1 21.88 195.1 9.38 182.6C-3.12 170.1 -3.12 149.85 9.38 137.35L137.38 9.3501C149.88 -3.1499 170.13 -3.1499 182.63 9.3501L310.63 137.35C323.1 149.9 323.1 170.1 310.6 182.6Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_501_1357">
        <rect width="320" height="512" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
