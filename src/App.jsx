import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center"
    onClick={()=>alert("The Button is clicked")}
    >
      <Button className="bg-black text-blue-200"
      >Click me</Button>
    </div>
  );
}

export default App;
