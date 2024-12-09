import { Truck, CircleCheck, CreditCard, Sprout } from "lucide-react"
export default function AFeature3 (){
    return(
        <section className="mt-28">
            <div>
                <h3 className="text-[#2A254B] text-center text-[18px]">What makes our brand different</h3>
            </div>
            <div className="flex flex-wrap justify-center md:justify-left mt-14 text-[#2A254B] gap-16 mx-6 mb-4 ">
                <div className="space-y-2 bg-[#F9F9F9] px-4 py-4">
<Truck/>
<h4>Next day as standard</h4>
<p className="text-[13px]">Order before 3pm and get your order <br />
the next day as standard</p>
                </div>
                <div className="space-y-2 bg-[#F9F9F9] px-4 py-4">
<CircleCheck/>
<h4>Made by true artisans</h4>
<p className="text-[13px]">Handmade crafted goods made with <br />
real passion and craftmanship</p>
                </div>
                <div className="space-y-2 bg-[#F9F9F9] px-4 py-4">
<CreditCard/>
<h4>Unbeatable prices</h4>
<p className="text-[13px]">For our materials and quality you <br /> {"won’t"} find better prices anywhere</p>
                </div>
                <div className="space-y-2 bg-[#F9F9F9] px-4 py-4">
                    <Sprout/>
                    <h4>Recycled packaging</h4>
                    <p className="text-[13px]">We use 100% recycled packaging to ensure <br />our footprint is manageable</p>
                </div>
            </div>
        </section>
    )
}