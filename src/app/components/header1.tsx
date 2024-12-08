import { Search } from "lucide-react";
import { ShoppingCartIcon } from "lucide-react";
import { CircleUser } from "lucide-react";

export default function TopHeader1() {
  return (
    <section>
      <div>
        <div className="flex flex-wrap justify-between mt-6 border-b-2 pb-5">
          <div >
            <Search className="stroke-[1.5px]"/>
          </div>
          <h1 className="text-[#22202E] text-[18px]">Avion</h1>
          <div className="flex flex-wrap gap-4">
            <div>
              <ShoppingCartIcon className="stroke-[1.5px]"/>
            </div>
            <div>
              <CircleUser className="stroke-[1.5px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 pt-6 text-[#726E8D] text-[16px]">

        <h2>Plant pots</h2>
        <h2>Ceramics</h2>
        <h2>Tables</h2>
        <h2>Chairs</h2>
        <h2>Crockery</h2>
        <h2>Tableware</h2>
        <h2>Cutlery</h2>
        </div>
      </div>
    </section>
  );
}
