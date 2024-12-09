import { CircleUser, Search, ShoppingCartIcon } from "lucide-react";

export default function Header2() {
  return (
    <section>
      <div>
        <div className="flex flex-wrap justify-between items-center py-6 px-4 sm:px-10 lg:px-20">
          {/* Logo */}
          <h1 className="text-[#22202E] text-2xl font-bold">Avion</h1>

          {/* Navigation Links */}
          <div className="hidden md:flex flex-wrap text-center gap-6 text-[#726E8D] text-[14px] sm:text-[16px]">
            <h2 className="hover:text-[#22202E] cursor-pointer">Plant pots</h2>
            <h2 className="hover:text-[#22202E] cursor-pointer">Ceramics</h2>
            <h2 className="hover:text-[#22202E] cursor-pointer">Tables</h2>
            <h2 className="hover:text-[#22202E] cursor-pointer">Chairs</h2>
            <h2 className="hover:text-[#22202E] cursor-pointer">Crockery</h2>
            <h2 className="hover:text-[#22202E] cursor-pointer">Tableware</h2>
            <h2 className="hover:text-[#22202E] cursor-pointer">Cutlery</h2>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <div>
              <Search className="stroke-[1.5px] text-gray-600" />
            </div>
            <div>
              <ShoppingCartIcon className="stroke-[1.5px] text-gray-600" />
            </div>
            <div>
              <CircleUser className="stroke-[1.5px] text-gray-600" />
            </div>
          </div>
        </div>

        {/* Navigation Links for Smaller Screens */}
        <div className="flex flex-wrap justify-center gap-4 text-center text-[#726E8D] text-[14px] sm:text-[16px] md:hidden">
          <h2 className="hover:text-[#22202E] cursor-pointer">Plant pots</h2>
          <h2 className="hover:text-[#22202E] cursor-pointer">Ceramics</h2>
          <h2 className="hover:text-[#22202E] cursor-pointer">Tables</h2>
          <h2 className="hover:text-[#22202E] cursor-pointer">Chairs</h2>
          <h2 className="hover:text-[#22202E] cursor-pointer">Crockery</h2>
          <h2 className="hover:text-[#22202E] cursor-pointer">Tableware</h2>
          <h2 className="hover:text-[#22202E] cursor-pointer">Cutlery</h2>
        </div>
      </div>
    </section>
  );
}
