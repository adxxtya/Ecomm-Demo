import Image from "next/image";
import React from "react";
import BestSelling from "./BestSelling";
import About from "./About";
import Categories from "./Categories";
import Testimonials from "./Testimonials";

const HomeComponent = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="mt-8 flex w-full flex-col items-center justify-center">
        <div className="container">
          <div className="w-full">
            <Image
              src="/assets/Home/Banner.png"
              alt="Banner"
              width={1000}
              height={1000}
              className="w-full"
            />
          </div>
        </div>
        <div className="container w-full">
          {/* Best Selling T - Shirt */}
          <BestSelling />
        </div>
        <div className="container w-full">
          {/* About Us */}
          <About />
        </div>
        <div className="w-full">
          {/* Categories */}
          <Categories />
        </div>
        <div className="w-full">
          {/* Testimonials */}
          <Testimonials />
        </div>
        <div className="h-12" />
      </div>
    </div>
  );
};

export default HomeComponent;
