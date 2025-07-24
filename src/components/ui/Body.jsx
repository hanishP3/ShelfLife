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
      <div className="h-[70vh]">
        <div className="w-[80vh] justify-center align-middle items-center max-h-3/5">
          <div className="w-[80vh] flex justify-center items-center">
            <Carousel>
              <CarouselContent>
                <CarouselItem className="flex justify-center items-center">
                  HI
                </CarouselItem>
                <CarouselItem className="flex justify-center items-center">
                  HELLO
                </CarouselItem>
                <CarouselItem className="flex justify-center items-center">
                  HOW ARE YOU
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
