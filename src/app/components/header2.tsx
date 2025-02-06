import { CircleUser, Search, ShoppingCartIcon, Menu } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";

export default function Header2() {
  return (
    <section>
      <div>
        <div className="flex flex-wrap justify-between items-center py-6 px-4 sm:px-10 lg:px-20">
          {/* Logo */}
          <h1 className="text-[#22202E] text-2xl font-bold">Avion</h1>

          {/* Navigation Links (Hidden on small screens) */}
          <div className="hidden md:flex flex-wrap text-center gap-6 text-[#726E8D] text-[14px] sm:text-[16px]">
            <Link href="/">
              <h2 className="hover:text-[#22202E] cursor-pointer">Home</h2>
            </Link>
            <Link href="/products">
              <h2 className="hover:text-[#22202E] cursor-pointer">All Products</h2>
            </Link>
            <Link href="/about">
              <h2 className="hover:text-[#22202E] cursor-pointer">About Us</h2>
            </Link>
            <Link href="/productlisting">
              <h2 className="hover:text-[#22202E] cursor-pointer">ProductListing</h2>
            </Link>
            <Link href="/crockory">
            <h2 className="hover:text-[#22202E] cursor-pointer">Crockery</h2>
            </Link>
            <Link href="/tableware">

            <h2 className="hover:text-[#22202E] cursor-pointer">Tableware</h2>
            </Link>
            <Link href="/cutlery">

            <h2 className="hover:text-[#22202E] cursor-pointer">Cutlery</h2>
            </Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-4">
            <div>
              <Search className="stroke-[1.5px] text-gray-600" />
            </div>
            <div>
              <Link href="/cart">
              <ShoppingCartIcon className="stroke-[1.5px] text-gray-600" />
              </Link>
            </div>
            <div>
              <CircleUser className="stroke-[1.5px] text-gray-600" />
            </div>
          </div>

          {/* Menu Button (Visible only on small screens) */}
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="block md:hidden text-gray-600 stroke-[1.5px] cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="left" className="p-4">
              <SheetHeader>
                <h2 className="text-lg font-semibold text-[#22202E]">Menu</h2>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-4 text-[#726E8D] text-[14px]">
                <Link href="/">
                  <h2 className="hover:text-[#22202E] cursor-pointer">Home</h2>
                </Link>
                <Link href="/products">
                  <h2 className="hover:text-[#22202E] cursor-pointer">All Products</h2>
                </Link>
                <Link href="/about">
                  <h2 className="hover:text-[#22202E] cursor-pointer">About Us</h2>
                </Link>
                <Link href="/productlisting">
                  <h2 className="hover:text-[#22202E] cursor-pointer">ProductListing</h2>
                </Link>
                <h2 className="hover:text-[#22202E] cursor-pointer">Crockery</h2>
                <h2 className="hover:text-[#22202E] cursor-pointer">Tableware</h2>
                <h2 className="hover:text-[#22202E] cursor-pointer">Cutlery</h2>

                {/* Icons */}
                <div className="flex gap-4 mt-6">
                  <Search className="stroke-[1.5px] text-gray-600" />
                  <Link href="/cart">
                    <ShoppingCartIcon className="stroke-[1.5px] text-gray-600" />
                  </Link>
                  <CircleUser className="stroke-[1.5px] text-gray-600" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        </div>

           </section>
  );
}
