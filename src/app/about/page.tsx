import TopHeader from "../components/topheader"
import Header3 from "../components/header3"
import AboutHeader from "../components/aboutheader"
import AFeatures from "../components/afeatures"
import AFeature2 from "../components/afeature2"
import AFeature3 from "../components/afeatures3"
import Email from "../components/email"
import Footer2 from "../components/footer2"

export default function AboutPage(){
    return(
        <main className="max-w-screen-2xl min-h-screen mx-auto">
<TopHeader/>
<Header3/>
<AboutHeader/>
<AFeatures/>
<AFeature2/>
<AFeature3/>
<div className="pb-6">
<Email/>
</div>
<Footer2/>
        </main>
    )
}