import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "../supaBaseClient";


function Login() {
  const location = useLocation();
  const existingUser = location.state?.existingUser;

  // state to capture form input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // just placeholders for now (you’ll plug supabase calls here)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (existingUser) {
      // LOGIN FLOW
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Login error:", error.message);
        alert(error.message);
      } else {
        console.log("Login success:", data);
        // redirect user or set session here
      }
    } else {
      // SIGNUP FLOW
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        console.error("Signup error:", error.message);
        alert(error.message);
      } else {
        console.log("Signup success:", data);
        // you might want to redirect or ask for email confirmation
      }
    }
  };

  return (
    <div className="flex flex-row h-screen w-screen">
      {/* Left Side - Form */}
      <div className="flex items-center justify-center w-[60vw] bg-gradient-to-br from-amber-200 via-pink-100 to-white p-10">
        <Card className="w-full max-w-md shadow-2xl rounded-2xl">
          <CardHeader className="space-y-2 text-center">
            {existingUser ? (
              <CardTitle className="text-3xl font-bold">
                Welcome Back to{" "}
                <span className="text-amber-500">Shelf Life</span>
              </CardTitle>
            ) : (
              <CardTitle className="text-3xl font-bold">
                Welcome to <span className="text-amber-500">Shelf Life</span>
              </CardTitle>
            )}
            <CardDescription>
              {existingUser
                ? "Login to your account and start tracking your groceries"
                : "Create an account to start tracking your groceries"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    {existingUser && (
                      <a
                        href="#"
                        className="ml-auto inline-block text-sm text-amber-600 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    )}
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <CardFooter className="flex flex-col gap-3 mt-6">
                <Button type="submit" className="w-full">
                  {existingUser ? "Login" : "Sign Up"}
                </Button>
                <Button variant="outline" className="w-full">
                  Continue with Google
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Right Side - Image */}
      <div className="relative w-[40vw] h-screen">
        <img
          src={"images/northernLights.jpg"}
          alt="login page illustration"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
    </div>
  );
}

export default Login;
