import React from "react";
import "../../index.css";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigation = useNavigate();
  return (
    <div className="flex flex-row justify-between items-center w-[100%] align-center">
      <div>
       <img src="public/mainbg2.png" alt="womenSearching" class="w-[500px] h-[500px] ml-25" />
      </div>
      <div>
        <h3 className="main-heading-fontSize-logo">Shelf Life</h3>
      <h4 className="main-heading-fontSize">Buy it. Add it. Relax.</h4>
      <h3 className="main-subHeading-font">
        Get smart reminders before your stock goes bad,
        <br />
        because every item counts.
      </h3>
      <div className="flex flex-row gap-10 my-3  ">
        <div
          className="flex  "
          onClick={() => {
            console.log("Redirecting to login page");
            navigation("/login");
          }}
        >
          <Button className="main-logginButtion-styles">Sign up</Button>
        </div>
        <div
          className="flex"
          onClick={() => {
            console.log("Redirecting to login page");
            navigation("/login");
          }}
        >
          <Button className="main-logginButtion-styles">Log in </Button>
        </div>
      </div>
      </div>
    </div>
  );
}
