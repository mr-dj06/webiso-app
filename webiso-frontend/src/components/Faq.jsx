import React, { useRef, useState } from "react";
import "../styles/Faq.css";
import { motion } from "motion/react";
import { useInView } from 'motion/react';

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";


function Faq() {
    const [activeIndexLeft, setActiveIndexLeft] = useState(0);
    const [activeIndexRight, setActiveIndexRight] = useState(0);

    const leftQues = [
        {
            q: "Lorem ipsum dolor sit, amet consectetur  elit?",
            a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia facilis, blanditiis quasi illo sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia facilis, blanditiis quasi illo sapiente!",
        },
        {
            q: "Lorem ipsum dolor sit,  consectetur adipisicing elit?",
            a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia facilis, blanditiis quasi illo sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia facilis, blanditiis quasi illo sapiente!",
        },
        {
            q: "Lorem ipsum dolor sit, amet consectetur  elit?",
            a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia facilis, blanditiis quasi illo sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia facilis, blanditiis quasi illo sapiente!",
        },
        {
            q: "Lorem ipsum dolor sit,  consectetur adipisicing elit?",
            a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia facilis, blanditiis quasi illo sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia facilis, blanditiis quasi illo sapiente!",
        },
        {
            q: "Lorem ipsum dolor sit, amet consectetur  elit?",
            a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia facilis, blanditiis quasi illo sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia facilis, blanditiis quasi illo sapiente!",
        },
        {
            q: "Lorem ipsum dolor sit,  consectetur adipisicing elit?",
            a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia facilis, blanditiis quasi illo sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia facilis, blanditiis quasi illo sapiente!",
        },
    ];

    const rightQues = [
        {
            q: "Lorem ipsum dolor sit, consectetur adipisicing elit?",
            a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia facilis, blanditiis quasi illo sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia facilis, blanditiis quasi illo sapiente!",
        },
        {
            q: "Lorem ipsum dolor sit, amet consectetur adipisicing elit?",
            a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia facilis, blanditiis quasi illo sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia facilis, blanditiis quasi illo sapiente!",
        },
        {
            q: "Lorem ipsum dolor sit, consectetur adipisicing elit?",
            a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia facilis, blanditiis quasi illo sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia facilis, blanditiis quasi illo sapiente!",
        },
        {
            q: "Lorem ipsum dolor sit, amet consectetur adipisicing elit?",
            a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia facilis, blanditiis quasi illo sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia facilis, blanditiis quasi illo sapiente!",
        },
        {
            q: "Lorem ipsum dolor sit, consectetur adipisicing elit?",
            a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia facilis, blanditiis quasi illo sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia facilis, blanditiis quasi illo sapiente!",
        },
        {
            q: "Lorem ipsum dolor sit, amet consectetur adipisicing elit?",
            a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia facilis, blanditiis quasi illo sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia facilis, blanditiis quasi illo sapiente!",
        },
    ];

    const toggleFAQ = (index, side) => {
        if (side === "left") {
            setActiveIndexLeft(activeIndexLeft === index ? null : index);
        } else {
            setActiveIndexRight(activeIndexRight === index ? null : index);
        }
    };

    const faqHeadRef = useRef(null);
    const faqLRef = useRef(null);
    const faqRRef = useRef(null);

    const faqHeadInView = useInView(faqHeadRef, { once: true });
    const faqLInView = useInView(faqLRef, { once: true });
    const faqRInView = useInView(faqRRef, { once: true });

    return (
        <div className="faq-con">
            <motion.div
                ref={faqHeadRef}
                initial={{ opacity: 0, y: -100 }}
                animate={faqHeadInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="faq-heading">
                <div className="faq-title">Payment & order</div>
                <div className="faq-subTitle">
                    Most
                    <span className="subTitle-grad"> Popular </span>
                    Questions
                </div>
            </motion.div>
            <div className="faq-sections-container">
                {/* Left FAQ Section */}
                <motion.div
                    ref={faqLRef}
                    initial={{ opacity: 0, x: -100 }}
                    animate={faqLInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="faq-section-left">
                    {leftQues.map((que, index) => (
                        <div
                            className={`faq-section ${activeIndexLeft === index ? "active" : ""}`}
                            key={index}
                        >
                            <div
                                className="faq-que"
                                onClick={() => toggleFAQ(index, "left")}
                                role="button"
                                tabIndex={0}
                                aria-expanded={activeIndexLeft === index}
                                aria-controls={`faq-answer-left-${index}`}
                            >
                                <div className="q">{que.q}</div>
                                <span className="icon">{activeIndexLeft === index ? <IoIosArrowUp /> : <IoIosArrowDown />
                                }</span>
                            </div>
                            <div
                                id={`faq-answer-left-${index}`}
                                className="faq-ans"
                                aria-hidden={activeIndexLeft !== index}
                            >
                                {que.a}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Right FAQ Section */}
                <motion.div
                    ref={faqRRef}
                    initial={{ opacity: 0, x: 100 }}
                    animate={faqLInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="faq-section-right">
                    {rightQues.map((que, index) => (
                        <div
                            className={`faq-section ${activeIndexRight === index ? "active" : ""}`}
                            key={index}
                        >
                            <div
                                className="faq-que"
                                onClick={() => toggleFAQ(index, "right")}
                                role="button"
                                tabIndex={0}
                                aria-expanded={activeIndexRight === index}
                                aria-controls={`faq-answer-right-${index}`}
                            >
                                <div className="q">{que.q}</div>
                                <span className="icon">{activeIndexRight === index ? <IoIosArrowUp /> : <IoIosArrowDown />
                                }</span>
                            </div>
                            <div
                                id={`faq-answer-right-${index}`}
                                className="faq-ans"
                                aria-hidden={activeIndexRight !== index}
                            >
                                {que.a}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default Faq;