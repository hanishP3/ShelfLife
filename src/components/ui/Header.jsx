import React from "react";
import "../../index.css";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigation = useNavigate();
  return (
  <div className="flex flex-row gap-16 items-center w-full">
  {/* Left Side - Image */}
  <div>
    <img
      src="images/mainbg2.png"
      alt="womenSearching"
      className="w-[500px] h-[500px] ml-25 animate-slide-in-left"
    />
  </div>

  {/* Right Side - Text */}
  <div className="w-[47%] flex flex-col justify-center h-[500px]">
    <h3 className="main-heading-fontSize-logo">Shelf Life</h3>
    <h4 className="main-heading-fontSize">Buy it. Add it. Relax.</h4>
    <h3 className="main-subHeading-font">
      Get{" "}
      <span className="italic underline text-orange-500 font-light">
        Smart Reminders
      </span>{" "}
      before your stock goes bad, because every item counts.
    </h3>

        {/* Extra Tagline */}
    <p className="text-gray-600 mt-2 text-lg italic">
      🎉 It’s free, try it out now!
    </p>

    {/* Buttons */}
    <div className="flex flex-row gap-6 my-3">
      <div
        className="flex"
        onClick={() => {
          console.log("Redirecting to signup page");
          navigation("/signup");
        }}
      >
        <Button
          className="main-logginButtion-styles 
          bg-orange-500 py-6 px-8 hover:text-white hover:bg-black"
        >
          Sign up
        </Button>
      </div>
      <div
        className="flex"
        onClick={() => {
          console.log("Redirecting to login page");
          navigation("/login");
        }}
      >
        <Button
          className="main-logginButtion-styles
          py-6 px-8 hover:bg-orange-500 hover:text-white"
        >
          Log in
        </Button>
      </div>
    </div>
  </div>
</div>

  );
}
