import React from "react";
import Header from "../components/ui/Header";
import Body from "../components/ui/Body";
import Footer from "./Footer";
function Home() {
  return (
    <div className="h-lvh">
      <main
       className="flex h-lvh items-center justify-center px-10
   bg-[#F4CE5E] "
      >
        <Header></Header>
      </main>
      <div>
        <Body></Body>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
