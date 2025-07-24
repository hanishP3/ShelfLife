import React from "react";
import "../../index.css"
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="text-center justify-center" >
      <h3 className="main-heading-fontSize">Shelf Life</h3>
      <h4 className="main-heading-fontSize">Buy it. Add it. Relax.</h4>
      <h3 className="main-subHeading-font">
        Get smart reminders before your stock goes bad.
      </h3>
      <div className="flex flex-row gap-10 my-3 justify-center ">
        <div
          className="flex   items-center justify-center"
          onClick={() => alert("The Button is clicked")}
        >
          <Button className="main-logginButtion-styles">Sign up</Button>
        </div>
        <div
          className="flex  items-center justify-center"
          onClick={() => alert("The Button is clicked")}
        >
          <Button className="main-logginButtion-styles">Log in </Button>
        </div>
      </div>
    </div>
  );
}
