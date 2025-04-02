import React, { useRef } from 'react'
import { motion, useInView } from 'motion/react';
import { useLocation } from 'react-router-dom'
import "../styles/Title.css"

function Title() {
  const location = useLocation();

  const getPathName = () => {
    const pathname = location.pathname.slice(1);
    switch (pathname) {
      case "about-us":
        return {
          title: "About us",
          subTitle: "Your Partner in Innovative Web Design."
        }
      case "services":
        return {
          title: 'Services',
          subTitle: 'Tailored Solutions for Your Digital Success.'
        }
      case "projects":
        return {
          title: 'Project',
          subTitle: 'Tailored Solutions for Your Digital Success.'
        }
      case "contact-us":
        return {
          title: 'Contact us',
          subTitle: 'Start the conversation to established good relationship and business.'
        }
      case "pages":
        return {
          title: 'Pages',
          subTitle: 'The page you are looking for no longer exists. Perhaps you can return back to the site’s homepage..'
        }
      default:
        return null
    }
  }

  const titleRef = useRef(null);
  const subTitleRef = useRef(null);

  const titleInView = useInView(titleRef, { once: true });
  const subTitleInView = useInView(subTitleRef, { once: true });

  return (
    <div className='breadCrub'>
      <div className='breadCrubTitle'>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="breadCrub-title">{getPathName().title}</motion.div>
        <motion.div
          ref={subTitleRef}
          initial={{ opacity: 0, y: -50 }}
          animate={subTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="breadCrub-subTitle">{getPathName().subTitle}</motion.div>
      </div>
    </div>
  )
}

export default Title