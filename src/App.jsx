import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
    <div className="w-full bg-black font-bold">
      <h1 className="text-5xl text-blue-50 ml-2.5">Shelf Life</h1>
    </div>
      <div
        className="flex min-h-svh flex-col items-center justify-center"
        onClick={() => alert("The Button is clicked")}
      >
        <Button className="bg-black text-blue-200">Click me</Button>
      </div>
    </>
  );
}

export default App;
