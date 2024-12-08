import TopHeader from "@/app/components/topheader"
import Header2 from "../components/header2"
import HeroSection2 from "../components/herosection2"
import Listings from "../components/listing2"
import Features from "../components/features"
import Email from "../components/email"
import Footer2 from "../components/footer2"
export default function ProductListing(){
    return(
        <main className="max-w-screen-2xl min-h-screen mx-auto">
<TopHeader/>
<Header2/>
<HeroSection2/>
<div className="mx-14 pb-12">
<Listings/>
<Features />

</div>
<div className="bg-[#F9F9F9] pb-7"><Email/></div>
<Footer2/>


        </main>
    )
}