import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">Shelf Life</h3>
          <p className="text-sm text-gray-400">
            Helping you reduce waste, one item at a time.
          </p>
        </div>


        <div className="hidden md:flex gap-4 text-sm text-gray-400">
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
          <p className="text-sm text-gray-400">
            Developed by{" "}
            <span className="text-white font-medium">Hanish</span> &{" "}
            <span className="text-white font-medium">Nandini</span>
          </p>
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Shelf Life. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
