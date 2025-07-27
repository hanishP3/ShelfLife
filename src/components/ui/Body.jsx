// import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/Carousel";
// function Body() {
//   return (
//     <>
//       <div className="flex justify-center items-center h-[70vh]">
//         <div className="w-[90vw]">
//           <Carousel className="bg-gray-100 rounded-3xl px-2">
//             <CarouselContent>
//               <CarouselItem className="flex justify-center items-center h-[60vh] w-[20vw] flex-row">
//                 <img
//                   src="public\foodWastagebg.png"
//                   alt="Placeholder 1"
//                   className="rounded-md size-50"
//                 />
//                 <div>
//                   <h2 className="body-mainHeading">The Problem</h2>
//                   <h4 className="body-subHeading">
//                     Every day, huge portions of our food stock end up wasted
//                     simply because we forget what’s sitting on our shelves.
//                     Perfectly good meals are thrown away, while millions
//                     struggle without enough to eat.
//                   </h4>
//                 </div>
//               </CarouselItem>
//               <CarouselItem className="flex justify-center items-center h-[60vh] w-[20vw] flex-row">
//                 <img
//                   src="public\foodWastage2.png"
//                   alt="Placeholder 1"
//                   className="rounded-md size-50"
//                 />
//                 <div>
//                   <h2 className="body-mainHeading">The Effect</h2>
//                   <h4 className="body-subHeading">
//                     This constant wastage of food stock not only hurts our
//                     wallets but also harms our planet, adding to landfills and
//                     producing harmful gases that speed up climate change
//                   </h4>
//                 </div>
//               </CarouselItem>
//               <CarouselItem className="flex justify-center items-center h-[60vh] w-[20vw] flex-row">
//                  <img
//                   src="public\mainbg.png"
//                   alt="Placeholder 1"
//                   className="rounded-md size-50 mr-2"
//                 />
//                 <div>
//                   <h2 className="body-mainHeading">Our Solution</h2>
//                   <h4 className="body-subHeading">
//                     Shelf Life is here to care for your food stock by tracking
//                     expiry dates and giving you gentle reminders, so you can use
//                     everything you buy and reduce unnecessary waste in your
//                     daily life.
//                   </h4>
//                 </div>
//               </CarouselItem>
//             </CarouselContent>
//             <CarouselPrevious />
//             <CarouselNext />
//           </Carousel>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Body;



/********************************************************** */







// import React, { useEffect, useRef, useState } from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { useInView, motion } from "framer-motion";

// const ScrollRevealTypewriter = ({ heading, subheading }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <div ref={ref}>
//       {isInView && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <motion.h2
//             className="body-mainHeading mb-2"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             {heading}
//           </motion.h2>

//           <motion.h4
//             className="body-subHeading"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.9, duration: 1.5 }}
//           >
//             {subheading}
//           </motion.h4>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default function FoodCarousel() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const totalSlides = 3;
//   const carouselRef = useRef(null);


//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % totalSlides);
//     }, 5000); 

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (carouselRef.current?.scrollToItem) {
//       carouselRef.current.scrollToItem(currentSlide);
//     }
//   }, [currentSlide]);

//   return (
//     <div className="flex justify-center items-center h-[75vh]">
//       <div className="w-[90vw]">
//         <Carousel ref={carouselRef} className="bg-gray-100 rounded-3xl px-2">
//           <CarouselContent>
//             <CarouselItem className="flex justify-center items-center h-[65vh] w-[20vw] flex-row">
//               <img
//                 src="/public/foodWastagebg.png"
//                 alt="Placeholder 1"
//                 className="rounded-md size-50 mr-3"
//               />
//               <ScrollRevealTypewriter
//                 heading="The Problem"
//                 subheading="Every day, huge portions of our food stock end up wasted simply because we forget what’s sitting on our shelves. Perfectly good meals are thrown away, while millions struggle without enough to eat."
//               />
//             </CarouselItem>

//             <CarouselItem className="flex justify-center items-center h-[60vh] w-[20vw] flex-row">
//               <img
//                 src="/public/foodWastage2.png"
//                 alt="Placeholder 2"
//                 className="rounded-md size-50 mr-3"
//               />
//               <ScrollRevealTypewriter
//                 heading="The Effect"
//                 subheading="This constant wastage of food stock not only hurts our wallets but also harms our planet, adding to landfills and producing harmful gases that speed up climate change."
//               />
//             </CarouselItem>

//             <CarouselItem className="flex justify-center items-center h-[60vh] w-[20vw] flex-row">
//               <img
//                 src="/public/mainbg.png"
//                 alt="Placeholder 3"
//                 className="rounded-md size-50 mr-3"
//               />
//               <ScrollRevealTypewriter
//                 heading="Our Solution"
//                 subheading="Shelf Life is here to care for your food stock by tracking expiry dates and giving you gentle reminders, so you can use everything you buy and reduce unnecessary waste in your daily life."
//               />
//             </CarouselItem>
//           </CarouselContent>

//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>
//       </div>
//     </div>
//   );
// }





/************************************************************************************************ */







import React, { useRef, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, useInView } from "framer-motion";

const ScrollRevealTypewriter = ({ heading, subheading }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      {isInView && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="body-mainHeading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {heading}
          </motion.h2>
          <motion.h4
            className="body-subHeading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1.5 }}
          >
            {subheading}
          </motion.h4>
        </motion.div>
      )}
    </div>
  );
};

const slides = [
  {
    image: "/public/foodWastagebg.png",
    heading: "The Problem",
    subheading:
      "Every day, huge portions of our food stock end up wasted simply because we forget what’s sitting on our shelves. Perfectly good meals are thrown away, while millions struggle without enough to eat.",
  },
  {
    image: "/public/foodWastage2.png",
    heading: "The Effect",
    subheading:
      "This constant wastage of food stock not only hurts our wallets but also harms our planet, adding to landfills and producing harmful gases that speed up climate change.",
  },
  {
    image: "/public/mainbg.png",
    heading: "Our Solution",
    subheading:
      "Shelf Life is here to care for your food stock by tracking expiry dates and giving you gentle reminders, so you can use everything you buy and reduce unnecessary waste in your daily life.",
  },
];

export default function FoodCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 15000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="flex justify-center items-center h-[70vh] bg-gray-100 rounded-4xl m-5">
      <div className="w-[90vw] overflow-hidden " ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full flex items-center justify-center px-10"
            >
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="rounded-md size-52 mr-5"
              />
              <ScrollRevealTypewriter
                heading={slide.heading}
                subheading={slide.subheading}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
