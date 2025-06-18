import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import '../styles/Whychooseus.css';
import whyChooseUsbgimg from '../assets/images/img_1.jpg';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';

export default function Whychooseus() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0); // Add progress state

  const items = [
    {
      title: 'Expertise and Experience',
      content:
        'Our team of seasoned professionals brings over 25 years of experience in web design and SEO, ensuring top-notch quality and innovative solutions for your business.',
    },
    {
      title: 'Comprehensive Services',
      content:
        'From web design and development to SEO and digital marketing, we offer a full suite of services to support your online presence and growth.',
    },
    {
      title: 'Client-Centric Approach',
      content:
        'We prioritize your needs and work closely with you throughout the design process, ensuring the final product exceeds your expectations.',
    },
    {
      title: 'Increased Conversion Rates',
      content:
        'By focusing on user experience and effective design, we help increase your website’s conversion rates, turning visitors into loyal customers.',
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    // Simulate progress animation
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 97) {
          clearInterval(interval);
          return 97; // Stop at 97%
        }
        return prevProgress + 1; // Increment progress
      });
    }, 20); // Adjust speed of animation

    return () => clearInterval(interval); // Cleanup
  }, []);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.8 } },
  };

  const whychooseusLeftRef = useRef(null);
  const whychooseusRightImgRef = useRef(null);
  const whychooseusProgressBarRef = useRef(null);

  const whychooseusLeftInView = useInView(whychooseusLeftRef, { once: true })
  const whychooseusRightImgInView = useInView(whychooseusRightImgRef, { once: true })
  const whychooseusProgressBarInView = useInView(whychooseusProgressBarRef, { once: true })

  return (
    <div className="whyChooseUsSection">
      <motion.div
        ref={whychooseusLeftRef}
        initial={{ opacity: 0, x: -100 }}
        animate={whychooseusLeftInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        <div className="whyChooseUsLeftSideSection">
          <div className="whyChooseUsSectionTitle">Why Choose Us</div>
          <div className="whyChooseUsMainTitle">
            Crafting <span className="whyChooseUsMainGradTitle"> Digital Experiences </span> That Matter.
          </div>
          <div className="whyChooseUsDescription">
            Dictumst porta ultricies tristique hac vestibulum himenaeos ligula. Cubilia sapien torquent at finibus accumsan et pellentesque class lacinia tristique.
          </div>
          <div className="whyChooseUsContents">
            <div className="whyChooseUsContentsItems">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`whyChooseUsItem ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => handleClick(index)}
                >
                  <h3>
                    <IoCheckmarkCircleSharp /> {item.title}
                  </h3>
                  {activeIndex === index && <p>{item.content}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <div className="whyChooseUsRightSideSection">
        <motion.div
          ref={whychooseusRightImgRef}
          initial="hidden"
          animate={whychooseusRightImgInView ? "visible" : {}}
          variants={fadeIn}
        >
          <img src={whyChooseUsbgimg} alt="" className="whyChooseUsRightImg" />
        </motion.div>
        <motion.div
          ref={whychooseusProgressBarRef}
          initial={{ opacity: 0, scale: 0, x: -25, y: -280 }}
          animate={whychooseusRightImgInView ? { opacity: 1, scale: 1, x: -25, y: -280 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="whyChooseUsPercentageSection"
        >
          <div className="whyChooseUsCircularProgress">
            <div
              className="whyChooseUsCircularProgressBar"
              style={{
                background: `conic-gradient(#71ECB6 ${progress * 3.6}deg, rgba(255, 255, 255, 0.1) 0deg)`,
              }}
            ></div>
            <div className="whyChooseUsCircularProgressText">{progress}%</div>
          </div>
          <div className="whyChooseUsPgSpeed">Page Speed</div>
          <div className="whyChooseUsPgSpeedDescription">
            Page speed performance, including load time & page size
          </div>
        </motion.div>
      </div>
    </div>
  );
}