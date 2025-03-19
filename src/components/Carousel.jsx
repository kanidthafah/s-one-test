import React from "react";

const carousels = [
  { img: "/images/SOne_index_pic01.jpg", title: "CAROUSEL-IMG" },
  { img: "/images/SOne_index_pic01.jpg", title: "CAROUSEL-IMG" },
  { img: "/images/SOne_index_pic01.jpg", title: "CAROUSEL-IMG" },
];

const Carousel = () => {
  return (
    <div className="flex flex-row lg:flex-col justify-center items-center gap-3 xl:gap-4">
      <button>
        <img
          src="/images/SOne_index_arrowup.png"
          alt="ARROW-UP-ICON"
          className="h-2 lg:h-5 -rotate-90 lg:rotate-0"
        />
      </button>
      {carousels.map((carousel, index) => (
        <div key={index} className="">
          <img
            src={carousel.img}
            alt={carousel.title}
            className={`h-14 lg:h-28 border border-primary ${
              index === 0 ? "grayscale-0" : "grayscale"
            }`}
          />
        </div>
      ))}
      <button>
        <img
          src="/images/SOne_index_arrowdown.png"
          alt="ARROW-UP-ICON"
          className="h-2 lg:h-5 -rotate-90 lg:rotate-0"
        />
      </button>
    </div>
  );
};

export default Carousel;
