import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
} from "lucide-react";
export default function Footer() {
  return (
    <section className=" bg-[#2A254B]">
      <div className="flex flex-wrap justify-evenly pt-14 md:mt-[-64px] space-y-10 md:space-y-0">
        <div className="flex  items-center gap-10 md:gap-32 text-white ml-[-20px] md:ml-[-80px]">
          <div>
            <h4 className="pb-2">Menu</h4>
            <ul className="text-xs space-y-2">
              <li>New arrivals</li>
              <li>Best sellers</li>
              <li>Recently viewed</li>
              <li>Popular this week</li>
              <li>All products</li>
            </ul>
          </div>
          <div>
            <h4 className="pb-2">Categories</h4>
            <ul className="text-xs space-y-2">
              <li>Crockery</li>
              <li>Furniture</li>
              <li>Homeware</li>
              <li>Plant pots</li>
              <li>Chairs</li>
              <li>Crockery</li>
            </ul>
          </div>
          <div>
            <h4 className="pb-2">Our company</h4>
            <ul className="text-xs space-y-2">
              <li>About us</li>
              <li>Vacancies</li>
              <li>Contact us</li>
              <li>Privacy</li>
              <li>Returns policy</li>
            </ul>
          </div>
        </div>
        <div className="text-white">
          <div>
            <p className="pb-4 text-center md:text-left">
              Join our mailing list
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-gray-600 pl-4 pr-8 md:pr-20 py-2 border-none flex-1 "
            />
            <button className="bg-white px-3 py-[9.5px] text-[#2A254B] text-sm">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-[#4E4D93] py-4 mx-6 "></div>
      <div className="flex flex-wrap justify-between  px-6 py-4">
        <div>
          <p className="text-white text-sm">Copyright 2022 Avion LTD</p>
        </div>
        <div className=" flex flex-wrap gap-4 pt-4 md:pt-0">
          <LinkedinIcon className="border bg-white" />
          <FacebookIcon className="border bg-white" />{" "}
          <InstagramIcon className="border bg-white" />
          <TwitterIcon className="border bg-white" />
        </div>
      </div>
    </section>
  );
}
