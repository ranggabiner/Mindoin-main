import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-[100px] fixed top-0 z-10 inset-0 shadow-lg bg-white right-0 py-2/5 px-12 flex justify-between items-center">
      <a href="/" className="block h-full">
        <img src="/icons/Logo8(500).png" className="h-full" />
      </a>
      <div className="hidden sm:flex justify-between w-[60%] max-w-[500px]">
        <a href="/" className="text-primary text-xl font-bold">
          Home
        </a>
        <a href="/catalogue" className="text-primary text-xl font-bold">
          Catalogue
        </a>
        <a href="/favorite" className="text-primary text-xl font-bold">
          Favorite
        </a>
        <a href="/about-us" className="text-primary text-xl font-bold">
          About Us
        </a>
      </div>
      <div className="sm:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-primary">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-[100px] left-0 right-0 bg-white shadow-lg p-4 flex flex-col items-center sm:hidden">
          <a href="/" className="text-primary text-xl font-bold py-2" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a href="/catalogue" className="text-primary text-xl font-bold py-2" onClick={() => setIsMenuOpen(false)}>
            Catalogue
          </a>
          <a href="/favorite" className="text-primary text-xl font-bold py-2" onClick={() => setIsMenuOpen(false)}>
            Favorite
          </a>
          <a href="/about-us" className="text-primary text-xl font-bold py-2" onClick={() => setIsMenuOpen(false)}>
            About Us
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
