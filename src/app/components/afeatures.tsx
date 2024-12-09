import Image from "next/image"
import { Button } from "@/components/ui/button"
export default function AFeatures(){
    return(
        <section className="flex flex-wrap justify-center text-[#FFFFFF] gap-4  my-10">
            <div className="px-16 py-12 bg-[#2A254B]">
                <h2 className="text-[#FFFFFF] text-2xl">It started with a small idea </h2>
                <p className="text-[13px] text-[#FFFFFF] pt-5 ">A global brand with local beginnings, our story begain in a <br /> small studio in South London in early 2014</p>
                 
            <Button className="bg-gray-600 text-[##F9F9F9] text-[12px] hover:bg-lightgrey mt-24">Get in touch</Button>
            </div>
            <div className="">
<Image src="/afeatures.png" alt="" height={460} width={450}/>
            </div>
        </section>
    )
}