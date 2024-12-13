import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import { ShoppingCartIcon } from "lucide-react";
import { CircleUser } from "lucide-react";
import Link from "next/link";

export default function Header3() {
  return (
    <section className="">
      <div>
        <div className="flex flex-wrap justify-between mt-6 pb-5 mx-6">

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

                <div className="flex flex-wrap gap-4">
              <h2>About us</h2>
              <h2>Contact</h2>
              <h2>Blog</h2>
            </div>

              </div>
            </SheetContent>
          </Sheet>

          <h1 className="text-[#22202E] text-[22px]">Avion</h1>
          <div className="flex flex-wrap gap-8">
            <div className="hidden md:flex flex-wrap gap-4">
              <h2>About us</h2>
              <h2>Contact</h2>
              <h2>Blog</h2>
            </div>
            <div className="hidden md:flex flex-wrap gap-4">
              <div>
                <Search className="stroke-[1.5px]" />
              </div>
              <div>
                <ShoppingCartIcon className="stroke-[1.5px]" />
              </div>
              <div>
                <CircleUser className="stroke-[1.5px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Category Links (Responsive) */}
        <div className="hidden md:flex flex-wrap justify-center gap-10 py-4 text-[#726E8D] text-[16px] bg-[#F9F9F9]">
        <Link href="/" > <h2 className="hover:text-[#22202E] cursor-pointer">Home</h2></Link>
        <Link href="/products" > <h2 className="hover:text-[#22202E] cursor-pointer">All Products</h2></Link>
        <Link href="/about" ><h2 className="hover:text-[#22202E] cursor-pointer">About Us</h2></Link>
        <Link href="/productlisting" ><h2 className="hover:text-[#22202E] cursor-pointer">ProductListing</h2></Link>
          <h2 className="hover:text-[#22202E] cursor-pointer">Crockery</h2>
          <h2 className="hover:text-[#22202E] cursor-pointer">Tableware</h2>
          <h2 className="hover:text-[#22202E] cursor-pointer">Cutlery</h2>
        </div>
      </div>
    </section>
  );
}
