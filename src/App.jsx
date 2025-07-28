import { Button } from "@/components/ui/button";
import "./index.css";
import Header from "./components/ui/Header";
import Body from "./components/ui/Body";
import Footer from "./components/ui/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default App;
