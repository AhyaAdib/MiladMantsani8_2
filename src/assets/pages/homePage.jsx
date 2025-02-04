import Preload from '../component/preload'
import Header from '../component/header'
import Banner from '../component/banner'
import About from '../component/about'
import Lomba from '../component/perlombaan'
import FAQ from '../component/faq'
import Footer from '../component/footer'
import '../styles/milad6.css'
import Gallery from '../component/gallery'
import Countdown from '../component/countdown'
// import Countdown from '../component/countdown'

export default function HomePage() {
    return (
        <>
            <Preload />
            <Header />
            <Banner />
            <Countdown />
            <About />
            <Lomba />
            <Gallery />
            <FAQ />
            <Footer />
            {/* <Countdown /> */}
        </>
    )
}