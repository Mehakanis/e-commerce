import { Search } from "lucide-react";
import { ShoppingCartIcon } from "lucide-react";
import { CircleUser } from "lucide-react";

export default function Header1() {
  return (
    <section>
      <div>
        {/* Header Top Section */}
        <div className="flex flex-wrap justify-between items-center mt-6 border-b-2 pb-5 px-4 md:px-10 lg:px-20">
          {/* Search Icon */}
          <div>
            <Search className="stroke-[1.5px] text-gray-600" />
          </div>

          {/* Logo */}
          <h1 className="text-[#22202E] text-[18px] font-semibold">Avion</h1>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <div>
              <ShoppingCartIcon className="stroke-[1.5px] text-gray-600" />
            </div>
            <div>
              <CircleUser className="stroke-[1.5px] text-gray-600" />
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 pt-6 text-[#726E8D] text-[14px] sm:text-[16px] px-4 md:px-10 lg:px-20">
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
