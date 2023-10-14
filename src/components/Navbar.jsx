import Logo from "/logo.png";
import "../css/Navbar.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <nav
      className="navbar mx-24 my-10  flex flex-row justify-between "
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="600"
    >
      <div className="block nav-logo hover:scale-90 transition duration-300">
        <a href="">
          <img src={Logo} style={{ height: 30 }} alt="" />
        </a>
      </div>

      <div className="nav-menu flex flex-row gap-6 items-center">
        <a href="" className="text-[#222534] font-medium">
          Landing
        </a>
        <a
          href=""
          className="text-[#888AA2]  hover:text-[#222534] hover:font-medium"
        >
          agent
        </a>
        <a
          href=""
          className="text-[#888AA2] hover:text-[#222534] hover:font-medium"
        >
          cities
        </a>
        <a
          href=""
          className="text-[#888AA2] hover:text-[#222534] hover:font-medium"
        >
          packages
        </a>
        <a
          href=""
          className="text-[#888AA2] hover:text-[#222534] hover:font-medium"
        >
          stories
        </a>
      </div>
      <div className="nav-button place-self-center rounded-md px-7 py-2 hover:bg-gray-300 bg-[#EFF3F8] text-[#898BA3]  hover:text-[#222534] hover:font-medium hover:scale-90 transition duration-300">
        <a href="" className="button-contact-me">
          Contact Us
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
