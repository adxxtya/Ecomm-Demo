import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const CheckoutComponent = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="container mt-14 flex flex-col">
        <div className="breadcrumbs text-4xl">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Cart</a>
            </li>
            <li className="text-primary">Checkout</li>
          </ul>
        </div>
        <div className="flex h-full">
          <div className="w-1/2 p-4">
            <div className="flex flex-col gap-2 border border-neutral-300 p-4">
              <div className="mt-4 text-2xl">Address</div>
              <div className="mt-4 flex gap-8">
                <div className="w-full">
                  <Label htmlFor="">First Name</Label>
                  <Input />
                </div>
                <div className="w-full">
                  <Label htmlFor="">Last Name</Label>
                  <Input />
                </div>
              </div>
              <div className="mt-4 flex gap-8">
                <div className="w-full">
                  <Label htmlFor="">Mobile No.</Label>
                  <Input />
                </div>
                <div className="w-full">
                  <Label htmlFor="">Alternate Mobile No.</Label>
                  <Input />
                </div>
              </div>
              <div className="mt-4 flex gap-8">
                <div className="w-1/2">
                  <Label htmlFor="">Pin Code/ Postal Code/ Zip Code</Label>
                  <Input />
                </div>
              </div>
              <div className="mt-4 flex gap-8">
                <div className="w-full">
                  <Label htmlFor="">City</Label>
                  <Input />
                </div>
                <div className="w-full">
                  <Label htmlFor="">State</Label>
                  <Input />
                </div>
              </div>
              <div className="mt-4 flex gap-8">
                <div className="w-1/2">
                  <Label htmlFor="">Flat No. / Building/ Street Name</Label>
                  <Input />
                </div>
              </div>
              <div className="mt-4 flex gap-8">
                <div className="w-full">
                  <Label htmlFor="">Area/Locality</Label>
                  <Input />
                </div>
                <div className="w-full">
                  <Label htmlFor="">Landmark/Optional</Label>
                  <Input />
                </div>
              </div>
              <div className="mt-4 flex gap-8">
                <div className="flex w-full flex-col">
                  <Label htmlFor="">Save Address As</Label>
                  <div className="mt-4 flex w-full gap-4">
                    <button className="w-1/4 rounded-full border border-neutral-500 bg-primary py-2">
                      Home
                    </button>
                    <button className="w-1/4 rounded-full border border-neutral-500 py-2">
                      Office
                    </button>
                    <button className="w-1/4 rounded-full border border-neutral-500 py-2">
                      Others
                    </button>
                  </div>
                  <div className="mt-6">
                    <button className="border border-primary px-8 py-4 hover:bg-primary">
                      Save Address
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 p-4">
            <div className="flex h-full flex-col justify-center gap-4 p-4">
              <div className="flex w-full justify-between space-y-2 border-b-2 border-neutral-300 text-3xl">
                <div className="text-2xl font-light">Subtotal: </div>
                <div className="text-2xl font-light">Rs. 2200</div>
              </div>
              <div className="flex w-full justify-between space-y-2 border-b-2 border-neutral-300 text-3xl">
                <div className="text-2xl font-light">Shipping: </div>
                <div className="text-2xl font-light">Free</div>
              </div>
              <div className="flex w-full justify-between space-y-2 text-3xl">
                <div className="text-2xl font-light">Total: </div>
                <div className="text-2xl font-light">Rs. 2200</div>
              </div>
              <div className="mt-8 flex flex-col">
                <div className="mb-4 self-start text-3xl">Pay Through</div>
                <RadioGroup defaultValue="option-one" className="">
                  <div className="flex justify-between">
                    <div className=""></div>
                    <div className=""></div>
                  </div>
                  <div className="w-full space-y-4">
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label
                          htmlFor="option-one"
                          className="text-lg text-black"
                        >
                          Bank
                        </Label>
                      </div>
                      <div className="flex">
                        <img src="/assets/Product/visa.png" alt="Visa" />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="option-two" />
                      <Label
                        htmlFor="option-two"
                        className="text-lg text-black"
                      >
                        Cash on delivery
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
              <div className="mt-8 flex justify-between gap-8">
                <input
                  type="text"
                  className="w-full rounded-md border border-neutral-400 p-4"
                  placeholder="Coupon Code"
                />
                <button className="w-[60%] rounded-md border border-primary px-3">
                  Apply Coupon
                </button>
              </div>
              <div className="mt-10 flex justify-end">
                <button className="rounded-md bg-primary p-4 px-8">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
