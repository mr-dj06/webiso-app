import React from 'react'
import "../styles/Footer.css"
import logo from "../assets/images/logo_webiso.png"
import * as motion from "motion/react-client"
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {

  const services = [
    {
      title: "Web Design"
    },
    {
      title: "Web Development"
    },
    {
      title: "SEO & Digital Marketing"
    },
    {
      title: "Branding & Visual Identity"
    },
    {
      title: "Consultation & Strategy"
    },
    {
      title: "Maintenance & Support"
    }
  ];
  const support = [
    {
      title: "Help Center"
    },
    {
      title: "Ticket Support"
    },
    {
      title: "Contact us"
    },
    {
      title: "Customer Support"
    },
    {
      title: "Forum Community"
    }
  ];
  const company = [
    {
      title: "About us"
    },
    {
      title: "Leadership"
    },
    {
      title: "Careers"
    },
    {
      title: "Article & News"
    },
    {
      title: "Legal Notices"
    }
  ];

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="company-details">
          <div className="logo-container">
            <img src={logo} alt="logo" />
          </div>
          <div className="address">
            Jalan Cempaka Wangi No 22<br />
            Jakarta - Indonesia
          </div>
          <div className="social-media-icons">
            <motion.div className="icons"
              whileHover={{ scale: [1, 1.2, 1] }}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.35 }}
            >
              <FaFacebookF className='social-media' />
            </motion.div>
            <motion.div className="icons"
              whileHover={{ scale: [1, 1.2, 1] }}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.35 }}
            >
              <FaInstagram className='social-media' />
            </motion.div>
            <motion.div className="icons"
              whileHover={{ scale: [1, 1.2, 1] }}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.35 }}
            >
              <FaTwitter className='social-media' />
            </motion.div>
            <motion.div className="icons"
              whileHover={{ scale: [1, 1.2, 1] }}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.35 }}
            >
              <FaYoutube className='social-media' />
            </motion.div>
          </div>
        </div>
        <div className="service wrapper">
          <div className="title">
            Services
          </div>
          <div className="service-links wrapper">
            {services.map((service, index) => (
              <ul className="service-link">
                <a key={index} href='#'>
                  <span>
                    {service.title}
                  </span>
                </a>
              </ul>
            ))}
          </div>
        </div>
        <div className="support wrapper">
          <div className="title">
            Support
          </div>
          <div className="support-links">
            {support.map((support, index) => (
              <ul className="support-link">
                <a key={index} href='#'>
                  <span>
                    {support.title}
                  </span>
                </a>
              </ul>
            ))}
          </div>
        </div>
        <div className="company wrapper">
          <div className="title">
            Company
          </div>
          <div className="company-links">
            {company.map((company, index) => (
              <ul className="company-link">
                <a key={index} href='#'>
                  <span>
                    {company.title}
                  </span>
                </a>
              </ul>
            ))}
          </div>
        </div>
        <div className="footer-bottom wrapper">
          <div className="copyright">Copyright © 2024 webiso, All rights reserved. Powered by MoxCreative.</div>
          <div className="policy-list">
            <span className="list">
              <a href="#">Term of use</a>
            </span>
            <span className="list">
              <a href="#">Privacy Policy</a>
            </span>
            <span className="list">
              <a href="#">Cookie Policy</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
