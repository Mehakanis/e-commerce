import { Search } from "lucide-react";
import { ShoppingCartIcon } from "lucide-react";
import { CircleUser } from "lucide-react";

export default function Header3() {
  return (
    <section className="">
      <div>
        <div className="flex flex-wrap justify-between mt-6  pb-5 mx-6">
          
          <h1 className="text-[#22202E] text-[22px]">Avion</h1>
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-wrap gap-4">
                <h2>About us</h2>
                <h2>Contact</h2>
                <h2>Blog</h2>
            </div>
          <div className="flex flex-wrap gap-4">
          <div >
            <Search className="stroke-[1.5px]"/>
          </div>
            <div>
              <ShoppingCartIcon className="stroke-[1.5px]"/>
            </div>
            <div>
              <CircleUser className="stroke-[1.5px]" />
            </div>
          </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 py-4 text-[#726E8D] text-[16px] bg-[#F9F9F9]">

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
