import Header1 from "../components/header1"
import CartHeroSection from "../components/cartherosection"
import Footer from "../components/footer"


export default function CartPage (){
    return(
<main className="max-w-screen-2xl min-h-screen mx-auto">
    <div className="mx-4">
<Header1/>

</div>
<div>
    <CartHeroSection/>
    <Footer/>
</div>
</main>
    )
}