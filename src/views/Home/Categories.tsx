import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Categories = () => {
  return (
    <div className="mt-28 flex w-full justify-center">
      <div className="flex w-full flex-col">
        <div className="w-full">
          <div className="text-center text-5xl font-bold">Categories</div>
          <div className="mt-4 text-center text-lg text-neutral-500">
            Find what you are looking for
          </div>
        </div>
        <div className="mt-16 flex h-[800px] w-full justify-center bg-primary pt-4">
          <div className="container flex w-full items-start justify-center ">
            {/* First item */}
            <div className="h-[80%] w-full">
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src="/assets/Home/product-3.png"
                  alt="Product"
                  width="1000"
                  height="1000"
                  className="h-full w-auto"
                />
              </div>
            </div>

            {/* Centered item */}
            <div className="h-[80%] w-full self-center">
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src="/assets/Home/product-4.png"
                  alt="Product"
                  width="1000"
                  height="1000" // Adjust the height to maintain the aspect ratio
                  className="h-full w-auto"
                />
              </div>
            </div>

            {/* Last item */}
            <div className="h-[80%] w-full self-end ">
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src="/assets/Home/product-5.png"
                  alt="Product"
                  width="1000"
                  height="1000"
                  className="h-full w-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center bg-primary p-8">
          <button className="flex items-center gap-3 rounded-lg bg-white px-6 py-3 font-bold">
            Explore
            <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
