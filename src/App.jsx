import { Button } from "@/components/ui/button";
import "./index.css";
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
        <div
          className="flex justify-between flex-row 
  h-4/6 items-center border-4 px-10
        "
        >
          <div>
            <h3 className="main-heading-fontSize">Buy it. Add it. Relax.</h3>
            <h3 className="main-subHeading-font">
              Get smart reminders before your food goes bad.
            </h3>
            <div className="flex flex-row gap-2 my-3">
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
        </div>
      </div>
    </>
  );
}

export default App;
