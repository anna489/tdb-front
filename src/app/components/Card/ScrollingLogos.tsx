import React from "react";

export const ScrollingLogos = () => {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/41/Redux.png",
    "https://upload.wikimedia.org/wikipedia/commons/c/c9/Ant_Design_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  ];

  return (
    <div style={styles.logoWrapper} className="">
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
      <div style={styles.logoContainer}>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            style={styles.logo}
            className="md:h-[50px] h-[30px] "
          />
        ))}
        {logos.map((logo, index) => (
          <img
            key={index + logos.length}
            src={logo}
            alt={`Logo ${index}`}
            style={styles.logo}
            className="md:h-[50px] h-[30px] "
          />
        ))}
        {logos.map((logo, index) => (
          <img
            key={index + logos.length}
            src={logo}
            alt={`Logo ${index}`}
            style={styles.logo}
            className="md:h-[50px] h-[30px] "
          />
        ))}
      </div>
      {/* Fade-out effect on both sides */}
      <div style={styles.fadeLeft}></div>
      <div style={styles.fadeRight}></div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  logoWrapper: {
    position: "relative", // Set relative for fade layers
    overflow: "hidden",
    paddingLeft: "100px",
    padding: "30px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    whiteSpace: "nowrap",
    animation: "scroll 20s linear infinite",
  },
  logo: {
    marginRight: "20px",
  },
  fadeLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "60%", // Adjust the width for how wide the fade should be
    background: "linear-gradient(to right, white, rgba(255,255,255,0))", // Left-to-right gradient
    zIndex: 1, // Ensures it appears above the scrolling logos
  },
  fadeRight: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "60%", // Adjust the width for how wide the fade should be
    background: "linear-gradient(to left, white, rgba(255,255,255,0))", // Right-to-left gradient
    zIndex: 1, // Ensures it appears above the scrolling logos
  },
  fadeTop: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "60%", // Adjust the width for how wide the fade should be
    background: "linear-gradient(to left, white, rgba(255,255,255,0))", // Right-to-left gradient
    zIndex: 1, // Ensures it appears above the scrolling logos
  },
};
