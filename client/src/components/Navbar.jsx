import React from "react";
import { Fade } from "react-reveal";

import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 text-white block font-bold cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <>
    <Fade top cascade>
      <nav className="w-full flex justify-around items-center p-10">
        <div className="flex-initial justify-center items-center">
          <img src={logo} alt="logo" className="w-16 cursor-pointer" />
        </div>

        <ul className=" md:flex hidden list-none flex-row justify-between items-center flex-initial">
          {["About", "Dashboard", "Contact"].map((item, index) => (
            <NavBarItem key={item + index} title={item} />
          ))}

        </ul>
        <div className="bg-[#fff] py-2 px-7 mx-4 rounded-full cursor-pointer text-black font-bold hover:opacity-80">Connect</div>
      </nav>
    </Fade>
    </>
  );
};

export default Navbar;