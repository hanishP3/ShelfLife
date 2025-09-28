import React from "react";
import "../../index.css";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import TextType from "../TextType";
import SplitText from "../SplitText";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Particles from "../Particles";
export default function Header() {
  const navigation = useNavigate();
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    // <div className="flex flex-row gap-16 items-center w-full">
    //   {/* Left Side - Image */}
    //   <div>
    //     <img
    //       src="images/mainbg2.png"
    //       alt="womenSearching"
    //       className="w-[500px] h-[500px] ml-25 animate-slide-in-left"
    //     />
    //   </div>

    //   {/* Right Side - Text */}
    //   <div className="w-[47%] flex flex-col justify-center h-[500px]">
    //     <h3 className="main-heading-fontSize-logo">Shelf Life</h3>
    //     <h4 className="main-heading-fontSize">Buy it. Add it. Relax.</h4>
    //     <h3 className="main-subHeading-font">
    //       Get{" "}
    //       <span className="italic underline text-orange-500 font-light">
    //         Smart Reminders
    //       </span>{" "}
    //       before your stock goes bad, because every item counts.
    //     </h3>

    //     {/* Extra Tagline */}
    //     <p className="text-gray-600 mt-2 text-lg italic">
    //       🎉 It’s free, try it out now!
    //     </p>

    //     {/* Buttons */}
    //     <div className="flex flex-row gap-6 my-3">
    //       <div
    //         className="flex"
    //         onClick={() => {
    //           console.log("Redirecting to signup page");
    //           navigation("/login", { state: { existingUser: false } });
    //         }}
    //       >
    //         <Button
    //           className="main-logginButtion-styles
    //       bg-orange-500 py-6 px-8 hover:text-white hover:bg-black"
    //         >
    //           Sign up
    //         </Button>
    //       </div>
    //       <div
    //         className="flex"
    //         onClick={() => {
    //           console.log("Redirecting to login page");
    //           navigation("/login", { state: { existingUser: true } });
    //         }}
    //       >
    //         <Button
    //           className="main-logginButtion-styles
    //       py-6 px-8 hover:bg-orange-500 hover:text-white"
    //         >
    //           Log in
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    //   <div className="relative bg-white min-h-screen overflow-hidden">
    //     {/* Aurora background blobs */}
    //     {/* <div
    //       className="absolute -top-[150px] left-0 w-[400px] h-[400px]
    // bg-gradient-to-tr from-blue-400 via-indigo-500 to-purple-600
    // rounded-full blur-3xl opacity-30"
    //     ></div>

    //     <div className="absolute top-25 right-0 w-[600px] h-[400px] bg-gradient-to-tl from-blue-300 via-sky-500 to-cyan-400  blur-3xl opacity-30"></div> */}

    //     <div className="flex justify-center items-center flex-col text-center">
    //       <div>
    //           <img src="/images/icon.png" alt="icon" srcset="" className="w-50 cursor-grab"  />

    //       </div>
    //       <div className="mt-15">
    //         <SplitText
    //           text="Shelf-life"
    //           className="text-9xl font-medium text-center "
    //           delay={100}
    //           duration={0.6}
    //           ease="power3.out"
    //           splitType="chars"
    //           from={{ opacity: 0, y: 40 }}
    //           to={{ opacity: 1, y: 0 }}
    //           threshold={0.1}
    //           rootMargin="-100px"
    //           textAlign="center"
    //           onLetterAnimationComplete={handleAnimationComplete}
    //         />
    //         <h4 className="body-subHeading mt-5">
    //           Get Remainded Before your stock goes bad,
    //           <br></br> because every item counts.
    //         </h4>
    //       </div>
    //       {/* Buttons */}
    //       <div className="flex flex-row gap-6 my-6">
    //         <div
    //           className="flex"
    //           onClick={() => {
    //             console.log("Redirecting to signup page");
    //             navigation("/login", { state: { existingUser: false } });
    //           }}
    //         >
    //           <Button
    //             className="main-logginButtion-styles
    //   bg-gradient-to-b from-[#2567FF] to-[#0A3FFF]
    //   py-6 px-8 hover:from-black hover:to-gray-800 hover:text-white "
    //           >
    //             Sign Up Now
    //           </Button>
    //         </div>
    //         <div
    //           className="flex"
    //           onClick={() => {
    //             console.log("Redirecting to login page");
    //             navigation("/login", { state: { existingUser: true } });
    //           }}
    //         >
    //           <Button
    //             className="main-logginButtion-styles
    //           py-6 px-8 hover:bg-orange-500 hover:text-white"
    //           >
    //             Log in
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    <div className="relative w-full h-screen overflow-hidden ">
      {/* Particles background */}
      <div className="absolute inset-0 -z-10">
        <Particles
          particleColors={["#111184", "#ffffff"]}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Foreground content */}
      <div className="flex justify-center items-center flex-col text-center">
        <div className="flex items-center flex-row justify-between w-screen px-8">
          {/* Empty space */}
          {/* <div className="w-88"></div> */}

          {/* Logo */}
          <img
            src="/images/icon.png"
            alt="icon"
            className="w-50 cursor-pointer"
          />

          {/* Box */}
          <button
          onClick={()=>navigation('/login/body')}
            className="flex items-center bg-gradient-to-r from-blue-600 to-blue-800 
             text-white rounded-2xl shadow-xl px-6 py-3 w-fit mb-10 cursor-pointer
             hover:scale-105 transition-transform duration-200"
          >
            <span className="text-lg font-semibold tracking-wide">
              What We Do?
            </span>
          </button>
        </div>

        <div className="mt-15">
          <SplitText
            text="Shelf-life"
            className="text-9xl font-sans text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <h4 className="body-subHeading mt-5">
            Get Reminded Before your stock goes bad,
            <br /> because every item counts.
          </h4>
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-6 my-6">
          <div
            className="flex"
            onClick={() =>
              navigation("/login", { state: { existingUser: false } })
            }
          >
            <Button className="main-logginButtion-styles bg-gradient-to-b from-[#2567FF] to-[#0A3FFF] py-6 px-8  hover:text-white hover:scale-105 transition-transform duration-200">
              Sign Up Now
            </Button>
          </div>
          <div
            className="flex"
            onClick={() =>
              navigation("/login", { state: { existingUser: true } })
            }
          >
            <Button className="main-logginButtion-styles py-6 px-8   hover:scale-105 transition-transform duration-200">
              Log in
            </Button>
          </div>
        </div>
      </div>
    </div>

    //   <div className="relative bg-white min-h-screen overflow-hidden">
    //     {/* Aurora background blobs */}
    //     <div
    //       className="absolute -top-[150px] left-0 w-[400px] h-[400px]
    // bg-gradient-to-tr from-blue-400 via-indigo-500 to-purple-600
    // rounded-full blur-3xl opacity-30"
    //     ></div>

    //     <div className="absolute top-25 right-0 w-[600px] h-[400px] bg-gradient-to-tl from-blue-300 via-sky-500 to-cyan-400  blur-3xl opacity-30"></div>

    //     <div>
    //       <h3>Shelf Life icon </h3>
    //     </div>

    //     {/* Foreground Content */}
    //     <div className="relative z-10 flex flex-col items-center text-center mt-20">
    //       <h1 className="body-mainHeading">Shelf~Life</h1>
    //       <h4 className="body-subHeading mt-5">
    //         Before your stock goes bad, because every item counts.
    //       </h4>

    //       {/* Buttons */}
    //       <div className="flex flex-row gap-6 my-6">
    //         <Button
    //           className="flex items-center gap-3 justify-center
    //   bg-gradient-to-r from-[#4A90FF] to-[#2567FF]
    //   text-white font-light text-2xl
    //   py-6 px-6
    //   rounded-xl
    //   hover:from-[#2567FF] hover:to-[#4A90FF]
    //   transition-all duration-300 cursor-pointer"
    //         >
    //           Sign Up Now
    //         </Button>

    //         <Button
    //           className="main-logginButtion-styles
    //       py-6 px-8 hover:bg-orange-500 hover:text-white"
    //         >
    //           Log in
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
  );
}
