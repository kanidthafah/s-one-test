import React from "react";

const Footer = () => {
  return (
    <div className="bottom-0 w-full flex gap-2">
      <img
        src="/images/SOne_index_logos.png"
        alt="S-ONE-LOGO"
        className="w-1/12 object-contain hidden md:block"
      />
      <div className="w-full md:w-11/12 flex justify-between items-center rounded-md border border-black bg-linear-to-t from-black to-zinc-800 h-12 md:h-14 px-4">
        <p className="text-white font-kanit text-sm md:text-base">Copyright &copy; 2014</p>
      </div>
    </div>
  );
};

export default Footer;
