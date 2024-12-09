import Image from "next/image"
import { Button } from "@/components/ui/button"
export default function ProductListing(){
    return(
        <section className="pt-[100px]">
            <div className="text-[22px] pl-[16px] text-[#2A254B] text-center md:text-left">Our popular products</div>
      <div className="flex flex-wrap justify-around mt-10 text-[#2A254B]">
      <div className="w-[490px] h-[350px]">
          <div className="aspect-[2/1.27] relative">
            <Image src="/sofa.png" alt="sofa" layout="fill"  />
          </div>
          <h4 className="pt-4 text-[14px]">The Poplar suede sofa</h4>
          <p className="pt-2 text-[14px]">£980</p>
        </div>

        <div className="w-[250px] ">
          <div className="aspect-[2/2.5] relative">
            <Image src="/hero.png" alt="chair" layout="fill" objectFit="cover" />
          </div>
          <h4 className="pt-4 text-[14px]">The Dandy chair</h4>
          <p className="pt-2 text-[14px]">£250</p>
        </div>
        
        <div className="w-[250px]">
          <div className="aspect-[2/2.5] relative">
            <Image src="/chair.png" alt="chair" layout="fill" objectFit="cover" />
          </div>
          <h4 className="pt-4 text-[14px]">The Dandy chair</h4>
          <p className="pt-2 text-[14px]">£250</p>
        </div>
        
      </div>
      <div className="text-center pt-10 pb-10">
        <Button className="bg-[#F9F9F9] text-[#2A254B] text-[12px] hover:bg-lightgrey">View collection</Button>
      </div>
        </section>
    )
}