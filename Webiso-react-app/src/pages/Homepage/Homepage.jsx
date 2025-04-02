import React from 'react'
import Banner from '../../components/Banner'
import About from '../../components/About'
import Learnmore from '../../components/Learnmore'
import Slider from '../../components/Slider'
import Video from '../../components/video'
import Start from '../../components/start'
import Products from '../../components/Products'
import Whychooseus from '../../components/Whychooseus'
import Review from '../../components/Review'
import Services from '../../components/Services'

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