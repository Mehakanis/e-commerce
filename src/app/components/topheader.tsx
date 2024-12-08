import { X } from "lucide-react"
export default function TopHeader(){
    return(
        <section className="bg-[#2A254B]">
            <div className="flex flex-wrap text-white items-center justify-between py-2 px-4">
            <p className="text-sm text-center flex-1">Free delivery on all orders over £50 with code easter checkout</p>
            <X className="stroke-[1px] pr-[-30px]"/>
            </div>
            <div className="">
                
            </div>
        </section>
    )
}