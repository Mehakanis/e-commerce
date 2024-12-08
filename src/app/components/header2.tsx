import { CircleUser, Search, ShoppingCartIcon } from "lucide-react";

export default function Header2(){
    return(
        <section>
            <div>
        <div className="flex flex-wrap justify-around py-6 ">
        
          <h1 className="text-[#22202E] text-2xl">Avion</h1>
          <div className="flex flex-wrap pt-2 text-center gap-10  text-[#726E8D] text-[16px]">

<h2>Plant pots</h2>
<h2>Ceramics</h2>
<h2>Tables</h2>
<h2>Chairs</h2>
<h2>Crockery</h2>
<h2>Tableware</h2>
<h2>Cutlery</h2>
</div>

          <div className="flex flex-wrap gap-4">
            <div>
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
        </section>
    )
}