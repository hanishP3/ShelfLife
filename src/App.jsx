import { Button } from "@/components/ui/button";
import "./index.css";
import Header from "./components/ui/Header";
import Body from "./components/ui/Body";
import { Route, Routes } from "react-router-dom";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/login/body" element={<Body></Body>}></Route>
      </Routes>
    </>
  );
}

export default App;
