import React, { useRef } from 'react'
import '../styles/Learnmore.css'
import { motion, useInView } from 'framer-motion';

export default function Learnmore() {

    const insideboxuSRef = useRef(null);
    // const headinglS = useRef(null);
    // const card1 = useRef(null);
    // const card2 = useRef(null);

    const isInView1 = useInView(insideboxuSRef, { once: true })
    // const isInView2 = useInView(headinglS, { once: true })
    // const isInView3 = useInView(card1, { once: true })
    // const isInView4 = useInView(card2, { once: true })

    return (
        <div className='learn-more'>
            <div className='upperSection'>
                <motion.div
                    ref={insideboxuSRef}
                    initial={{ opacity: 0, y: -100 }}
                    animate={isInView1 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.75, delay: 0.5, ease: "easeOut" }}
                    className="insideboxuS"
                >
                    <div className="headinguS">
                        <h2 className='headingLearnMoreuS'>See How We Can Help Your
                            <span className='headingLearnMore1'> Business Grow</span>.</h2>
                    </div>
                    <p className='lowerLearnMoreuS'>Maecenas tempor ligula phasellus per hac nisi. Facilisi curae nunc hendrerit vestibulum lobortis commodo lacus sagittis feugiat. Est sollicitudin convallis diam.</p>
                    <button className="learnMoreButtonuS">Learn more</button>
                </motion.div>
            </div>
            {/* <div className="lowerSection">
                <div className="insideboxlS">
                    <motion.div
                        ref={headinglS}
                        initial={{ opacity: 0, x: -100 }}
                        animate={isInView2 ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.75, delay: 0.5, ease: "easeOut" }}
                        className="headinglS"
                    >
                        <div className='headingLearnMorelS'>Innovative Design for
                            <span className='headingLearnMore2'> Modern Businesses</span>.</div>
                        <p className='lowerLearnMorelS'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <button className="learnMoreButtonlS">Learn more</button>
                    </motion.div>
                </div>

                <div className="cards">
                    <motion.div
                        ref={card1}
                        initial={{ opacity: 0, y: -100 }}
                        animate={isInView3 ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.75, delay: 0.3, ease: "easeOut" }}
                        className="card1">
                        <h2 className="percentages" id='card1'>+60% <svg className='arrows' xmlns="http://www.w3.org/2000/svg" viewBox="-6 0 24 24" width="48" height="48" color="#71ecb6" fill="none">
                            <path d="M12 4L12 20" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.9998 8.99996C16.9998 8.99996 13.3174 4.00001 11.9998 4C10.6822 3.99999 6.99982 9 6.99982 9" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></h2>
                        <h2 className="cardsHeading">Traffic Increase</h2>
                        <p className="cardsSubtitle1">By optimizing your website for search engines and enhancing user experience.</p>
                    </motion.div>
                    <motion.div
                        ref={card2}
                        initial={{ opacity: 0, y: 100 }}
                        animate={isInView4 ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.75, delay: 0.3, ease: "easeOut" }}
                        className="card2">
                        <h2 className="percentages" id='card2'>+30% <svg className='arrows' xmlns="http://www.w3.org/2000/svg" viewBox="-6 0 24 24" width="48" height="48" color="#71ecb6" fill="none">
                            <path d="M12 4L12 20" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.9998 8.99996C16.9998 8.99996 13.3174 4.00001 11.9998 4C10.6822 3.99999 6.99982 9 6.99982 9" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></h2>
                        <h2 className="cardsHeading">Revenue Increase</h2>
                        <p className="cardsSubtitle2">Rise in revenue as more visitors convert into paying customers.</p>
                    </motion.div>
                </div>
            </div> */}
        </div>
    )
}