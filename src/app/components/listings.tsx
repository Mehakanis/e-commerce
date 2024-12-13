import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import Image from "next/image";
export default function Listings() {
  return (
    <section className="pt-[100px]">
      <div className="text-[22px] pl-[16px] text-[#2A254B]">New ceramics</div>
      <div className="flex flex-wrap justify-around mt-10 text-[#2A254B]">
        <div className="w-[250px] ">
          <Link href="/productlisting">
            
            <div className="aspect-[2/2.5] relative">
              <Image
                src="/hero.png"
                alt="chair"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Link>

          <h4 className="pt-4 text-[14px]">The Dandy chair</h4>
          <p className="pt-2 text-[14px]">£250</p>
        </div>
        <div className="w-[250px]">
          <div className="aspect-[2/2.5] relative">
            <Image
              src="/3vases.png"
              alt="vases"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h4 className="pt-4 text-[14px]">Rustic Vase Set</h4>
          <p className="pt-2 text-[14px]">£155</p>
        </div>
        <div className="w-[250px]">
          <div className="aspect-[2/2.5] relative">
            <Image src="/vase.png" alt="vase" layout="fill" objectFit="cover" />
          </div>
          <h4 className="pt-4 text-[14px]">The Silky Vase</h4>
          <p className="pt-2 text-[14px]">£125</p>
        </div>
        <div className="w-[250px]">
          <div className="aspect-[2/2.5] relative">
            <Image src="/lamp.png" alt="lamp" layout="fill" objectFit="cover" />
          </div>
          <h4 className="pt-4 text-[14px]">The Lucy Lamp</h4>
          <p className="pt-2 text-[14px]">£399</p>
        </div>
      </div>
      <div className="text-center pt-10">
        <Button className="bg-[#F9F9F9] text-[#2A254B] text-[12px] hover:bg-lightgrey">
          View collection
        </Button>
      </div>
    </section>
  );
}
