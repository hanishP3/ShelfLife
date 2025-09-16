import { useState } from "react";
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
import { useLocation } from "react-router-dom";
import { supabase } from "../supabaseClient";


function Login() {
  const location = useLocation();
  const { existingUser } = location.state || { existingUser: true };

  const [isLogin, setIsLogin] = useState(existingUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      // 🔹 Login
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Login error:", error.message);
      } else {
        console.log("Logged in:", data);
      }
    } else {
      // 🔹 Sign Up
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: name }, // custom metadata
        },
      });

      if (error) {
        console.error("Signup error:", error.message);
      } else {
        console.log("Signed up:", data);
      }
    }
  };

  return (
    <div className="flex h-screen w-screen bg-gradient-to-br from-orange-100 via-white to-orange-50">
      {/* Auth Card */}
      <div className="flex items-center justify-center w-[60%]">
        <Card className="w-full max-w-md backdrop-blur-lg bg-white/70 border border-gray-200/50 shadow-2xl rounded-3xl">
          <CardHeader className="text-center space-y-3">
            <CardTitle className="text-3xl font-extrabold text-gray-800 tracking-tight">
              {isLogin ? "Welcome Back 👋" : "Create Account 🚀"}
            </CardTitle>
            <CardDescription className="text-gray-500 text-base">
              {isLogin
                ? "Login to continue tracking your stock"
                : "Sign up and never forget expiry dates again"}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Only show Name input in Signup */}
              {!isLogin && (
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-gray-700 font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="rounded-xl focus:ring-2 focus:ring-orange-400"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              )}

              {/* Email */}
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  className="rounded-xl focus:ring-2 focus:ring-orange-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="rounded-xl focus:ring-2 focus:ring-orange-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-[#F4CE5E] text-white font-semibold hover:opacity-90 transition"
              >
                {isLogin ? "Login" : "Sign Up"}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col gap-3">
            <Button
              variant="outline"
              className="w-full rounded-xl border-gray-300 hover:bg-gray-100"
            >
              Continue with Google
            </Button>

            {/* Toggle Login / Signup */}
            <p className="text-sm text-gray-600 mt-2">
              {isLogin ? (
                <>
                  Don’t have an account?{" "}
                  <button
                    type="button"
                    className="text-orange-600 font-semibold hover:underline"
                    onClick={() => setIsLogin(false)}
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="text-orange-600 font-semibold hover:underline"
                    onClick={() => setIsLogin(true)}
                  >
                    Login
                  </button>
                </>
              )}
            </p>
          </CardFooter>
        </Card>
      </div>

      {/* Hero Image */}
      <div className="hidden md:flex w-[40%]">
        <img
          src="/images/northernLights.jpg"
          alt="Auth Illustration"
          className="object-cover w-full h-full  shadow-lg"
        />
      </div>
    </div>
  );
}

export default Login;
