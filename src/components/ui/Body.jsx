import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
function Body() {
  return (
    <>
      <div className="flex justify-center items-center h-[70vh]">
        <div className="w-[90vw]">
          <Carousel className="bg-amber-600">
            <CarouselContent>
              <CarouselItem className="flex justify-center items-center h-[60vh] w-[20vw]">
                <img
                  src="public\foodWastage.jpg"
                  alt="Placeholder 1"
                  className="rounded-md size-50"
                />
                <h2>Heading: The Problem</h2>
                <h4>
                  Every day, huge portions of our food stock end up wasted
                  simply because we forget what’s sitting on our shelves.
                  Perfectly good meals are thrown away, while millions struggle
                  without enough to eat.
                </h4>
              </CarouselItem>
              <CarouselItem className="flex justify-center items-center h-[60vh] w-[20vw]">
                <h2> Heading: The Effect</h2>
                <h4>
                  This constant wastage of food stock not only hurts our wallets
                  but also harms our planet, adding to landfills and producing
                  harmful gases that speed up climate change
                </h4>
              </CarouselItem>
              <CarouselItem className="flex justify-center items-center h-[60vh] w-[20vw]">
                <h2> Heading: Our Solution</h2>
                <h4>Shelf Life is here to care for your food stock by tracking expiry dates and giving you gentle reminders, so you can use everything you buy and reduce unnecessary waste in your daily life.</h4>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Body;
