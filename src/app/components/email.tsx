
export default function Email(){
    return(
        
        <section className="py-16 bg-[#F9F9F9]">
      <div className="max-w-4xl mx-auto text-center bg-white px-32 py-20">
        {/* Heading */}
        <h2 className="text-3xl text-[#2A254B]">
          Join the club and get the benefits
        </h2>
        <p className="text-[#2A254B] mt-4 text-sm">
          Sign up for our newsletter and receive exclusive offers on new <br /> ranges,
          sales, pop-up stores, and more.
        </p>
        <div className="flex flex-wrap mt-20">
        <input type="email" placeholder="your@email.com" className="bg-[#F9F9F9] px-2 py-2 border-none flex-1"  />
         <button className="bg-[#2A254B] px-2 py-2 text-white text-sm">Sign up</button>
        </div>
        
      </div>
    </section>
    )
}