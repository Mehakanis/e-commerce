import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from "lucide-react";
export default function Footer2() {
    return (
        <section className="bg-[#2A254B]">
            <div className="flex flex-wrap flex-col md:flex-row md:justify-around gap-8 lg:gap-0 pt-14 mt-[-64px] px-6">
                {/* Left Side */}
                <div className="flex flex-col lg:flex-row lg:gap-14">
                    <div className="text-white">
                        <h1 className="text-3xl pb-2">Avion</h1>
                        <ul className="space-y-2 text-[12px]">
                            <li>21 New York Street</li>
                            <li>New York City</li>
                            <li>United States of America</li>
                            <li>432 34</li>
                        </ul>
                    </div>
                    <div className="mt-4 lg:mt-0">
                        <p className="text-white">Social links</p>
                        <div className="flex gap-4 pt-4">
                            <LinkedinIcon className="border bg-white" />
                            <FacebookIcon className="border bg-white" />
                            <InstagramIcon className="border bg-white" />
                            <TwitterIcon className="border bg-white" />
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex flex-wrap gap-8 lg:gap-10 text-white">
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
            </div>

            <div className="border-b-2 border-[#4E4D93] py-4 mx-6"></div>
            <p className="text-white text-sm py-4 pl-4">Copyright 2022 Avion LTD</p>
        </section>
    );
}
