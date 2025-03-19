import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link, useLocation } from "react-router";

const Header = ({ menuOpen, setMenuOpen, searchOpen, setSearchOpen }) => {
  const location = useLocation();

  const menuBar = [
    { name: "Product & Services", links: "/" },
    { name: "Promotions", links: "#" },
    { name: "News & Events", links: "#" },
    { name: "Safety Tips", links: "#" },
    { name: "FAQS", links: "#" },
    { name: "Location", links: "#" },
  ];
  const socials = [
    { name: "Facebook", icon: "/images/SOne_index_btfacebook1.png", link: "#" },
    { name: "Twitter", icon: "/images/SOne_index_bttwitter1.png", link: "#" },
    { name: "Youtube", icon: "/images/SOne_index_btyoutube1.png", link: "#" },
  ];

  const [inputValue, setInputValue] = useState("Search...");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    document.body.style.overflow = searchOpen ? "hidden" : "";
  }, [menuOpen, searchOpen]);
  return (
    <>
      <nav className="flex md:hidden h-12 justify-between items-center px-2 py-1 border border-black bg-linear-to-t from-black to-zinc-800 text-white">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="text-white text-2xl cursor-pointer hover:text-primary"
        >
          <FaBars />
        </button>
        <div className="flex items-center gap-2">
          <div className="flex gap-1 items-center">
            {socials.map((social, index) => (
              <a key={index} href={social.link} className="cursor-pointer">
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-7 h-7 cursor-pointer"
                />
              </a>
            ))}
          </div>
          <button
            onClick={() => setSearchOpen((prev) => !prev)}
            className="text-white text-3xl cursor-pointer hover:text-primary"
          >
            <IoSearch />
          </button>
        </div>
      </nav>
      <div className="w-full flex flex-col px-1">
        <div className="flex justify-center md:justify-between items-center p-2">
          <div>
            <img
              src="/images/SOne_index_logo.png"
              alt="S-ONE-LOGO"
              className="h-24 xl:h-32"
            />
          </div>
          <div className="hidden md:flex flex-col items-end gap-3 xl:gap-4">
            <div className="flex gap-1">
              <button className="cursor-pointer">
                <img
                  src="/images/SOne_index_iconthai.jpg"
                  alt="THAI-ICON"
                  className="h-4 xl:h-6"
                />
              </button>
              <button className="grayscale hover:grayscale-0 cursor-pointer">
                <img
                  src="/images/SOne_index_iconeng.jpg"
                  alt="ENG-ICON"
                  className="h-4 xl:h-6"
                />
              </button>
            </div>
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                className="w-64 xl:w-80 h-7 xl:h-8 text-base xl:text-lg border border-primary p-1"
              />
              <button className="cursor-pointer">
                <img
                  src="/images/SOne_index_btsearch.jpg"
                  alt="SEARCH-ICON"
                  className="w-7 xl:w-8 h-7 xl:h-8 border-e border-b border-t border-primary"
                />
              </button>
            </div>
            <div className="inline gap-1 text-lg xl:text-xl">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-150"
              >
                About S-ONE
              </a>
              <span>&nbsp;|&nbsp;</span>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-150"
              >
                Job Opportunity
              </a>
              <span>&nbsp;|&nbsp;</span>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-150"
              >
                Contact Us
              </a>
              <span>&nbsp;|&nbsp;</span>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-150"
              >
                Site Map
              </a>
            </div>
          </div>
        </div>
        <nav className="h-12 xl:h-14 px-2 xl:px-4 hidden md:flex justify-between items-center border border-black bg-linear-to-t from-black to-zinc-800 rounded-md ">
          <div className="flex gap-3 xl:gap-6">
            {menuBar.map((item, index) => {
              const isActive = location.pathname === item.links;
              return (
                <Link
                  key={index}
                  to={item.links}
                  className={`group inline-flex items-center gap-1.5 text-base xl:text-xl ${
                    isActive
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  }`}
                >
                  <span className="w-5 xl:w-8 h-5 xl:h-8">
                    <img
                      src={
                        isActive
                          ? "/images/SOne_index_menu02.png"
                          : "/images/SOne_index_menu01.png"
                      }
                      alt="play-menu-img"
                      className="w-full h-full group-hover:hidden"
                    />
                    <img
                      src="/images/SOne_index_menu02.png"
                      alt="play-menu-img"
                      className="w-full h-full hidden group-hover:block"
                    />
                  </span>
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="flex gap-2 items-center">
            {socials.map((social, index) => (
              <a key={index} href={social.link}>
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-6 xl:w-8 h-6 xl:h-8 grayscale hover:grayscale-0 transition-all duration-150 ease-out cursor-pointer"
                />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
