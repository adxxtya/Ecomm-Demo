import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RxCaretSort } from "react-icons/rx";
import { AiOutlineCheck } from "react-icons/ai";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

const sizes = [
  {
    value: "s",
    label: "S",
  },
  {
    value: "m",
    label: "M",
  },
  {
    value: "l",
    label: "L",
  },
  {
    value: "xl",
    label: "XL",
  },
  {
    value: "xxl",
    label: "XXL",
  },
];

const quantities = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: "5",
    label: "5",
  },
];

const products = [
  {
    image: "/assets/Cart/yellow 1.png",
    name: "yellow cotton",
    type: "t-shirt",
    price: "500",
    subtotal: "1000",
  },
  {
    image: "/assets/Cart/image 24.png",
    name: "black cotton",
    type: "t-shirt",
    price: "600",
    subtotal: "1200",
  },
];

const CartComponent = () => {
  const [sizeOpen, setSizeOpen] = React.useState(false);
  const [sizeValue, setSizeValue] = React.useState("");
  const [quantityOpen, setQuantityOpen] = React.useState(false);
  const [quantityValue, setQuantityValue] = React.useState("");
  return (
    <div className="flex w-full justify-center">
      <div className="container mt-10 flex flex-col">
        <div className="breadcrumbs text-4xl">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a className="text-primary">Cart</a>
            </li>
          </ul>
        </div>
        <div className="mt-16 text-4xl font-bold">Cart</div>
        <Table className="mt-4">
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.name}>
                <TableCell className="font-medium">
                  <div className="flex gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-auto w-16"
                    />
                    <div className="flex flex-col justify-center">
                      <p>{product.name}</p>
                      <p>{product.type}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <Popover open={sizeOpen} onOpenChange={setSizeOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={sizeOpen}
                        className="w-auto justify-between"
                      >
                        {sizeValue
                          ? sizes.find((size) => size.value === sizeValue)
                              ?.label
                          : "XL"}
                        <RxCaretSort className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput
                          placeholder="Search size..."
                          className="h-9"
                        />
                        <CommandEmpty>No such size found.</CommandEmpty>
                        <CommandGroup>
                          {sizes.map((size) => (
                            <CommandItem
                              key={size.value}
                              onSelect={(currentValue) => {
                                setSizeValue(
                                  currentValue === sizeValue
                                    ? ""
                                    : currentValue,
                                );
                                setSizeOpen(false);
                              }}
                            >
                              {size.label}
                              <AiOutlineCheck
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  sizeValue === size.value
                                    ? "opacity-100"
                                    : "opacity-0",
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </TableCell>
                <TableCell>
                  <Popover open={quantityOpen} onOpenChange={setQuantityOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={quantityOpen}
                        className="w-auto justify-between"
                      >
                        {quantityValue
                          ? quantities.find(
                              (size) => size.value === quantityValue,
                            )?.label
                          : "2"}
                        <RxCaretSort className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput
                          placeholder="Search size..."
                          className="h-9"
                        />
                        <CommandEmpty>No such size found.</CommandEmpty>
                        <CommandGroup>
                          {quantities.map((size) => (
                            <CommandItem
                              key={size.value}
                              onSelect={(currentValue) => {
                                setQuantityValue(
                                  currentValue === quantityValue
                                    ? ""
                                    : currentValue,
                                );
                                setQuantityOpen(false);
                              }}
                            >
                              {size.label}
                              <AiOutlineCheck
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  quantityValue === size.value
                                    ? "opacity-100"
                                    : "opacity-0",
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </TableCell>
                <TableCell className="text-right">{product.subtotal}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4 flex justify-between">
          <Link href="/product">
            <button className="rounded-md border border-primary px-10 py-4">
              Return to Shop
            </button>
          </Link>
          <Link href="/product/checkout">
            <button className="rounded-md bg-primary px-8 py-4">
              Proceed to Checkout
            </button>
          </Link>
        </div>
        <div className="mt-10 text-4xl font-bold">View similar products</div>
        <div className="mt-8 flex gap-8">
          <div className="flex flex-col justify-center">
            <img src="/assets/Cart/image 22.png" alt="" />
            <div className="mt-3 self-center font-semibold">Rs. 999</div>
          </div>
          <div className="flex flex-col justify-center">
            <img src="/assets/Cart/image 22.png" alt="" />
            <div className="mt-3 self-center font-semibold">Rs. 999</div>
          </div>
          <div className="flex flex-col justify-center">
            <img src="/assets/Cart/image 22.png" alt="" />
            <div className="mt-3 self-center font-semibold">Rs. 999</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
