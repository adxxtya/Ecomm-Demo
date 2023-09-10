/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ContactsComponent = () => {
  return (
    <div className="mt-8 flex justify-center">
      <div className="container flex flex-col">
        <div className="text-3xl">Contact Us</div>
        <div className="mt-8 flex gap-4">
          <div className="flex w-1/4 items-center justify-center rounded-sm border border-neutral-300 p-6 shadow-md">
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                  <BsTelephone size="20" />
                </div>
                <div className="font-semibold">Call To Us</div>
              </div>
              <div className="mt-4 text-sm font-semibold text-neutral-700">
                We are available 24/7, 7 days a week.
                <br />
              </div>
              <div className="mt-4 text-sm font-semibold text-neutral-700">
                Phone:
              </div>
              <div className="flex w-full flex-col border-opacity-50">
                <div className="divider">OR</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                  <AiOutlineMail size="20" />
                </div>
                <div className="font-semibold">Call To Us</div>
              </div>
              <div className="mt-4 text-sm font-semibold text-neutral-700">
                We are available 24/7, 7 days a week.
                <br />
              </div>
              <div className="mt-4 text-sm font-semibold text-neutral-700">
                Emails: customer@exclusive.com
              </div>
              <div className="mt-3 text-sm font-semibold text-neutral-700">
                Emails: support@exclusive.com
              </div>
            </div>
          </div>
          <div className="w-3/4 rounded-sm border border-neutral-300 p-6 shadow-md">
            <div className="flex flex-col p-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  className="w-1/3 rounded-md bg-neutral-100 py-4 pl-4"
                  placeholder="Your Name"
                />
                <input
                  type="text"
                  className="w-1/3 rounded-md bg-neutral-100 py-4 pl-4"
                  placeholder="Your Name*"
                />
                <input
                  type="text"
                  className="w-1/3 rounded-md bg-neutral-100 py-4 pl-4"
                  placeholder="Your Name*"
                />
              </div>
              <div className="mt-4 flex flex-col">
                <textarea
                  name=""
                  id=""
                  cols={20}
                  rows={10}
                  className="w-full rounded-md bg-neutral-100 p-4"
                  placeholder="Your Message"
                ></textarea>
                <button className="mt-4 self-end rounded-md bg-primary px-10 py-4">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 text-4xl">FAQ's</div>
        <div className="my-8 flex">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                1. How long will it take me to get my order?{" "}
              </AccordionTrigger>
              <AccordionContent>
                Typically, our orders are processed and shipped within 1-2
                business days. Shipping times may vary depending on your
                location. You can check the estimated delivery time during the
                checkout process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>2. How do I return my order?</AccordionTrigger>
              <AccordionContent>
                We have a hassle-free return policy. If you're not satisfied
                with your purchase, you can initiate a return within 30 days of
                receiving your order. Simply log in to your account, go to the
                "Order History" section, and follow the instructions to initiate
                a return.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                3. How long will it take to get my refund?
              </AccordionTrigger>
              <AccordionContent>
                Once we receive your returned items, we will process your refund
                within 3-5 business days. Please note that it may take
                additional time for your bank or payment provider to process the
                refund.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                4. How do I cancel or change my order?
              </AccordionTrigger>
              <AccordionContent>
                You can cancel or make changes to your order within 24 hours of
                placing it. Simply log in to your account, go to the "Order
                History" section, and select the order you wish to modify. If
                the order has already been processed, please contact our
                customer support team for assistance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                5. I received the wrong goods, what do I do?
              </AccordionTrigger>
              <AccordionContent>
                We apologize for any inconvenience. If you receive the wrong
                items in your order, please contact our customer support team
                immediately. We will arrange for a return or exchange and ensure
                that you receive the correct products as soon as possible.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ContactsComponent;
