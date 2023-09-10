import React, { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      description:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      work: "Youtuber",
      rating: 4.5,
      name: "John Doe",
      image: "",
    },
    {
      description:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      work: "Influencer",
      rating: 4.0,
      name: "Jane Doe",
      image: "",
    },
    {
      description:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      work: "Engineer",
      rating: 3.7,
      name: "Jonathon Joe",
      image: "",
    },
    {
      description:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      work: "Student",
      rating: 5.0,
      name: "Joseph Joe",
      image: "",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialContainerRef = useRef<HTMLDivElement | null>(null);
  const autoTravelIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    // Auto-travel to the next card every 5 seconds
    autoTravelIntervalRef.current = setInterval(() => {
      const nextIndex = (activeIndex + 1) % testimonials.length;
      handleDotClick(nextIndex);
    }, 5000);

    // Clear the interval on unmount to prevent memory leaks
    return () => {
      if (autoTravelIntervalRef.current) {
        clearInterval(autoTravelIntervalRef.current);
      }
    };
  }, [activeIndex, testimonials.length]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (testimonialContainerRef.current) {
      const cardContainerWidth = testimonialContainerRef.current.offsetWidth;
      const cardWidth =
        testimonialContainerRef.current.children[index]?.offsetWidth;
      const scrollLeft =
        cardWidth !== undefined
          ? index * cardWidth -
            cardContainerWidth / 2 +
            cardWidth / 2 +
            (index === testimonials.length - 1 ? cardWidth / 2 : 0)
          : 0; // Check if cardWidth is undefined
      testimonialContainerRef.current.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-28 flex w-full justify-center">
      <div className="flex w-full flex-col ">
        <div className="flex w-[80%] justify-between self-center">
          <div className="text-3xl font-bold">
            What customers say about TeeChic?
          </div>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-3 w-3 cursor-pointer rounded-full bg-gray-300 ${
                  index === activeIndex ? "w-20" : ""
                }`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>
        </div>
        <div
          ref={testimonialContainerRef}
          className="ml-12 mt-12 flex w-auto gap-8 overflow-x-auto"
          style={{ overflowX: "scroll" }}
        >
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={item.name}
              description={item.description}
              work={item.work}
              rating={item.rating}
              name={item.name}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
