import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const BestSelling = () => {
  return (
    <div className="mt-24 w-full">
      <div className="flex h-auto w-full items-center justify-between ">
        <div className="flex w-[20%] flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold">Best Selling T-Shirt</h1>
          <p className="text-lg text-neutral-500">Cool Fashionable T-Shirts</p>
          <button className="flex w-3/4 items-center justify-center gap-4 rounded-lg bg-primary py-4 font-bold">
            See More <BsArrowRight />
          </button>
        </div>
        <div className="flex w-[75%] justify-between">
          <div className="">
            <Image
              src="/assets/Home/product-1.png"
              alt="Product"
              width={1000}
              height={1000}
              className="h-full w-full"
            />
          </div>
          <div className="">
            <Image
              src="/assets/Home/product-2.png"
              alt="Product"
              width={1000}
              height={1000}
              className="h-full w-full"
            />
          </div>
          <div className="">
            <Image
              src="/assets/Home/product-1.png"
              alt="Product"
              width={1000}
              height={1000}
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
