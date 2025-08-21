import React from "react";

function Footer() {
  return (
    <footer className="bg-[#F6873F] text-gray-300 py-8 px-4 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-black">Shelf Life</h3>
          <p className="text-sm text-black">
            Helping you reduce waste, one item at a time.
          </p>
        </div>


        <div className="hidden md:flex gap-4 text-sm text-black">
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm text-black">
            Developed by{" "}
            <span className="text-white font-medium">Hanish</span> &{" "}
            <span className="text-white font-medium">Nandini</span>
          </p>
          <p className="text-xs text-black ">
            &copy; {new Date().getFullYear()} Shelf Life. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
