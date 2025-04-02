import React, { useState } from 'react';
import '../styles/video.css';
import { IoMdPlay } from "react-icons/io";
import { motion } from 'framer-motion';

export default function Video() {
    const [showIframe, setShowIframe] = useState(false);

    const handlePlayClick = () => {
        setShowIframe(true);
    };

    return (
        <div className="vid-con">
            <div className="video-container">
                <div className="text-container">
                    {!showIframe ? (
                        <motion.div
                            animate={{
                                boxShadow: [
                                    '0 0 0 0 rgba(255, 255, 255, 0.2), 0 0 0 0 rgba(255, 255, 255, 0.3), 0 0 0 0 rgba(255, 255, 255, 0.5)',
                                    '0 0 0 5px rgba(255, 255, 255, 0.2), 0 0 0 15px rgba(255, 255, 255, 0.3), 0 0 0 25px rgba(255, 255, 255, 0.2)',
                                ],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatType: "loop",
                                repeatDelay: 0.5,
                            }}
                            className='play-btn-container'
                            onClick={handlePlayClick}
                        >
                            <IoMdPlay className='play-btn' />
                        </motion.div>
                    ) : (
                        <div className="fullscreen-iframe-container">
                            <iframe
                                className='fullscreen-iframe'
                                src="https://www.youtube.com/embed/VhBl3dHT5SY?si=Rh9gW43Kvr71f5Vl"
                                title="video player"
                                frameBorder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                            <button className="close-btn" onClick={() => setShowIframe(false)}>✖</button>
                        </div>
                    )}
                    <div className='text-title'>
                        <span className='title-gradiant'>Innovative Solutions </span>
                        <br className='text-br' />for Your Online Success
                    </div>
                </div>
            </div>
        </div>
    );
}
