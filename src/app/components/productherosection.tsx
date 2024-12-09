import Image from "next/image"
export default function ProductHeroSection(){
    return(
        
        <section>
        <div className="mt-6">
          <Image src="/phero.png" alt="hero image" width={1400} height={70} />
        </div>
        <div className="pt-4 mx-4 sm:mx-8 lg:mx-10 md:flex flex-wrap justify-between text-[13px] gap-4 hidden">
          <div className="flex flex-wrap gap-4 md:gap-12">
            <p>
              Category
              <select className="ml-2 border rounded">
                <option value=""></option>
              </select>
            </p>
            <p>
              Product type
              <select className="ml-2 border rounded">
                <option value=""></option>
              </select>
            </p>
            <p>
              Price
              <select className="ml-2 border rounded">
                <option value=""></option>
              </select>
            </p>
            <p>
              Brand
              <select className="ml-2 border rounded">
                <option value=""></option>
              </select>
            </p>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-8">
            <p>Sorting by:</p>
            <p>
              Date added
              <select className="ml-2 border rounded">
                <option value=""></option>
              </select>
            </p>
          </div>
        </div>
      </section>
      
    )
}