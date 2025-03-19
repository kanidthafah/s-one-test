import React from "react";
import { useState } from "react";

const categories = [
  {
    defaultImg: "/images/SOne_index_bt-tire.jpg",
    hoverImg: "/images/SOne_index_bt-tire1.jpg",
    alt: "TIRE-IMG",
  },
  {
    defaultImg: "/images/SOne_index_bt-break.jpg",
    hoverImg: "/images/SOne_index_bt-break1.jpg",
    alt: "BREAK-IMG",
  },
  {
    defaultImg: "/images/SOne_index_bt-battery.jpg",
    hoverImg: "/images/SOne_index_bt-battery1.jpg",
    alt: "BATTERY-IMG",
  },
  {
    defaultImg: "/images/SOne_index_bt-chokeup.jpg",
    hoverImg: "/images/SOne_index_bt-chokeup1.jpg",
    alt: "CHOKEUP-IMG",
  },
  {
    defaultImg: "/images/SOne_index_bt-oil.jpg",
    hoverImg: "/images/SOne_index_bt-oil1.jpg",
    alt: "OIL-IMG",
  },
  {
    defaultImg: "/images/SOne_index_bt-guarantee.jpg",
    hoverImg: "/images/SOne_index_bt-guarantee1.jpg",
    alt: "GUARANTEE-IMG",
  },
];

const Categories = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      {categories.map((category, index) => (
        <div
          key={index}
          className="cursor-pointer w-full"
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          <img
            src={hovered === index ? category.hoverImg : category.defaultImg}
            alt={category.alt}
            className="h-20 w-full"
          />
        </div>
      ))}
    </>
  );
};

export default Categories;
