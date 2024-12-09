import Image from "next/image";
export default function HeroSection2() {
    return (
        <section className="flex flex-col lg:flex-row gap-10 lg:gap-28 px-4 lg:px-0">
            {/* Image Section */}
            <div className="flex justify-center lg:justify-start">
                <Image
                    src="/dangychair.png"
                    alt="dangy chair"
                    width={550}
                    height={400}
                    className="max-w-full h-auto"
                />
            </div>
            
            {/* Content Section */}
            <div className="pt-8 lg:pt-16">
                {/* Title and Price */}
                <div>
                    <h1 className="text-xl lg:text-2xl">The Dandy Chair</h1>
                    <p className="pt-2 text-base lg:text-lg">£250</p>
                </div>
                
                {/* Description */}
                <div className="pt-6 lg:pt-9">
                    <h4 className="text-sm lg:text-[14px]">Description</h4>
                    <p className="text-xs lg:text-[12.5px] pt-4">
                        A timeless design, with premium materials features as one of our most
                        <br />
                        popular and iconic pieces. The dandy chair is perfect for any stylish
                        <br />
                        living space with beech legs and lambskin leather upholstery.
                    </p>
                    <ul className="text-xs lg:text-[12.5px] list-disc pl-6 pt-4">
                        <li>Premium material</li>
                        <li>Handmade upholstery</li>
                        <li>Quality timeless classic</li>
                    </ul>
                </div>
                
                {/* Dimensions */}
                <div className="pt-8">
                    <h4 className="text-sm lg:text-[14px]">Dimensions</h4>
                    <div className="flex flex-wrap gap-6 pt-4 text-xs lg:text-[12.5px]">
                        <div className="space-y-1">
                            <p>Height</p>
                            <p>110cm</p>
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
                </div>
                
                {/* Amount and Button */}
                <div className="pt-9 flex flex-col lg:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-4">
                        <p className="text-sm lg:text-[14px]">Amount:</p>
                        <div className="flex gap-4 border bg-[#F9F9F9] px-4 py-1">
                            <p>-</p>
                            <p>1</p>
                            <p>+</p>
                        </div>
                    </div>
                    <div>
                        <button className="bg-[#2A254B] text-white text-xs px-4 py-2">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
