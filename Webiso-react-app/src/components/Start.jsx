import React, { useRef } from 'react'
import '../styles/start-journey.css'
import { motion, useInView } from 'framer-motion';


export default function Start() {

    const insideboxuSRef = useRef(null);

    const isInView1 = useInView(insideboxuSRef, { once: true })
    // const isInView2 = useInView(headinglS, { once: true })

    return (
        <div className='start-journey'>
            <div className="start-now-con">
                <motion.div
                    ref={insideboxuSRef}
                    initial={{ opacity: 0, y: -100 }}
                    animate={isInView1 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.75, delay: 0.5, ease: "easeOut" }}
                    className='call-box'
                >
                    <div className="insidebox">
                        <div className="heading">
                            <h2 className='heading-call'>Ready to Start? Let's Build
                                <span className='heading-call1'> Something Great</span> Together!</h2>
                        </div>
                        <div className="call-desc">
                            <p className='lower-call'>Maecenas tempor ligula phasellus per hac nisi. Facilisi curae nunc hendrerit vestibulum lobortis commodo lacus sagittis feugiat. Est sollicitudin convallis diam.</p>
                        </div>
                        <div className="call-now-btn">
                            <button className="callButton">Start Your Journey</button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
