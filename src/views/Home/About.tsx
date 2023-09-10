import React from "react";
import { LuShirt } from "react-icons/lu";
import { FiPackage } from "react-icons/fi";
import { BsTelephoneOutbound } from "react-icons/bs";

const About = () => {
  return (
    <div className="mt-24 flex w-full justify-center">
      <div className="container flex flex-col">
        <div className="text-center text-5xl font-bold">About us</div>
        <div className="mt-4 text-center text-lg text-neutral-500">
          Order now The letest trend in Clothing
        </div>
        <div className="mt-14 flex w-full justify-around">
          <div className="flex w-[30%] flex-col items-center justify-center space-y-4">
            <div className="bg-primary flex items-center justify-center rounded-full p-8">
              <LuShirt size="40" />
            </div>
            <div className="font-bold">Large Assortment</div>
            <p className="text-center text-neutral-500">
              we offer many different types of products with fewer variations in
              each category.
            </p>
          </div>
          <div className="flex w-[30%] flex-col items-center justify-center space-y-4">
            <div className="bg-primary flex items-center justify-center rounded-full p-8">
              <FiPackage size="40" />
            </div>
            <div className="font-bold">Fast & Free Shipping</div>
            <p className="text-center text-neutral-500">
              4-day or less delivery time, free shipping and an expedited
              delivery option.
            </p>
          </div>
          <div className="flex w-[30%] flex-col items-center justify-center space-y-4">
            <div className="bg-primary flex items-center justify-center rounded-full p-8">
              <BsTelephoneOutbound size="40" />
            </div>
            <div className="font-bold">24/7 Support</div>
            <p className="text-center text-neutral-500">
              answers to any business related inquiry 24/7 and in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
