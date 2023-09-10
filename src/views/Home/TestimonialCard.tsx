import React from "react";
import { AiFillStar } from "react-icons/ai";

interface TestimonialCardProps {
  description: string;
  work: string;
  rating: number;
  name: string;
  image: string;
}

const TestimonialCard = ({
  description,
  work,
  rating,
  name,
  image,
}: TestimonialCardProps) => {
  return (
    <div className="flex min-w-[50%] flex-col rounded-lg bg-primary p-8">
      <div className="text-lg">{description}</div>
      <div className="mt-10 flex justify-between text-lg">
        <div className="gap-2">
          <div className="font-bold">{name}</div>
          <div className="text-xs">{work}</div>
        </div>
        <div className="flex items-center gap-4">
          <AiFillStar size="25" /> {rating}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
