import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#45b3e0]">
      <footer className="sm:w-10/12 w-11/12 mx-auto footer sm:footer-horizontal footer-center text-base-content p-4">
        <aside>
          <p className="font-semibold text-white">
            Copyright © {new Date().getFullYear()} - All right reserved by Taha
            Rukaiya
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
