import React from "react";

const NewsCard = ({ img, link, title, isFirst }) => {
  return (
    <>
      <div className="flex flex-col gap-2 sm:gap-4">
        <div className="relative ">
          <img
            src={img}
            alt="NEWS-IMG"
            className={`w-full border-b-8 h-full sm:h-40 ${
              isFirst ? "border-primary" : "border-zinc-600"
            }`}
          />
          <div className="absolute top-2 left-2 bg-[url(/images/SOne_index_bg-black.png)] p-1 w-14">
            <div className="text-white text-sm text-center leading-4">
              19
              <br />
              NOV
              <br />
              2014
            </div>
          </div>
        </div>
        <a href={link} className="hover:underline text-lg sm:text-xl line-clamp-2 md:line-clamp-none">
          {title}
        </a>
      </div>
    </>
  );
};

export default NewsCard;
