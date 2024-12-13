import { Search } from "lucide-react";
import { ShoppingCartIcon } from "lucide-react";
import { CircleUser } from "lucide-react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";


export default function Header1() {
  return (
    <section>
      <div>
        {/* Header Top Section */}
        <div className="flex flex-wrap justify-between items-center mt-6 border-b-2 pb-5 px-4 md:px-10 lg:px-20">
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="block md:hidden text-gray-600 stroke-[1.5px] cursor-pointer" />
            </SheetTrigger>

            <SheetContent side="left" className="p-4">
              <SheetHeader>
                <h2 className="text-lg font-semibold text-[#22202E]">Menu</h2>
              </SheetHeader>
              <div className="flex flex-col gap-6 pt-6 text-[#726E8D] text-[14px] sm:text-[16px]">
                {/* Navigation Links */}
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

          {/* Search Icon */}
          <div>
            <Search className= "hidden md:block stroke-[1.5px] text-gray-600" />
          </div>

          {/* Logo */}
          <h1 className="text-[#22202E] text-[18px] font-semibold">Avion</h1>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-4">
            <div>
              <Link href="/cart">
                <ShoppingCartIcon className="stroke-[1.5px] text-gray-600" />
              </Link>
            </div>
            <div>
              <CircleUser className="stroke-[1.5px] text-gray-600" />
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex flex-wrap justify-center gap-6 pt-6 text-[#726E8D] text-[14px] sm:text-[16px] px-4 md:px-10 lg:px-20">
          <Link href="/">
            <h2 className="hover:text-[#22202E] cursor-pointer">Home</h2>
          </Link>
          <Link href="products">
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
        </div>
      </div>
    </section>
  );
}
