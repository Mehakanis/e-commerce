import Image from "next/image"
import { Button } from "@/components/ui/button"
export default function AFeature2(){
    return(
        <section className="flex flex-wrap  text-[#FFFFFF] ml-20 ">
            <div className="">
<Image src="/afeature2.png" alt="" height={460} width={520}/>
            </div>
            <div className="px-16 py-12 bg-[#F9F9F9]">
                <h2 className="text-[#2A254B] text-2xl">Our service {"isn’t"} just personal, {"it’s"} actually <br />
                hyper personally exquisite</h2>
                <p className="text-[13px] text-[#505977] pt-5 ">When we started Avion, the idea was simple. Make high quality furniture <br /> affordable and available for the mass market. <br /> <br />Handmade, and lovingly crafted furniture and homeware is what we live, <br /> breathe and design so our Chelsea boutique become the hotbed for the <br />London interior design community.</p>
                 
            <Button className="bg-white text-[#2A254B] text-[12px] hover:bg-white mt-24">Get in touch</Button>
            </div>
            
        </section>
    )
}