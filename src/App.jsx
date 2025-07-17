import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <div className="w-full bg-black font-bold">
        <h1 className="text-5xl text-blue-50 ml-2.5">Shelf Life</h1>
      </div>
      <div className="h-lvh">
        <div className="flex justify-between flex-col ">
          <div>
            <h3>Buy it. Add it. Relax.</h3>
            <h3>Get smart reminders before your food goes bad.</h3>
          </div>
          <div className="bg-amber-400">
            <div
              className="flex  flex-col items-center justify-center"
              onClick={() => alert("The Button is clicked")}
            >
              <Button className="bg-black text-blue-200">Sign up</Button>
            </div>
            <div
              className="flex  flex-col items-center justify-center"
              onClick={() => alert("The Button is clicked")}
            >
              <Button className="bg-black text-blue-200">Log in </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
