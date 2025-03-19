import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router";


const MobileMenu = ({ menuOpen, setMenuOpen }) => {
   const location = useLocation();
  
  const menuNav = [
    { name: "Product & Services", links: "/" },
    { name: "Promotions", links: "#" },
    { name: "News & Events", links: "#" },
    { name: "Safety Tips", links: "#" },
    { name: "FAQS", links: "#" },
    { name: "Location", links: "#" },
  ];

  const menuPage = [
    { name: "About S-ONE", links: "#" },
    { name: "Job Opportunity", links: "#" },
    { name: "Contact Us", links: "#" },
    { name: "Site Map", links: "#" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full pt-14 pb-4 px-3 gap-5 flex flex-col justify-between items-center bg-zinc-900 transition-all duration-300 ease-out z-40 ${
        menuOpen
          ? "h-auto opacity-100 pointer-events-auto drop-shadow-md"
          : "h-0 opacity-0 pointer-events-none drop-shadow-none"
      }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl cursor-pointer hover:text-primary"
      >
        <IoCloseCircleOutline />
      </button>
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-col">
          {menuNav.map((item, index) => {
            const isActive = location.pathname === item.links;
            return (
              <Link
                key={index}
                to={item.links}
                className={`group inline-flex items-center gap-1.5 p-2  text-base border-b border-zinc-700  transition-all duration-150 ease-out ${
                  isActive ? "text-primary" : "text-white hover:text-primary"
                }`}
              >
                <span>
                  <img
                    src={
                      isActive
                        ? "/images/SOne_index_menu02.png"
                        : "/images/SOne_index_menu01.png"
                    }
                    alt="play-menu-img"
                    className="w-5 h-5 group-hover:hidden"
                  />
                  <img
                    src="/images/SOne_index_menu02.png"
                    alt="play-menu-img"
                    className="w-5 h-5 hidden group-hover:block"
                  />
                </span>
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="w-full flex flex-col">
          {menuPage.map((item, index) => (
            <a
              onClick={() => setMenuOpen(false)}
              key={index}
              href={item.links}
              className="p-2 text-white text-base border-b border-zinc-700 hover:text-primary transition-all duration-150 ease-out"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between">
        <p className="text-white cursor-default">Language</p>
        <div className="inline-flex gap-1.5">
          <button className="cursor-pointer" onClick={() => setMenuOpen(false)}>
            <img
              src="/images/SOne_index_iconthai.jpg"
              alt="THAI-ICON"
              className="h-4"
            />
          </button>
          <button
            className="grayscale hover:grayscale-0 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src="/images/SOne_index_iconeng.jpg"
              alt="ENG-ICON"
              className="h-4"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
