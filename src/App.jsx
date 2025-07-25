import { Button } from "@/components/ui/button";
import "./index.css";
import Header from "./components/ui/Header";
import Body from "./components/ui/Body";
import Footer from "./components/ui/Footer";
function App() {
  return (
    <>
      <div className="h-lvh">
        <main
          className="flex h-lvh items-center justify-center px-10
  bg-[linear-gradient(270deg,#0E2954,#000000,#0E2954)]
  bg-[length:400%_400%]
  animate-gradient-soft"
        >
          <Header></Header>
        </main>
        <div>
          <Body></Body>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
