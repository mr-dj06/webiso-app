import React, { useEffect, useRef } from 'react';
import '../styles/About.css';
import AboutImg from '../assets/images/about-img-left.jpg';
import { FaCheckCircle } from "react-icons/fa";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useInView } from "framer-motion";

export default function About() {

    // Define motion values for each count
    const projectCount = useMotionValue(0);
    const clientCount = useMotionValue(0);
    const reviewCount = useMotionValue(0);

    const formattedReviewCount = useTransform(reviewCount, (value) => value.toFixed(1));
    const roundedProjectCount = useTransform(projectCount, (value) => Math.round(value));
    const roundedClientCount = useTransform(clientCount, (value) => Math.round(value));

    // Refs for in-view tracking
    const aboutImgLeftRef = useRef(null);
    // const aboutImgTextRef = useRef(null);
    const aboutRightContainerRef = useRef(null);

    // State to track if animation has run
    // const [hasAnimated, setHasAnimated] = useState(false);

    // Check if elements are in view
    const aboutImgLeftInView = useInView(aboutImgLeftRef, { once: true })
    // const aboutImgTextInView = useInView(aboutImgTextRef, { once: true });
    const aboutRightContainerInView = useInView(aboutRightContainerRef, { once: true });

    useEffect(() => {
        if (aboutRightContainerInView) {
            animate(projectCount, 27, { duration: 2.5 });
            animate(clientCount, 4, { duration: 3 });
            animate(reviewCount, 4.7, { duration: 3 });
        }
    }, [aboutRightContainerInView]);

    // Run animation only once on component mount
    // useEffect(() => {
    //     if (!hasAnimated) {
    //         setHasAnimated(true);
    //     }
    // }, [hasAnimated]);

    return (
        <div className='about'>
            <div className="about-left">
                <div className="about-img-left-container">
                    <motion.div
                        ref={aboutImgLeftRef}
                        initial={{ opacity: 0, x: -150 }}
                        animate={aboutImgLeftInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="about-img-left">
                        <img src={AboutImg} alt="about-img-left" />
                    </motion.div>
                </div>
                <div className="about-img-text-container">
                    <motion.div
                        // ref={aboutImgTextRef}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={aboutImgLeftInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="about-img-text">
                        {["Custom Solutions", "Cutting-Edge Design", "SEO Optimization", "Responsive Design", "Innovative Technology", "Security and Reliability"].map((text, index) => (
                            <ul key={index}>
                                <span><FaCheckCircle id='check' /></span>
                                <span className="about-img-text-span">{text}</span>
                            </ul>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="about-right">
                <motion.div
                    ref={aboutRightContainerRef}
                    initial={{ opacity: 0, x: 60 }}
                    animate={aboutRightContainerInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, delay: 0.2 }}
                    className='about-right-container'>
                    <h6 className='about-heading'>Who we are</h6>
                    <h2 className='about-title'>
                        Innovative Solutions for Your
                        <span className='about-title-gradiant'><br className="grad" /> Online Success</span>.
                    </h2>
                    <p className='about-desc'>Sem iaculis facilisis convallis ex aliquam massa a venenatis blandit pede rhoncus. Euismod consectetuer nostra etiam lectus potenti accumsan pellentesque venenatis.</p>
                    <div className="counters">
                        <div>
                            <span className="counter">
                                <motion.pre className="cnt">{roundedProjectCount}</motion.pre>
                                <span className="counter-suffix">K+</span>
                            </span>
                            <span className="cnt-title">Project Done</span>
                        </div>
                        <div>
                            <span className="counter">
                                <motion.pre className="cnt">{roundedClientCount}</motion.pre>
                                <span className="counter-suffix">K+</span>
                            </span>
                            <span className="cnt-title">Happy Client</span>
                        </div>
                        <div>
                            <span className="counter">
                                <motion.pre className="cnt">{formattedReviewCount}</motion.pre>
                            </span>
                            <span className="cnt-title">Client Reviews</span>
                        </div>
                    </div>
                    <div className='about-discover-btn'>
                        <button className="discover-more-btn">Discover more</button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
