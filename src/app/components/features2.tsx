import Image from "next/image"
import { Button } from "@/components/ui/button"
export default function Features2(){
    return(
        <section className="flex flex-wrap text-[#FFFFFF]  justify-between">
            <div className="px-20 py-20">
                <h2 className="text-[#2A254B] text-xl">From a studio in London to a global brand with <br />
                over 400 outlets</h2>
                <p className="text-sm text-[#505977] pt-7 ">When we started Avion, the idea was simple. Make high quality furniture <br /> affordable and available for the mass market.</p>
                 
                 <p className="text-sm text-[#505977] pt-4"> Handmade, and lovingly crafted furniture and homeware is what we live, <br /> breathe and design so our Chelsea boutique become the hotbed for the <br /> London interior design community.</p>
            <Button className="bg-[#F9F9F9] text-[#2A254B] text-[12px] hover:bg-lightgrey mt-32">Get in touch</Button>
            </div>
            <div className="">
<Image src="/features.png" alt="" height={500} width={550}/>
            </div>
        </section>
    )
}