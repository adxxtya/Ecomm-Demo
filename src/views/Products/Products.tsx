import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import ProductList from "./ProductList";

const ProductsComponent = () => {
  return (
    <div className="flex h-[92vh] w-full">
      <div className="flex w-1/5 flex-col p-4">
        <div className="pb-4 text-3xl font-bold">Filters</div>
        <div>
          <Accordion type="multiple" defaultValue={["item-2"]}>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-md font-semibold text-neutral-600">
                AVAILABILITY
              </AccordionTrigger>
              <AccordionContent>
                <CheckboxGroup>
                  <Checkbox value="oversize">Oversize(9)</Checkbox>
                  <Checkbox value="round">Round Neck(10)</Checkbox>
                </CheckboxGroup>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" defaultChecked={true}>
              <AccordionTrigger className="text-md font-semibold text-neutral-600">
                OPTIONS
              </AccordionTrigger>
              <AccordionContent>
                <CheckboxGroup defaultValue={["regular", "collar"]}>
                  <Checkbox value="regular">Regular T-shirts(9)</Checkbox>
                  <Checkbox value="off">Off Shoulder(10)</Checkbox>
                  <Checkbox value="collar">Collar T-shirts(6)</Checkbox>
                </CheckboxGroup>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="h-screen w-4/5 overflow-y-auto">
        <ProductList />
      </div>
    </div>
  );
};

export default ProductsComponent;
