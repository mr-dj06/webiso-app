import React, { useRef } from 'react';
import { motion } from 'motion/react'
import { useInView } from "framer-motion";
import "../styles/Products.css"
import product1 from '../assets/images/Products/product1.jpg'
import product2 from '../assets/images/Products/product2.jpg'
import product3 from '../assets/images/Products/product3.jpg'
import product4 from '../assets/images/Products/product4.jpg'
import product5 from '../assets/images/Products/product5.jpg'
import product6 from '../assets/images/Products/product6.jpg'

export default function Products() {

  const products = [
    {
      url: product1,
      title: "Man & Dance Company Perfume",
      desc: "Vehicula magna morbi scelerisque phasellus neque facilisis quisque venenatis mauris curae ex donec dis bibendum."
    },
    {
      url: product2,
      title: "Nancy Watch Promotional Landing page",
      desc: "Vehicula magna morbi scelerisque phasellus neque facilisis quisque venenatis mauris curae ex donec dis bibendum."
    },
    {
      url: product3,
      title: "Malika Perfume Funnel Landing Page",
      desc: "Vehicula magna morbi scelerisque phasellus neque facilisis quisque venenatis mauris curae ex donec dis bibendum."
    },
    {
      url: product4,
      title: "Peter's Gym Company Profile Website",
      desc: "Vehicula magna morbi scelerisque phasellus neque facilisis quisque venenatis mauris curae ex donec dis bibendum."
    },
    {
      url: product5,
      title: "Hoffman 1928 Wines Profile Website",
      desc: "Vehicula magna morbi scelerisque phasellus neque facilisis quisque venenatis mauris curae ex donec dis bibendum."
    },
    {
      url: product6,
      title: "Coffe Toffe Funnel Landing Page",
      desc: "Vehicula magna morbi scelerisque phasellus neque facilisis quisque venenatis mauris curae ex donec dis bibendum."
    }];

  const prodRef = useRef(null);

  // Check if elements are in view
  const prodInView = useInView(prodRef, { once: true });

  return (
    <div className='product-section'>
      <div className="heading-section">
        <div className="products-heading">
          <div className="product-heading">Featured Project</div>
          <div className="product-title">Inspired by
            <span className='product-title-gradiant'><br className="grad" /> Our Projects</span>
            ? Let's Create Yours!
          </div>
        </div>
      </div>
      <motion.div
        ref={prodRef}
        initial={{ opacity: 0 }}
        animate={prodInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="products">

        <div className="products-items">
          {products.map((product, index) => (
            <div key={index} className="product">
              <div className="prod_img">
                <img src={product.url} alt="" />
              </div>
              <div className="prod_text">
                <div className="prod_title">{product.title}</div>
                <div className="prod_desc">{product.desc}</div>
                <button className='btn'>Learn more</button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
