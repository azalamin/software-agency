import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
      <nav
        style={{ backgroundColor: "#001e56" }}
        className="md:flex justify-between items-center py-7 px-5 sticky top-0 shadow-xl"
      >
        <div>
          <h3 className="text-2xl text-white font-mono font-semibold">
            Software Agency
          </h3>
        </div>
        <div className="md:flex gap-10 font-mono font-normal text-lg">
          <CustomLink to={"/home"}>Home</CustomLink>
          <CustomLink to={"/blog"}>Blog</CustomLink>
          <CustomLink to={"/about"}>About</CustomLink>
          <CustomLink to={"/contact"}>Contact</CustomLink>
        </div>
      </nav>
    );
};

export default Header;