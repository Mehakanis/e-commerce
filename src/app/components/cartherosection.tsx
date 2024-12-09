 import Image from "next/image"

 export default function CartHeroSection (){
    return(
        <section className="bg-[#F9F9F9] px-10 md:px-20 lg:px-40 pt-16 pb-20 mt-6 ">
            <div>
                <h1 className="text-[#2A254B] text-3xl ">Your shopping cart</h1>
            </div>
            <div className="text-[#2A254B] md:flex pt-10 gap-20 lg:gap-60 hidden ">
              <div className="flex  gap-32 lg:gap-96  ">
                <h6 >Product</h6>
                <h6 >Quantity</h6>
                </div><div>
                <h6>Total</h6>
                </div>
            </div>
            <div className="border-b-2 pb-6 hidden md:block"></div>
{/* cart items */}
            <div className="flex flex-wrap sm:gap-12 md:gap-20 lg:gap-64 pt-6">
<div className="flex  gap-2">
    <div className="">
    <Image src="/cart1.png" alt="" width={70} height={70} />
    </div>
    <div>
    <h4 className="pb-2 text-sm md:text-base">Graystone vase</h4>
    <p className="text-xs">A timeless ceramic vase with <br /> 
    a tri color grey glaze.</p>
    
    <p className="text-sm">£85</p>
    </div>
</div>
<div>
    <p>1</p>
</div>

    <p>£85</p>

            </div>
{/* cart item 2 */}
            <div className="flex sm:gap-12 md:gap-20 lg:gap-64 pt-6">
<div className="flex gap-2">
    <div className="">
    <Image src="/cart2.png" alt="" width={70} height={70} />
    </div>
    <div>
    <h4 className="pb-2 text-sm md:text-base">Basic white vase</h4>
    <p className="text-xs">Beautiful and simple this is <br />
    one for the classics</p>
    
    <p className="text-sm">£85</p>
    </div>
</div>
<div>
    <p>1</p>
</div>

    <p>£125</p>

            </div>
            <div className="border-b-2 pb-6 "></div>
<div className="place-items-center md:place-items-end">
  <div className="flex gap-4 py-4">
  <h4 className=" text-[#4E4D93]">
  Subtotal
  </h4>
  <h3>
  £210
  </h3>
  </div>
  <p className="text-sm   text-[#4E4D93]"> Taxes and shipping are calculated at checkout </p>
  <button className="bg-[#2A254B] px-4 py-3 text-xs text-white my-4">Go to checkout</button>
</div>


        </section>
    )
}

