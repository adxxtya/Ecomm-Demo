import Image from "next/image";
import React, { useState, useEffect } from "react";
import { SlUser } from "react-icons/sl";
import { BsCart3 } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const pathname = usePathname();

  useEffect(() => {
    const images = document.querySelectorAll("img");
    let loadedImages = 0;

    const handleImageLoad = () => {
      loadedImages++;

      if (loadedImages === images.length) {
        setIsLoading(false);
      }
    };

    images.forEach((image) => {
      if (image.complete) {
        handleImageLoad();
      } else {
        image.addEventListener("load", handleImageLoad);
      }
    });

    return () => {
      images.forEach((image) => {
        image.removeEventListener("load", handleImageLoad);
      });
    };
  }, [children]);

  return (
    <div className="bg-white">
      <div className="flex h-[10vh] justify-center">
        <div className="container flex items-center justify-between">
          <div>
            <Image
              src="/assets/Essentials/logo.png"
              alt="Logo"
              width={200}
              height={200}
              className=""
            />
          </div>
          <div className="flex items-center justify-between space-x-20">
            <div className="flex justify-around space-x-12 text-neutral-500">
              <Link
                href="/"
                className={`${pathname === "/" ? "font-bold text-black" : ""}`}
              >
                Home
              </Link>
              <Link
                href="/product"
                className={`${
                  pathname === "/product" ? "font-bold text-black" : ""
                }`}
              >
                Products
              </Link>
              <Link
                href="/contacts"
                className={`${
                  pathname === "/contacts" ? "font-bold text-black" : ""
                }`}
              >
                Contacts
              </Link>
              <Link
                href="/about"
                className={`${
                  pathname === "/about" ? "font-bold text-black" : ""
                }`}
              >
                About
              </Link>
            </div>
            <div className="relative">
              <input
                type="text"
                className="w-60 rounded-3xl border-[1px] border-black px-3 py-2 pr-8"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 right-2 top-1/2 -translate-y-1/2 transform">
                <BiSearchAlt size={25} color="gray" />
              </div>
            </div>
          </div>
          <div className="flex">
            <BsCart3 size={30} />
            <div className="divider divider-horizontal "></div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <SlUser size={30} color="black" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Hi, User!</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>My Account</DropdownMenuItem>
                <DropdownMenuItem>My Order</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/auth">Sign In</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="flex h-[90vh] items-center justify-center">
          <span className="loading loading-spinner loading-lg text-amber-400"></span>
        </div>
      ) : (
        <div className="w-full">{children}</div>
      )}
    </div>
  );
};

export default Navbar;
