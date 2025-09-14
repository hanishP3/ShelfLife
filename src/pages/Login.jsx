import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

function Login() {

  const [userMailInpput,setuserMailInpput] = useState('');
  const [userPasswordInput,setuserPasswordInput] = useState('');


  const onSignUpButton=()=>{

  }


  return (
    <div className="flex flex-row bg-white h-[100vh] w-[100vw]">
      <Card className="w-[60vw]  h-[100vh]  ">
        <div className="bg-amber-200 py-25 px-2 mx-55 my-20 rounded-2xl">
          <CardTitle>Welcome To Shelf Life</CardTitle>
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
            <CardAction>
              <Button variant="link">Sign Up</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    value={userMailInpput}
                    onchange = {(e)=>setuserMailInpput(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" required value = {userPasswordInput} onchange = {(e)=>setuserPasswordInput(e.target.Input)}/>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </CardFooter>
        </div>
      </Card>
      <img
        src={"public/images/northernLights.jpg"}
        alt="login page picture"
        className="w-[40vw] h-[100vh]"
      />
    </div>
  );
}

export default Login;
