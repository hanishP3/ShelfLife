import React from "react";
import SplitText from "../components/UI/SplitText";
import AnimatedContent from "../components/UI/AnimatedContent";

function LandingPage() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className="flex h-[100%] w-7xl justify-center">
      <div className="flex w-[80%] items-center justify-between">
        <AnimatedContent
          distance={200}
          direction="horizontal"
          reverse={true}
          duration={1.5}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.2}
        >
          <img
            src="dist/images/mainbg2.png"
            alt="landing-image"
            className="hidden h-[150vh] min-w-[50%] flex-shrink-0 object-contain sm:block md:block"
          />
        </AnimatedContent>
        <div className="leading-10">
          <SplitText
            text="Shelflife"
            className="font-mainHeading text-center text-5xl sm:text-7xl md:text-6xl lg:text-9xl"
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
          <h3 className="main-subHeading-font text-2xl md:text-2xl lg:text-4xl">
            Get{" "}
            <span className="bg-blue-400 px-2 font-light text-white">
              Smart Reminders
            </span>{" "}
            before your stock goes bad, because every item counts.
          </h3>
          <div className="mt-3 flex flex-col items-center gap-3 sm:flex-row">
            {/* Primary CTA */}
            <button className="flex w-full items-center justify-center gap-2 rounded-md bg-[#85412E] px-6 py-2 text-2xl font-normal text-white transition-all duration-300 hover:scale-105 hover:bg-[#6E3526] sm:w-auto">
              Start Adding Now
            </button>

            {/* Secondary CTA */}
            <button className="flex w-full items-center justify-center rounded-md bg-blue-500 px-6 py-2 text-2xl font-normal text-white transition-all duration-300 hover:scale-105 hover:bg-blue-600 sm:w-auto">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
