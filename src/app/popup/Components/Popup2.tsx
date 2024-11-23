import React from "react";

const PopMenu: React.FC = () => {
  const circleMenuItems = [
    { id: 1, rotation: 45, background: "#d1fadb" },
    { id: 2, rotation: 90, background: "#d1dbfa" },
    { id: 3, rotation: 135, background: "#fad1f0" },
    { id: 4, rotation: 180, background: "#faf0d1" },
  ];

  const animationKeyframes = `
    @keyframes load {
      0%, 100% { transform: rotate(0deg); }
      50% { transform: rotate(45deg); }
    }
    @keyframes popmenu {
      0%, 100% { opacity: 1; }
      50% { transform: scale(0.2); opacity: 0; }
    }
  `;

  return (
    <section
      role="pop"
      style={{
        width: "100%",
        backgroundColor: "#40bfbf",
        fontFamily: `"sans-serif", tahoma, verdana, helvetica`,
        position: "relative",
        overflow: "hidden",
        height: "100vh",
      }}
    >
      <style>{animationKeyframes}</style>

      {/* Add Button */}
      <ul
        role="add"
        style={{
          listStyle: "none",
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "100px",
          height: "100px",
        }}
      >
        <li
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "white",
            animation: "load 1s ease infinite",
            position: "relative",
          }}
        >
          <span
            style={{
              content: "''",
              display: "block",
              background: "#40bfbf",
              width: "60px",
              height: "12px",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <span
            style={{
              content: "''",
              display: "block",
              background: "#40bfbf",
              width: "12px",
              height: "60px",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </li>
      </ul>

      {/* Circle Menu */}
      <ul
        role="circlemenu"
        style={{
          listStyle: "none",
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "300px",
          height: "300px",
        }}
      >
        {circleMenuItems.map((item) => (
          <li
            key={item.id}
            style={{
              width: "80px",
              height: "80px",
              boxSizing: "border-box",
              borderRadius: "50%",
              position: "absolute",
              animation: "popmenu 1s ease infinite",
              transformOrigin: "150px 150px",
              transform: `rotate(${item.rotation}deg)`,
              background: item.background,
            }}
          />
        ))}
      </ul>
    </section>
  );
};

export default PopMenu;
