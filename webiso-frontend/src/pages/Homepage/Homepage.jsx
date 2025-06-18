import Banner from '../../components/Banner.jsx'
import About from '../../components/About.jsx'
import Learnmore from '../../components/Learnmore.jsx'
import Slider from '../../components/Slider.jsx'
import Start from '../../components/start.jsx'
import Products from '../../components/Products.jsx'
import Whychooseus from '../../components/Whychooseus.jsx'
import Review from '../../components/Review.jsx'
import Services from '../../components/Services.jsx'

function Homepage() {
    return (
        <>
            <Banner />
            <About />
            <Slider />
            <Learnmore />
            {/* <Video /> */}
            <Services />
            <Start />
            <Products />
            <Whychooseus />
            <Review />
        </>
    )
}

export default Homepage