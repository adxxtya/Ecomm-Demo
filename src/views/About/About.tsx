import React from "react";
import { LiaStoreAltSolid } from "react-icons/lia";

import {
  BsCurrencyDollar,
  BsFillBagHeartFill,
  BsHeadphones,
  BsShieldCheck,
} from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { FaShippingFast } from "react-icons/fa";

const iconComponents: Record<string, React.JSX.Element> = {
  LiaStoreAltSolid: <LiaStoreAltSolid size={40} color="white" />,
  BsCurrencyDollar: <BsCurrencyDollar size={40} />,
  FiShoppingBag: <FiShoppingBag size={40} color="white" />,
  BsFillBagHeartFill: <BsFillBagHeartFill size={40} color="white" />,
};

const iconComponents2: Record<string, React.JSX.Element> = {
  FaShippingFast: <FaShippingFast size={25} color="white" />,
  BsHeadphones: <BsHeadphones size={25} color="white" />,
  BsShieldCheck: <BsShieldCheck size={25} color="white" />,
};

const AboutComponent = () => {
  const info = [
    {
      bg: "white",
      iconBg: "black",
      icon: "LiaStoreAltSolid",
      value: "10.5k",
      desc: "Sallers active our site",
    },
    {
      bg: "primary",
      iconBg: "white",
      icon: "BsCurrencyDollar",
      value: "33k",
      desc: "Mopnthly Produduct Sale",
    },
    {
      bg: "white",
      iconBg: "black",
      icon: "FiShoppingBag",
      value: "45.5k",
      desc: "Customer active in our site",
    },
    {
      bg: "white",
      iconBg: "black",
      icon: "BsFillBagHeartFill",
      value: "25k",
      desc: "Anual gross sale in our site",
    },
  ];

  const info2 = [
    {
      bg: "white",
      iconBg: "black",
      icon: "FaShippingFast",
      value: "FREE AND FAST DELIVERY",
      desc: "Free delivery for all orders over $140",
    },
    {
      bg: "white",
      iconBg: "black",
      icon: "BsHeadphones",
      value: "24/7 CUSTOMER SERVICE",
      desc: "Friendly 24/7 customer support",
    },
    {
      bg: "white",
      iconBg: "black",
      icon: "BsShieldCheck",
      value: "MONEY BACK GUARANTEE",
      desc: "We reurn money within 30 days",
    },
  ];

  return (
    <div className="flex w-full justify-center">
      <div className="container mt-16 flex flex-col">
        <div className="text-4xl font-bold">About Us</div>
        <div className="flex w-full justify-between gap-12 ">
          <div className="flex w-1/2 flex-col space-y-4">
            <div className="mt-12 pl-3 text-3xl">Our Story</div>
            <p className="text-neutral-700">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region. Exclusive has more than 1 Million
              products to offer, growing at a very fast. Exclusive offers a
              diverse assotment in categories ranging from consumer.
              <br />
              <br />
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="flex w-1/2">
            <img src="/assets/About/company.png" alt="" />
          </div>
        </div>
        <div className="mt-16 flex w-full justify-between gap-4 p-2">
          {info.map((item) => (
            <div
              key={item.value}
              className={`flex h-[250px] w-1/4 flex-col items-center justify-center rounded-md border border-neutral-300 p-2 bg-${item.bg}`}
            >
              <div
                className={`bg-${item.iconBg} rounded-full p-2 ring-8 ring-black/30 ring-opacity-10 `}
              >
                {iconComponents[item.icon]}
              </div>
              <div className="mt-8 text-center text-3xl font-bold">
                {item.value}
              </div>
              <div className="text-center text-lg font-medium">{item.desc}</div>
            </div>
          ))}
        </div>
        <div className="my-20 flex w-full justify-center gap-8 p-2">
          {info2.map((item) => (
            <div
              key={item.value}
              className={`flex w-1/4 flex-col items-center justify-center rounded-md p-2 bg-${item.bg}`}
            >
              <div
                className={`rounded-full bg-black p-4 ring-8 ring-black/30 ring-opacity-10 `}
              >
                {iconComponents2[item.icon]}
              </div>
              <div className="mt-8 text-center text-xl font-bold">
                {item.value}
              </div>
              <div className="text-center text-sm font-medium">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
