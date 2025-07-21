import { Button } from "@/components/ui/button";
import "./index.css";
import Header from "./components/ui/Header";
import Body from "./components/ui/Body";
function App() {
  return (
    <>
      <div className="w-full bg-black font-bold">
        <h1
          className="text-5xl text-blue-50 ml-2.5 
        text-center
        "
        >
          Shelf Life
        </h1>
      </div>
      <div className="h-lvh ">
        <main
          className="flex justify-between flex-row 
  h-4/6 items-center border-4 px-10
        "
        >
          <Header></Header>
        </main>
        <div>
          <Body></Body>
        </div>
      </div>
    </>
  );
}

export default App;
