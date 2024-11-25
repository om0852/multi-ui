import React from "react";

const PopMenu: React.FC = () => {
  const circleMenuItems = [
    { id: 1, rotation: 45, background: "bg-green-200" },
    { id: 2, rotation: 90, background: "bg-blue-200" },
    { id: 3, rotation: 135, background: "bg-pink-200" },
    { id: 4, rotation: 180, background: "bg-yellow-200" },
  ];

  return (
    <section
      role="pop"
      className="w-full h-screen bg-teal-500 font-sans relative overflow-hidden"
    >
      <style>
        {`
          @keyframes load {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(45deg); }
          }
          @keyframes popmenu {
            0%, 100% { opacity: 1; }
            50% { transform: scale(0.2); opacity: 0; }
          }
        `}
      </style>

      {/* Add Button */}
      <ul
        role="add"
        className="list-none fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24"
      >
        <li className="w-full h-full rounded-full bg-white relative animate-[load_1s_ease_infinite]">
          <span className="block bg-teal-500 w-16 h-3 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <span className="block bg-teal-500 w-3 h-16 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </li>
      </ul>

      {/* Circle Menu */}
      <ul
        role="circlemenu"
        className="list-none fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72"
      >
        {circleMenuItems.map((item) => (
          <li
            key={item.id}
            className={`w-20 h-20 rounded-full absolute animate-[popmenu_1s_ease_infinite] ${item.background}`}
            style={{
              transformOrigin: "150px 150px",
              transform: `rotate(${item.rotation}deg)`,
            }}
          />
        ))}
      </ul>
    </section>
  );
};

export default PopMenu;
