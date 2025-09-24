import React from "react";
import Header from "../components/ui/Header";
import Body from "../components/ui/Body";
import Footer from "./Footer";
import BodySecound from "../components/ui/BodySecound";
import ArticlesPage from "../components/ArticlesPage";
import OurSolutionPage from "../components/OurSolutionPage";

function Home() {
  return (
    <div className="h-lvh">
      <main
       className="h-lvh"
      >
        <Header></Header>
      </main>
      <div>
        {/* <Body></Body>
        <ArticlesPage></ArticlesPage>
        <BodySecound></BodySecound>
        <OurSolutionPage></OurSolutionPage> */}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
