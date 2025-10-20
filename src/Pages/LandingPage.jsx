import React from "react";
import SplitText from "../components/UI/SplitText";
import AnimatedContent from "../components/UI/AnimatedContent";

function LandingPage() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className="flex h-[100%] w-7xl justify-center ">
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
            className="h-[80vh]"
          />
        </AnimatedContent>
        <div>
          <SplitText
            text="Shelflife"
            className="text-center text-8xl font-mainHeading"
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
          <p className="font-mainHeading">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
