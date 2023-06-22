import React from "react";

const Header = () => {
  return (
    <header className="bg-pink-200 relative">
      <div className="container mx-auto py-6 px-4">
        <h1 className="text-3xl font-serif font-bold relative">
          <span className="text-transparent bg-gradient-to-r bg-clip-text from-pink-400 to-pink-600">
            Tiberiane bags
          </span>
          <span className="absolute top-0 left-0 w-full h-full bg-white opacity-40 mix-blend-multiply"></span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
