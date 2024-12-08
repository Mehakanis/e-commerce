import Image from "next/image"
export default function HeroSection2(){
    return(
        <section className="flex flex-wrap gap-28">
            <div>
<Image src="/dangychair.png" alt="dangy chair" width={550} height={400}/> 
            </div>
            <div className="pt-16 ">
                <div>
                <h1 className="text-2xl">The Dandy Chair</h1>
                <p className="pt-2 text-lg">£250</p>
                </div>
                <div className="pt-9">
                    <h4 className="text-[14px]">Description</h4>
                    <p className="text-[12.5px] pt-4">A timeless design, with premium materials features as one of our most <br />popular and iconic pieces. The dandy chair is perfect for any stylish <br />living space with beech legs and lambskin leather upholstery.</p>
                <ul className="text-[12.5px] list-disc pl-6 pt-4">
                    <li>Premium material</li>
<li>Handmade upholstery</li>
<li>Quality timeless classic</li>
                </ul>
                </div>
                <div>
                    <h4 className="pt-8 text-[14px]">Dimensions</h4>
                    </div>
                    <div className="flex flex-wrap gap-6 pt-4 text-[12.5px] ">
                    <div className="space-y-1">
                    <p>Height</p>
                   <p> 110cm</p>
                    </div>
                    <div className="space-y-1">
                    <p>Width</p>
                    <p>75cm</p>
                    </div>
                    <div className="space-y-1">
                    <p>Depth</p>
                    <p>50cm</p>
                    </div>
            </div>
            <div className="pt-9 flex flex-wrap justify-between ">
                <div className="flex flex-wrap gap-4">
                <p className="text-[14px]">Amount:</p>
                <div className="flex flex-wrap gap-4 border bg-[#F9F9F9] px-4 py-1">
                <p>-</p>
                <p>1</p>
                <p>+</p>
                </div>
                </div>
                <div className="justify-end">
                <button className="bg-[#2A254B] text-white text-xs px-2 py-2" >Add to cart</button>
                </div>
            </div>
            </div>
        </section>
    )
}